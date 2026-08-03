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
  ArrowRight,
  ShieldCheck,
  Sparkles,
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
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useBookingModal } from '@/context/BookingModalContext';

const officeHighlights = [
  {
    icon: Cpu,
    title: 'Chip-Level Cleanroom Lab',
    description: 'Equipped with FLIR thermal imagers, BGA rework stations, and stereoscopic microscopes for motherboard diagnostics.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Eye,
    title: 'Live Workbench Lounge',
    description: 'Watch your device diagnosed in real-time right in front of you. Complete transparency and no hidden fees.',
    color: 'from-[#0E7C7B] to-teal-600'
  },
  {
    icon: Zap,
    title: 'Express 2-Hour Turnaround',
    description: 'Screen replacements, battery swaps, and OS recovery prioritized for same-day completion.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Password Protocol',
    description: 'We test hardware using external diagnostic boot drives — screen lock passwords and OTPs are never requested.',
    color: 'from-emerald-500 to-teal-600'
  }
];

const routeSteps = [
  {
    step: '01',
    title: 'Starting Point: SG Highway / Satellite',
    subtitle: 'Head West Towards Bopal',
    description: 'Take the main arterial route towards Bopal / South Bopal via SG Highway or Iskcon Cross Roads.',
    icon: Compass
  },
  {
    step: '02',
    title: 'SP Ring Road Flyover',
    subtitle: 'Take South Bopal Exit',
    description: 'Cross the Vakil Saheb Bridge / South Bopal Flyover and turn onto Safal Parisar Road.',
    icon: Navigation
  },
  {
    step: '03',
    title: 'Landmark: Sun South Winds',
    subtitle: 'Safal Parisar Main Road',
    description: 'Locate the prominent Sun South Winds commercial complex directly opposite Safal Parisar.',
    icon: Building2
  },
  {
    step: '04',
    title: 'Arrival: Office 103 (1st Floor)',
    subtitle: 'Elevator & Visitor Parking',
    description: 'Park in the designated customer visitor area. Take the high-speed elevator to the 1st Floor, Office 103.',
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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">

        {/* 1. HERO SECTION WITH ANIMATED MAP GRID BACKGROUND */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-24 sm:py-28 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#0E7C7B_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 dark:opacity-25 pointer-events-none" />
          
          {/* Ambient Lighting Orbs */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300 shadow-sm"
            >
              <LocateFixed size={14} className="text-[#EA580C] animate-spin" style={{ animationDuration: '6s' }} />
              <span>OFFICIAL ROBUZTA TECHLABS &bull; AHMEDABAD LOCATIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Visit Our Office & Repair Labs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Step into Ahmedabad&apos;s premier live workbench repair laboratory. Transparent estimates, component-level micro-soldering stations, and dedicated customer lounges.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#interactive-maps"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-8 py-4 text-xs sm:text-sm font-black shadow-xl shadow-[#0E7C7B]/25 transition-all transform hover:scale-105"
              >
                <Navigation size={16} />
                <span>Get Directions & Maps</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <Phone size={16} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-extrabold text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <Car size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                Free Customer Parking
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 size={15} className="text-amber-500" />
                Elevator to 1st Floor
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-emerald-500" />
                Mon - Sat: 10 AM to 8:30 PM
              </span>
            </motion.div>

          </div>
        </section>

        {/* 2. INTERACTIVE GOOGLE MAPS & LOCATION INFO CARDS */}
        <section id="interactive-maps" className="py-24 border-b border-slate-200 dark:border-slate-800 relative bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                <Building2 size={14} />
                <span>OUR LAB BRANCHES &bull; AHMEDABAD</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Robuzta Official Repair Locations
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                Choose a branch below for live Google Maps turn-by-turn navigation, contact details, and available services.
              </p>
            </div>

            {/* Branch Locations Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((loc) => {
                const isHeadquarters = loc.slug === 'south-bopal';
                const mapEmbedSrc = isHeadquarters
                  ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.957583648439!2d72.4638!3d23.0254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9409867ad7%3A0x6b441f3e7a02c98d!2sSun%20South%20Winds!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
                  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.756184920158!2d72.5621!3d23.1074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839555555555%3A0x6b441f3e7a02c98d!2sTragad%20Circle%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

                return (
                  <motion.article
                    key={loc.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-2xl flex flex-col justify-between space-y-8 hover:border-[#0E7C7B]/50 transition-all duration-300 group"
                  >
                    <div className="space-y-6">
                      
                      {/* Branch Card Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shadow-[#0E7C7B]/20 group-hover:scale-110 transition-transform">
                            <MapPin size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                              {loc.title}
                            </h3>
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                              {isHeadquarters ? 'Headquarters & Micro-Lab' : 'North Ahmedabad Hub'}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live Lab Branch</span>
                        </span>
                      </div>

                      {/* Embedded Google Maps iFrame */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-56 bg-slate-100 dark:bg-slate-950 shadow-inner group/map">
                        <iframe
                          src={mapEmbedSrc}
                          className="w-full h-full border-0 filter grayscale contrast-125 dark:invert dark:hue-rotate-180 transition-all duration-500 group-hover/map:filter-none"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${loc.title} Map`}
                        />
                        <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-white/20 shadow-md">
                          Live Interactive Map
                        </div>
                      </div>

                      {/* Detailed Address */}
                      <div className="space-y-2 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                        <span className="text-[10px] font-extrabold uppercase text-[#0E7C7B] dark:text-teal-400 tracking-wider block">
                          OFFICE ADDRESS:
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                          {loc.address}
                        </p>
                      </div>

                      {/* Timing & Contact Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 text-xs font-extrabold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                          <Clock size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">HOURS</span>
                            <span>{loc.timing}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs font-extrabold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                          <Phone size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase">DIRECT PHONE</span>
                            <span>{loc.phone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Nearby Areas Tags */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block">
                          SERVED LOCALITIES NEARBY:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {loc.nearbyAreas.map((area) => (
                            <span
                              key={area}
                              className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Dual Action CTA Buttons */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black shadow-lg shadow-[#0E7C7B]/20 transition-all text-center"
                      >
                        <Navigation size={16} />
                        <span>Get Directions</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => openModal({ formType: loc.title + ' Book Doorstep Pickup', locality: loc.title })}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 dark:bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 text-xs font-black transition-all text-center border border-slate-800 cursor-pointer"
                      >
                        <Phone size={16} className="text-teal-400" />
                        <span>Book Free Pickup</span>
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. ANIMATED ROUTE / GPS PATH LEADING TO THE OFFICE */}
        <section className="py-24 border-b border-slate-200 dark:border-slate-800 relative bg-slate-50/50 dark:bg-slate-950">
          <div ref={routeRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                <Navigation size={14} />
                <span>STEP-BY-STEP ROUTE GUIDE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                How to Reach Robuzta Headquarters
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                Follow this simple navigational route to reach our South Bopal flagship repair lab.
              </p>
            </div>

            {/* Animated Horizontal Route Path Line Container */}
            <div className="relative pt-6">
              
              {/* Background Route Line */}
              <div className="hidden lg:block absolute left-8 right-8 top-16 h-2 bg-slate-200 dark:bg-slate-800 rounded-full z-0" />

              {/* Animated Progress Route Line */}
              <motion.div
                style={{ scaleX, transformOrigin: 'left center' }}
                className="hidden lg:block absolute left-8 right-8 top-16 h-2 bg-gradient-to-r from-blue-500 via-[#0E7C7B] to-emerald-500 rounded-full z-10 shadow-[0_0_15px_rgba(14,124,123,0.8)]"
              />

              {/* 4 Route Step Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
                {routeSteps.map((stepItem, idx) => {
                  const StepIcon = stepItem.icon;
                  return (
                    <motion.div
                      key={stepItem.step}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-[#0E7C7B] hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md group-hover:scale-110 transition-transform">
                          <StepIcon size={20} />
                        </div>
                        <span className="text-xl font-black text-[#0E7C7B] dark:text-teal-400">
                          {stepItem.step}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                          {stepItem.subtitle}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {stepItem.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {stepItem.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-400">
                        <span>Route Step {idx + 1}</span>
                        <ChevronRight size={14} className="text-[#0E7C7B]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* 4. LANDMARKS & PARKING INFORMATION SECTION (100% THEME-ADAPTIVE) */}
        <section className="py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white p-8 sm:p-14 shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 py-1 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                  <Car size={14} />
                  <span>PARKING & ACCESSIBILITY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Landmarks & Visitor Parking Details
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  We strive to make your lab visit completely stress-free. Here is what you need to know about reaching Sun South Winds:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <Car size={20} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Dedicated Visitor Parking</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Free surface parking in front of Sun South Winds commercial complex, plus underground basement parking with security guards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <Building2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">High-Speed Elevator Access</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Elevators are available directly from the basement and ground floor lobby up to Office 103 on the 1st Floor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <MapPin size={20} className="text-sky-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Key Surrounding Landmarks</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Located near Safal Parisar Main Entrance, opposite Gala Gymkhana Road, and minutes from SP Ring Road South Bopal Exit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmark Map Box Visual (Theme-Adaptive) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-2xl space-y-6 w-full max-w-md">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-2 text-xs font-black text-[#0E7C7B] dark:text-teal-400">
                      <Building2 size={16} />
                      <span>SUN SOUTH WINDS COMPLEX</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-[#0E7C7B]/10 text-[#0E7C7B] dark:bg-teal-500/20 dark:text-teal-300 border border-[#0E7C7B]/20 dark:border-teal-500/30 px-2.5 py-0.5 rounded-full">
                      Office 103
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span>Safal Parisar Road</span>
                      <span className="text-[#0E7C7B] dark:text-emerald-400 font-extrabold">50 Meters</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span>SP Ring Road Flyover</span>
                      <span className="text-[#0E7C7B] dark:text-emerald-400 font-extrabold">300 Meters</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <span>Gala Gymkhana Road</span>
                      <span className="text-[#0E7C7B] dark:text-emerald-400 font-extrabold">500 Meters</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-black text-slate-900 dark:text-white">
                    <span className="flex items-center gap-1.5 text-[#0E7C7B] dark:text-teal-400">
                      <CheckCircle2 size={16} />
                      100% Accessible Office
                    </span>
                    <a
                      href="https://maps.google.com/?q=Sun+South+Winds+South+Bopal+Ahmedabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0E7C7B] dark:text-teal-300 hover:underline flex items-center gap-1"
                    >
                      Open Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. OFFICE HIGHLIGHTS & TRUST PILLARS */}
        <section className="py-24 border-b border-slate-200 dark:border-slate-800 relative bg-slate-50/50 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                <Sparkles size={14} className="text-amber-500" />
                <span>OFFICE HIGHLIGHTS & WORKBENCH QUALITY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Designed to Build Instant Trust
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                Here is why visiting Robuzta Techlabs feels like an elite, transparent electronics care experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officeHighlights.map((hl, idx) => {
                const HlIcon = hl.icon;
                return (
                  <motion.div
                    key={hl.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#0E7C7B]/50 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-tr ${hl.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <HlIcon size={24} />
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {hl.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {hl.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-extrabold text-[#0E7C7B] dark:text-teal-400">
                      <span>Robuzta Standard</span>
                      <CheckCircle2 size={16} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. DOORSTEP PICKUP & COURIER BANNER (100% THEME-ADAPTIVE) */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white p-8 sm:p-14 shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-xl shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Can&apos;t Visit In Person?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-xl">
                    Request free doorstep pickup across South Bopal, Tragad, Satellite, Vastrapur & Ahmedabad, or use our insured Pan-India ship-in service.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 shrink-0 transition-all transform hover:scale-105"
              >
                <span>Book Free Doorstep Pickup</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
