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
  ChevronRight,
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
  Search,
  Check,
  Shield
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { MOBILE_BRANDS, MOBILE_PROBLEMS } from '@/data/mobileRepairData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

const problemIcons = {
  'screen-replacement': Monitor,
  'battery-replacement': Battery,
  'charging-port-repair': Zap,
  'motherboard-repair': Cpu,
  'dead-phone-repair': Droplets
};

export function MobileRepairHubView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const deadPhoneSpecialty = MOBILE_PROBLEMS.find((p) => p.slug === 'dead-phone-repair') || MOBILE_PROBLEMS[4];
  const mainProblems = MOBILE_PROBLEMS.filter((p) => p.slug !== 'dead-phone-repair');

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Hub Hero Section */}
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
              <span>PRECISION SMARTPHONE HARDWARE LAB</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight max-w-4xl mx-auto">
              Mobile Repair Services in Ahmedabad
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Component-level smartphone repair, logic board diagnostics, original AMOLED display & battery replacements in South Bopal & Tragad. 100% Zero-OTP data safety.
            </p>

            {/* Feature Perks */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-700 dark:text-slate-300 pt-2">
              <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={16} /> Zero OTP & Password Required
              </span>
              <span className="flex items-center gap-2 text-[#0E7C7B]">
                <ShieldCheck size={16} /> 180-Day Warranty Coverage
              </span>
              <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Clock size={16} /> 30-Minute Fast Screen Swap
              </span>
            </div>

            {/* Hero CTAs */}
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
                <span>Call +91 999 245 2459</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Repair by Brand (10 Brands) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">REPAIR BY BRAND</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Select Your Smartphone Brand
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                We specialize in component-level hardware repair for all 10 leading mobile phone manufacturers in India.
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
                      <span>Explore Services</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Repair by Problem (4 Problems) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">REPAIR BY PROBLEM</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Select Your Mobile Issue
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                Component-level fixes for cracked displays, battery degradation, charging ports, and motherboard PMICs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainProblems.map((prob, idx) => {
                const IconComponent = problemIcons[prob.slug] || Wrench;
                return (
                  <motion.div
                    key={prob.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.08 }}
                  >
                    <Link
                      href={`/mobile-repair/${prob.slug}/`}
                      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-4 hover:border-[#0E7C7B] shadow-md hover:shadow-xl transition-all block group h-full"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center group-hover:bg-[#0E7C7B] group-hover:text-white transition-all">
                        <IconComponent size={24} />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors">
                          {prob.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                          {prob.tagline}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-black text-[#0E7C7B]">
                        <span>Diagnostic Guide</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Specialty Highlight — Dead Phone Repair */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-black text-amber-400 uppercase tracking-widest">
                  <Droplets size={14} />
                  <span>SPECIALTY EMERGENCY SERVICE</span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Dead Phone & Water Damage Restoration
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                  Dropped your smartphone in water or had it shut off overnight? Our specialized laboratory performs ultrasonic chemical cleaning baths and BGA micro-soldering with a 95%+ recovery rate.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <CheckCircle2 size={16} /> No Fix, No Fee Guarantee
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-300">
                    <ShieldCheck size={16} /> 100% Data Preservation
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/mobile-repair/dead-phone-repair/"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Dead Phone Repair</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Robuzta for Mobile Repair */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">WHY ROBUZTA TECHLABS</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                The Gold Standard in Smartphone Hardware Repair
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: '100% Zero-OTP Policy',
                  desc: 'We NEVER ask for your unlock password, PIN, or SMS OTPs. Your personal photos and data remain completely untouched.'
                },
                {
                  title: 'Transparent Glass Lab',
                  desc: 'Watch our senior technicians replace your screen or repair your charging port live at our open ESD-safe workbenches.'
                },
                {
                  title: 'Original OEM Components',
                  desc: 'We stock genuine AMOLED displays, high-density batteries, and original IC chips backed by official 180-day warranty.'
                },
                {
                  title: 'Free Doorstep Service',
                  desc: 'Same-day free pickup and doorstep repair convenience across South Bopal, Tragad, and all major areas in Ahmedabad.'
                }
              ].map((feat, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Mobile Repair Questions Answered
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How long does a mobile screen or battery replacement take at Robuzta?',
                  answer: 'Screen and battery replacements for iPhone, Samsung, OnePlus, and other brands are performed live in 30 to 45 minutes.'
                },
                {
                  question: 'Do you ask for phone unlock passwords or OTPs?',
                  answer: 'Never! We strictly enforce a Zero-Password & Zero-OTP policy. Hardware tests are performed using transparent diagnostic tools.'
                },
                {
                  question: 'What warranty is provided on mobile repairs?',
                  answer: 'All screen, battery, and motherboard repairs include an official 180-day Robuzta replacement warranty.'
                },
                {
                  question: 'What is your No Fix, No Fee policy?',
                  answer: 'If we cannot repair your mobile phone or restore power in liquid damage cases, you pay zero diagnostic or labor fee!'
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white hover:text-[#0E7C7B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-[#0E7C7B] transition-transform duration-200 shrink-0 ${
                        activeFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Contact & Booking CTA */}
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
