'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section id="contact" className="relative bg-white dark:bg-slate-950 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-colors duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Text Copy */}
            <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
              <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Get Your Device Fixed
              </h2>
            </div>

            {/* CTAs */}
            <div className="w-full lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 items-stretch lg:items-end">
              <MagneticButton className="w-full">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-black shadow-lg shadow-[#0E7C7B]/25 transition-all"
                >
                  <WhatsappIcon size={20} className="text-white shrink-0" />
                  <span className="text-white font-black">WhatsApp Estimate</span>
                </a>
              </MagneticButton>

              <MagneticButton className="w-full">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-black text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all font-tech"
                >
                  <Phone size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                  <span>Call Direct Hotline</span>
                </a>
              </MagneticButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
