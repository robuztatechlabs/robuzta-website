'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hero3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1b2a4a, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(0x0e7c7b, 4, 50);
    tealLight.position.set(10, 10, 10);
    scene.add(tealLight);

    const orangeLight = new THREE.PointLight(0xf2762e, 3, 50);
    orangeLight.position.set(-10, -10, 5);
    scene.add(orangeLight);

    // 3D Floating Tech Core Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Central Icosahedron (Glass Core)
    const coreGeo = new THREE.IcosahedronGeometry(3.5, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0e7c7b,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 1.5,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Outer Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf2762e,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // Orbiting Tech Rings
    const ringGeo1 = new THREE.TorusGeometry(5.8, 0.06, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x0e7c7b,
      metalness: 0.8,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(7.0, 0.04, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xf2762e,
      metalness: 0.9,
      roughness: 0.1
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // Floating Chip/Data Nodes
    const cubesGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.5,
      roughness: 0.2
    });

    const cubeCount = 24;
    const cubesData = [];

    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const radius = 6 + Math.random() * 5;
      const angle = (i / cubeCount) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 6;

      cube.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );

      cubesGroup.add(cube);
      cubesData.push({
        mesh: cube,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        orbitSpeed: 0.002 + Math.random() * 0.003,
        radius,
        angle,
        height
      });
    }
    mainGroup.add(cubesGroup);

    // Particle Cloud (Igloo tech style particles)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 35;
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x0e7c7b,
      transparent: true,
      opacity: 0.7
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse effect for silky 3D camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y += 0.005;
      mainGroup.rotation.x = targetY * 0.8;
      mainGroup.rotation.z = targetX * 0.8;

      wireMesh.rotation.y -= 0.008;
      ring1.rotation.z += 0.004;
      ring2.rotation.x += 0.003;

      // Animate floating cubes
      cubesData.forEach((data) => {
        data.angle += data.orbitSpeed;
        data.mesh.position.x = Math.cos(data.angle) * data.radius;
        data.mesh.position.z = Math.sin(data.angle) * data.radius;
        data.mesh.rotation.x += data.rotSpeedX;
        data.mesh.rotation.y += data.rotSpeedY;
      });

      particles.rotation.y -= 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="hero-3d-canvas" aria-hidden="true" />;
}
