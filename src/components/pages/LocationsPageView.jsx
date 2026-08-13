'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locations } from '@/data/locations';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Navigation,
  Car,
  CheckCircle2,
  Cpu,
  Eye,
  Zap,
  Building2,
  Compass,
  LocateFixed,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useBookingModal } from '@/context/BookingModalContext';

const officeHighlights = [
  {
    icon: Cpu,
    title: 'Chip-Level Lab',
    description: 'BGA soldering stations and microscopic diagnostics for logic board repairs.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Eye,
    title: 'Live Workbench',
    description: 'Watch your device diagnosed in real-time right in front of you.',
    color: 'from-[#0E7C7B] to-teal-600'
  },
  {
    icon: Zap,
    title: 'Same-Day Express',
    description: 'Screen replacements, battery swaps, and OS fixes done in 2 to 4 hours.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Password Risk',
    description: 'Boot-drive testing ensures your passwords and OTPs are never requested.',
    color: 'from-emerald-500 to-teal-600'
  }
];

const routeSteps = [
  {
    step: '01',
    title: 'SG Highway / Satellite',
    subtitle: 'HEAD WEST',
    description: 'Take the main Bopal route via SG Highway or Iskcon Cross Roads.',
    icon: Compass
  },
  {
    step: '02',
    title: 'SP Ring Road Flyover',
    subtitle: 'SOUTH BOPAL EXIT',
    description: 'Cross Vakil Saheb Bridge onto Safal Parisar Main Road.',
    icon: Navigation
  },
  {
    step: '03',
    title: 'Sun South Winds',
    subtitle: 'MAIN LANDMARK',
    description: 'Locate the Sun South Winds complex opposite Safal Parisar.',
    icon: Building2
  },
  {
    step: '04',
    title: 'Office 103 (1st Floor)',
    subtitle: 'DESTINATION',
    description: 'Park in visitor parking and take the elevator to Office 103.',
    icon: MapPin
  }
];

export function LocationsPageView() {
  const { openModal } = useBookingModal();
  const routeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ['start 80%', 'end 50%']
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">

        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(#0E7C7B_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 dark:opacity-20 pointer-events-none" />
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[130px]" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-300 shadow-sm"
            >
              <LocateFixed size={13} className="text-amber-500 shrink-0" />
              <span>ROBUZTA REPAIR LABS &bull; AHMEDABAD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Our Repair Labs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
            >
              Walk into our open workbench repair labs for live diagnostics, transparent flat pricing, and express device servicing.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
            >
              <a
                href="#interactive-maps"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-3.5 text-xs sm:text-sm font-black shadow-lg shadow-[#0E7C7B]/25 transition-all transform hover:scale-105"
              >
                <Navigation size={16} />
                <span>Get Lab Directions</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <Phone size={16} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>Call: {siteConfig.phone}</span>
              </a>
            </motion.div>



          </div>
        </section>

        {/* 2. BRANCH LOCATION CARDS */}
        <section id="interactive-maps" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
                <Building2 size={13} />
                <span>OFFICIAL BRANCHES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Robuzta Lab Locations
              </h2>

              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                Choose a branch below to view services, timings, and direct map navigation.
              </p>
            </div>

            {/* Branch Locations Cards Grid (Sleek, Professional & Uncluttered with Generous Mobile Spacing) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {locations.map((loc) => {
                const isHeadquarters = loc.slug === 'south-bopal';

                return (
                  <motion.article
                    key={loc.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#0E7C7B] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="space-y-5">
                      
                      {/* Branch Card Top Header */}
                      <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-400 font-bold shrink-0 group-hover:scale-105 transition-transform">
                            <MapPin size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                              {loc.title}
                            </h3>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              {isHeadquarters ? 'Main Flagship Lab • South Bopal' : 'Branch Repair Lab • Tragad'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Clean Address */}
                      <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                        <MapPin size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{loc.address}</span>
                      </div>

                      {/* Hours & Phone Bar */}
                      <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-bold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
                        <span className="flex items-center gap-1.5">
                          <Clock size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                          {loc.timing}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Phone size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                          {loc.phone}
                        </span>
                      </div>

                    </div>

                    {/* Clean Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black shadow-md shadow-[#0E7C7B]/20 transition-all text-center"
                      >
                        <Navigation size={16} />
                        <span>Get Directions</span>
                      </a>

                      <Link
                        href={`/locations/${loc.slug}/`}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-6 py-3.5 text-xs font-bold transition-all text-center border border-slate-200 dark:border-slate-700"
                      >
                        <Building2 size={16} />
                        <span>View Branch Details</span>
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          </div>
        </section>



        {/* 5. OFFICE HIGHLIGHTS & TRUST PILLARS */}
        <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
                <Sparkles size={13} className="text-amber-500" />
                <span>LAB QUALITY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Built to Deliver Peace of Mind
              </h2>

              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                Every Robuzta lab operates with component-level tools and 100% data safety protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {officeHighlights.map((hl, idx) => {
                const HlIcon = hl.icon;
                return (
                  <motion.div
                    key={hl.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#0E7C7B]/50 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr ${hl.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                        <HlIcon size={20} />
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {hl.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {hl.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. DOORSTEP PICKUP & COURIER BANNER */}
        <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50/80 dark:bg-slate-900 text-slate-900 dark:text-white p-6 sm:p-10 shadow-sm border border-slate-200/90 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md shrink-0 hidden sm:flex">
                  <ShieldCheck size={26} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Can&apos;t Visit In Person?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-xl">
                    Request free doorstep pickup across South Bopal, Tragad, Satellite, Vastrapur & all Ahmedabad areas.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openModal({ formType: 'Locations Doorstep Pickup' })}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-md shadow-[#0E7C7B]/20 shrink-0 transition-all transform hover:scale-105 cursor-pointer min-h-[46px]"
              >
                <span>Book Free Doorstep Pickup</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
