'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section id="contact" className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Lighting Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0E7C7B]/10 to-blue-500/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#0E7C7B] to-[#0F172A] text-white p-8 sm:p-14 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Copy */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-extrabold text-teal-100 uppercase tracking-widest">
                <Sparkles size={14} />
                INSTANT HARDWARE DIAGNOSTIC ESTIMATE
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold !text-white text-white drop-shadow-sm tracking-tight leading-tight">
                Ready to Get Your Hardware Fixed with Zero Data Risk?
              </h2>

              <p className="text-teal-50 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Connect directly with a senior Robuzta technician now for an instant diagnostic estimate or free doorstep pickup across Ahmedabad under full Zero-OTP data safety.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white font-extrabold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-amber-300" /> Zero Password Required
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-300" /> Free Doorstep Pickup
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-teal-200" /> 180-Day Warranty Included
                </span>
              </div>
            </div>

            {/* CTAs with Official WhatsappIcon */}
            <div className="lg:col-span-4 flex flex-col gap-4 items-center lg:items-end">
              <MagneticButton className="w-full sm:w-auto">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-emerald-600 px-8 py-4 text-base font-black text-white shadow-xl hover:bg-emerald-700 hover:scale-[1.03] transition-all"
                >
                  <WhatsappIcon size={22} className="text-white shrink-0" />
                  <span className="text-white font-black">WhatsApp Estimate</span>
                </a>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-white dark:bg-slate-950 px-8 py-4 text-base font-black text-[#0F172A] hover:text-[#0E7C7B] shadow-xl hover:bg-slate-100 hover:scale-[1.03] transition-all"
                >
                  <Phone size={20} className="text-[#0E7C7B] shrink-0" />
                  <span className="text-[#0F172A] font-black dark:text-white">Call Direct Hotline</span>
                </a>
              </MagneticButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
