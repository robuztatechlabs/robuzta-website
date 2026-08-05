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
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Dell',
      tag: 'XPS, Inspiron & Alienware',
      image: '/assets/brands/dell.webp',
      badge: 'Power IC',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'HP',
      tag: 'Spectre, OMEN & Pavilion',
      image: '/assets/brands/hp.webp',
      badge: 'Screen Swap',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Lenovo',
      tag: 'ThinkPad, Legion & Yoga',
      image: '/assets/brands/lenovo.webp',
      badge: 'Hinge Repair',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'ASUS',
      tag: 'ROG, TUF & ZenBook',
      image: '/assets/brands/asus.png',
      badge: 'GPU Soldering',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Microsoft Surface',
      tag: 'Surface Pro & Laptop',
      image: '/assets/brands/microsoft.webp',
      badge: 'Battery & Screen',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Apple iPhone',
      tag: 'Pro Max & Standard Series',
      image: '/assets/brands/iphone.png',
      badge: 'FaceID & Glass',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Samsung Galaxy',
      tag: 'S-Series, Z Fold & Flip',
      image: '/assets/brands/samsung.webp',
      badge: 'AMOLED Display',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Google Pixel',
      tag: 'Pixel Pro & Fold Series',
      image: '/assets/brands/google-pixel.webp',
      badge: 'Camera & Board',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    },
    {
      name: 'Acer & Gaming',
      tag: 'Predator, Nitro & Swift',
      image: '/assets/brands/acer.webp',
      badge: 'Overheat Repair',
      logoStyle: 'h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[140px]'
    }
  ];

  return (
    <section className="relative py-28 lg:py-36 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">

      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-widest">
            <Cpu size={14} className="text-[#0E7C7B] dark:text-teal-400" />
            <span>OFFICIAL BRAND & HARDWARE SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Major Brands We Inspect & Repair
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Certified component-level repair and genuine parts replacement for all leading laptop, smartphone, and gaming PC manufacturers.
          </p>
        </div>

        {/* Animated Brand Cards Grid with Large Clear Color Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col items-center justify-between p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#0E7C7B] dark:hover:border-teal-400 shadow-md hover:shadow-2xl hover:shadow-[#0E7C7B]/15 transition-all duration-300 cursor-pointer overflow-hidden min-h-[200px] sm:min-h-[220px]"
            >
              {/* Top Accent Hover Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0E7C7B] via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Hardware Category Badge */}
              <div className="w-full flex justify-end">
                <span className="text-[10px] font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-[#0E7C7B]/10 group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 border border-slate-200/80 dark:border-slate-700 px-2.5 py-0.5 rounded-full transition-colors">
                  {b.badge}
                </span>
              </div>

              {/* High-Visibility Color Logo Viewport */}
              <div className="h-20 w-full flex items-center justify-center my-3 p-1">
                <img
                  src={b.image}
                  alt={`${b.name} Official Logo`}
                  className={`${b.logoStyle} object-contain transition-transform duration-300 group-hover:scale-110 dark:brightness-125`}
                />
              </div>

              {/* Card Label Info */}
              <div className="text-center w-full pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors block truncate">
                  {b.name}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block mt-0.5 truncate">
                  {b.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
