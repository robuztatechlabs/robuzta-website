'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Wrench,
  Clock,
  Cpu,
  Monitor,
  Battery,
  Droplets,
  Layers,
  Check,
  Shield,
  Lock,
  Camera,
  Volume2,
  Fingerprint,
  Flame,
  Laptop,
  Database,
  HelpCircle
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { MOBILE_BRANDS, MOBILE_PROBLEMS } from '@/data/mobileRepairData';
import { useBookingModal } from '@/context/BookingModalContext';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function MobileRepairHubView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  // 9 Common Problems from PDF
  const commonProblems = [
    {
      title: 'Cracked Screen or Touch Not Working?',
      description: 'A cracked display, dead pixels, touch failure, flickering, or black screen can indicate damage to the display assembly. We diagnose the issue and provide screen replacement for supported models.',
      icon: Monitor,
      slug: 'screen-replacement',
      badge: 'Screen Fix'
    },
    {
      title: 'Phone Not Charging?',
      description: "If your phone charges slowly, disconnects repeatedly, or doesn't charge at all, the problem could be the charging port, cable, battery, or charging circuit.",
      icon: Zap,
      slug: 'charging-port-repair',
      badge: 'Charging Fix'
    },
    {
      title: 'Battery Draining Too Fast?',
      description: 'Fast battery drain, unexpected shutdowns, or a swollen battery can indicate battery degradation or a power-related issue. We test the battery before recommending replacement.',
      icon: Battery,
      slug: 'battery-replacement',
      badge: 'OEM Battery'
    },
    {
      title: 'Phone Overheating?',
      description: 'Excessive heating while charging, gaming, or using the camera can be caused by battery problems, heavy workload, software issues, or hardware faults.',
      icon: Flame,
      slug: 'dead-phone-repair',
      badge: 'Thermal Check'
    },
    {
      title: 'Camera Not Working?',
      description: 'A black camera screen, focusing problems, blurry images, shaking, or camera crashes can indicate camera module or related hardware problems.',
      icon: Camera,
      slug: 'dead-phone-repair',
      badge: 'Camera Module'
    },
    {
      title: 'Speaker or Microphone Not Working?',
      description: 'Low speaker volume, distorted sound, or microphone problems can affect calls, videos, and voice recordings. We diagnose the audio components and connections.',
      icon: Volume2,
      slug: 'dead-phone-repair',
      badge: 'Audio Diagnostic'
    },
    {
      title: 'Fingerprint or Face Unlock Not Working?',
      description: 'Biometric problems can occur after screen damage, physical impact, software issues, or component faults. We diagnose the cause before recommending a solution.',
      icon: Fingerprint,
      slug: 'dead-phone-repair',
      badge: 'Biometric Fix'
    },
    {
      title: 'Water-Damaged Phone?',
      description: 'If your phone has been exposed to water or liquid, avoid repeatedly switching it on or charging it. Early inspection can help prevent further internal damage.',
      icon: Droplets,
      slug: 'dead-phone-repair',
      badge: 'Liquid Clean'
    },
    {
      title: 'Phone Suddenly Dead?',
      description: "If your phone doesn't respond, doesn't charge, or shows no signs of power, the issue may involve the battery, charging section, power circuit, or motherboard.",
      icon: Cpu,
      slug: 'dead-phone-repair',
      badge: 'Board Diagnostic'
    }
  ];

  // 10 Included Services from PDF Page 2
  const includedServices = [
    { title: 'Screen Replacement', icon: Monitor, tag: 'OEM Display' },
    { title: 'Battery Replacement', icon: Battery, tag: 'High-Capacity Cell' },
    { title: 'Charging Port Repair', icon: Zap, tag: 'Type-C & Lightning' },
    { title: 'Camera Repair', icon: Camera, tag: 'Front & Rear Module' },
    { title: 'Speaker & Microphone Repair', icon: Volume2, tag: 'Earpiece & Mic' },
    { title: 'Fingerprint & Biometric Troubleshooting', icon: Fingerprint, tag: 'Face ID & Touch ID' },
    { title: 'Motherboard Repair', icon: Cpu, tag: 'Micro-Soldering' },
    { title: 'Water Damage Repair', icon: Droplets, tag: 'Ultrasonic Bath' },
    { title: 'Software Troubleshooting', icon: Laptop, tag: 'OS & Bootloop' },
    { title: 'Mobile Data Recovery', icon: Database, tag: 'Deep Chip Extract' }
  ];

  // 6 FAQs from PDF Page 2 & 3
  const pdfFaqs = [
    {
      question: 'How much does mobile repair cost in Ahmedabad?',
      answer: 'The cost depends on the phone model, problem, and component required. We diagnose the device before providing a repair estimate.'
    },
    {
      question: 'How long does a mobile screen replacement take?',
      answer: 'Many common screen replacements can be completed quickly, but the exact time depends on the model and availability of the required part.'
    },
    {
      question: 'Can you repair a phone that is completely dead?',
      answer: 'Yes. We diagnose the battery, charging section, power circuit, and motherboard to determine the cause.'
    },
    {
      question: 'Can you recover data from a damaged phone?',
      answer: 'Data recovery may be possible depending on the condition of the storage and motherboard.'
    },
    {
      question: 'Can you repair water-damaged phones?',
      answer: 'Yes, we inspect liquid-damaged phones and provide component-level repair where technically possible.'
    },
    {
      question: 'Do you repair motherboard problems?',
      answer: 'Yes. We provide advanced diagnostics and component-level motherboard repair for supported smartphones.'
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Hub Hero Section (UNTOUCHED AS REQUESTED) */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[480px] bg-[#0E7C7B]/10 rounded-full blur-[170px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
              <Sparkles size={14} className="text-amber-500" />
              <span>SMARTPHONE REPAIR SERVICES AHMEDABAD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight max-w-4xl mx-auto">
              Mobile Repair Services in Ahmedabad
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Professional mobile phone repair in Ahmedabad for cracked screens, battery problems, charging issues, water damage, motherboard faults, camera problems, and more. We repair iPhone, Samsung, Google Pixel, OnePlus, OPPO, Vivo, Realme, Motorola, Nothing, iQOO, and other major smartphone brands.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={() => openModal({ serviceType: 'Mobile Repair' })}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
              >
                <Wrench size={16} />
                <span>Book Mobile Diagnostic</span>
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#0E7C7B] px-6 py-4 text-xs font-black uppercase tracking-wider transition-all"
              >
                <Phone size={16} className="text-[#0E7C7B]" />
                <span>Call +91 999 245 245 9</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 bg-slate-50/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">WHY CHOOSE US</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { title: 'Privacy-First Repair', icon: Lock, color: 'text-emerald-500 bg-emerald-500/10' },
                { title: 'Board-Level Repair Expertise', icon: Cpu, color: 'text-[#0E7C7B] bg-[#0E7C7B]/10' },
                { title: 'Multi-Brand Repair Experience', icon: Smartphone, color: 'text-indigo-500 bg-indigo-500/10' },
                { title: 'Proper Diagnosis', icon: CheckCircle2, color: 'text-amber-500 bg-amber-500/10' },
                { title: 'Repair Warranty', icon: ShieldCheck, color: 'text-teal-500 bg-teal-500/10' },
                { title: 'Fast Turnaround', icon: Zap, color: 'text-yellow-500 bg-yellow-500/10' }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.05 }}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#0E7C7B]/50 transition-all group"
                  >
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-black shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 1: Smartphone Brands We Repair (SECOND IMAGE - UNTOUCHED AS REQUESTED) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">REPAIR BY BRAND</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Smartphone Brands We Repair
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                We repair smartphones from major brands with solutions ranging from screen and battery replacement to charging, motherboard, and other hardware problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {MOBILE_BRANDS.map((brand, idx) => (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.05 }}
                >
                  <Link
                    href={`/mobile-repair/${brand.slug}/`}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4 hover:border-[#0E7C7B] shadow-sm hover:shadow-xl transition-all block group h-full flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="h-16 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 p-2.5 flex items-center justify-center transition-all group-hover:border-[#0E7C7B]/40 group-hover:bg-[#0E7C7B]/5">
                        <img
                          src={brand.logoImage}
                          alt={`${brand.name} logo`}
                          className="max-h-10 w-auto max-w-[120px] object-contain dark:brightness-110 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="space-y-1 text-center">
                        <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed">
                          {brand.shortTag}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-xs font-black text-[#0E7C7B] group-hover:text-teal-600">
                      <span>Explore {brand.name} Services</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Mobile Phone Repair in Ahmedabad: Common Problems & Solutions (NEW PDF CONTENT) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                COMMON PROBLEMS & SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Mobile Phone Repair in Ahmedabad: Common Problems & Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Is your phone not charging, overheating, showing display problems, or suddenly switched off? Learn about common smartphone problems, what causes them, and when professional mobile repair is required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((prob, idx) => {
                const IconComp = prob.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link
                      href={`/mobile-repair/${prob.slug}/`}
                      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-4 hover:border-[#0E7C7B] shadow-md hover:shadow-xl transition-all block group h-full flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center font-black group-hover:scale-110 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm">
                            <IconComp size={22} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-full">
                            {prob.badge}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {prob.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                          {prob.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-black text-[#0E7C7B] dark:text-teal-400">
                        <span>Get Diagnostic Quote</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Mobile Repair Services in Ahmedabad (10 RICH CARDS FROM PDF PAGE 2) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Mobile Repair Services in Ahmedabad
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                At <strong className="font-bold text-slate-900 dark:text-white">Robuzta TechLabs</strong>, we provide professional smartphone repair for supported <strong className="font-bold text-slate-900 dark:text-white">iPhone, Samsung, Google Pixel, OnePlus, OPPO, Vivo, Realme, Motorola, Nothing, iQOO</strong>, and other devices.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400 text-center block">
                Our services include:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {includedServices.map((srv, idx) => {
                  const IconComp = srv.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 text-center shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all space-y-3 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-300 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm">
                          <IconComp size={22} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {srv.title}
                        </h3>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-1 text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span>{srv.tag}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ (6 QUESTIONS FROM PDF PAGE 2 & 3) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {pdfFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-6 text-left flex items-center justify-between font-extrabold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#0E7C7B] dark:hover:text-teal-300 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-[#0E7C7B] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Bottom CTA Banner */}
        <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <Sparkles size={16} />
                  <span>FAST MOBILE REPAIR IN AHMEDABAD</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Got a Damaged Mobile Phone?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Get a free instant diagnostic estimate from senior mobile engineers in South Bopal and Tragad.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openModal({ serviceType: 'Mobile Repair' })}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <Wrench size={16} />
                  <span>Book Free Check</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
