'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Flame,
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
  Check,
  X,
  Shield,
  Sliders,
  Wind,
  Thermometer,
  Activity
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { CLEANING_PAGE_DATA } from '@/data/cleaningTuneUpData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function CleaningTuneUpView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const data = CLEANING_PAGE_DATA;

  // JSON-LD Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://robuzta.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cleaning & Tune-Up',
        item: data.canonicalUrl
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Robuzta Techlabs',
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      }
    },
    areaServed: 'Ahmedabad',
    description: data.metaDescription
  };

  const faqSchema = data.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    : null;

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-24 lg:py-28 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[170px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6"
          >


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-5">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
                  <Wind size={14} className="text-[#0E7C7B]" />
                  <span>PRECISION THERMAL SERVICING LAB</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                  {data.h1}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                  {data.tagline}
                </p>

                {/* Key Perks */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} /> Thermal Grizzly Kryonaut Repasting
                  </span>
                  <span className="flex items-center gap-1.5 text-[#0E7C7B]">
                    <ShieldCheck size={16} /> 100% Zero-OTP Data Safety
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Clock size={16} /> 45-Min Fast Turnaround
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openModal({ serviceType: 'Cleaning & Tune-Up' })}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                  >
                    <Wrench size={16} />
                    <span>Book Cleaning Check</span>
                  </button>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#0E7C7B] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <Phone size={16} className="text-[#0E7C7B]" />
                    <span>Call Thermal Specialist</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi Robuzta Techlabs, I need laptop/PC cleaning & tune-up`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-md"
                  >
                    <WhatsappIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Thermal Trust Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Thermal Guarantee
                    </span>
                    <span className="text-[10px] font-black text-teal-600 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                      15°C–25°C Cooler
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Thermal Compound:</span>
                      <span className="font-extrabold text-[#0E7C7B]">Thermal Grizzly Kryonaut</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Basic Servicing:</span>
                      <span className="font-extrabold text-slate-900 dark:text-white">₹499 (45 Mins)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Pro Deep Overhaul:</span>
                      <span className="font-extrabold text-emerald-600">₹899 (With Repasting)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Labs:</span>
                      <span className="font-extrabold text-slate-900 dark:text-white">South Bopal & Tragad</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal({ serviceType: 'Pro Cleaning & Tune-Up' })}
                    className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    Book Pro Overhaul
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Basic vs Pro Plan Comparison Section */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">PLAN COMPARISON</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Basic vs Pro Cleaning Plan Comparison
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                Choose the right servicing plan for your everyday laptop, gaming rig, or workstation PC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Basic Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={SMOOTH_TRANSITION}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 space-y-6 shadow-md relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {data.basicPlan.badge}
                    </span>
                    <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
                      {data.basicPlan.turnaround}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {data.basicPlan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-black text-[#0E7C7B]">{data.basicPlan.price}</span>
                      <span className="text-xs text-slate-400 font-medium">/ flat service</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {data.basicPlan.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">WHAT'S INCLUDED:</span>
                    {data.basicPlan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium">
                        {feat.included ? (
                          <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <X size={16} className="text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? 'text-slate-800 dark:text-slate-200 font-bold' : 'text-slate-400 dark:text-slate-600 line-through'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openModal({ serviceType: data.basicPlan.name })}
                  className="w-full rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3.5 text-xs font-black uppercase tracking-wider transition-all mt-6"
                >
                  Book Basic Servicing
                </button>
              </motion.div>

              {/* Pro Plan Card (Highlighted) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ ...SMOOTH_TRANSITION, delay: 0.1 }}
                className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#0E7C7B] p-7 space-y-6 shadow-2xl relative flex flex-col justify-between"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E7C7B] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  RECOMMENDED FOR GAMING & HEAVY USE
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-teal-600 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                      {data.proPlan.badge}
                    </span>
                    <span className="text-xs font-extrabold text-[#0E7C7B]">
                      {data.proPlan.turnaround}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {data.proPlan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-black text-[#0E7C7B]">{data.proPlan.price}</span>
                      <span className="text-xs text-slate-400 font-medium">/ complete overhaul</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {data.proPlan.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] block">EVERYTHING IN BASIC, PLUS:</span>
                    {data.proPlan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-900 dark:text-white font-extrabold">
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openModal({ serviceType: data.proPlan.name })}
                  className="w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white py-4 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02] mt-6"
                >
                  Book Pro Overhaul
                </button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 2: Signs Your Device Needs Cleaning */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">COMMON OVERHEATING SYMPTOMS</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Signs Your Laptop or PC Needs Thermal Cleaning
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.symptoms.map((sym, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black text-sm">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                    {sym}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 4-Step Cleaning & Optimization Process */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">SERVICING PROTOCOL</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                4-Step Precision Thermal Overhaul Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Initial Thermal Audit',
                  desc: 'FLIR thermal imaging to audit baseline CPU/GPU temperatures under stress.'
                },
                {
                  step: '02',
                  title: 'Full Disassembly',
                  desc: 'ESD-safe motherboard removal, fan motor cleaning & heatsink dust extraction.'
                },
                {
                  step: '03',
                  title: 'Thermal Grizzly Repasting',
                  desc: 'Cleaning old crusty thermal compound and applying fresh Thermal Grizzly Kryonaut.'
                },
                {
                  step: '04',
                  title: 'Benchmark Report',
                  desc: 'Post-servicing 15-minute stress test to confirm 15°C to 25°C temperature drop.'
                }
              ].map((proc, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 relative shadow-md"
                >
                  <span className="text-xs font-black text-[#0E7C7B] tracking-widest block">STEP {proc.step}</span>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{proc.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">WHY ROBUZTA THERMAL LAB</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                The Preferred Servicing Center in Ahmedabad
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Thermal Grizzly Kryonaut',
                  desc: 'We use high-conductivity 12.5 W/mK thermal paste for maximum heat dissipation.'
                },
                {
                  title: '100% Open Glass Lab',
                  desc: 'Watch senior technicians disassemble and clean your laptop live in South Bopal & Tragad.'
                },
                {
                  title: 'Zero-OTP Data Safety',
                  desc: 'We NEVER ask for passwords, pins, or SMS OTPs. Your personal files remain untouched.'
                },
                {
                  title: 'Same-Day Turnaround',
                  desc: 'Basic cleaning takes 45 mins; Pro overhaul takes 90 mins with before/after thermal report.'
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
        {data.faqs?.length > 0 && (
          <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">FREQUENTLY ASKED QUESTIONS</span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  Cleaning & Tune-Up Questions Answered
                </h2>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
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
        )}

        {/* Final CTA Banner */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <Sparkles size={16} />
                  <span>EXPRESS LAPTOP CLEANING IN AHMEDABAD</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Is Your Laptop Running Hot or Noisy?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Bring your laptop to Robuzta Techlabs in South Bopal or Tragad for immediate Thermal Grizzly repasting & ultrasonic cleaning.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openModal({ serviceType: 'Cleaning & Tune-Up' })}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <Wrench size={16} />
                  <span>Book Cleaning Check</span>
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
