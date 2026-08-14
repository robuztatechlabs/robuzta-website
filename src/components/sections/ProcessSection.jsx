'use client';

import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck } from 'lucide-react';
import { repairProcess } from '@/data/process';

const processIcons = [Search, FileText, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

// Vibrant colors mapped along the gradient for each node
const nodeColors = [
  'bg-blue-500',
  'bg-teal-500',
  'bg-[#0E7C7B]',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-amber-500'
];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-slate-50 dark:bg-slate-900 pt-8 pb-10 sm:pt-13 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto -mt-2 sm:-mt-3 lg:-mt-4">
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

        {/* Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto pb-10">
          
          {/* Continuous Gradient Spine */}
          <div className="absolute left-10 sm:left-1/2 top-0 bottom-0 w-1 sm:w-1.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-[#0E7C7B] to-amber-500 rounded-full shadow-[0_0_15px_rgba(14,124,123,0.3)]" />

          <div className="space-y-12 sm:space-y-16 relative z-10">
            {repairProcess.map((step, index) => {
              const StepIcon = processIcons[index] || Wrench;
              const isEven = index % 2 === 0;
              const nodeBg = nodeColors[index] || 'bg-[#0E7C7B]';

              // Badges for alternating styling
              const phaseBadgeColors = isEven 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800';

              return (
                <div
                  key={step.title}
                  className={`relative flex items-center w-full ${
                    isEven ? 'justify-end sm:justify-start' : 'justify-end'
                  }`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-10 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full text-white shadow-lg ring-4 ring-slate-50 dark:ring-slate-900 z-20">
                    <div className={`flex items-center justify-center w-full h-full rounded-full ${nodeBg} shadow-inner`}>
                      <StepIcon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-1/2 pl-20 sm:pl-0 ${
                    isEven ? 'sm:pr-10 lg:pr-16' : 'sm:pl-10 lg:pl-16'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-[#0E7C7B]/40"
                    >
                      {/* Connection Line (Desktop) */}
                      <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-10 lg:w-16 h-[2px] bg-slate-200 dark:bg-slate-800 ${
                        isEven ? '-right-10 lg:-right-16' : '-left-10 lg:-left-16'
                      }`} />

                      {/* Connection Line (Mobile) */}
                      <div className="sm:hidden absolute top-1/2 -translate-y-1/2 -left-10 w-10 h-[2px] bg-slate-200 dark:bg-slate-800" />

                      <div className="space-y-4 sm:space-y-5">
                        {/* Top row: Step Number & Badge */}
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                          <span className="font-tech text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-200">
                            Step 0{index + 1}
                          </span>
                          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm ${phaseBadgeColors}`}>
                            Phase {index + 1}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
