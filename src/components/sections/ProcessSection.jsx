'use client';

import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck, Award } from 'lucide-react';
import { repairProcess } from '@/data/process';

const processIcons = [Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 lg:py-32 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Simple 6-Step Process
          </motion.h2>
        </div>

        {/* 6-Step 2-Column Mobile App Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {repairProcess.map((step, index) => {
            const StepIcon = processIcons[index] || Wrench;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 flex flex-col justify-between hover:border-[#0E7C7B]/40 hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 sm:pb-3">
                    <span className="font-tech text-lg sm:text-3xl font-black text-[#0E7C7B] dark:text-teal-400">
                      0{index + 1}
                    </span>
                    <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm shrink-0">
                      <StepIcon size={16} className="sm:w-[20px] sm:h-[20px]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xs xs:text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
