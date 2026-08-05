'use client';

import { MapPin, Phone, Clock, Building2, Navigation, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { locations } from '@/data/locations';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function LocationSection() {
  return (
    <section id="locations-hours" className="relative bg-slate-50/60 dark:bg-slate-950 py-28 lg:py-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Ambient Background Blur */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0E7C7B]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] uppercase tracking-widest">
            <Building2 size={14} className="text-[#0E7C7B]" />
            <span>LAB LOCATIONS & BUSINESS HOURS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Visit Our Live Workbench Labs or Book Doorstep Pickup
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Walk into our South Bopal & Tragad laboratories for live hardware diagnostics, or request free anti-static doorstep pickup anywhere in Ahmedabad.
          </p>
        </div>

        {/* 2 Lab Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-6 shadow-xl hover:border-[#0E7C7B] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Branch Header */}
                <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                        {loc.title}
                      </h3>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Live Hardware Repair Lab
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Now</span>
                  </span>
                </div>

                {/* Lab Address Box */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} />
                      LAB ADDRESS
                    </span>

                    <a
                      href={loc.mapUrl || "https://maps.google.com/?q=Robuzta+Techlabs+South+Bopal"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#0E7C7B] dark:hover:text-teal-300 transition-colors"
                    >
                      <span>Google Maps</span>
                      <Navigation size={12} />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                    {loc.address}
                  </p>
                </div>

                {/* Hours & Hotline Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <Clock size={20} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider">BUSINESS HOURS</span>
                      <span className="text-slate-900 dark:text-slate-100 font-extrabold">11:00 AM – 7:00 PM</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">Monday to Saturday</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <Phone size={20} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider">DIRECT HOTLINE</span>
                      <span className="text-slate-900 dark:text-slate-100 font-extrabold">+91 999 245 2459</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-bold">Instant Phone Support</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black shadow-lg shadow-[#0E7C7B]/20 transition-all text-center"
                >
                  <Phone size={16} />
                  <span>Call Branch Direct</span>
                </a>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 text-xs font-black shadow-md transition-all text-center"
                >
                  <WhatsappIcon size={16} className="text-white shrink-0" />
                  <span>WhatsApp Branch</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
