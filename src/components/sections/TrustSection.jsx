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
    <section className="relative bg-slate-50 dark:bg-slate-900 py-28 lg:py-36 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Metric Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="15000" suffix="+" />
            </div>
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Devices Restored</div>
            <p className="text-[10px] sm:text-[11px] text-[#0E7C7B] dark:text-teal-400 font-bold truncate">Laptops, Macs & Mobiles</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="99.8" suffix="%" />
            </div>
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Repair Success Rate</div>
            <p className="text-[10px] sm:text-[11px] text-amber-600 dark:text-amber-400 font-bold truncate">Micro-soldering & Screens</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <AnimatedCounter value="2" suffix=" to 4h" />
            </div>
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Avg Turnaround</div>
            <p className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-bold truncate">Express Turnaround</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              <span>4.9</span>
              <Star size={20} className="text-amber-500 fill-amber-500 shrink-0" />
            </div>
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Verified Rating</div>
            <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-bold truncate">1,200+ Google Reviews</p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Built on Workbench Transparency & Data Safety
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            From chip-level motherboard logic soldering to screen and battery replacements, every process is documented, ESD-isolated, and protected under our strict Zero-OTP Privacy Policy.
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-7 space-y-4 hover:border-[#0E7C7B] hover:shadow-2xl transition-all"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:scale-110 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all">
                {idx === 0 && <Lock size={22} />}
                {idx === 1 && <Cpu size={22} />}
                {idx === 2 && <Award size={22} />}
                {idx === 3 && <ShieldCheck size={22} />}
              </div>

              <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                {card.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
