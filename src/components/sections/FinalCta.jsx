'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section id="contact" className="relative bg-white dark:bg-slate-950 py-28 lg:py-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 sm:p-16 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-colors duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Copy */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/20 px-4 py-1.5 font-tech text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-widest">
                <Sparkles size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>INSTANT HARDWARE ESTIMATE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Ready to Get Your Hardware Fixed with Zero Data Risk?
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Connect directly with a senior Robuzta technician for an instant diagnostic estimate or doorstep pickup across Ahmedabad under full Zero-OTP data safety.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-700 dark:text-slate-300 font-extrabold font-tech">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#0E7C7B] dark:text-teal-400" /> Zero Password Required
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#0E7C7B] dark:text-teal-400" /> Doorstep Pickup Included
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#0E7C7B] dark:text-teal-400" /> 180-Day Warranty Included
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-4 items-center lg:items-end">
              <MagneticButton className="w-full sm:w-auto">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-8 py-4.5 text-base font-black shadow-xl shadow-[#0E7C7B]/25 hover:scale-[1.03] transition-all"
                >
                  <WhatsappIcon size={22} className="text-white shrink-0" />
                  <span className="text-white font-black">WhatsApp Estimate</span>
                </a>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-8 py-4.5 text-base font-black text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm hover:scale-[1.03] transition-all font-tech"
                >
                  <Phone size={20} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
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
