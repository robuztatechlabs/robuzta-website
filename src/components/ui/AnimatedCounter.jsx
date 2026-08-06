'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: '0px 0px -50px 0px' });
  const hasAnimated = useRef(false);

  // Extract numeric part
  const numericValue = parseFloat(value.toString().replace(/,/g, '')) || 0;
  const isFloat = value.toString().includes('.');

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = numericValue;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Custom smooth exponential ease-out
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
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="font-mono inline-block tracking-tight"
    >
      {prefix}{formatDisplay()}{suffix}
    </motion.span>
  );
}
