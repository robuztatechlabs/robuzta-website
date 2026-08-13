'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Calendar,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Cpu,
  Wrench,
  Clock,
  Layers,
  HelpCircle,
  ChevronRight,
  HardDrive,
  Droplets,
  Monitor,
  Battery,
  Keyboard,
  Flame,
  Activity,
  Check,
  XCircle,
  AlertTriangle
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { LAPTOP_BRANDS, LAPTOP_PROBLEMS } from '@/data/laptopRepairData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

import Image from 'next/image';

const problemIconMap = {
  'motherboard-repair': Cpu,
  'screen-replacement': Monitor,
  'battery-replacement': Battery,
  'keyboard-replacement': Keyboard,
  'body-panel-repair': Layers,
  'charging-port-repair': Zap,
  'ram-ssd-upgrade': HardDrive,
  'fan-repair': Flame,
  'liquid-damage-repair': Droplets
};

export function LaptopRepairHubView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const hubFaqs = [
    {
      question: 'Where is Robuzta Techlabs laptop repair lab located in Ahmedabad?',
      answer: 'Our main repair lab is located at 103, First Floor, Sun South Winds, Safal Parisar Road, South Bopal, Ahmedabad (380057). We also offer pickup and drop delivery across Ahmedabad.'
    },
    {
      question: 'Do you charge any fee if my laptop cannot be repaired?',
      answer: 'No. We strictly follow a No Fix, No Fee policy. If our bench technicians are unable to resolve your hardware or motherboard issue, you pay zero diagnostic charges.'
    },
    {
      question: 'Will my personal files and photos remain safe during repair?',
      answer: 'Yes! Robuzta operates under a strict Zero-Password & Zero-OTP data safety protocol. We do not ask for your Windows/macOS passwords or personal OTPs to test hardware.'
    },
    {
      question: 'What warranty is provided on replaced laptop parts?',
      answer: 'All genuine OEM replacement parts (screens, batteries, keyboards, SSDs) come with an official 180-day Robuzta lab replacement warranty.'
    }
  ];

  const canonicalUrl = 'https://robuzta.com/laptop-repair/';

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
        name: 'Laptop Repair',
        item: canonicalUrl
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Laptop Repair Services in Ahmedabad',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      address: siteConfig.address,
      telephone: siteConfig.phone
    },
    areaServed: {
      '@type': 'City',
      name: 'Ahmedabad'
    },
    description: 'Component-level laptop repair, logic board BGA soldering, screen replacement, battery & SSD upgrades for Dell, HP, Acer, ASUS, MSI, Surface & MacBook.',
    serviceType: 'Laptop & Computer Repair'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hubFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main id="main-content" className="min-h-screen bg-white dark:bg-[#070E1A] text-slate-900 dark:text-white pt-20">
        


        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 dark:from-[#070E1A] dark:via-[#0b1628] dark:to-[#070E1A] border-b border-slate-200 dark:border-slate-800">
          
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E7C7B]/15 dark:bg-[#0E7C7B]/25 rounded-full blur-[150px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 border border-[#0E7C7B]/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300">
                <Sparkles size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                <span>Ahmedabad's Premier Component-Level Lab</span>
              </div>

              {/* SINGLE H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Laptop Repair Services in Ahmedabad —{' '}
                <span className="bg-gradient-to-r from-[#0E7C7B] via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                  By Brand & By Problem
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
                Component-level logic board BGA micro-soldering, OEM display & battery replacement, liquid damage restoration, and thermal servicing with zero-password privacy protection.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-8 py-4 text-sm font-black shadow-xl shadow-[#0E7C7B]/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Calendar size={18} />
                  <span>Book Free Bench Diagnosis</span>
                </button>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 text-sm font-bold shadow-lg transition-all"
                >
                  <WhatsappIcon size={18} className="text-white" />
                  <span>WhatsApp Diagnostic Quote</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-extrabold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#0E7C7B] dark:text-teal-400" />
                  No Fix, No Fee Policy
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  180-Day OEM Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={16} className="text-amber-500" />
                  2 to 4 Hour Express Repair
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: REPAIR BY BRAND (MINIMALIST & SLEEK WITH ACTUAL LOGOS) */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#070E1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                BRAND-SPECIFIC LAB REPAIR
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Select Your Laptop Brand
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Select your laptop brand to view specialized logic board schematics, supported models, and genuine OEM parts.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {LAPTOP_BRANDS.map((brand) => {
                // Per-brand image sizing tuning
                const logoSizeClass = {
                  hp: 'max-h-18 w-20',           // HP logo is tall/narrow icon
                  asus: 'max-h-14 w-full',        // ASUS wordmark is wide
                  surface: 'max-h-18 w-full',     // Microsoft logo is wide
                  msi: 'max-h-18 w-full',         // MSI wordmark/logo
                  dell: 'max-h-18 w-full',          // Dell icon
                  acer: 'max-h-12 w-full',        // Acer wordmark
                  macbook: 'max-h-14 w-14',       // Apple icon
                }[brand.slug] || 'max-h-16 w-auto';

                return (
                <Link
                  key={brand.slug}
                  href={`/laptop-repair/${brand.slug}/`}
                  className="group relative flex flex-col items-center text-center justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/60 p-5 sm:p-6 hover:border-[#0E7C7B] dark:hover:border-teal-500/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4 flex flex-col items-center w-full">
                    {/* Real Brand Logo Container */}
                    <div className="h-24 w-full rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/70 dark:border-slate-800 p-4 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      {brand.logoImage ? (
                        <Image
                          src={brand.logoImage}
                          alt={`${brand.name} Repair Logo`}
                          width={200}
                          height={100}
                          className={`${logoSizeClass} object-contain dark:brightness-110`}
                        />
                      ) : (
                        <span className="text-2xl font-black tracking-tighter text-[#0E7C7B] dark:text-teal-400">
                          {brand.name.toUpperCase()}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-300 transition-colors">
                        {brand.name} Repair
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                        {brand.shortTag}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-slate-200/60 dark:border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400">
                    <span>Explore Fixes</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                );
              })}

            </div>

          </div>
        </section>

        {/* SECTION 2: REPAIR BY PROBLEM (MINIMALIST & SLEEK) */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0a1424] border-y border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                HARDWARE ISSUE DIAGNOSTICS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Select Your Hardware Issue
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Transparent flat pricing hints, symptoms checklist, and express repair turnaround times for all hardware problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LAPTOP_PROBLEMS.map((prob) => {
                const ProbIcon = problemIconMap[prob.slug] || Wrench;
                return (
                  <Link
                    key={prob.slug}
                    href={`/laptop-repair/${prob.slug}/`}
                    className="group flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 hover:border-[#0E7C7B] dark:hover:border-teal-500/80 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="h-11 w-11 rounded-2xl bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 text-[#0E7C7B] dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ProbIcon size={20} />
                        </div>
                        <span className="text-xs font-black text-[#0E7C7B] dark:text-teal-400 font-mono bg-[#0E7C7B]/10 dark:bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-[#0E7C7B]/20 dark:border-teal-400/20">
                          {prob.priceEstimate.split(' ')[0]} {prob.priceEstimate.split(' ')[1]}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-300 transition-colors">
                          {prob.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                          {prob.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                        <Clock size={13} />
                        {prob.estimatedTime}
                      </span>
                      <span className="font-extrabold text-[#0E7C7B] dark:text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>View Solutions</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 3: ACCESSIBLE FAQ ACCORDION */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#070E1A]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                TRANSPARENT REPAIR ANSWERS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {hubFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-hub-answer-${idx}`}
                      className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white hover:text-[#0E7C7B] dark:hover:text-teal-300 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0E7C7B]' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-hub-answer-${idx}`}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/80 pt-4"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="py-14 bg-gradient-to-r from-[#0E7C7B] via-teal-700 to-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Need Immediate Laptop Diagnostics in Ahmedabad?
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-teal-100 font-medium">
              Visit our ESD-safe workbench in South Bopal / Tragad or request doorstep pickup. Component-level repair with zero password requirement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto rounded-2xl bg-white text-[#0E7C7B] hover:bg-slate-100 px-8 py-4 text-sm font-black shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Book Appointment Now
              </button>
              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700 px-8 py-4 text-sm font-bold text-white transition-all"
              >
                Call Hotline: {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
