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
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useBookingModal } from '@/context/BookingModalContext';

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
  const { openModal } = useBookingModal();
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-14 pb-24 lg:pt-20 lg:pb-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Ambient Glows (GPU Accelerated for Zero LCP Delay) */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0E7C7B]/15 dark:bg-[#0E7C7B]/20 rounded-full blur-3xl will-change-transform" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl will-change-transform" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b80_1px,transparent_1px),linear-gradient(to_bottom,#1e293b80_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-8 lg:space-y-10 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Precision Repair for{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#0E7C7B] via-teal-600 dark:via-teal-400 to-slate-900 dark:to-teal-200 bg-clip-text text-transparent">
                Laptops, Mobiles & iPads
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Component-level hardware repair & logic board diagnostics with zero OTP data safety.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-4 w-full"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-8 py-4 text-sm font-black shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.03] transition-all"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-7 py-4 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all font-tech"
              >
                <Phone size={18} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>+91 999 998 8885</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Animated "WHAT WE FIX" Side Console Card */}
          <div className="lg:col-span-6 relative">
            

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
