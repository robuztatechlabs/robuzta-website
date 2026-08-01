'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Inquiry & Screening',
    description: 'Submit your franchise application. Our team reviews your background, city location preference, and financial capability within 24 hours.'
  },
  {
    step: '02',
    title: 'Executive Meeting',
    description: '1-on-1 discovery meeting with Robuzta founders. Review store unit economics, ROI projection sheets, and diagnostic lab equipment options.'
  },
  {
    step: '03',
    title: 'Territory Verification',
    description: 'Our GIS demographics team analyzes footfall, IT density, and competitor gap analysis to approve your exclusive city territory zone.'
  },
  {
    step: '04',
    title: 'Partnership Agreement',
    description: 'Sign the official Robuzta Techlabs Franchise Agreement and lock exclusive territory rights for your target city area.'
  },
  {
    step: '05',
    title: 'Workbench & Lab Setup',
    description: 'Turnkey interior execution: ISO 27001 ESD anti-static bench setup, BGA micro-soldering station, and digital microscopes installed.'
  },
  {
    step: '06',
    title: 'Technician Masterclass',
    description: '30-day intensive hardware training masterclass covering Apple logic board soldering, OLED screen refurbishment, and store SOPs.'
  },
  {
    step: '07',
    title: 'Grand Launch & Scale',
    description: 'Marketing campaign blast, live video workbench launch, doorstep pickup activation, and multi-store expansion scaling.'
  }
];

export function FranchiseProcessTimeline() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 rounded-full inline-block"
          >
            TRANSPARENT 7-STAGE ONBOARDING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            From Application to Launching Your Lab
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            Our streamlined onboarding roadmap ensures your store is fully equipped, trained, and generating repair revenue within 4 to 6 weeks.
          </motion.p>
        </div>

        {/* Process Cards Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-[#0E7C7B] hover:shadow-2xl transition-all duration-300 space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="font-mono text-3xl font-black text-[#0E7C7B] dark:text-teal-400">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    STAGE {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-extrabold text-[#0E7C7B] dark:text-teal-400">
                <CheckCircle2 size={14} className="text-[#0E7C7B] dark:text-teal-400" /> Verified Step
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
