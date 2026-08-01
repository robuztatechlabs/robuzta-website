'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { COMPONENT_DATA } from '@/data/laptopComponents';

/* ──────────────────────────────────────────────
   Procedural Texture Generators for Ultra Realism
   ────────────────────────────────────────────── */
function createScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Vibrant Studio Screen Background
  const gradient = ctx.createLinearGradient(0, 0, 1024, 640);
  gradient.addColorStop(0, '#0B192C');
  gradient.addColorStop(0.5, '#1E3E62');
  gradient.addColorStop(1, '#0B192C');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 640);

  // Subtle grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
  ctx.lineWidth = 1.5;
  for (let x = 0; x < 1024; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 640);
    ctx.stroke();
  }
  for (let y = 0; y < 640; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Glowing radial aura
  const radGlow = ctx.createRadialGradient(512, 320, 20, 512, 320, 320);
  radGlow.addColorStop(0, 'rgba(14, 124, 123, 0.55)');
  radGlow.addColorStop(1, 'rgba(14, 124, 123, 0)');
  ctx.fillStyle = radGlow;
  ctx.fillRect(0, 0, 1024, 640);

  // Title text
  ctx.fillStyle = '#2DD4BF';
  ctx.font = '900 32px system-ui, sans-serif';
  ctx.fillText('ROBUZTA TECHLABS', 80, 90);

  ctx.fillStyle = '#38BDF8';
  ctx.font = '700 18px system-ui, sans-serif';
  ctx.fillText('PRECISION HARDWARE DIAGNOSTICS ENGINE v4.2', 80, 120);

  // Terminal box
  ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(80, 160, 480, 360, 14);
  ctx.fill();
  ctx.stroke();

  // Terminal lines
  const lines = [
    { text: '[SYSTEM] Initializing 3D BGA Optical Scanner...', color: '#94A3B8' },
    { text: '[DIAGNOSTIC] Motherboard Power Rail 19V: NORMAL', color: '#4ADE80' },
    { text: '[DIAGNOSTIC] CPU Core Thermal Margin: 34°C', color: '#4ADE80' },
    { text: '[WARNING] NVMe Controller Peak Temp: 68°C', color: '#FACC15' },
    { text: '[STATUS] BGA Micro-Soldering Station Ready', color: '#38BDF8' },
    { text: '[DATA] Zero-OTP / Privacy Protection Active', color: '#C084FC' },
    { text: '>> Select any component to inspect micro-architecture...', color: '#2DD4BF' },
  ];

  ctx.font = '600 15px monospace';
  lines.forEach((line, i) => {
    ctx.fillStyle = line.color;
    ctx.fillText(line.text, 100, 200 + i * 42);
  });

  // Right side diagnostic gauge graphics
  ctx.strokeStyle = '#0E7C7B';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(780, 300, 100, -Math.PI * 0.8, Math.PI * 0.4);
  ctx.stroke();

  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(780, 300, 100, Math.PI * 0.4, Math.PI * 0.7);
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 46px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('99.4%', 780, 305);
  ctx.fillStyle = '#94A3B8';
  ctx.font = '700 15px system-ui, sans-serif';
  ctx.fillText('HEALTH INDEX', 780, 335);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createM2StickerTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#1E293B';
  ctx.fillRect(0, 0, 512, 128);

  ctx.fillStyle = '#EA580C';
  ctx.fillRect(0, 0, 24, 128);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 24px system-ui';
  ctx.fillText('ROBUZTA PRO NVMe PCIe 4.0 SSD', 40, 46);

  ctx.fillStyle = '#38BDF8';
  ctx.font = '700 15px monospace';
  ctx.fillText('S/N: RBZ-2026-NVME-1TB  |  7500 MB/s', 40, 78);
  ctx.fillStyle = '#CBD5E1';
  ctx.font = '600 13px monospace';
  ctx.fillText('HIGH PERFORMANCE THERMAL SPREADER', 40, 104);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createCpuLabelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#475569';
  ctx.fillRect(0, 0, 256, 256);

  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 8;
  ctx.strokeRect(8, 8, 240, 240);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 28px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('ROBUZTA', 128, 90);
  ctx.fillStyle = '#38BDF8';
  ctx.font = '700 22px monospace';
  ctx.fillText('LAB IC-X1', 128, 128);
  ctx.fillStyle = '#F8FAFC';
  ctx.font = '600 14px monospace';
  ctx.fillText('MICRO-SOLDERING', 128, 168);
  ctx.fillText('3.8GHz OCTA-CORE', 128, 192);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/* ──────────────────────────────────────────────
   Main 3D Component
   ────────────────────────────────────────────── */
export function LaptopExplorer({
  onComponentSelect,
  selectedComponent,
  onResetView,
  isExploded = false,
  zoomAction,
}) {
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const sceneRef = useRef({});
  const resetViewRef = useRef(null);

  const registerReset = useCallback(
    (fn) => {
      resetViewRef.current = fn;
      if (onResetView) onResetView(() => fn);
    },
    [onResetView]
  );

  // Handle external zoom buttons (+ / -)
  useEffect(() => {
    if (!controlsRef.current || !zoomAction) return;
    const controls = controlsRef.current;
    if (zoomAction === 'in') {
      controls.dollyIn(1.25);
      controls.update();
    } else if (zoomAction === 'out') {
      controls.dollyOut(1.25);
      controls.update();
    }
  }, [zoomAction]);

  // Sync camera macro-zoom whenever selectedComponent prop changes
  useEffect(() => {
    if (sceneRef.current?.focusComponent) {
      sceneRef.current.focusComponent(selectedComponent);
    }
  }, [selectedComponent]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId = 0;

    /* ── Scene & Camera setup ── */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Rich Dark Navy Backdrop
    scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 6, 13);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.8;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    /* ── Controls ── */
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.zoomSpeed = 1.2;
    controls.rotateSpeed = 0.85;
    controls.minDistance = 2.5;
    controls.maxDistance = 25;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.target.set(0, 0.8, 0);
    controls.maxPolarAngle = Math.PI / 2 + 0.15;

    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';

    let isTransitioning = false;
    let targetCamPos = new THREE.Vector3(0, 6, 13);
    let targetLookAt = new THREE.Vector3(0, 0.8, 0);

    controls.addEventListener('start', () => {
      isTransitioning = false;
      controls.autoRotate = false;
    });

    /* ── ULTRA-BRIGHT HIGH-VISIBILITY LIGHTING SYSTEM ── */
    const ambient = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.0);
    keyLight.position.set(8, 18, 12);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLightLeft = new THREE.DirectionalLight(0x38bdf8, 3.0);
    fillLightLeft.position.set(-10, 12, 8);
    scene.add(fillLightLeft);

    const fillLightBack = new THREE.DirectionalLight(0xffffff, 3.0);
    fillLightBack.position.set(0, 10, -12);
    scene.add(fillLightBack);

    const deckGlow = new THREE.PointLight(0x2dd4bf, 3.0, 15);
    deckGlow.position.set(0, 0.8, 0);
    scene.add(deckGlow);

    /* ── Ground shadow plane ── */
    const shadowGeo = new THREE.PlaneGeometry(30, 30);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.55;
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    /* Grid ground lines */
    const grid = new THREE.GridHelper(30, 45, 0x38bdf8, 0x334155);
    grid.position.y = -0.54;
    grid.material.opacity = 0.35;
    grid.material.transparent = true;
    scene.add(grid);

    /* ═══════════════════════════════════════════
       BRIGHT PLATINUM SILVER & HIGH-CONTRAST MATERIALS
       ═══════════════════════════════════════════ */
    const laptopMaster = new THREE.Group();
    scene.add(laptopMaster);

    const bottomChassisGroup = new THREE.Group();
    const motherboardGroup = new THREE.Group();
    const topDeckGroup = new THREE.Group();
    const screenGroup = new THREE.Group();

    laptopMaster.add(bottomChassisGroup);
    laptopMaster.add(motherboardGroup);
    laptopMaster.add(topDeckGroup);
    laptopMaster.add(screenGroup);

    const clickableParts = {};

    const platinumBodyMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      roughness: 0.35,
      metalness: 0.45,
    });

    const pureChromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.95,
    });

    const goldPinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.1,
    });

    const blackChipMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.5,
    });

    const brightPcbMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.25,
      metalness: 0.3,
    });

    /* ── 1. BOTTOM CHASSIS BASE ── */
    const baseGeo = new THREE.BoxGeometry(8.4, 0.22, 5.6);
    const baseMesh = new THREE.Mesh(baseGeo, platinumBodyMat);
    baseMesh.position.set(0, -0.11, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    bottomChassisGroup.add(baseMesh);

    const bottomTrim = new THREE.Mesh(new THREE.BoxGeometry(8.44, 0.04, 5.64), pureChromeMat);
    bottomTrim.position.set(0, -0.01, 0);
    bottomChassisGroup.add(bottomTrim);

    const feetGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.06, 16);
    const feetMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const feetPos = [[-3.6, -0.24, -2.3], [3.6, -0.24, -2.3], [-3.6, -0.24, 2.3], [3.6, -0.24, 2.3]];
    feetPos.forEach(p => {
      const foot = new THREE.Mesh(feetGeo, feetMat);
      foot.position.set(...p);
      bottomChassisGroup.add(foot);
    });

    const portMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.9, roughness: 0.1 });
    const port1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.3), portMat);
    port1.position.set(-4.21, -0.08, -1.2);
    const port2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.3), portMat);
    port2.position.set(-4.21, -0.08, -0.6);
    bottomChassisGroup.add(port1, port2);
    const port3 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.09, 0.4), portMat);
    port3.position.set(4.21, -0.08, 0.5);
    bottomChassisGroup.add(port3);

    /* ── 2. MOTHERBOARD & REALISTIC INTERNAL COMPONENTS ── */
    const pcbGeo = new THREE.BoxGeometry(7.8, 0.08, 5.0);
    const pcbMesh = new THREE.Mesh(pcbGeo, brightPcbMat);
    pcbMesh.position.set(0, 0.04, 0);
    pcbMesh.castShadow = true;
    motherboardGroup.add(pcbMesh);

    const traceMatCyan = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    const traceMatGold = new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.85 });
    const traceLinesCyan = [
      [[-3, 0.09, -1.8], [-1, 0.09, -1.8], [-1, 0.09, -0.2]],
      [[0, 0.09, -0.2], [1.8, 0.09, -0.2], [1.8, 0.09, 1.2]],
    ];
    const traceLinesGold = [
      [[-2.2, 0.09, 0.8], [-0.5, 0.09, 0.8], [-0.5, 0.09, -1.2]],
      [[1.2, 0.09, -1.8], [3, 0.09, -1.8], [3, 0.09, 0.5]],
    ];
    traceLinesCyan.forEach(pts => {
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(...p)));
      motherboardGroup.add(new THREE.Line(geo, traceMatCyan));
    });
    traceLinesGold.forEach(pts => {
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(...p)));
      motherboardGroup.add(new THREE.Line(geo, traceMatGold));
    });

    const smdGeoSmall = new THREE.BoxGeometry(0.1, 0.04, 0.06);
    const smdGeoCap = new THREE.CylinderGeometry(0.06, 0.06, 0.08, 12);
    const smdMatCap = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });

    const smdPositions = [
      [-3.2, 0.09, -1.2], [-2.8, 0.09, -1.5], [-0.2, 0.09, -1.6], [0.8, 0.09, -1.6],
      [2.2, 0.09, 0.8], [2.8, 0.09, 1.2], [-3.1, 0.09, 0.3], [-1.2, 0.09, 1.5],
      [0.4, 0.09, 0.4], [0.8, 0.09, 0.8], [-2.6, 0.09, 1.8], [-3.4, 0.09, -0.4],
    ];
    smdPositions.forEach(pos => {
      const smd = new THREE.Mesh(smdGeoSmall, blackChipMat);
      smd.position.set(...pos);
      motherboardGroup.add(smd);

      const cap = new THREE.Mesh(smdGeoCap, smdMatCap);
      cap.position.set(pos[0] + 0.15, pos[1] + 0.02, pos[2]);
      motherboardGroup.add(cap);
    });

    function registerComponent(id, mesh, color) {
      mesh.userData = { componentId: id, baseColor: color };
      clickableParts[id] = mesh;
      motherboardGroup.add(mesh);
    }

    /* ── A. CPU & BGA Socket ── */
    const cpuGroup = new THREE.Group();
    cpuGroup.position.set(-0.8, 0.14, -0.5);

    const cpuSocketBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.04, 1.35),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.6 })
    );
    const cpuGoldFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.02, 1.38),
      goldPinMat
    );
    cpuGoldFrame.position.y = -0.01;

    const cpuSubstrate = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.05, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x047857, metalness: 0.6, roughness: 0.2 })
    );
    cpuSubstrate.position.y = 0.04;

    const cpuHeatspreader = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.06, 0.9),
      new THREE.MeshStandardMaterial({ map: createCpuLabelTexture(), metalness: 0.85, roughness: 0.15 })
    );
    cpuHeatspreader.position.y = 0.09;

    const cpuLatchArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.04, 1.4),
      pureChromeMat
    );
    cpuLatchArm.position.set(0.64, 0.04, 0);

    cpuGroup.add(cpuSocketBase, cpuGoldFrame, cpuSubstrate, cpuHeatspreader, cpuLatchArm);
    registerComponent('cpu', cpuGroup, '#0E7C7B');

    /* ── B. GPU & GDDR6 VRAM ── */
    const gpuGroup = new THREE.Group();
    gpuGroup.position.set(1.5, 0.14, -0.5);

    const gpuSubstrate = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 0.05, 1.15),
      new THREE.MeshStandardMaterial({ color: 0x6d28d9, metalness: 0.6, roughness: 0.2 })
    );
    const gpuDie = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.07, 0.6),
      new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.98, roughness: 0.05 })
    );
    gpuDie.position.y = 0.06;

    gpuGroup.add(gpuSubstrate, gpuDie);

    const vramGeo = new THREE.BoxGeometry(0.26, 0.04, 0.26);
    const vramMat = new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.4 });
    const vramPositions = [
      [-0.55, 0.05, 0.42], [0, 0.05, 0.42], [0.55, 0.05, 0.42],
      [-0.55, 0.05, -0.42], [0, 0.05, -0.42], [0.55, 0.05, -0.42]
    ];
    vramPositions.forEach(p => {
      const vram = new THREE.Mesh(vramGeo, vramMat);
      vram.position.set(...p);
      gpuGroup.add(vram);
    });
    registerComponent('gpu', gpuGroup, '#7C3AED');

    /* ── C. Dual SODIMM RAM Slots & Sticks ── */
    const createRamStick = (x, z, id) => {
      const ramGroup = new THREE.Group();
      ramGroup.position.set(x, 0.14, z);

      const slotBase = new THREE.Mesh(
        new THREE.BoxGeometry(2.0, 0.06, 0.18),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 })
      );
      slotBase.position.z = -0.22;

      const latch1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.2), pureChromeMat);
      latch1.position.set(-0.95, 0.03, -0.22);
      const latch2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.2), pureChromeMat);
      latch2.position.set(0.95, 0.03, -0.22);

      const ramPcb = new THREE.Mesh(
        new THREE.BoxGeometry(1.85, 0.05, 0.42),
        new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.6, roughness: 0.2 })
      );

      const goldFingers = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.03, 0.06),
        goldPinMat
      );
      goldFingers.position.z = -0.19;

      ramGroup.add(slotBase, latch1, latch2, ramPcb, goldFingers);

      for (let i = 0; i < 4; i++) {
        const chip = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.22), blackChipMat);
        chip.position.set(-0.6 + i * 0.4, 0.04, 0.05);
        ramGroup.add(chip);
      }
      registerComponent(id, ramGroup, '#3B82F6');
    };
    createRamStick(-2.2, 0.8, 'ram1');
    createRamStick(-2.2, 1.4, 'ram2');

    /* ── D. NVMe M.2 2280 SSD ── */
    const ssdGroup = new THREE.Group();
    ssdGroup.position.set(1.4, 0.14, 1.1);

    const m2Slot = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.08, 0.16),
      blackChipMat
    );
    m2Slot.position.set(-0.9, 0.02, 0);

    const standoffScrew = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.1, 16),
      pureChromeMat
    );
    standoffScrew.position.set(0.9, 0.04, 0);

    const ssdPcb = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.04, 0.45),
      new THREE.MeshStandardMaterial({ color: 0x047857 })
    );

    const ssdGoldEdge = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.03, 0.42),
      goldPinMat
    );
    ssdGoldEdge.position.set(-0.85, 0.01, 0);

    const ssdSticker = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.4),
      new THREE.MeshStandardMaterial({ map: createM2StickerTexture(), roughness: 0.2 })
    );
    ssdSticker.rotation.x = -Math.PI / 2;
    ssdSticker.position.set(0.1, 0.03, 0);

    ssdGroup.add(m2Slot, standoffScrew, ssdPcb, ssdGoldEdge, ssdSticker);
    registerComponent('ssd', ssdGroup, '#EA580C');

    /* ── E. Lithium-Ion Battery Module ── */
    const batteryGroup = new THREE.Group();
    batteryGroup.position.set(0, 0.14, 1.9);

    const batteryPouch = new THREE.Mesh(
      new THREE.BoxGeometry(6.8, 0.12, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.3, metalness: 0.5 })
    );
    batteryGroup.add(batteryPouch);

    const bmsHeader = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.08, 0.2),
      blackChipMat
    );
    bmsHeader.position.set(0, 0.08, -0.65);

    const wireRibbon = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.04, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xef4444 })
    );
    wireRibbon.position.set(0, 0.08, -0.45);

    batteryGroup.add(bmsHeader, wireRibbon);

    [-2.2, 0, 2.2].forEach(cx => {
      const tape = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.13, 1.18),
        new THREE.MeshStandardMaterial({ color: 0x4ade80, metalness: 0.6 })
      );
      tape.position.x = cx;
      batteryGroup.add(tape);
    });
    registerComponent('battery', batteryGroup, '#22C55E');

    /* ── F. Wi-Fi 6E / Bluetooth Card ── */
    const wifiGroup = new THREE.Group();
    wifiGroup.position.set(3.0, 0.14, 0.2);

    const wifiPcb = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.05, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4 })
    );
    const wifiShield = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.05, 0.38),
      pureChromeMat
    );
    wifiShield.position.y = 0.05;

    const snap1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 12), goldPinMat);
    snap1.position.set(-0.15, 0.08, -0.12);
    const snap2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 12), goldPinMat);
    snap2.position.set(0.15, 0.08, -0.12);

    wifiGroup.add(wifiPcb, wifiShield, snap1, snap2);
    registerComponent('wifi', wifiGroup, '#06B6D4');

    /* ── G. Turbo Blower Cooling Fan & Heatpipes ── */
    const fanGroup = new THREE.Group();
    fanGroup.position.set(2.9, 0.16, -1.8);

    const fanHousing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 0.14, 32),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.3, metalness: 0.8 })
    );

    const fanCenterCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.25, 0.16, 24),
      pureChromeMat
    );

    const fanBladesGroup = new THREE.Group();
    fanBladesGroup.position.y = 0.04;
    for (let b = 0; b < 16; b++) {
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.02, 0.06),
        pureChromeMat
      );
      blade.rotation.y = (b / 16) * Math.PI * 2;
      blade.position.x = Math.cos(blade.rotation.y) * 0.28;
      blade.position.z = Math.sin(blade.rotation.y) * 0.28;
      fanBladesGroup.add(blade);
    }
    fanGroup.add(fanHousing, fanCenterCap, fanBladesGroup);

    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.95, roughness: 0.1 });
    const pipe1Pts = [new THREE.Vector3(-0.8, 0.22, -0.5), new THREE.Vector3(0.8, 0.22, -0.5), new THREE.Vector3(1.5, 0.22, -0.5), new THREE.Vector3(2.9, 0.22, -1.8)];
    const pipeCurve = new THREE.CatmullRomCurve3(pipe1Pts);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 24, 0.045, 8, false);
    motherboardGroup.add(new THREE.Mesh(pipeGeo, pipeMat));

    registerComponent('fan', fanGroup, '#64748B');

    /* ── 3. TOP CHASSIS / KEYBOARD DECK WITH BACKLIGHT GLOW ── */
    const deckBase = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.12, 5.6), platinumBodyMat);
    deckBase.position.set(0, 0.2, 0);
    deckBase.castShadow = true;
    deckBase.receiveShadow = true;
    topDeckGroup.add(deckBase);

    const deckTrim = new THREE.Mesh(new THREE.BoxGeometry(8.44, 0.04, 5.64), pureChromeMat);
    deckTrim.position.set(0, 0.26, 0);
    topDeckGroup.add(deckTrim);

    const kbWell = new THREE.Mesh(
      new THREE.BoxGeometry(7.2, 0.02, 2.4),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 })
    );
    kbWell.position.set(0, 0.26, -0.8);
    topDeckGroup.add(kbWell);

    const keyMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.5 });
    const keyGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.9 });
    const keyGeo = new THREE.BoxGeometry(0.36, 0.04, 0.36);
    const glowGeo = new THREE.PlaneGeometry(0.38, 0.38);

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 15; c++) {
        const key = new THREE.Mesh(keyGeo, keyMat);
        key.position.set(-3.2 + c * 0.45, 0.28, -1.7 + r * 0.45);
        topDeckGroup.add(key);

        const glow = new THREE.Mesh(glowGeo, keyGlowMat);
        glow.rotation.x = -Math.PI / 2;
        glow.position.set(-3.2 + c * 0.45, 0.262, -1.7 + r * 0.45);
        topDeckGroup.add(glow);
      }
    }

    const trackpadMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.02, 1.6),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.2, metalness: 0.8 })
    );
    trackpadMesh.position.set(0, 0.26, 1.4);
    topDeckGroup.add(trackpadMesh);

    const trackpadBorder = new THREE.Mesh(
      new THREE.BoxGeometry(2.64, 0.015, 1.64),
      pureChromeMat
    );
    trackpadBorder.position.set(0, 0.258, 1.4);
    topDeckGroup.add(trackpadBorder);

    /* ── 4. SCREEN LID ASSEMBLY ── */
    const screenHinge = new THREE.Group();
    screenHinge.position.set(0, 0.22, -2.75);
    screenGroup.add(screenHinge);

    const lidShell = new THREE.Mesh(
      new THREE.BoxGeometry(8.4, 5.4, 0.12),
      platinumBodyMat
    );
    lidShell.position.set(0, 2.7, -0.06);
    lidShell.castShadow = true;
    screenHinge.add(lidShell);

    const screenRim = new THREE.Mesh(
      new THREE.BoxGeometry(8.44, 5.44, 0.04),
      pureChromeMat
    );
    screenRim.position.set(0, 2.7, -0.06);
    screenHinge.add(screenRim);

    const displayPanel = new THREE.Mesh(
      new THREE.PlaneGeometry(8.0, 5.0),
      new THREE.MeshStandardMaterial({
        map: createScreenTexture(),
        roughness: 0.1,
        metalness: 0.1,
        emissive: 0xffffff,
        emissiveIntensity: 0.35,
      })
    );
    displayPanel.position.set(0, 2.7, 0.01);
    screenHinge.add(displayPanel);

    screenHinge.rotation.x = -1.25;

    /* ═══════════════════════════════════════════
       INTERACTION & CAMERA FOCUS LOGIC
       ═══════════════════════════════════════════ */
    const focusComponent = (id) => {
      if (!id || !clickableParts[id]) {
        targetCamPos = new THREE.Vector3(0, 6, 13);
        targetLookAt = new THREE.Vector3(0, 0.8, 0);
      } else {
        const comp = clickableParts[id];
        const compWorldPos = new THREE.Vector3();
        comp.getWorldPosition(compWorldPos);

        targetCamPos = compWorldPos.clone().add(new THREE.Vector3(1.2, 2.2, 2.0));
        targetLookAt = compWorldPos.clone();
      }
      controls.autoRotate = false;
      isTransitioning = true;
    };

    sceneRef.current = { focusComponent };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredGroup = null;

    const getIntersectedComponent = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const targets = [];
      Object.values(clickableParts).forEach(g => {
        g.traverse(child => { if (child.isMesh) targets.push(child); });
      });

      const intersects = raycaster.intersectObjects(targets, false);
      if (intersects.length > 0) {
        let curr = intersects[0].object;
        while (curr && !curr.userData?.componentId) {
          curr = curr.parent;
        }
        return curr;
      }
      return null;
    };

    const handlePointerMove = (e) => {
      const comp = getIntersectedComponent(e);
      if (comp !== hoveredGroup) {
        canvas.style.cursor = comp ? 'pointer' : 'grab';
        hoveredGroup = comp;
      }
    };

    const handleClick = (e) => {
      const comp = getIntersectedComponent(e);
      if (comp && comp.userData?.componentId) {
        const id = comp.userData.componentId;
        focusComponent(id);
        if (onComponentSelect) onComponentSelect(id);
      }
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('click', handleClick);

    const resetView = () => {
      controls.autoRotate = true;
      targetCamPos = new THREE.Vector3(0, 6, 13);
      targetLookAt = new THREE.Vector3(0, 0.8, 0);
      isTransitioning = true;
      if (onComponentSelect) onComponentSelect(null);
    };
    registerReset(resetView);

    // Initial camera focus sync on mount if selectedComponent is set
    if (selectedComponent) {
      focusComponent(selectedComponent);
    }

    /* ── Render Loop & Smooth Lerp Animations ── */
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Spin fan blades
      fanBladesGroup.rotation.y += delta * 12;

      // Exploded View / Deck Lifting Animation
      const targetDeckY = (isExploded || selectedComponent) ? 2.2 : 0;
      topDeckGroup.position.y += (targetDeckY - topDeckGroup.position.y) * 0.08;
      topDeckGroup.rotation.x += (((isExploded || selectedComponent) ? -0.2 : 0) - topDeckGroup.rotation.x) * 0.08;

      // Smooth camera transition ONLY when transitioning after click/reset
      if (isTransitioning) {
        camera.position.lerp(targetCamPos, 0.08);
        controls.target.lerp(targetLookAt, 0.08);
        if (camera.position.distanceTo(targetCamPos) < 0.1) {
          isTransitioning = false;
        }
      }

      // Selected Component highlight animation
      if (selectedComponent && clickableParts[selectedComponent]) {
        const selObj = clickableParts[selectedComponent];
        selObj.position.y = 0.14 + Math.sin(elapsed * 4) * 0.06;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    handleResize();

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('click', handleClick);
      ro.disconnect();
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isExploded]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className="h-full w-full select-none cursor-grab active:cursor-grabbing"
      data-lenis-prevent="true"
    />
  );
}
