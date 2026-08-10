'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu } from 'lucide-react';

export function BrandLogosGrid() {
  const brands = [
    {
      name: 'Apple MacBook',
      tag: 'Air, Pro & Mac Studio',
      image: '/assets/brands/apples.webp',
      badge: 'Logic Board',
      logoStyle: 'h-15 sm:h-20 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1
    },
    {
      name: 'Dell',
      tag: 'XPS, Inspiron & Alienware',
      image: '/assets/brands/dell.webp',
      badge: 'Power IC',
      logoStyle: 'h-15 sm:h-20 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1
    },
    {
      name: 'HP',
      tag: 'Spectre, OMEN & Pavilion',
      image: '/assets/brands/hp.webp',
      badge: 'Screen Swap',
      logoStyle: 'h-20 sm:h-20 w-150 max-w-[120px] sm:max-w-[140px]',
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
      image: '/assets/brands/asus.png',
      badge: 'GPU Soldering',
      logoStyle: 'h-16 sm:h-20 w-auto max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1
    },
    {
      name: 'Microsoft Surface',
      tag: 'Surface Pro & Laptop',
      image: '/assets/brands/microsoft.webp',
      badge: 'Battery & Screen',
      logoStyle: 'h-20 sm:h-150 w-50 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1.8
    },
    {
      name: 'Apple iPhone',
      tag: 'Pro Max & Standard Series',
      image: '/assets/brands/iphone.png',
      badge: 'FaceID & Glass',
      logoStyle: 'h-15 sm:h-150 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1.7
    },
    {
      name: 'Samsung Galaxy',
      tag: 'S-Series, Z Fold & Flip',
      image: '/assets/brands/samsung.webp',
      badge: 'AMOLED Display',
      logoStyle: 'h-15 sm:h-150 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1.6
    },
    {
      name: 'Google Pixel',
      tag: 'Pixel Pro & Fold Series',
      image: '/assets/brands/google-pixel.webp',
      badge: 'Camera & Board',
      logoStyle: 'h-16 sm:h-20 w-auto max-w-[140px] sm:max-w-[160px]',
      mobileScale: 1.7
    },
    {
      name: 'Acer & Gaming',
      tag: 'Predator, Nitro & Swift',
      image: '/assets/brands/acer.webp',
      badge: 'Overheat Repair',
      logoStyle: 'h-15 sm:h-150 w-150 max-w-[120px] sm:max-w-[140px]',
      mobileScale: 1
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">

      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Brands We Service
          </h2>
        </div>

        {/* Mobile Single Horizontal Floating Logo Strip (Phone Screen Only) */}
        <div className="sm:hidden relative w-full overflow-hidden py-4 border-y border-slate-200 dark:border-slate-800">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex items-center gap-8 w-max px-2"
          >
            {[...brands, ...brands].map((b, idx) => (
              <div
                key={`${b.name}-${idx}`}
                className="flex items-center justify-center shrink-0 w-20 h-10"
              >
                <img
                  src={b.image}
                  alt={`${b.name} Official Logo`}
                  className="w-full h-full object-contain dark:brightness-125"
                  style={{ transform: `scale(${b.mobileScale ?? 1})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop & Tablet Brand Cards Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {brands.map((b, idx) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#0E7C7B] dark:hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden space-y-3"
            >
              <div className="h-20 sm:h-24 w-full flex items-center justify-center p-1">
                <img
                  src={b.image}
                  alt={`${b.name} Official Logo`}
                  className={`${b.logoStyle} object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-125`}
                />
              </div>

              <span className="text-xs sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors block text-center truncate">
                {b.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
