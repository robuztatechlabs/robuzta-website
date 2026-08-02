'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

/* Dynamic import with SSR disabled to prevent Three.js hydration errors */
const ModelViewer = dynamic(
  () => import('@/components/3d/ModelViewer').then((mod) => mod.ModelViewer),
  { ssr: false, loading: () => null }
);

/**
 * FloatingModel — wraps ModelViewer in a gentle GSAP bob animation.
 * The outer container MUST have explicit width and height (e.g. w-40 h-40).
 */
export function FloatingModel({
  modelPath,
  scale = 1,
  rotationSpeed = 0.003,
  floatAmplitude = 12,
  floatDuration = 3,
  className = '',
  style = {},
  cameraPosition = [0, 0, 5],
  cameraFov = 45,
  modelPosition = [0, 0, 0],
  environmentPreset = 'studio',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(containerRef.current, {
      y: floatAmplitude,
      duration: floatDuration / 2,
      ease: 'sine.inOut',
    });

    return () => tl.kill();
  }, [floatAmplitude, floatDuration]);

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', ...style }}>
      <ModelViewer
        modelPath={modelPath}
        scale={scale}
        rotationSpeed={rotationSpeed}
        cameraPosition={cameraPosition}
        cameraFov={cameraFov}
        modelPosition={modelPosition}
        environmentPreset={environmentPreset}
      />
    </div>
  );
}
