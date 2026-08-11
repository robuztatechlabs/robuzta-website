'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { services } from '@/data/services';
import { QuoteForm } from '@/components/forms/QuoteForm';
import {
  Laptop,
  Smartphone,
  Flame,
  Monitor,
  Wrench,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Clock,
  Zap,
  Phone,
} from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SERVICE_ICONS = {
  'laptop-repair': <Laptop className="h-7 w-7 text-teal-400" />,
  'mobile-repair': <Smartphone className="h-7 w-7 text-sky-400" />,
  'macbook-repair': <Cpu className="h-7 w-7 text-[#0E7C7B]" />,
  'surface-repair': <Wrench className="h-7 w-7 text-purple-400" />,
  'gaming-pc-repair': <Flame className="h-7 w-7 text-amber-400" />,
  'desktop-repair': <Monitor className="h-7 w-7 text-blue-400" />,
};

const CATEGORY_FILTERS = ['All Services', 'Laptops & MacBooks', 'Mobiles & Tablets', 'Gaming & Workstations'];

export function ServicesPageView() {
  const [activeFilter, setActiveFilter] = useState('All Services');

  const filteredServices = services.filter((service) => {
    if (activeFilter === 'All Services') return true;
    if (activeFilter === 'Laptops & MacBooks') {
      return ['laptop-repair', 'macbook-repair', 'surface-repair'].includes(service.slug);
    }
    if (activeFilter === 'Mobiles & Tablets') {
      return ['mobile-repair'].includes(service.slug);
    }
    if (activeFilter === 'Gaming & Workstations') {
      return ['gaming-pc-repair', 'desktop-repair'].includes(service.slug);
    }
    return true;
  });

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Services Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
              <Sparkles size={14} className="text-amber-500" />
              <span>ROBUZTA REPAIR CAPABILITIES & SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Lab-Grade Repair Solutions for Every Device
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              From MacBook BGA logic board micro-soldering to smartphone screen replacements and gaming PC thermal overhauls—backed by 180-day OEM warranties and Zero-Password data safety.
            </p>

            {/* Quick Category Filter Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 text-xs font-black rounded-full transition-all ${
                    activeFilter === cat
                      ? 'bg-[#0E7C7B] text-white shadow-lg shadow-[#0E7C7B]/30 scale-105'
                      : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Cards Grid */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const dedicatedUrls = {
                  'laptop-repair': '/laptop-repair/',
                  'mobile-repair': '/mobile-repair/',
                  'gaming-pc-repair': '/gaming-desktop/repair/',
                  'data-recovery': '/data-recovery/',
                  'software-services': '/software-services/',
                  'cleaning-tune-up': '/cleaning-tune-up/'
                };
                const serviceHref = dedicatedUrls[service.slug] || `/services/${service.slug}`;
                return (
                <div
                  key={service.slug}
                  className="rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 shadow-xl hover:border-[#0E7C7B]/60 hover:bg-white dark:hover:bg-slate-850 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
                >
                  {/* Top Accent Light Glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#0E7C7B]/10 rounded-full blur-[40px] group-hover:bg-[#0E7C7B]/20 transition-all" />

                  <div className="space-y-5">
                    {/* Header Icon & Title */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 shadow-md shrink-0">
                        {SERVICE_ICONS[service.slug] || <Wrench className="h-7 w-7 text-teal-400" />}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        IN-LAB DIAGNOSTICS
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#0E7C7B] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                        {service.proof}
                      </p>
                    </div>

                    {/* Short Summary Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-white/60 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                      {service.summary}
                    </p>

                    {/* Key Included Capabilities */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                        WHAT WE REPAIR:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.included.slice(0, 4).map((inc, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-300/50 dark:border-slate-700/50"
                          >
                            <CheckCircle2 size={12} className="text-[#0E7C7B]" />
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                    <Link
                      href={serviceHref}
                      className="flex items-center gap-1.5 text-xs font-black text-[#0E7C7B] hover:text-teal-600 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-white bg-[#0E7C7B] hover:bg-teal-600 px-3.5 py-2 rounded-xl shadow-md transition-all"
                    >
                      <span>Book Repair</span>
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Robuzta Lab Section */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Why Customers Trust Robuzta Techlabs
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                We combine advanced optical micro-soldering, FLIR thermal diagnostic cameras, genuine parts sourcing, and strict data privacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-[#0E7C7B] font-black">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Zero-Password Data Safety</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  We test hardware using external diagnostic boot drives. Your personal passwords, photos, and OTPs are 100% private.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-500 font-black">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">BGA Micro-Soldering</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Instead of expensive motherboard swaps, we solder faulty IC chips and reball GPUs under 45x optical stereo microscopes.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500 font-black">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Same-Day Turnaround</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  80% of screen replacements, battery installs, and charging port repairs are completed within 2 to 4 hours.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-500 font-black">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">No Fix, No Fee Guarantee</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  If we cannot fix your hardware issue or restore system power, you pay zero diagnostic or bench charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Diagnostic & Booking Banner */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 block">
                  FREE HARDWARE ESTIMATE & AHMEDABAD PICKUP
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Need Your Device Repaired Today?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Get a free instant price quote or schedule free doorstep pickup in South Bopal, Tragad, Satellite, SG Highway & surrounding areas.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Book Free Pickup Now</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+919992452459"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 px-7 py-3 text-xs font-bold transition-all"
                >
                  <Phone size={14} />
                  <span>Call +91 999 245 2459</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
