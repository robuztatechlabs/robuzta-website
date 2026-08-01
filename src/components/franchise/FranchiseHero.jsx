'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Sparkles, ArrowRight, Award, ChevronRight, CheckCircle2, Download } from 'lucide-react';
import Link from 'next/link';

export function FranchiseHero() {
  const scrollToForm = () => {
    const el = document.getElementById('franchise-application-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Lighting Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#0E7C7B]/10 via-teal-500/5 to-transparent rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Eyebrow Tag */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-2 text-xs font-black text-[#0E7C7B] dark:text-teal-300 shadow-sm"
          >
            <Sparkles size={14} className="text-[#EA580C]" />
            <span>ROBUZTA ENTERPRISE NETWORK &bull; GUJARAT & PAN-INDIA EXPANSION</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            Build a Multi-Crore <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7C7B] via-teal-500 to-[#EA580C]">
              Precision Tech Hardware Enterprise
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Partner with India’s most trusted, technology-enabled repair lab brand. High-margin unit economics, ESD-isolated workbench setups, and 100% turnkey operational & lead support.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Apply for Franchise</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#franchise-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-7 py-4 text-sm font-extrabold text-slate-800 dark:text-slate-200 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Download size={18} className="text-[#EA580C]" />
              <span>Explore ROI & Financials</span>
            </a>
          </motion.div>
        </div>

        {/* Live Metrics Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="p-4 space-y-1 border-r border-slate-100 dark:border-slate-800 last:border-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#0E7C7B] dark:text-teal-400">₹3L - ₹6L</span>
            </div>
            <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Est. Monthly Profit Margin
            </div>
          </div>

          <div className="p-4 space-y-1 border-r border-slate-100 dark:border-slate-800 last:border-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#EA580C]">10 - 14 Mo</span>
            </div>
            <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Target ROI Break-Even
            </div>
          </div>

          <div className="p-4 space-y-1 border-r border-slate-100 dark:border-slate-800 last:border-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#0E7C7B] dark:text-teal-400">100% Turnkey</span>
            </div>
            <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              ESD Lab Setup & Staff Hiring
            </div>
          </div>

          <div className="p-4 space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1">
              <span className="text-emerald-600 dark:text-emerald-400">Zero OTP</span>
            </div>
            <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Privacy Standard Guarantee
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
