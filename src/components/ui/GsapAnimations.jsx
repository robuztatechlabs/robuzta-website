'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GsapReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    let yOffset = 40;
    let xOffset = 0;

    if (direction === 'down') yOffset = -40;
    if (direction === 'left') {
      xOffset = 40;
      yOffset = 0;
    }
    if (direction === 'right') {
      xOffset = -40;
      yOffset = 0;
    }

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: yOffset,
        x: xOffset
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.9,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function GsapStagger({ children, selector = '.stagger-item', delay = 0.1, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(selector);
    if (!items.length) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 35
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [selector, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
