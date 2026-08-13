'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu } from 'lucide-react';

export function BrandLogosGrid() {
  const brands = [
    {
      name: 'Apple MacBook',
      tag: 'Air, Pro & Mac Studio',
      image: '/assets/brands/apple-13.svg',
      badge: 'Logic Board',
      logoStyle: 'h-14 sm:h-16 w-14 sm:w-16 max-w-[64px]',
      mobileScale: 1
    },
    {
      name: 'Dell',
      tag: 'XPS, Inspiron & Alienware',
      image: '/assets/brands/dell-2.svg',
      badge: 'Power IC',
      logoStyle: 'h-14 sm:h-16 w-14 sm:w-16 max-w-[64px]',
      mobileScale: 1
    },
    {
      name: 'HP',
      tag: 'Spectre, OMEN & Pavilion',
      image: '/assets/brands/hp-hewlett-packard.svg',
      badge: 'Screen Swap',
      logoStyle: 'h-16 sm:h-20 w-16 sm:w-20 max-w-[80px]',
      mobileScale: 1
    },
    {
      name: 'Lenovo',
      tag: 'ThinkPad, Legion & Yoga',
      image: '/assets/brands/lenovo.webp',
      badge: 'Hinge Repair',
      logoStyle: 'h-15 sm:h-150 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1
    },
    {
      name: 'ASUS',
      tag: 'ROG, TUF & ZenBook',
      image: '/assets/brands/asus-rog-1-1.svg',
      badge: 'GPU Soldering',
      logoStyle: 'h-10 sm:h-12 w-full max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1
    },
    {
      name: 'Microsoft Surface',
      tag: 'Surface Pro & Laptop',
      image: '/assets/brands/microsoft-centered.svg',
      badge: 'Battery & Screen',
      logoStyle: 'h-10 sm:h-12 w-full max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1.8
    },
    {
      name: 'MSI',
      tag: 'Katana, Raider & Stealth',
      image: '/assets/brands/msi-gaming.svg',
      badge: 'GPU Repair',
      logoStyle: 'h-15 sm:h-15 w-full max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1
    },
    {
      name: 'Samsung Galaxy',
      tag: 'S-Series, Z Fold & Flip',
      image: '/assets/brands/samsung-electronics.svg',
      badge: 'AMOLED Display',
      logoStyle: 'h-10 sm:h-12 w-full max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1.6
    },
    {
      name: 'Google Pixel',
      tag: 'Pixel Pro & Fold Series',
      image: '/assets/brands/icons8-google.svg',
      badge: 'Camera & Board',
      logoStyle: 'h-14 sm:h-16 w-14 sm:w-16 max-w-[64px]',
      mobileScale: 1.7
    },
    {
      name: 'Acer & Gaming',
      tag: 'Predator, Nitro & Swift',
      image: '/assets/brands/acer-2011.svg',
      badge: 'Overheat Repair',
      logoStyle: 'h-10 sm:h-12 w-full max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1
    }
  ];

  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">

      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 lg:space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Brands We Service
          </h2>
        </div>

        {/* Continuous Horizontal Floating Logo Strip (All Screens) */}
        <div className="relative w-full overflow-hidden py-6 sm:py-8 border-y border-slate-200 dark:border-slate-800">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-33.333333%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex items-center gap-12 sm:gap-20 w-max px-4"
          >
            {[...brands, ...brands, ...brands].map((b, idx) => (
              <div
                key={`${b.name}-${idx}`}
                className="flex items-center justify-center shrink-0 w-28 sm:w-40 h-16 sm:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer group px-4"
              >
                <img
                  src={b.image}
                  alt={`${b.name} Official Logo`}
                  className="max-h-8 sm:max-h-10 w-auto object-contain dark:brightness-125 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
