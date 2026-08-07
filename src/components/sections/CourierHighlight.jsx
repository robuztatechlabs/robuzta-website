'use client';

import { PackageCheck, MapPin, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const doorstepZones = [
  'South Bopal',
  'Science City',
  'Prahlad Nagar',
  'Vastrapur',
  'Satellite',
  'Bodakdev',
  'Gota',
  'Tragad',
  'Motera',
  'Chandkheda',
  'Navrangpura',
  'Maninagar'
];

export function CourierHighlight() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-10 sm:py-14 lg:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4.5 xs:p-6 sm:p-12 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-wider sm:tracking-widest">
              <Truck size={14} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
              <span className="sm:hidden">EXPRESS PICKUP & PAN-INDIA SHIP-IN</span>
              <span className="hidden sm:inline">EXPRESS DOORSTEP PICKUP & PAN-INDIA SHIP-IN REPAIR</span>
            </div>

            <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Doorstep Pickup Across Ahmedabad & Insured Pan-India Courier Repair
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
              We pick up laptops, MacBooks, and mobile devices directly from your home or office in anti-static padding, or accept Pan-India courier shipments with live video unboxing and insured transit.
            </p>

            <div className="space-y-2">
              <span className="font-tech text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                [ POPULAR DOORSTEP SERVICE ZONES ]
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {doorstepZones.map((zone) => (
                  <span key={zone} className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 sm:px-3 py-1 rounded-lg shadow-xs">
                    <MapPin size={11} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 sm:w-3 sm:h-3" />
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto shrink-0">
            <MagneticButton className="w-full lg:w-auto">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/30 hover:scale-[1.02] transition-all w-full text-center"
              >
                <WhatsappIcon size={18} className="text-white shrink-0 sm:w-[20px] sm:h-[20px]" />
                <span className="text-white font-black">Book Pickup Now</span>
              </a>
            </MagneticButton>

            <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" /> Insured Transit & Zero-OTP Safety
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
