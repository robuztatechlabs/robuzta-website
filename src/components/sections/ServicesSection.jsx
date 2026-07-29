'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Cpu,
  Flame,
  Truck,
  Wrench,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Headphones
} from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-24 border-b border-slate-200">
      
      {/* Background Radial Lights */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1.5 text-xs font-bold text-blue-700 uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-orange-500" />
            ROBUZTA MULTI-DEVICE REPAIR SERVICES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Specialized Hardware Diagnostics & Precision Repair
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Select your device category below to inspect our transparent diagnostic process, estimated repair times, and genuine component specifications.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Laptop Repair (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 p-8 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-all">
                <Laptop size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                01 // LAPTOP REPAIR
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Laptop & MacBook Precision Repair
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Screen replacement, battery swap, keyboard fix, hinge repair, SSD/RAM upgrades, and chip-level motherboard logic soldering for Dell, HP, Lenovo, ASUS, Acer, MSI, and Apple MacBook.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={14} className="text-blue-600" />
                <span>Screen & Display Swap</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={14} className="text-blue-600" />
                <span>Motherboard Micro-Soldering</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 size={14} className="text-blue-600" />
                <span>Battery & SSD Upgrade</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <Link href="/services/laptop-repair" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                <span>View Laptop Repair Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Mobile / Phone Repair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-orange-50/30 border border-slate-200 p-8 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 transition-all space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-all">
                <Smartphone size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                02 // MOBILE REPAIR
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                Mobile & Smartphone Repair
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Display replacement, battery health service, charging port flex, speaker/mic repair, and liquid damage treatment for iPhone, Samsung, OnePlus, Google Pixel, and Android tablets.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <Link href="/services/mobile-repair" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 group-hover:text-orange-700">
                <span>View Mobile Repair Specs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Computer & MacBook / Surface Repair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cpu size={24} />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-500">03 // COMPUTER & SURFACE</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                MacBook & Microsoft Surface Repair
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized disassembly and logic board repair for MacBook Air/Pro (M1, M2, M3, Intel), Surface Pro, Surface Laptop, and All-in-One desktops.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link href="/services/macbook-repair" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span>Explore Mac & Surface Care</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Gaming PC Repair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 transition-all space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 border border-orange-200 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Flame size={24} />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-500">04 // GAMING PC</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                Gaming PC & Custom Rig Tuning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                GPU crash diagnosis, thermal throttling fix with high-grade paste, liquid cooling loop maintenance, PSU testing, and stability benchmarking.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link href="/services/gaming-pc-repair" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <span>View Gaming Rig Care</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 5: Free Pickup & Delivery (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-slate-50 border border-slate-200 p-8 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-all">
                <Truck size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                05 // FREE PICKUP & DELIVERY
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Free Doorstep Pickup Across Ahmedabad & Insured Ship-In
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Dedicated pickup executive collects your broken laptop, Mac, or phone directly from your home or office in South Bopal, Satellite, Vastrapur, Motera, or Tragad with anti-static padding and zero OTP privacy.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                <span>Book Free Doorstep Pickup</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
