'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function FranchiseFinalCta() {
  const scrollToForm = () => {
    const el = document.getElementById('franchise-application-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white dark:bg-slate-950 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0E7C7B]/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl space-y-6 text-center sm:text-left relative overflow-hidden">
          
          {/* Top Row: Eyebrow + Headline */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3 py-1 rounded-full inline-block">
              ⚡ LIMITED TERRITORY AVAILABILITY
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Ready to Launch Your Robuzta Tech Lab?
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
              Territories are assigned on a first-come, first-served basis. Secure your city’s exclusive franchise today.
            </p>
          </div>

          {/* Key Bullet Points List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-slate-200 dark:border-slate-800 py-4 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 size={16} className="text-[#EA580C] shrink-0" />
              <span>₹3L - ₹6L/mo Est. Profit</span>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 size={16} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
              <span>100% Turnkey ESD Workbench</span>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Google & Meta Lead Engine</span>
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            
            {/* Primary CTA */}
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Apply for Exclusive Territory</span>
              <ArrowRight size={16} />
            </button>

            {/* Secondary CTA */}
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-[#EA580C] px-6 py-3.5 text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md transition-all"
            >
              <Phone size={16} className="text-[#EA580C]" />
              <span>Franchise Hotline (+91 999 245 2459)</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
