'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FranchiseHomeSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0E7C7B]/10 rounded-full blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 md:p-14 shadow-2xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center sm:text-left">

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
              >
                Partner with India’s Premier <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7C7B] via-teal-500 to-[#EA580C]">
                  Precision Hardware Repair Brand
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium leading-relaxed"
              >
                Own a high-profit chip-level repair lab in your city. Get turnkey ISO-compliant ESD workbench setups, 55%–70% gross profit margins, and centralized Google & Meta lead generation.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/franchise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 transition-all"
                >
                  <span>Explore Franchise Models</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-xs sm:text-sm font-black text-white shadow-md transition-all"
                >
                  <WhatsappIcon size={18} className="text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

            {/* Right Visual Card Column (100% Theme-Adaptive) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white p-8 space-y-6 shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                
                <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-[#0E7C7B]/10 rounded-full blur-[60px]" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-2 text-[#0E7C7B] dark:text-teal-400 text-xs font-mono font-bold uppercase tracking-widest">
                    <Building size={16} />
                    <span>TURNKEY LAB SETUP</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Complete Diagnostic & Repair Ecosystem Provided
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    We handle retail 3D store blueprints, BGA soldering equipment, technician hiring, CRM software, and initial parts inventory sourcing.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
