'use client';

import { useEffect, useState, useRef } from 'react';

export function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // Extract numeric part
  const numericValue = parseFloat(value.toString().replace(/,/g, '')) || 0;
  const isFloat = value.toString().includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = numericValue;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = start + (end - start) * easeOutProgress;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration]);

  const formatDisplay = () => {
    if (isFloat) {
      return count.toFixed(1);
    }
    return Math.floor(count).toLocaleString();
  };

  return (
    <span ref={ref} className="font-mono">
      {formatDisplay()}{suffix}
    </span>
  );
}
