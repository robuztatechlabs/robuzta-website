'use client';

import { useState, useEffect, useRef } from 'react';

export function LazySection({ children, minHeight = '250px' }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { rootMargin: '300px 0px' }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isInView ? undefined : minHeight }}>
      {isInView ? children : null}
    </div>
  );
}
