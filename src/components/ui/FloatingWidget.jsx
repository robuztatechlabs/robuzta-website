'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Phone, Wrench, X } from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FloatingWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-20 lg:bottom-24 right-6 z-30 flex flex-col items-end" aria-label="Quick contact widget">
      {expanded && (
        <div className="mb-3 w-80 rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-5 text-white shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <strong className="text-xs font-black text-white uppercase tracking-wider">Robuzta Live Lab Support</strong>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close widget menu"
            >
              <X size={15} />
            </button>
          </div>

          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            Talk directly to senior repair engineers in South Bopal & Tragad.
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-extrabold text-white shadow-md transition-all"
            >
              <WhatsappIcon size={18} className="text-white" />
              <span>WhatsApp Live Chat</span>
            </a>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 py-3 text-xs font-extrabold text-white transition-all"
            >
              <Phone size={15} className="text-[#EA580C]" />
              <span>Call Hotline (+91 999 245 2459)</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setExpanded(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0E7C7B] hover:bg-teal-700 py-3 text-xs font-extrabold text-white transition-all"
            >
              <Wrench size={15} />
              <span>Book Doorstep Pickup</span>
            </Link>
          </div>

        </div>
      )}

      {/* Floating Action Trigger Circle */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-all cursor-pointer border-2 border-white"
        aria-label="Toggle live help widget"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping" />
        {expanded ? <X size={24} className="relative z-10" /> : <WhatsappIcon size={28} className="relative z-10 text-white" />}
      </button>
    </div>
  );
}
