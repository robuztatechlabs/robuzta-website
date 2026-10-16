'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }) {
  // Extract numeric part
  const numericValue = parseFloat(value.toString().replace(/,/g, '')) || 0;
  const isFloat = value.toString().includes('.');
  const [count, setCount] = useState(numericValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = numericValue;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Smooth ease-out curve
        const easeOutProgress = 1 - Math.pow(1 - progress, 4);
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
  }, [isInView, numericValue, duration]);

  const formatDisplay = () => {
    if (isFloat) {
      return count.toFixed(1);
    }
    return Math.floor(count).toLocaleString();
  };

  return (
    <span
      ref={ref}
      className="font-tech inline-block tracking-tight font-black tabular-nums"
    >
      {prefix}{formatDisplay()}{suffix}
    </span>
  );
}
