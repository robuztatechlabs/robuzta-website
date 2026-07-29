'use client';

import { motion } from 'framer-motion';
import { DiagnosticEstimator } from '@/components/ui/DiagnosticEstimator';
import { Wrench, ShieldCheck, Cpu, Laptop, Flame, Smartphone } from 'lucide-react';

export function RepairShowcaseSection() {
  return (
    <section id="hardware-lab" className="relative bg-slate-50 py-24 border-b border-slate-200">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full">
            MULTI-DEVICE HARDWARE LAB DIVISION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Precision Laptop, Mac & Device Diagnostics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From micro-soldering BGA chips to thermal cooling repasting, experience transparent hardware repairs with real-time price estimation below.
          </p>
        </div>

        {/* Embedded Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DiagnosticEstimator />
        </motion.div>

      </div>
    </section>
  );
}
