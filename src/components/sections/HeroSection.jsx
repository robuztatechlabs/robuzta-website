'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const liveOperations = [
  'ISO-Certified ESD Hardware Lab',
  'Zero-OTP & Zero-Passcode Data Safety',
  'Same-Day Screen & Battery Swap',
  'Logic Board Micro-Soldering Specialist'
];
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
    title: 'Laptop Repair',
    icon: Laptop,
    href: '/services/laptop-repair',
    color: 'from-purple-500/25 to-indigo-500/25 text-purple-400 border-purple-500/40'
  },
  {
    title: 'Mobile Repair',
    icon: Smartphone,
    href: '/services/mobile-repair',
    color: 'from-emerald-500/25 to-teal-500/25 text-emerald-400 border-emerald-500/40'
  },
  {
    title: 'MacBook Repair',
    icon: Tablet,
    href: '/services/macbook-repair',
    color: 'from-blue-500/25 to-cyan-500/25 text-blue-400 border-blue-500/40'
  },
  {
    title: 'Gaming PC & Surface',
    icon: HardDrive,
    href: '/services/gaming-pc-repair',
    color: 'from-amber-500/25 to-orange-500/25 text-amber-400 border-amber-500/40'
  }
];

export function HeroSection() {
  const { openModal } = useBookingModal();
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const [opIndex, setOpIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpIndex((prev) => (prev + 1) % liveOperations.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
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
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E7C7B] dark:via-teal-400 to-transparent shadow-[0_0_15px_#0E7C7B]"
        />

        {/* Staggered Vertical Light Beams Traveling Top-to-Bottom */}
        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 5,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-8 lg:space-y-10 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Precision Repair for{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#0E7C7B] via-teal-600 dark:via-teal-400 to-slate-900 dark:to-teal-200 bg-clip-text text-transparent">
                Laptops & Mobiles
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide leading-relaxed px-1">
              ISO-certified hardware lab • Zero-OTP data safety • Free doorstep pickup
            </p>

            {/* Action Buttons: Call, WhatsApp & Book */}
            <div
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full"
            >
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-black shadow-lg shadow-emerald-600/25 transition-all"
              >
                <span>WhatsApp Estimate</span>
              </a>

              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-black shadow-lg shadow-[#0E7C7B]/25 transition-all font-tech"
              >
                <Phone size={16} />
                <span>Call +91 999 998 8885</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                <Calendar size={16} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>Book Visit</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive Animated "WHAT WE FIX" Side Console Card (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6 relative">
            

            {/* Console Frame */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl p-4 sm:p-7 shadow-2xl space-y-4 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm sm:text-base font-black text-white">
                  Select Category
                </h3>
                <button
                  type="button"
                  onClick={() => setIsLiveModalOpen(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 hover:text-white transition-colors text-[10px] sm:text-xs font-bold cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span>LIVE REPAIR</span>
                </button>
              </div>

              {/* 4 Clean Categories Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {whatWeFixServices.map((srv) => {
                  const IconComp = srv.icon;
                  return (
                    <Link
                      key={srv.title}
                      href={srv.href}
                      className="group relative rounded-2xl bg-slate-800/80 hover:bg-slate-800 p-3.5 sm:p-4 border border-slate-700/80 hover:border-[#0E7C7B] transition-all flex items-center gap-3 shadow-md hover:scale-[1.02]"
                    >
                      <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${srv.color} flex items-center justify-center border shrink-0`}>
                        <IconComp size={18} />
                      </div>
                      <span className="text-xs font-black text-white leading-tight group-hover:text-teal-300 transition-colors">
                        {srv.title}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Clean Minimal Rating Bar */}
              <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="font-extrabold text-white text-[11px] sm:text-xs">
                  5,000+ Repairs • 4.9★ Google Rating
                </span>
                <Link
                  href="/contact"
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E7C7B] text-white hover:bg-teal-500 transition-colors shrink-0"
                  aria-label="Contact Robuzta"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
