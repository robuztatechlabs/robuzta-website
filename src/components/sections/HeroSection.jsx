'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Phone,
  Calendar,
  Laptop,
  Smartphone,
  Tablet,
  Database,
  Droplets,
  HardDrive,
  Sparkles,
  Lock,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

const whatWeFixServices = [
  {
    title: 'Laptop & MacBook',
    icon: Laptop,
    href: '/services/laptop-repair',
    color: 'from-purple-500/25 to-indigo-500/25 text-purple-400 border-purple-500/40'
  },
  {
    title: 'iPhone & Android',
    icon: Smartphone,
    href: '/services/mobile-repair',
    color: 'from-emerald-500/25 to-teal-500/25 text-emerald-400 border-emerald-500/40'
  },
  {
    title: 'iPad & Tablet',
    icon: Tablet,
    href: '/services/laptop-repair',
    color: 'from-blue-500/25 to-cyan-500/25 text-blue-400 border-blue-500/40'
  },
  {
    title: 'Data Recovery',
    icon: Database,
    href: '/services/laptop-repair',
    color: 'from-amber-500/25 to-orange-500/25 text-amber-400 border-amber-500/40'
  },
  {
    title: 'Liquid Damage',
    icon: Droplets,
    href: '/services/laptop-repair',
    color: 'from-sky-500/25 to-blue-500/25 text-sky-400 border-sky-500/40'
  },
  {
    title: 'RAM & SSD Upgrade',
    icon: HardDrive,
    href: '/services/laptop-repair',
    color: 'from-teal-500/25 to-emerald-500/25 text-teal-400 border-teal-500/40'
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#0E7C7B]/15 dark:bg-[#0E7C7B]/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b80_1px,transparent_1px),linear-gradient(to_bottom,#1e293b80_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy & Actions (INSTANT ZERO-DELAY RENDER) */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Location & Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="uppercase tracking-widest">
                OPEN &bull; SOUTH BOPAL, AHMEDABAD
              </span>
            </div>

            {/* Main Headline (Instant Paint - No Opacity 0 Delay) */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Expert Repair for{' '}
              <span className="block mt-1 bg-gradient-to-r from-[#0E7C7B] via-teal-500 via-sky-400 to-purple-500 bg-clip-text text-transparent">
                Laptops, Mobiles & iPads
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Ahmedabad's <strong className="text-slate-900 dark:text-white">certified component-level repair lab</strong> — trusted for liquid damage recovery, screen replacement & logic board fixes.
            </p>

            {/* 4 Micro Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full hover:border-[#0E7C7B] transition-colors">
                <ShieldCheck size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>No Fix, No Fee</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full hover:border-amber-500 transition-colors">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span>4.9★ Rated</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full hover:border-sky-500 transition-colors">
                <Lock size={14} className="text-sky-500" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full hover:border-purple-500 transition-colors">
                <Clock size={14} className="text-purple-500" />
                <span>Same-Day Turnaround</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-sm font-black shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.03] transition-all"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-4 text-sm font-black text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                <Phone size={18} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Animated "WHAT WE FIX" Side Console Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Top Floating Badge: NO FIX NO FEE */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full bg-slate-900 border border-amber-500/50 px-4 py-1.5 text-xs font-black text-amber-400 shadow-xl shadow-amber-500/10">
              <Zap size={14} className="text-amber-400 animate-bounce" />
              <span>ROBUZTA LAB CAPABILITIES</span>
            </div>

            {/* Console Frame */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6 pt-9">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                    WHAT WE REPAIR & RESTORE
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Select Your Hardware Category
                  </h3>
                </div>
                <span className="flex h-3 w-3 rounded-full bg-teal-400 animate-ping" />
              </div>

              {/* 6 Services Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {whatWeFixServices.map((srv) => {
                  const IconComp = srv.icon;
                  return (
                    <Link
                      key={srv.title}
                      href={srv.href}
                      className="group relative rounded-2xl bg-slate-800/80 hover:bg-slate-800 p-4 border border-slate-700/80 hover:border-[#0E7C7B] transition-all flex flex-col justify-between space-y-3 shadow-md hover:scale-[1.03]"
                    >
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${srv.color} flex items-center justify-center border shadow-inner`}>
                        <IconComp size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-black text-white block leading-tight group-hover:text-teal-300 transition-colors">
                          {srv.title}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 pt-1 group-hover:text-white transition-colors">
                          <span>Diagnose</span>
                          <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Customer Trust Bar */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="flex items-center -space-x-2 shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      J
                    </div>
                    <div className="h-8 w-8 rounded-full bg-emerald-600 text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      M
                    </div>
                    <div className="h-8 w-8 rounded-full bg-amber-600 text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      A
                    </div>
                  </div>

                  <div className="min-w-0 text-left">
                    <span className="text-xs sm:text-sm font-black text-white block truncate leading-tight">
                      5,000+ Happy Customers
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 pt-0.5">
                      <span className="tracking-widest">★★★★★</span>
                      <span className="text-slate-300 font-bold text-[11px]">4.9 Rating</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E7C7B] text-white hover:bg-teal-500 transition-colors shadow-md shrink-0"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
