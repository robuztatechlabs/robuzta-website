'use client';

import { siteConfig } from '@/data/site';
import { Phone, Wrench } from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between gap-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700 dark:border-slate-800 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      aria-label="Mobile quick action bar"
    >
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 px-3 py-2.5 text-xs font-black text-white shadow-sm transition-all"
      >
        <Phone size={16} className="text-white shrink-0" />
        <span>Call Now</span>
      </a>

      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-2.5 text-xs font-black text-white shadow-sm transition-all"
      >
        <WhatsappIcon size={18} className="text-white shrink-0" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#0E7C7B] hover:bg-teal-700 px-3 py-2.5 text-xs font-black text-white shadow-sm transition-all"
      >
        <Wrench size={16} className="text-white shrink-0" />
        <span>Book Pickup</span>
      </Link>
    </div>
  );
}
