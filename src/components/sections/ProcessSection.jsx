'use client';

import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck, Award } from 'lucide-react';
import { repairProcess } from '@/data/process';

const processIcons = [Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-slate-50 dark:bg-slate-900 py-28 lg:py-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Engineered for Complete Customer Confidence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium"
          >
            No hidden charges, zero unapproved part replacements, and strict Zero-OTP privacy. You remain in control at every stage.
          </motion.p>
        </div>

        {/* 6-Step 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairProcess.map((step, index) => {
            const StepIcon = processIcons[index] || Wrench;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-9 flex flex-col justify-between hover:border-[#0E7C7B]/40 hover:shadow-2xl hover:shadow-[#0E7C7B]/10 hover:-translate-y-1.5 transition-all duration-300 space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="font-tech text-3xl font-black text-[#0E7C7B] dark:text-teal-400 group-hover:scale-110 transition-transform">
                      0{index + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm">
                      <StepIcon size={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#0E7C7B] dark:text-teal-400" /> Step 0{index + 1} Verified
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">STAGE 0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
