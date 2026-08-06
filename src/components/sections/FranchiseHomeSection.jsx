'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building, CheckCircle2, TrendingUp, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FranchiseHomeSection() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-10 sm:py-14 lg:py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-14 md:p-16 shadow-xl space-y-12 transition-colors duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center sm:text-left">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-widest">
                <Building size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>FRANCHISE OPPORTUNITY</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
              >
                Partner with India’s Premier Hardware Repair Lab
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl"
              >
                Launch a high-margin chip-level repair lab in your city with complete turnkey setup, ESD workbenches, CRM software, and automated lead generation.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2">
                <Link
                  href="/franchise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-8 py-4.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.03] transition-all"
                >
                  <span>Explore Franchise Models</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-7 py-4.5 text-xs sm:text-sm font-black text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all font-tech"
                >
                  <WhatsappIcon size={18} className="shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

            {/* Right Metric Highlights Grid (Clean, Spacious Stats) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 flex items-start gap-4 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">55% – 70% Gross Profit Margins</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">High margin chip-level micro-soldering & screen repair business.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 flex items-start gap-4 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">Turnkey ISO Workbenches</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">3D store blueprints, BGA equipment, and parts supply chain included.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 flex items-start gap-4 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">Centralized Lead Generation</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Direct customer inquiry flow powered by central digital marketing.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
