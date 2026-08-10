'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Wrench,
  Clock,
  ChevronRight,
  Check,
  AlertTriangle,
  HelpCircle,
  Cpu,
  Monitor,
  Battery,
  Keyboard,
  HardDrive,
  Droplets,
  Award,
  FileText,
  Activity,
  Layers,
  ArrowUpRight,
  XCircle,
  ThumbsUp,
  Flame,
  Search
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { LAPTOP_BRANDS, LAPTOP_PROBLEMS } from '@/data/laptopRepairData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

// Problem Icons Mapping for Visual Consistency
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

export function LaptopRepairSlugView({ data }) {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  if (!data) return null;

  const isBrand = data.entityType === 'brand';
  const pageTitle = isBrand ? `${data.name} Laptop Repair` : data.name;
  const canonicalUrl = `https://robuzta.com/laptop-repair/${data.slug}/`;

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
        item: 'https://robuzta.com/laptop-repair/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        item: canonicalUrl
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
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
    description: data.metaDescription,
    serviceType: 'Laptop Hardware Repair'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (data.faqs || []).map((faq) => ({
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
      {data.faqs && data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />

      <main id="main-content" className="min-h-screen bg-white dark:bg-[#070E1A] text-slate-900 dark:text-white pt-24 sm:pt-28">
        


        {/* ══════════════════════════════════════════════
            SECTION 1 — HERO & VISUAL DIAGNOSTIC SUMMARY
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 dark:from-[#070E1A] dark:via-[#0b1628] dark:to-[#070E1A] border-b border-slate-200 dark:border-slate-800">
          
          {/* Ambient Glow Orbs */}
          <div className="pointer-events-none absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#0E7C7B]/15 dark:bg-[#0E7C7B]/25 rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 dark:bg-cyan-500/15 rounded-full blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 border border-[#0E7C7B]/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300">
                  <Sparkles size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                  <span>{isBrand ? `Certified ${data.name} Lab Care` : `Component-Level Diagnostics`}</span>
                </div>

                {/* H1 Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  {data.h1}
                </h1>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                  {data.tagline}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={openModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-8 py-4 text-sm font-black shadow-xl shadow-[#0E7C7B]/30 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <Calendar size={18} />
                    <span>Book Free Diagnosis</span>
                  </button>

                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 text-sm font-bold shadow-lg transition-all"
                  >
                    <WhatsappIcon size={18} className="text-white" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <a
                    href={siteConfig.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-6 py-4 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    <Phone size={17} className="text-[#0E7C7B] dark:text-teal-400" />
                    <span>Call Hotline</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs font-extrabold text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#0E7C7B] dark:text-teal-400" />
                    Zero-Password Privacy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    180-Day OEM Warranty
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap size={16} className="text-amber-500" />
                    No Fix, No Fee
                  </span>
                </div>

              </div>

              {/* Right Summary Glassmorphism Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-400 block">
                        LAB DIAGNOSTIC SPEC SHEET
                      </span>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                        {isBrand ? `${data.name} Lab Specs` : data.problemTitle}
                      </h2>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center font-bold">
                      {isBrand ? data.name.charAt(0) : <Wrench size={22} />}
                    </div>
                  </div>

                  {isBrand ? (
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                          Supported {data.name} Models:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {data.supportedModels.map((m) => (
                            <span
                              key={m}
                              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-emerald-900 dark:text-emerald-200">
                          <strong className="font-black block">100% Genuine OEM Grade Parts</strong>
                          Original displays, batteries, keyboards, and BGA chips in stock.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Repair Time</span>
                          <span className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 mt-1">
                            <Clock size={14} className="text-[#0E7C7B] dark:text-teal-400" />
                            {data.estimatedTime}
                          </span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Price Estimate</span>
                          <span className="text-sm font-black text-[#0E7C7B] dark:text-teal-400 font-mono mt-1 block">
                            {data.priceEstimate.split(' ')[0]} {data.priceEstimate.split(' ')[1]}
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 border border-[#0E7C7B]/30 flex items-start gap-3">
                        <Activity size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-slate-700 dark:text-slate-200">
                          <strong className="font-black block text-slate-900 dark:text-white">Bench Testing Equipment:</strong>
                          FLIR Thermal Imaging, BGA Optical Rework Station & Digital Multimeter Voltage Tracing.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span>Lab Location: South Bopal & Tragad</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-black">● Lab Open Now</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2 — VISUAL DIAGNOSTIC BREAKDOWN / SYMPTOMS
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#070E1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            {isBrand ? (
              <div className="space-y-10">
                
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                    LAB CAPABILITIES & WORKBENCH GUARANTEE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    Why Choose Robuzta for {data.name} Repairs?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    We repair {data.name} laptops at the chip component level — saving you up to 70% compared to full motherboard replacement costs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.brandHighlights.map((hl, idx) => (
                    <div
                      key={hl}
                      className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 hover:border-[#0E7C7B] dark:hover:border-teal-500/80 transition-all duration-300 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-2xl bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center font-black text-sm">
                          0{idx + 1}
                        </div>
                        <CheckCircle2 size={20} className="text-emerald-500" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white leading-snug">
                        {hl}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Performed in our ESD-safe cleanroom with FLIR thermal inspection and stereo microscopes.
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Symptoms Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle size={15} />
                      SYMPTOMS CHECKLIST
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      Signs You Need {data.name}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      If your laptop exhibits any of these symptoms, bring it in for a free bench evaluation before further circuit degradation occurs.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {data.symptoms.map((sym) => (
                      <div
                        key={sym}
                        className="flex items-start gap-3.5 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20"
                      >
                        <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Repair Steps Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400 flex items-center gap-1.5">
                      <Wrench size={15} />
                      BENCH WORKFLOW
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      How Robuzta Fixes {data.name}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our certified engineers follow a 4-step diagnostic and component repair procedure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {data.repairProcess.map((step, idx) => (
                      <div
                        key={step}
                        className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60"
                      >
                        <div className="h-7 w-7 rounded-xl bg-[#0E7C7B] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          0{idx + 1}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — VISUAL COMPARISON (ROBUZTA VS LOCAL REPAIR SHOPS)
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0a1424] border-y border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                TRANSPARENCY COMPARISON
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Robuzta Lab Standard vs General Repair Shops
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Protect your laptop hardware, data privacy, and money with transparent engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Robuzta Standard Card */}
              <div className="rounded-3xl border-2 border-[#0E7C7B] bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0E7C7B] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl">
                  ROBUZTA CERTIFIED
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">Robuzta Techlabs</h3>
                    <span className="text-xs font-bold text-[#0E7C7B] dark:text-teal-400">Precision Component Lab</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span><strong>Zero Password / Zero OTP:</strong> Your personal data remains 100% locked & safe.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span><strong>BGA Micro-Soldering:</strong> Fix individual shorted ICs instead of ₹30,000+ board swaps.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span><strong>No Fix, No Fee Guarantee:</strong> Pay zero charges if we cannot repair your machine.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span><strong>180-Day OEM Warranty:</strong> Digital invoice & serial-verified part warranty.</span>
                  </li>
                </ul>
              </div>

              {/* General Shop Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-6 sm:p-8 space-y-6 opacity-90">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                    <XCircle size={26} className="text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">General Local Repair Shop</h3>
                    <span className="text-xs font-bold text-slate-400">Uncertified Counter Repair</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-3">
                    <XCircle size={18} className="text-rose-500 shrink-0" />
                    <span>Ask for your Windows/macOS passwords and access personal files.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle size={18} className="text-rose-500 shrink-0" />
                    <span>Insist on expensive complete motherboard replacement without component testing.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle size={18} className="text-rose-500 shrink-0" />
                    <span>Charge inspection fees even when device is not repaired.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle size={18} className="text-rose-500 shrink-0" />
                    <span>Short 7-day or zero warranty on duplicate or used parts.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — DYNAMIC VISUAL CROSS-LINKING MATRIX
        ══════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#070E1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                {isBrand ? `REPAIR SERVICES FOR ${data.name.toUpperCase()}` : `REPAIR ${data.name.toUpperCase()} BY BRAND`}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {isBrand ? `What Needs Repair on Your ${data.name} Laptop?` : `Select Brand for ${data.name}`}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {isBrand
                  ? `Select the hardware issue below to view exact diagnostic workflow, pricing, and turnaround times for ${data.name}.`
                  : `Select your laptop brand to get specialized OEM component replacement and BGA schematics.`}
              </p>
            </div>

            {/* CROSS-LINKING MATRIX GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {isBrand ? (
                /* ON BRAND PAGE -> LINK TO ALL 9 PROBLEMS WITH CLEAN COMPACT CARDS */
                LAPTOP_PROBLEMS.map((prob) => {
                  const ProbIcon = problemIconMap[prob.slug] || Wrench;
                  return (
                    <Link
                      key={prob.slug}
                      href={`/laptop-repair/${prob.slug}/`}
                      className="group flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-5 sm:p-6 hover:border-[#0E7C7B] dark:hover:border-teal-500/80 hover:shadow-xl transition-all duration-300"
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
                            {data.name} {prob.name}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 line-clamp-1">
                            {prob.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock size={13} />
                          {prob.estimatedTime}
                        </span>
                        <span className="text-[#0E7C7B] dark:text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-black">
                          <span>Fix Issue</span>
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  );
                })
              ) : (
                /* ON PROBLEM PAGE -> LINK TO ALL 7 BRANDS WITH CLEAN BRAND LOGO CARDS */
                LAPTOP_BRANDS.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/laptop-repair/${brand.slug}/`}
                    className="group relative flex flex-col items-center text-center justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-5 sm:p-6 hover:border-[#0E7C7B] dark:hover:border-teal-500/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="space-y-3.5 flex flex-col items-center w-full">
                      {/* Real Brand Logo Container */}
                      <div className="h-16 w-full max-w-[130px] rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/70 dark:border-slate-800 p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                        {brand.logoImage ? (
                          <Image
                            src={brand.logoImage}
                            alt={`${brand.name} Repair Logo`}
                            width={110}
                            height={40}
                            className="max-h-9 w-auto object-contain dark:brightness-110"
                          />
                        ) : (
                          <span className="text-xl font-black tracking-tighter text-[#0E7C7B] dark:text-teal-400">
                            {brand.name.toUpperCase()}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-300 transition-colors">
                          {brand.name} {data.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {brand.shortTag}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3.5 mt-3 border-t border-slate-200/60 dark:border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400">
                      <span>Fix {brand.name}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Back to Hub Link */}
            <div className="text-center pt-6">
              <Link
                href="/laptop-repair/"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white dark:hover:bg-teal-500 dark:hover:text-white px-6 py-3 text-xs font-bold transition-all shadow-sm"
              >
                <span>← View All Brands & Problem Solutions</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — ACCESSIBLE FAQ ACCORDION
        ══════════════════════════════════════════════ */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0a1424] border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                  REPAIR TRANSPARENCY
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-slug-${idx}`}
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
                          id={`faq-answer-slug-${idx}`}
                          className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4"
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
        )}

        {/* ══════════════════════════════════════════════
            SECTION 6 — BOTTOM CTA BANNER
        ══════════════════════════════════════════════ */}
        <section className="py-14 bg-gradient-to-r from-[#0E7C7B] via-teal-700 to-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Ready to Fix Your {data.name}?
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-teal-100 font-medium">
              Visit our lab in South Bopal / Tragad, Ahmedabad or request doorstep pickup. 180-day warranty, transparent quote approval & zero data risk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto rounded-2xl bg-white text-[#0E7C7B] hover:bg-slate-100 px-8 py-4 text-sm font-black shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                Book Bench Diagnosis Now
              </button>
              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700 px-8 py-4 text-sm font-bold text-white transition-all"
              >
                Call: {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
