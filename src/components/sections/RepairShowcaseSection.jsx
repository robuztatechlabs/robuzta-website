'use client';

import { motion } from 'framer-motion';
import { DiagnosticEstimator } from '@/components/ui/DiagnosticEstimator';
import { ShieldCheck, Sparkles, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export function RepairShowcaseSection() {
  return (
    <section id="hardware-lab" className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-10 sm:py-16 lg:py-20 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Ambient Lighting Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0E7C7B]/10 via-blue-500/10 to-teal-400/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 lg:space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight"
          >
            Instant Price Estimator
          </motion.h2>
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

      </div>
    </section>
  );
}
