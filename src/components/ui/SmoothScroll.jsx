'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Skip heavy JS smooth scroll on mobile touch devices for maximum performance
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
    if (isMobile) return;

    let lenis = null;
    let tickerHandler = null;
    let cancelled = false;

    // 2. Defer heavy GSAP & Lenis initialization until main thread is completely idle
    const initTask = setTimeout(async () => {
      if (cancelled) return;

      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        infinite: false
      });

      lenis.on('scroll', ScrollTrigger.update);

      tickerHandler = (time) => {
        if (lenis) lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerHandler);
      gsap.ticker.lagSmoothing(0);
    }, 150);

    return () => {
      cancelled = true;
      clearTimeout(initTask);
      if (lenis) {
        try {
          lenis.destroy();
        } catch {}
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
