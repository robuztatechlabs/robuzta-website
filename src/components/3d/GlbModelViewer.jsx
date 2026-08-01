'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { encodeModelPath } from '@/data/serviceModels';

export function GlbModelViewer({ modelPath, scale = 1, className = '' }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId = 0;
    let disposed = false;
    let resizeObserver;
    let controls;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.7;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.8;
    controls.target.set(0, 0, 0);

    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';
    canvas.style.touchAction = 'none';

    const setGrabbing = (grabbing) => {
      canvas.style.cursor = grabbing ? 'grabbing' : 'grab';
    };
    canvas.addEventListener('pointerdown', () => setGrabbing(true));
    canvas.addEventListener('pointerup', () => setGrabbing(false));
    canvas.addEventListener('pointerleave', () => setGrabbing(false));

    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0e7c7b, 0.5);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xf2762e, 0.6, 20);
    rimLight.position.set(0, -2, 3);
    scene.add(rimLight);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const frameModel = () => {
      const box = new THREE.Box3().setFromObject(modelGroup);
      const sphere = new THREE.Sphere();
      box.getBoundingSphere(sphere);

      const fov = (camera.fov * Math.PI) / 180;
      const distance = Math.max(sphere.radius / Math.sin(fov / 2), 0.1) * 1.25;

      controls.target.set(0, 0, 0);
      camera.position.set(0, sphere.center.y, distance);
      camera.lookAt(0, 0, 0);
      controls.update();
    };

    const loader = new GLTFLoader();
    loader.load(
      encodeModelPath(modelPath),
      (gltf) => {
        if (disposed) return;

        const model = gltf.scene;
        modelGroup.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        model.position.sub(center);
        const fitScale = (2.2 / maxDim) * scale;
        modelGroup.scale.setScalar(fitScale);
        modelGroup.position.set(0, 0, 0);

        frameModel();
        setLoading(false);
      },
      undefined,
      () => {
        if (!disposed) {
          setError(true);
          setLoading(false);
        }
      }
    );

    const updateSize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      if (modelGroup.children.length > 0) {
        frameModel();
      }
    };

    updateSize();
    resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      controls?.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
    };
  }, [modelPath, scale]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <div ref={containerRef} className="h-full w-full" aria-hidden="true" />

      {loading && !error && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-[#0E7C7B]" />
        </div>
      )}

      {error && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-400">
          3D preview unavailable
        </div>
      )}

      {!loading && !error && (
        <div className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400/80">
          Drag to explore
        </div>
      )}
    </div>
  );
}
