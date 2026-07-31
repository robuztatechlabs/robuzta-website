'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, CheckCircle2, Star, Zap, Cpu, Server } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { trustCards } from '@/data/trust';

const clientLogos = [
  'Dell Laptops', 'HP Pavilion & OMEN', 'Lenovo ThinkPad', 'Apple MacBook & iPad',
  'ASUS ROG & ZenBook', 'Acer Predator', 'Microsoft Surface', 'Samsung Galaxy', 'OnePlus', 'Google Pixel'
];

export function TrustSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-slate-900 py-20 border-y border-slate-200 dark:border-slate-700 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Metric Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              <AnimatedCounter value="15000" suffix="+" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Devices Restored</div>
            <p className="text-[11px] text-blue-600 font-semibold">Laptops, Macs, Surface & Mobile</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              <AnimatedCounter value="99.8" suffix="%" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Repair Success Rate</div>
            <p className="text-[11px] text-orange-600 font-semibold">Micro-soldering & Screen swaps</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              <AnimatedCounter value="2" suffix=" to 4h" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Avg Turnaround</div>
            <p className="text-[11px] text-emerald-600 font-semibold">Same-Day Express Service</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              <span>4.9</span>
              <Star size={24} className="text-amber-500 fill-amber-500" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Verified Rating</div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold">Based on 1,200+ Google Reviews</p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
            ZERO COMPROMISE DATA & QUALITY GUARANTEE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Built on Workbench Transparency & Data Safety
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
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
              className="group rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 p-6 space-y-3 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {idx === 0 && <Lock size={22} />}
                {idx === 1 && <Cpu size={22} />}
                {idx === 2 && <Award size={22} />}
                {idx === 3 && <ShieldCheck size={22} />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Infinite Logo Marquee */}
        <div className="space-y-4 pt-4">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Certified Hardware Component & Brand Support
          </div>
          <div className="relative overflow-hidden py-4 border-y border-slate-200 dark:border-slate-700">
            <div className="animate-marquee flex items-center gap-12 text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <span key={index} className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-default whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
