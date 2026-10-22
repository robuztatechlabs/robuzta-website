'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ZoomIn, ZoomOut, RotateCcw, Play, Pause, Move, Eye, Sparkles } from 'lucide-react';

export function GamingHero3DViewer({
  modelPath = '/models/gaming-model.glb',
  className = ''
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const modelGroupRef = useRef(null);
  const initialCameraPos = useRef(new THREE.Vector3());
  const initialTarget = useRef(new THREE.Vector3());

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId = 0;
    let disposed = false;
    let resizeObserver;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, (container.clientWidth || 1) / (container.clientHeight || 1), 0.1, 100);
    camera.position.set(2.8, 1.8, 3.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setSize(container.clientWidth || 300, container.clientHeight || 300);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // OrbitControls: Full rotate, zoom, and pan (moveable)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.rotateSpeed = 0.85;
    controls.minDistance = 0.8;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.4;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';
    canvas.style.touchAction = 'none';

    // Pointer events for cursor & interaction state
    const handlePointerDown = () => {
      canvas.style.cursor = 'grabbing';
      setIsInteracting(true);
    };
    const handlePointerUp = () => {
      canvas.style.cursor = 'grab';
      setIsInteracting(false);
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerleave', handlePointerUp);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Key front light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    // Robuzta Teal Accent light
    const tealFill = new THREE.DirectionalLight(0x0e7c7b, 1.2);
    tealFill.position.set(-5, 3, -2);
    scene.add(tealFill);

    // Gaming RGB Accent Rim light (Cyan/Purple)
    const rimLight = new THREE.PointLight(0x06b6d4, 1.8, 15);
    rimLight.position.set(2, 4, -4);
    scene.add(rimLight);

    const warmLight = new THREE.PointLight(0xf59e0b, 1.2, 12);
    warmLight.position.set(-3, -2, 3);
    scene.add(warmLight);

    // Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    const frameAndCenter = () => {
      const box = new THREE.Box3().setFromObject(modelGroup);
      const sphere = new THREE.Sphere();
      box.getBoundingSphere(sphere);

      const fov = (camera.fov * Math.PI) / 180;
      const distance = Math.max(sphere.radius / Math.sin(fov / 2), 0.1) * 1.15;

      controls.target.set(0, 0, 0);
      camera.position.set(distance * 0.75, distance * 0.45, distance * 0.95);
      camera.lookAt(0, 0, 0);
      controls.update();

      initialCameraPos.current.copy(camera.position);
      initialTarget.current.copy(controls.target);
    };

    // Load GLTF / GLB model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;

        // Enhance materials
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = Math.min(child.material.roughness ?? 0.5, 0.7);
              child.material.metalness = Math.max(child.material.metalness ?? 0.2, 0.3);
            }
          }
        });

        modelGroup.add(model);

        // Center model geometry
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        model.position.sub(center);
        const fitScale = 2.4 / (maxDim || 1);
        modelGroup.scale.setScalar(fitScale);
        modelGroup.position.set(0, 0, 0);

        frameAndCenter();
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load 3D model:', err);
        if (!disposed) {
          setError(true);
          setLoading(false);
        }
      }
    );

    // Resize handling
    const updateSize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    updateSize();
    resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    // Animation Loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (controls) {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerleave', handlePointerUp);
      controls.dispose();
      renderer.dispose();
      if (container.contains(canvas)) {
        container.removeChild(canvas);
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
  }, [modelPath]);

  // Sync autoRotate state with OrbitControls
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate && !isInteracting;
    }
  }, [autoRotate, isInteracting]);

  // Zoom In
  const handleZoomIn = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    if (offset.length() > controls.minDistance + 0.3) {
      offset.multiplyScalar(0.78);
      camera.position.copy(controls.target).add(offset);
      controls.update();
    }
  }, []);

  // Zoom Out
  const handleZoomOut = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    if (offset.length() < controls.maxDistance - 0.5) {
      offset.multiplyScalar(1.28);
      camera.position.copy(controls.target).add(offset);
      controls.update();
    }
  }, []);

  // Reset Camera View
  const handleReset = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    camera.position.copy(initialCameraPos.current);
    controls.target.copy(initialTarget.current);
    controls.update();
  }, []);

  // Toggle Auto-rotation
  const toggleAutoRotate = useCallback(() => {
    setAutoRotate((prev) => !prev);
  }, []);

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-slate-200/90 dark:border-teal-500/25 bg-gradient-to-br from-slate-100/90 via-white to-slate-100/70 dark:from-slate-900/95 dark:via-slate-950 dark:to-slate-900/90 shadow-2xl shadow-teal-950/10 dark:shadow-teal-900/20 backdrop-blur-xl flex flex-col ${className}`}>
      
      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200/60 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-black tracking-wider uppercase text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#0E7C7B] dark:text-teal-400" />
            3D Gaming Rig Explorer
          </span>
        </div>

        {/* Floating Controls Toolbar */}
        <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom In"
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#0E7C7B] dark:hover:bg-teal-600 transition-colors cursor-pointer"
          >
            <ZoomIn size={14} />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Zoom out"
            title="Zoom Out"
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#0E7C7B] dark:hover:bg-teal-600 transition-colors cursor-pointer"
          >
            <ZoomOut size={14} />
          </button>
          <button
            type="button"
            onClick={toggleAutoRotate}
            aria-label={autoRotate ? 'Pause rotation' : 'Start rotation'}
            title={autoRotate ? 'Pause Auto-Rotate' : 'Start Auto-Rotate'}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              autoRotate
                ? 'text-[#0E7C7B] dark:text-teal-400 bg-teal-500/10'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {autoRotate ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset view"
            title="Reset Angle & Zoom"
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#0E7C7B] dark:hover:bg-teal-600 transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
        {/* Glow backlight behind the model */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#0E7C7B]/20 via-cyan-500/15 to-purple-600/10 blur-[90px]" />
        </div>

        {/* WebGL Canvas mount */}
        <div ref={containerRef} className="absolute inset-0 h-full w-full" />

        {/* Loading Spinner */}
        {loading && !error && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm z-20">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 dark:border-slate-700 border-t-[#0E7C7B] dark:border-t-teal-400" />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
              Loading 3D Hardware Model...
            </span>
          </div>
        )}

        {/* Error Fallback */}
        {error && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
            <div className="p-3 rounded-full bg-rose-500/10 text-rose-500 mb-2">
              <Eye size={20} />
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              3D model preview unavailable
            </p>
          </div>
        )}
      </div>

      {/* Bottom Interactive Hints & Pill */}
      <div className="relative z-10 px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/70 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <span className="font-extrabold text-[#0E7C7B] dark:text-teal-400">Drag:</span> Orbit
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <span className="font-extrabold text-[#0E7C7B] dark:text-teal-400">Scroll / Pinch:</span> Zoom
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <span className="font-extrabold text-[#0E7C7B] dark:text-teal-400">Right-Click / 2-Finger:</span> Move
          </span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-400 text-[10px] font-black uppercase tracking-wider">
          <Move size={10} /> 360° Moveable
        </div>
      </div>
    </div>
  );
}
