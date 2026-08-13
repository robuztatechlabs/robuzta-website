'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Lock,
  Eye,
  Cpu,
  Award,
  Truck,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Quote,
  Wrench,
  Check,
  Zap,
  MapPin,
  Navigation,
  LocateFixed,
  Flag
} from 'lucide-react';
import { PlatformTrustSection } from '@/components/sections/PlatformTrustSection';
import { useBookingModal } from '@/context/BookingModalContext';

// All 4 Timeline Milestones - Fully Responsive & Short
const journeyWaypoints = [
  {
    year: '2012',
    title: 'The Origin',
    tag: 'STARTING POINT',
    location: 'Ahmedabad Lab',
    distance: '0 KM',
    eta: '2012',
    description: 'Began with hands-on smartphone diagnostics and circuit repair testing.',
    icon: MapPin,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    year: '2014',
    title: 'Axiom Store Launch',
    tag: 'FIRST STORE',
    location: 'Multi-Brand Shop',
    distance: '2.5 KM',
    eta: '+2 Yrs',
    description: 'Launched Axiom Technologies with transparent quotes and genuine parts.',
    icon: Navigation,
    color: 'from-[#0E7C7B] to-teal-600'
  },
  {
    year: '2020',
    title: 'Chip-Level Lab',
    tag: 'EXPANSION',
    location: 'BGA Soldering Hub',
    distance: '8.0 KM',
    eta: '+8 Yrs',
    description: 'Expanded into motherboard and logic board repairs for laptops & MacBooks.',
    icon: TrendingUp,
    color: 'from-amber-500 to-orange-600'
  },
  {
    year: 'Present',
    title: 'Robuzta Network',
    tag: 'TODAY',
    location: 'South Bopal & Tragad',
    distance: '15 KM',
    eta: 'Present Day',
    description: 'Operating twin advanced diagnostic repair laboratories in Ahmedabad.',
    icon: Flag,
    color: 'from-emerald-500 to-teal-400'
  }
];

// 4 Simple Stats
const stats = [
  { label: 'Years Experience', value: '10+', sub: 'Est. 2012', icon: Clock },
  { label: 'Devices Serviced', value: '10,000+', sub: 'Phones & Laptops', icon: Wrench },
  { label: 'Repair Accuracy', value: '98.4%', sub: 'First-Time Fix Rate', icon: CheckCircle2 },
  { label: 'Google Rating', value: '4.9★', sub: '500+ Verified Reviews', icon: Star }
];

// All 6 USP Cards - Short, Simple & Attractive Headlines
const uspFeatureGrid = [
  {
    icon: Lock,
    title: 'Zero Password Needed',
    subtitle: 'DATA PRIVACY',
    description: 'External boot testing used. Passwords & OTPs are never asked.',
    color: 'from-blue-500 to-indigo-600',
    tag: 'Zero Risk'
  },
  {
    icon: Eye,
    title: 'Live Workbench',
    subtitle: 'TRANSPARENT REPAIR',
    description: 'Watch your phone or laptop diagnosed live in front of you.',
    color: 'from-[#0E7C7B] to-teal-600',
    tag: 'Watch Live'
  },
  {
    icon: Cpu,
    title: 'Chip-Level Repair',
    subtitle: 'ADVANCED LAB',
    description: 'Logic board and power IC repairs done under microscopes.',
    color: 'from-amber-500 to-orange-600',
    tag: 'BGA Lab'
  },
  {
    icon: Award,
    title: 'Genuine Parts Only',
    subtitle: 'SERIAL-LOGGED',
    description: 'Original screens, batteries, and SSDs with serial tracking.',
    color: 'from-emerald-500 to-teal-600',
    tag: 'Original Spares'
  },
  {
    icon: Truck,
    title: 'Free Home Pickup',
    subtitle: 'EXPRESS COURIER',
    description: 'Safe collection & insured doorstep delivery across Ahmedabad.',
    color: 'from-purple-500 to-pink-600',
    tag: 'Free Pickup'
  },
  {
    icon: FileCheck,
    title: 'Warranty & Quotes',
    subtitle: 'UPFRONT PRICING',
    description: 'Clear digital estimates before repair and up to 1-Year warranty.',
    color: 'from-cyan-500 to-blue-600',
    tag: '1-Yr Warranty'
  }
];

export function AboutPageView() {
  const { openModal } = useBookingModal();
  const verticalRouteRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: verticalRouteRef,
    offset: ['start 60%', 'end 70%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const gpsMarkerTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-50/90 via-teal-50/20 to-white dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-950 py-14 sm:py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[350px] bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[120px]" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300 shadow-sm"
            >
              <Sparkles size={13} className="text-amber-500 shrink-0" />
              <span className="truncate">ROBUZTA TECHLABS &bull; AHMEDABAD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
            >
              About Robuzta Techlabs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-medium px-2 sm:px-0"
            >
              Founded in 2012 by <strong className="text-slate-900 dark:text-white font-bold">Mr. Pranshu Maheshwari</strong>, Robuzta Techlabs is Ahmedabad&apos;s trusted multi-device repair lab — providing fast, transparent repairs for MacBooks, laptops, and smartphones with zero password intrusion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-3 max-w-md sm:max-w-none mx-auto"
            >
              <button
                type="button"
                onClick={() => openModal({ formType: 'About Page Book Free Inspection' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/20 transition-all transform hover:scale-105 cursor-pointer min-h-[48px]"
              >
                <span>Book Free Inspection</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#our-usps"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm min-h-[48px]"
              >
                <span>Explore Our Guarantees</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS BAR */}
        <section className="py-10 sm:py-14 lg:py-16 bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-6 lg:p-8 shadow-sm flex flex-col items-center text-center space-y-1 sm:space-y-1.5 group hover:border-[#0E7C7B]/40 transition-all"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <h3 className="text-[11px] sm:text-xs lg:text-sm font-black text-slate-800 dark:text-slate-200 truncate w-full">
                      {stat.label}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {stat.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. MULTI-PLATFORM VERIFIED RATINGS */}
        <PlatformTrustSection />

        {/* 4. ROBUZTA USPs - 2-CARDS PER ROW ON MOBILE (grid-cols-2 lg:grid-cols-3) */}
        <section id="our-usps" className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 relative">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            
            <div className="text-center space-y-2 sm:space-y-2.5 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
                <Zap size={13} className="text-amber-500 shrink-0" />
                <span>WHY ROBUZTA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Why Trust Robuzta Repair?
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base font-medium max-w-xl mx-auto">
                Transparent, precise, and 100% data-safe repairs for all your devices.
              </p>
            </div>

            {/* CLEAN RESPONSIVE GRID: 1 column on mobile for full breathing room & 0 truncation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {uspFeatureGrid.map((usp, idx) => {
                const IconComponent = usp.icon;
                return (
                  <motion.div
                    key={usp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 lg:p-7 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#0E7C7B]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr ${usp.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                          <IconComponent size={20} />
                        </div>
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full whitespace-nowrap">
                          {usp.tag}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {usp.subtitle}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {usp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-1">
                          {usp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. FOUNDER SPOTLIGHT */}
        <section className="py-14 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 relative bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden"
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center z-10">
                
                {/* Photo Frame */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 p-2 bg-white dark:bg-slate-950 shadow-md max-w-[260px] sm:max-w-[300px] w-full text-center space-y-2">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src="https://robuzta.com/wp-content/uploads/2026/02/Mr.-Pranshu-Maheshwari.png"
                        alt="Mr. Pranshu Maheshwari - Founder & CEO Robuzta Techlabs"
                        width={300}
                        height={360}
                        loading="lazy"
                        className="w-full h-auto object-cover rounded-2xl"
                      />
                    </div>

                    <div className="pt-1.5 pb-1">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        Mr. Pranshu Maheshwari
                      </h3>
                      <p className="text-xs font-bold text-[#0E7C7B] dark:text-teal-400">
                        Founder & CEO &bull; Robuzta Techlabs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Founder Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md mx-auto lg:mx-0">
                    <Quote size={20} />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#0E7C7B]/20 inline-block">
                      FOUNDER STATEMENT
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      &quot;No Solution Found? Robuzta Hai Na!&quot;
                    </h2>
                  </div>

                  <blockquote className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium italic border-l-0 lg:border-l-4 border-[#0E7C7B] pl-0 lg:pl-3.5 py-0.5">
                    &quot;Over a decade of repair care shaped our core promise: total accuracy, upfront pricing, and zero data risk.&quot;
                  </blockquote>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-extrabold pt-1 max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-800 dark:text-slate-200">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                        <Check size={13} />
                      </div>
                      <span>Expert Technicians</span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-800 dark:text-slate-200">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                        <Check size={13} />
                      </div>
                      <span>Zero Password Data Protection</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openModal({ formType: 'About Page Contact Senior Technician' })}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/20 transition-all transform hover:scale-105 cursor-pointer min-h-[46px]"
                    >
                      <span>Contact Senior Technician</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. VERTICAL TIMELINE */}
        <section id="vertical-google-maps" className="py-14 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 relative bg-slate-50/50 dark:bg-[#070F1E] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0E7C7B_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          <div ref={verticalRouteRef} className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 py-1 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                <LocateFixed size={13} className="text-sky-500 shrink-0" />
                <span>OUR 10+ YEAR JOURNEY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Our Journey Since 2012
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base font-medium">
                From a small lab in 2012 to Ahmedabad&apos;s trusted multi-device repair network.
              </p>
            </div>

            {/* Timeline Track */}
            <div className="relative pt-2">
              
              <div className="absolute left-5 md:left-1/2 top-8 bottom-8 w-1.5 sm:w-2 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 rounded-full z-0" />

              <motion.div
                style={{ scaleY, transformOrigin: 'top center' }}
                className="absolute left-5 md:left-1/2 top-8 bottom-8 w-1.5 sm:w-2 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-[#0E7C7B] via-amber-500 to-emerald-500 rounded-full z-10 shadow-[0_0_15px_rgba(14,124,123,0.8)]"
              />

              <motion.div
                style={{ top: gpsMarkerTop }}
                className="absolute left-5 md:left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-tr from-sky-400 to-teal-500 text-white flex items-center justify-center shadow-xl border-2 border-white ring-4 ring-sky-500/30">
                    <Navigation size={15} className="rotate-180" />
                  </div>
                </div>
              </motion.div>

              <div className="space-y-8 sm:space-y-12">
                {journeyWaypoints.map((wp, idx) => {
                  const isEven = idx % 2 === 0;
                  const IconComp = wp.icon;

                  return (
                    <motion.div
                      key={wp.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-tr ${wp.color} text-white shadow-md flex items-center justify-center border-4 border-white dark:border-slate-950`}>
                          <IconComp size={15} />
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0">
                        <div className={`rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-2 hover:border-[#0E7C7B]/40 transition-all ${
                          isEven ? 'md:mr-8' : 'md:ml-8'
                        }`}>
                          
                          <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span className="text-lg sm:text-xl font-black text-[#0E7C7B] dark:text-teal-400">
                              {wp.year}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-300 border border-[#0E7C7B]/20">
                              {wp.tag}
                            </span>
                          </div>

                          <div className="space-y-0.5">
                            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                              {wp.title}
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                              {wp.description}
                            </p>
                          </div>

                          <div className="pt-1.5 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1 text-[#0E7C7B] dark:text-teal-400">
                              <MapPin size={13} />
                              {wp.location}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                              {wp.distance} ({wp.eta})
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="hidden md:block w-1/2" />
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
