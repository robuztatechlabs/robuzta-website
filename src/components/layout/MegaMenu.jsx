'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import {
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench
};

export function MegaMenu({ onClose }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-[480px] rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 dark:border-slate-800 p-5 shadow-2xl z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      role="menu"
    >
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
        <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Precision Hardware Services
        </span>
        <span className="text-[10px] font-bold text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 dark:bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-[#0E7C7B]/20 dark:border-teal-400/20">
          Zero-OTP Protected
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {services.map((srv) => {
          const IconComponent = serviceIcons[srv.slug] || Wrench;
          return (
            <Link
              key={srv.slug}
              href={`/services/${srv.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/60 hover:bg-[#0E7C7B]/10 dark:hover:bg-teal-400/10 border border-slate-100 dark:border-slate-800 hover:border-[#0E7C7B]/30 dark:hover:border-teal-400/30 transition-all group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-950 dark:bg-slate-800 text-[#0E7C7B] dark:text-teal-400 border border-slate-200 dark:border-slate-700 group-hover:bg-[#0E7C7B] dark:group-hover:bg-teal-500 group-hover:text-white dark:group-hover:text-white group-hover:border-[#0E7C7B] dark:group-hover:border-teal-500 transition-all shadow-sm">
                <IconComponent size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors block">
                  {srv.title}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                  {srv.summary}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
          Transparent Workbench Diagnosis
        </span>
        <Link
          href="/services"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-400 hover:text-[#0a5c5b] dark:hover:text-teal-300 transition-colors"
        >
          <span>View All Services Page</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
