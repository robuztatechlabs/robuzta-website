'use client';

import { motion } from 'framer-motion';
import { Lock, Clock, ShieldCheck, Eye, Truck, CheckCircle2, ArrowRight, Award } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'Zero-OTP Privacy',
    description: 'No device passwords or OTPs required'
  },
  {
    icon: Clock,
    title: '2–4h Turnaround',
    description: 'Same-day express repair & delivery'
  },
  {
    icon: ShieldCheck,
    title: 'Original Spare Parts',
    description: 'Serial-logged genuine parts with warranty'
  },
  {
    icon: Eye,
    title: 'Live Workbench View',
    description: 'Transparent live hardware diagnostics'
  },
  {
    icon: Truck,
    title: 'Doorstep Pickup',
    description: 'Free pickup & drop across Ahmedabad'
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-10 sm:py-16 lg:py-20 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 lg:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight"
          >
            Transparent & Secure
          </motion.h2>
        </div>

        {/* Feature 2-Column Mobile App Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group rounded-2xl sm:rounded-3xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3.5 sm:p-6 flex flex-col justify-between hover:border-[#0E7C7B]/40 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B] text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                    <Icon size={18} className="sm:w-[18px] sm:h-[18px]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-tight line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="col-span-2 lg:col-span-1 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0E7C7B] to-[#0F172A] text-white p-4 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-4 shadow-xl"
          >
            <div className="space-y-1">
              <h3 className="text-sm xs:text-base sm:text-lg font-black text-white leading-snug">Need Technical Advice?</h3>
              <p className="text-xs sm:text-sm text-teal-100 font-medium leading-tight">
                Speak directly with a senior hardware technician.
              </p>
            </div>
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-black shadow-md hover:bg-slate-100 transition-all text-center"
              style={{ backgroundColor: '#ffffff', color: '#0F172A' }}
            >
              <span style={{ color: '#0F172A', fontWeight: 900 }}>Talk to Technician</span>
              <ArrowRight size={14} style={{ color: '#0E7C7B' }} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
