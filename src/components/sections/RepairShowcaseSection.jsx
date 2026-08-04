'use client';

import { motion } from 'framer-motion';
import { DiagnosticEstimator } from '@/components/ui/DiagnosticEstimator';
import { ShieldCheck, Sparkles, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export function RepairShowcaseSection() {
  return (
    <section id="hardware-lab" className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Ambient Lighting Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0E7C7B]/10 via-blue-500/10 to-teal-400/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight"
          >
            High-Precision Laptop, Mac & Device Diagnostics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Experience 100% transparent hardware diagnostics. Select your device and fault below for an instant quote with doorstep pickup across Ahmedabad.
          </motion.p>
        </div>

        {/* Embedded High-End Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <DiagnosticEstimator />
        </motion.div>

        {/* Quick Lab Guarantee Trust Bar */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <ShieldCheck size={18} className="text-[#0E7C7B] shrink-0" />
            <span>Zero Password / OTP Data Protection</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            <span>Serial-Verified Original Parts</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <Clock size={18} className="text-blue-600 shrink-0" />
            <span>2 to 4h Turnaround on Common Swaps</span>
          </div>
        </div>

      </div>
    </section>
  );
}
