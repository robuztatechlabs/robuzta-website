'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Quote, ArrowRight, X } from 'lucide-react';

export function FranchiseStickyPill() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3.5 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/90 p-3 px-4 text-slate-900 dark:text-slate-100 shadow-2xl shadow-slate-900/10 transition-all duration-300 hover:shadow-blue-500/15 hover:scale-[1.02] group">
      
      {/* Text Content */}
      <div className="space-y-0.5 text-xs max-w-xs">
        <div className="flex items-center gap-1.5 font-black text-slate-900 dark:text-slate-100">
          <span>🚀 Build With Robuzta</span>
          <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 font-extrabold px-1.5 py-0.2 rounded-md uppercase">
            FRANCHISE
          </span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium italic leading-tight">
          &ldquo;Building India&rsquo;s most trusted hardware repair lab network.&rdquo;
        </p>
      </div>

      {/* Action Button */}
      <Link
        href="/franchise"
        className="ml-1 flex items-center gap-1.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 px-3.5 py-2 text-[11px] font-black text-white shadow-md transition-all shrink-0"
      >
        <span>Partner With Us</span>
        <ArrowRight size={13} />
      </Link>

      {/* Close Trigger */}
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="ml-0.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        aria-label="Dismiss badge"
      >
        <X size={14} />
      </button>

    </div>
  );
}
