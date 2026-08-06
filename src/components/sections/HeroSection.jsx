'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Zap,
  Tv,
  Video,
  X,
  ExternalLink,
  Play
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
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Soft Ambient Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/70 via-teal-50/20 to-white dark:from-[#070E1A] dark:via-[#0a1626] dark:to-[#070E1A]" />

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 rounded-full blur-3xl will-change-transform" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl will-change-transform" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b80_1px,transparent_1px),linear-gradient(to_bottom,#1e293b80_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"
      />

      {/* Futuristic Top-to-Bottom Glowing Laser Light Scan Beam */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal Ambient Glow Wave */}
        <motion.div
          initial={{ top: '-10%', opacity: 0 }}
          animate={{
            top: ['-10%', '110%'],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0E7C7B]/20 dark:via-[#0E7C7B]/30 to-transparent blur-xl"
        />

        {/* Crisp Laser Beam Line */}
        <motion.div
          initial={{ top: '-10%' }}
          animate={{
            top: ['-10%', '110%']
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E7C7B] via-teal-400 to-transparent shadow-[0_0_15px_#0E7C7B]"
        />

        {/* Staggered Vertical Light Beams Traveling Top-to-Bottom */}
        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: 'easeInOut'
          }}
          className="absolute left-[18%] w-[2px] h-40 bg-gradient-to-b from-transparent via-[#0E7C7B] to-transparent shadow-[0_0_12px_#0E7C7B]"
        />

        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut'
          }}
          className="absolute left-[52%] w-[2px] h-48 bg-gradient-to-b from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf]"
        />

        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 3.5,
            ease: 'easeInOut'
          }}
          className="absolute left-[82%] w-[2px] h-44 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-7 lg:space-y-8 text-center lg:text-left">
            
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-3 w-full"
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
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 pt-7 sm:pt-9 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                    WHAT WE REPAIR & RESTORE
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Select Your Hardware Category
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLiveModalOpen(true)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 hover:text-white hover:bg-red-900/80 transition-colors text-xs font-bold font-mono cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span>LIVE REPAIR</span>
                </button>
              </div>

              {/* 6 Services Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {whatWeFixServices.map((srv) => {
                  const IconComp = srv.icon;
                  return (
                    <Link
                      key={srv.title}
                      href={srv.href}
                      className="group relative rounded-2xl bg-slate-800/80 hover:bg-slate-800 p-3 sm:p-4 border border-slate-700/80 hover:border-[#0E7C7B] transition-all flex flex-col justify-between space-y-2.5 sm:space-y-3 shadow-md hover:scale-[1.03]"
                    >
                      <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br ${srv.color} flex items-center justify-center border shadow-inner shrink-0`}>
                        <IconComp size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-black text-white block leading-tight group-hover:text-teal-300 transition-colors">
                          {srv.title}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 flex items-center gap-1 pt-1 group-hover:text-white transition-colors">
                          <span>Diagnose</span>
                          <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Customer Trust Bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-slate-300 overflow-hidden">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="flex items-center -space-x-2 shrink-0">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-indigo-600 text-[10px] sm:text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      J
                    </div>
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-600 text-[10px] sm:text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      M
                    </div>
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-amber-600 text-[10px] sm:text-xs font-black text-white flex items-center justify-center border-2 border-slate-900 shadow-md shrink-0">
                      A
                    </div>
                  </div>

                  <div className="min-w-0 text-left">
                    <span className="text-[11px] sm:text-sm font-black text-white block truncate leading-tight">
                      5,000+ Happy Customers
                    </span>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-400 pt-0.5 truncate">
                      <span className="tracking-tighter sm:tracking-widest">★★★★★</span>
                      <span className="text-slate-300 font-bold text-[10px] sm:text-[11px] truncate">4.9 Rating</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#0E7C7B] text-white hover:bg-teal-500 transition-colors shadow-md shrink-0"
                  aria-label="Contact Robuzta"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
