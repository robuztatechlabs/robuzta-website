'use client';

import { HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FaqPreview() {
  return (
    <section id="faq" className="relative bg-white dark:bg-slate-950 py-10 sm:py-14 lg:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4.5 xs:p-6 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 px-3.5 py-1.5 text-[10px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-widest">
              <HelpCircle size={14} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
              Have Questions About Our Repairs, Zero-OTP Policy & Warranty?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
              Find answers regarding doorstep pickup across Ahmedabad, logic board micro-soldering timelines, original spare parts, and 180-day warranty coverage in our complete FAQ center.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 sm:gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/faq"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-black shadow-lg shadow-[#0E7C7B]/20 hover:scale-[1.02] transition-all text-center"
            >
              <span>Explore Full FAQ Center</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-black shadow-md hover:scale-[1.02] transition-all text-center"
            >
              <WhatsappIcon size={16} className="text-white shrink-0" />
              <span>Ask Tech on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
