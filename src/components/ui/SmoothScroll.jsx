'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Skip heavy JS smooth scroll on mobile & touch devices for native 120Hz performance
    const isTouch = typeof window !== 'undefined' && (window.innerWidth < 1024 || 'ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    let lenis = null;
    let tickerHandler = null;
    let gsapRef = null;
    let cancelled = false;

    // 2. Defer Lenis initialization until browser main thread is completely idle
    const schedule = typeof window.requestIdleCallback === 'function'
      ? (fn) => window.requestIdleCallback(fn, { timeout: 2500 })
      : (fn) => setTimeout(fn, 1500);

    const idleId = schedule(async () => {
      if (cancelled) return;

      try {
        const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
          import('lenis'),
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);

        if (cancelled) return;

        gsapRef = gsap;
        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 0.6,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.1,
          touchMultiplier: 1.0,
          infinite: false
        });

        lenis.on('scroll', ScrollTrigger.update);

        tickerHandler = (time) => {
          if (lenis) lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerHandler);
        gsap.ticker.lagSmoothing(0);
      } catch {}
    });

    return () => {
      cancelled = true;
      if (typeof window.cancelIdleCallback === 'function' && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
      if (tickerHandler && gsapRef) {
        try {
          gsapRef.ticker.remove(tickerHandler);
        } catch {}
      }
      if (lenis) {
        try {
          lenis.destroy();
        } catch {}
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
