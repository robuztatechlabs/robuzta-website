'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Award, Lock, CheckCircle2, Star, Cpu } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { trustCards } from '@/data/trust';

const brandLogos = [
  { name: 'Apple', image: '/assets/brands/apples.webp' },
  { name: 'Dell', image: '/assets/brands/dell.webp' },
  { name: 'HP', image: '/assets/brands/hp.webp' },
  { name: 'Lenovo', image: '/assets/brands/lenovo.webp' },
  { name: 'ASUS', image: '/assets/brands/asus.png' },
  { name: 'Google Pixel', image: '/assets/brands/google-pixel.webp' },
  { name: 'iPhone', image: '/assets/brands/iphone.png' },
  { name: 'Microsoft Surface', image: '/assets/brands/microsoft.webp' },
  { name: 'Samsung', image: '/assets/brands/samsung.webp' },
  { name: 'Acer', image: '/assets/brands/acer.webp' }
];

export function TrustSection() {
  const marqueeLogos = brandLogos.concat(brandLogos);

  return (
    <section className="relative bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 lg:py-32 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">
        
        {/* Metric Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="15000" suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">Devices Restored</div>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="99.8" suffix="%" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">Success Rate</div>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="2" suffix=" to 4h" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">Avg Turnaround</div>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="4.9" />
              <Star size={20} className="text-amber-500 fill-amber-500 shrink-0 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">1,200+ Reviews</div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Trusted by 15,000+ Customers
          </h2>
        </div>

        {/* Trust Cards 2-Column Mobile App Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {trustCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 flex flex-col justify-between hover:border-[#0E7C7B] hover:shadow-xl transition-all duration-300 space-y-2.5 sm:space-y-3"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:scale-105 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shrink-0">
                  {idx === 0 && <Lock size={18} className="sm:w-[22px] sm:h-[22px]" />}
                  {idx === 1 && <Cpu size={18} className="sm:w-[22px] sm:h-[22px]" />}
                  {idx === 2 && <Award size={18} className="sm:w-[22px] sm:h-[22px]" />}
                  {idx === 3 && <ShieldCheck size={18} className="sm:w-[22px] sm:h-[22px]" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm xs:text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-tight line-clamp-2">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
