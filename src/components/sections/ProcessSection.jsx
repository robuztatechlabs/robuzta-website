'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { repairProcess } from '@/data/process';

const processIcons = [Search, FileText, Wrench, ShieldCheck, CheckCircle2];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-slate-50 py-24 border-b border-slate-200">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full">
            TRANSPARENT WORKBENCH ROADMAP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            A 5-Step Process Engineered for Complete Customer Confidence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No hidden charges, no unapproved part replacements, and zero password privacy risk. You remain in control at every stage.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {repairProcess.map((step, index) => {
            const StepIcon = processIcons[index] || Wrench;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600">
                      0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <StepIcon size={18} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                  Step 0{index + 1} Verified
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
