'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  ShieldCheck,
  Cpu,
  Lock,
  Eye,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Truck,
  Star,
  Clock,
  TrendingUp,
  Quote,
  Wrench,
  Check,
  Zap,
  FileCheck,
  MapPin,
  Navigation,
  LocateFixed,
  Flag,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import { PlatformTrustSection } from '@/components/sections/PlatformTrustSection';
import { useBookingModal } from '@/context/BookingModalContext';

const journeyWaypoints = [
  {
    year: '2012',
    title: 'Source: The Beginning of Curiosity',
    tag: 'SOURCE / STARTING POINT',
    location: 'Ahmedabad Lab 01',
    distance: '0.0 KM',
    eta: '2012 Origin',
    description: 'Started with hands-on experiments on early smartphones, mastering circuit diagnostics and micro-soldering precision.',
    icon: MapPin,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    year: '2014',
    title: 'Waypoint 1: Launch of Axiom Technologies',
    tag: 'FIRST REPAIR STORE',
    location: 'Multi-Brand Store',
    distance: '2.5 KM',
    eta: '+2 Years',
    description: 'Opened Axiom Technologies — a one-stop multi-brand repair shop built on honesty, transparent estimates, and genuine parts.',
    icon: Navigation,
    color: 'from-[#0E7C7B] to-teal-600'
  },
  {
    year: '2020',
    title: 'Waypoint 2: Laptop & MacBook Expansion',
    tag: 'CHIP-LEVEL EXPANSION',
    location: 'Micro-Soldering Lab',
    distance: '8.0 KM',
    eta: '+8 Years',
    description: 'Expanded into chip-level laptop, MacBook, tablet, and desktop repairs to meet remote work and remote learning demands.',
    icon: TrendingUp,
    color: 'from-amber-500 to-orange-600'
  },
  {
    year: '2021 - Present',
    title: 'Destination: Robuzta Techlabs Network',
    tag: 'DESTINATION REACHED',
    location: 'South Bopal & Tragad',
    distance: '15.0 KM',
    eta: 'Present Day',
    description: 'Rebranded as Robuzta Techlabs (Robust + Techlabs) — operating state-of-the-art repair laboratories in South Bopal & Tragad.',
    icon: Flag,
    color: 'from-emerald-500 to-teal-400'
  }
];

const stats = [
  { label: 'Years of Experience', value: '10+', sub: 'Established in 2012', icon: Clock },
  { label: 'Devices Serviced', value: '10,000+', sub: 'Phones, Laptops & PCs', icon: Wrench },
  { label: 'Diagnostic Accuracy', value: '98.4%', sub: 'First-time repair rate', icon: CheckCircle2 },
  { label: 'Google Rating', value: '4.9★', sub: '500+ Verified Reviews', icon: Star }
];

const uspFeatureGrid = [
  {
    icon: Lock,
    title: 'Zero Password & Zero OTP Protocol',
    subtitle: '100% Personal Data Protection',
    description: 'We test your hardware using specialized external diagnostic boot drives. Screen lock passwords, iCloud credentials, and phone OTPs are NEVER asked.',
    color: 'from-blue-500 to-indigo-600',
    tag: 'Strict Privacy'
  },
  {
    icon: Eye,
    title: 'Transparent Live Workbench',
    subtitle: 'Watch Repairs In Real-Time',
    description: 'Watch your laptop or phone being diagnosed right in front of you on our open workbench. Complete transparency guarantees total peace of mind.',
    color: 'from-[#0E7C7B] to-teal-600',
    tag: 'Live Inspection'
  },
  {
    icon: Cpu,
    title: 'Chip-Level Micro-Soldering',
    subtitle: 'Advanced Hardware Repair',
    description: 'Our senior technicians operate stereoscopic microscopes and BGA rework stations to fix logic boards and power ICs down to component level.',
    color: 'from-amber-500 to-orange-600',
    tag: 'BGA Micro-Lab'
  },
  {
    icon: Award,
    title: 'Serial-Number Logged Parts',
    subtitle: '100% Genuine Spare Assurance',
    description: 'Every replacement display, battery, keyboard, or SSD comes with serial number logging and old part return policy to guarantee genuine quality.',
    color: 'from-emerald-500 to-teal-600',
    tag: 'Genuine Spares'
  },
  {
    icon: Truck,
    title: 'Free Doorstep Pickup & Delivery',
    subtitle: 'Express Courier Across Ahmedabad',
    description: 'If you prefer not to visit our lab, our express courier team will safely collect, repair, and deliver your device back across Ahmedabad.',
    color: 'from-purple-500 to-pink-600',
    tag: 'Free Express Pickup'
  },
  {
    icon: FileCheck,
    title: 'Warranty & Digital Estimates',
    subtitle: 'Clear Estimates & Zero Surprises',
    description: 'Every repair is backed by clear digital estimates, official invoice logging, and up to 1-Year hassle-free warranty protection.',
    color: 'from-cyan-500 to-blue-600',
    tag: 'Warranty Protected'
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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-24 sm:py-28 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Ambient Background Glows */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-gradient-to-r dark:from-[#0E7C7B]/20 dark:to-teal-500/20 border border-[#0E7C7B]/20 dark:border-teal-500/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300"
            >
              <Sparkles size={14} className="text-[#EA580C] dark:text-amber-400" />
              <span>OFFICIAL ROBUZTA TECHLABS &bull; AHMEDABAD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
            >
              About Robuzta Techlabs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Robuzta is a multi-device repair centre built to make electronics care easy, fast, and trustworthy. Founded in 2012 by <strong className="text-slate-900 dark:text-white">Mr. Pranshu Maheshwari</strong>, we service smartphones, laptops, MacBooks, tablets, and desktop computers using genuine parts and transparent pricing.
            </motion.p>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button
                type="button"
                onClick={() => openModal({ formType: 'About Page Book Free Inspection' })}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 dark:bg-[#0E7C7B] dark:hover:bg-teal-500 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/20 transition-all transform hover:scale-105 cursor-pointer"
              >
                <span>Book Free Inspection</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#our-usps"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <span>Explore Robuzta USPs</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS BAR */}
        <section className="py-14 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-xl flex flex-col items-center text-center space-y-2 group hover:border-[#0E7C7B]/40 transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-500/10 text-[#0E7C7B] dark:text-teal-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {stat.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Multi-Platform Verified Ratings (Google, Justdial, Sulekha) */}
        <PlatformTrustSection />

        {/* 3. ROBUZTA OFFICIAL USPs SECTION */}
        <section id="our-usps" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300">
                <Zap size={14} className="text-amber-500" />
                <span>ROBUZTA UNIQUE SELLING PROPOSITIONS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Why Devices Are Safer & Better Repaired at Robuzta
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                Our 6 core promises designed to deliver absolute transparency, component-level precision, and zero data intrusion.
              </p>
            </div>

            {/* USP Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uspFeatureGrid.map((usp, idx) => {
                const IconComponent = usp.icon;
                return (
                  <motion.div
                    key={usp.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#0E7C7B]/50 hover:shadow-2xl hover:shadow-[#0E7C7B]/10 transition-all duration-300"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-tr ${usp.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full">
                          {usp.tag}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {usp.subtitle}
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {usp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-1">
                          {usp.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-extrabold text-[#0E7C7B] dark:text-teal-400">
                      <span>Robuzta Guaranteed</span>
                      <CheckCircle2 size={16} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. FOUNDER SPOTLIGHT (SEAMLESS SITE-THEME MATCHED DESIGN) */}
        <section className="py-24 border-b border-slate-200 dark:border-slate-800 relative bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle Ambient Background Lighting */}
              <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[140px]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center z-10">
                
                {/* Founder Photo Frame */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700/80 p-2.5 bg-white dark:bg-slate-950 shadow-2xl max-w-[340px] w-full group/photo hover:border-[#0E7C7B] transition-all duration-300">
                    
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                      <img
                        src="https://robuzta.com/wp-content/uploads/2026/02/Mr.-Pranshu-Maheshwari.png"
                        alt="Mr. Pranshu Maheshwari - Founder & CEO Robuzta Techlabs"
                        width={340}
                        height={420}
                        loading="lazy"
                        className="w-full h-auto object-cover transform group-hover/photo:scale-105 transition-transform duration-500"
                      />
                     
                    </div>

                    <div className="space-y-1 text-center pt-3.5 pb-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                        Mr. Pranshu Maheshwari
                      </h3>
                      <p className="text-xs font-bold text-[#0E7C7B] dark:text-teal-400 tracking-wide">
                        Founder & CEO &bull; Robuzta Techlabs
                      </p>
                    </div>

                  </div>
                </div>

                {/* Founder Statement & Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Quote Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-xl shadow-[#0E7C7B]/20">
                    <Quote size={26} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#0E7C7B]/20 inline-block">
                      FOUNDER STATEMENT
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      &quot;No Solution Found? Robuzta Hai Na!&quot;
                    </h2>
                  </div>

                  <blockquote className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium italic border-l-4 border-[#0E7C7B] pl-4 py-1">
                    &quot;Over a decade of hands-on experience has shaped one guiding principle: repair with care, accuracy, and transparency. Every repair is backed by genuine parts, clear estimates, and warranty-protected service.&quot;
                  </blockquote>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-extrabold pt-2">
                    <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400">
                        <Check size={14} />
                      </div>
                      <span>Multi-Brand Expert Technicians</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400">
                        <Check size={14} />
                      </div>
                      <span>Zero Password Data Protection</span>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => openModal({ formType: 'About Page Contact Senior Technician' })}
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 dark:bg-[#0E7C7B] dark:hover:bg-teal-500 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/20 transition-all transform hover:scale-105 group/cta cursor-pointer"
                    >
                      <span>Contact Senior Technician</span>
                      <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. VERTICAL GOOGLE MAPS ANIMATED ROUTE PATH */}
        <section id="vertical-google-maps" className="py-24 border-b border-slate-200 dark:border-slate-800 relative bg-slate-50/50 dark:bg-[#070F1E] overflow-hidden">
          
          {/* Map Grid Pattern Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#0E7C7B_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 dark:opacity-20 pointer-events-none" />

          <div ref={verticalRouteRef} className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Top Navigation Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300 shadow-sm">
                <LocateFixed size={14} className="text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>VERTICAL GOOGLE MAPS ROUTE &bull; SOURCE TO DESTINATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Our Journey: Source to Destination
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                Scroll down to animate the vertical GPS navigation line connecting our 2012 origin to present day Robuzta Techlabs.
              </p>
            </div>

            {/* Vertical Route Container */}
            <div className="relative pt-6">
              
              {/* Background Central Route Track Line */}
              <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-2 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 rounded-full z-0 border border-slate-300/50 dark:border-slate-700/50" />

              {/* Animated Glowing Fill Route Line */}
              <motion.div
                style={{ scaleY, transformOrigin: 'top center' }}
                className="absolute left-6 md:left-1/2 top-10 bottom-10 w-2 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-[#0E7C7B] via-amber-500 to-emerald-500 rounded-full z-10 shadow-[0_0_20px_rgba(14,124,123,0.9)]"
              />

              {/* Animated Moving GPS Radar Cursor Icon */}
              <motion.div
                style={{ top: gpsMarkerTop }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-400 to-teal-500 text-white flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-sky-500/40">
                    <Navigation size={18} className="rotate-180" />
                  </div>
                </div>
              </motion.div>

              {/* Vertical Alternating Waypoint Cards */}
              <div className="space-y-16">
                {journeyWaypoints.map((wp, idx) => {
                  const isEven = idx % 2 === 0;
                  const IconComp = wp.icon;

                  return (
                    <motion.div
                      key={wp.year}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-center gap-8 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Center GPS Waypoint Marker Pin */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          <div className={`h-12 w-12 rounded-full bg-gradient-to-tr ${wp.color} text-white shadow-xl flex items-center justify-center border-4 border-white dark:border-slate-950 ring-2 ring-teal-500/30`}>
                            <IconComp size={20} />
                          </div>
                          <div className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping" />
                        </div>
                      </div>

                      {/* Content Card Box */}
                      <div className="w-full md:w-1/2 pl-16 md:pl-0">
                        <div className={`rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-7 shadow-xl space-y-4 hover:border-[#0E7C7B] hover:shadow-2xl transition-all duration-300 ${
                          isEven ? 'md:mr-10' : 'md:ml-10'
                        }`}>
                          
                          {/* Card Header Bar */}
                          <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                            <span className="text-2xl font-black text-[#0E7C7B] dark:text-teal-400">
                              {wp.year}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-300 border border-[#0E7C7B]/20">
                                {wp.tag}
                              </span>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="space-y-2">
                            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                              {wp.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                              {wp.description}
                            </p>
                          </div>

                          {/* Waypoint Status & Distance Footer */}
                          <div className="pt-2 flex items-center justify-between text-xs font-extrabold text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1.5 text-[#0E7C7B] dark:text-teal-400">
                              <MapPin size={14} />
                              {wp.location}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                              {wp.distance} ({wp.eta})
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* Spacer for 2-column Layout */}
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
