'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Terminal, Activity, Zap, CheckCircle2, MessageCircle, Wrench, Laptop } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Soft Ambient Radial Lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-blue-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
      
      {/* Soft Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-xs sm:text-sm font-bold text-slate-800 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600 font-extrabold uppercase tracking-wider">
                AHMEDABAD PREMIER MULTI-DEVICE REPAIR LAB
              </span>
              <Sparkles size={14} className="text-orange-500" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
            >
              Precision Hardware Repair.{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-600 bg-clip-text text-transparent">
                Total Workbench Transparency.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Robuzta provides specialized chip-level repair for Laptops, MacBooks, Smartphones, Surface devices, Gaming PCs, and Desktops under strict Zero-OTP privacy and 180-day warranty promises.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] transition-all"
                >
                  <span>Book Free Diagnosis</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-white border border-slate-200 px-6 py-4 text-base font-bold text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/50 hover:border-emerald-200 shadow-sm transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-600" />
                  <span>Instant WhatsApp Quote</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-slate-600"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-blue-600" />
                Zero Password / Zero OTP Protocol
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange-600" />
                180-Day Official Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={16} className="text-emerald-600" />
                Same-Day Free Doorstep Pickup
              </span>
            </motion.div>

          </div>

          {/* Right Column: Premium Light Glass Diagnostic Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-2xl p-6 shadow-2xl shadow-slate-200/80 space-y-6">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-xs font-medium text-slate-500">robuzta-lab-station.v4</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Activity size={12} className="animate-pulse" />
                  WORKBENCH LIVE
                </div>
              </div>

              {/* Active Inspection Console Stream */}
              <div className="rounded-2xl bg-slate-900 p-4 font-mono text-xs text-slate-100 space-y-2 border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <Terminal size={14} />
                  <span>$ robuzta-diag --target macbook-logicboard</span>
                </div>
                <div className="text-slate-300 font-mono text-[11px] space-y-1">
                  <p className="text-emerald-400">✓ Security Audit: Zero-OTP Sandbox Active</p>
                  <p className="text-slate-300">✓ FLIR Thermal Scan: Capacitor Short Identified</p>
                  <p className="text-blue-300">✓ Micro-Soldering BGA Rework: Complete</p>
                  <p className="text-orange-400">⚡ ESD ESD-Safe Station: Tested & Passed</p>
                </div>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Devices Restored</div>
                  <div className="text-2xl font-black text-slate-900">
                    <AnimatedCounter value="15000" suffix="+" />
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold">Laptops, Macs & Mobiles</div>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-1">
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Satisfaction Rate</div>
                  <div className="text-2xl font-black text-slate-900">
                    <AnimatedCounter value="99.8" suffix="%" />
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold">Same-Day Turnaround</div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/80 p-4 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Password Protocol</h4>
                  <p className="text-xs text-slate-600">Hardware & screen diagnostics handled without asking for your private credentials or OTPs.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
