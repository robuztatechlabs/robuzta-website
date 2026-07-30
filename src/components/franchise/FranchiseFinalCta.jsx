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
    <section className="relative bg-white py-12 border-b border-slate-200 overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50/70 border border-blue-200/80 p-6 sm:p-10 shadow-xl shadow-blue-500/5 space-y-6 text-center sm:text-left relative overflow-hidden">
          
          {/* Top Row: Eyebrow + Headline */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-100/80 border border-blue-200 px-3 py-1 rounded-full inline-block">
              ⚡ LIMITED TERRITORY AVAILABILITY
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Launch Your Robuzta Tech Lab?
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl">
              Territories are assigned on a first-come, first-served basis. Secure your city’s exclusive franchise today.
            </p>
          </div>

          {/* Key Bullet Points List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-slate-200/80 py-4 text-xs font-extrabold text-slate-800">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <CheckCircle2 size={16} className="text-[#EA580C] shrink-0" />
              <span>₹3L - ₹6L/mo Est. Profit</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
              <span>100% Turnkey ESD Workbench</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Google & Meta Lead Engine</span>
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            
            {/* Primary CTA */}
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] via-blue-600 to-blue-700 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Apply for Exclusive Territory</span>
              <ArrowRight size={16} />
            </button>

            {/* Secondary CTA */}
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#EA580C] px-6 py-3.5 text-xs sm:text-sm font-black text-slate-900 shadow-sm hover:shadow-md transition-all"
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
