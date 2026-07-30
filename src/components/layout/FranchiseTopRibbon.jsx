'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export function FranchiseTopRibbon() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-slate-950 via-[#0F172A] to-slate-950 text-white border-b border-amber-500/30 py-2.5 px-4 overflow-hidden shadow-md">
      
      {/* Background Subtle Shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        {/* Left Message & Value Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs font-bold">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
            <Sparkles size={13} className="text-amber-400 animate-spin-slow" />
            Franchise Opportunity
          </span>

          <span className="text-slate-200 font-extrabold">
            Partner with Robuzta Techlabs & Own a High-ROI Hardware Lab in Your City!
          </span>

          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
            <TrendingUp size={12} className="text-amber-400" /> ₹3L+ Est. Monthly Profit
          </span>

          <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
            <ShieldCheck size={12} className="text-emerald-400" /> 100% Workbench & Tech Setup Included
          </span>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/franchise"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-3.5 py-1.5 text-xs font-black text-slate-950 shadow-md shadow-amber-500/20 hover:scale-105 hover:from-amber-300 hover:to-amber-500 transition-all cursor-pointer"
          >
            <span>Explore Franchise Models</span>
            <ArrowRight size={13} className="text-slate-950" />
          </Link>
        </div>

      </div>
    </div>
  );
}
