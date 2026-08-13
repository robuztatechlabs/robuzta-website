'use client';

import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck } from 'lucide-react';
import { repairProcess } from '@/data/process';

const processIcons = [Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

const stepColors = [
  'from-[#0E7C7B] to-teal-700',
  'from-teal-700 to-teal-800',
  'from-slate-700 to-slate-800',
  'from-slate-800 to-[#0E7C7B]',
  'from-teal-800 to-teal-900',
  'from-[#0E7C7B] to-slate-800',
];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-slate-50 dark:bg-slate-900 py-10 sm:py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-24">
        
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

        {/* ── MOBILE: Vertical Timeline Infographic ── */}
        <div className="sm:hidden relative">
          {/* Central vertical spine */}
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0E7C7B] via-slate-300 dark:via-slate-700 to-emerald-500 rounded-full" />

          <div className="space-y-0">
            {repairProcess.map((step, index) => {
              const StepIcon = processIcons[index] || Wrench;
              const isLast = index === repairProcess.length - 1;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex items-start gap-4 pb-6"
                >
                  {/* Icon node on the spine */}
                  <div className={`relative z-10 shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stepColors[index]} text-white shadow-lg ring-4 ring-slate-50 dark:ring-slate-900`}>
                    <StepIcon size={22} />
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[9px] font-black shadow">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-sm mt-1">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug mt-0.5">
                      {step.text}
                    </p>
                  </div>

                  {/* Connector arrow between steps */}
                  {!isLast && (
                    <div className="absolute left-[34px] bottom-1.5 text-[#0E7C7B] dark:text-teal-400 text-xs font-black select-none">↓</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP / TABLET: Original 3-Column Card Grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {repairProcess.map((step, index) => {
            const StepIcon = processIcons[index] || Wrench;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-[#0E7C7B]/40 hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="font-tech text-3xl font-black text-[#0E7C7B] dark:text-teal-400">
                      0{index + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm shrink-0">
                      <StepIcon size={20} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight font-medium line-clamp-2">
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
