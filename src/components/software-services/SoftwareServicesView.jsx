'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
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
  Check,
  Shield,
  FileCheck,
  Lock,
  RefreshCw,
  HardDrive
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { SOFTWARE_BRANDS, SOFTWARE_SERVICES_PAGE_DATA } from '@/data/softwareServicesData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function SoftwareServicesView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const data = SOFTWARE_SERVICES_PAGE_DATA;

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
        name: 'Software Services',
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
                  <Code size={14} className="text-[#0E7C7B]" />
                  <span>GENUINE OS & SOFTWARE LABORATORY</span>
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
                    <CheckCircle2 size={16} /> 100% Zero-OTP Data Protection
                  </span>
                  <span className="flex items-center gap-1.5 text-[#0E7C7B]">
                    <ShieldCheck size={16} /> Genuine Digital Licenses
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Clock size={16} /> 60-Minute Fast Turnaround
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openModal({ serviceType: 'Software Services' })}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                  >
                    <Wrench size={16} />
                    <span>Book Software Service</span>
                  </button>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#0E7C7B] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <Phone size={16} className="text-[#0E7C7B]" />
                    <span>Call Software Engineer</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi Robuzta Techlabs, I need software service for my laptop/PC`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-md"
                  >
                    <WhatsappIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Software Trust Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Software Guarantee
                    </span>
                    <span className="text-[10px] font-black text-teal-600 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                      Genuine Software
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Windows Activation:</span>
                      <span className="font-extrabold text-emerald-600">Official Digital License</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Data Preservation:</span>
                      <span className="font-extrabold text-slate-900 dark:text-white">100% User File Backup</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Driver Stability:</span>
                      <span className="font-extrabold text-[#0E7C7B]">Verified OEM Drivers</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Service Lab:</span>
                      <span className="font-extrabold text-slate-900 dark:text-white">South Bopal & Tragad</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal({ serviceType: 'Software Services' })}
                    className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    Get Quick Software Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Software Platforms Bar */}
        <section className="py-8 sm:py-12 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                SUPPORTED SOFTWARE PLATFORMS & PRODUCT ECOSYSTEMS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              {SOFTWARE_BRANDS.map((brand, i) => (
                <div
                  key={i}
                  className="h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 flex items-center justify-center shadow-sm hover:border-[#0E7C7B] transition-all"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-9 w-auto max-w-[120px] object-contain dark:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: 5 Software Service Cards */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">SOFTWARE SERVICES</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Complete Operating System & Software Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services?.map((srv, idx) => (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.08 }}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#0E7C7B] bg-[#0E7C7B]/10 px-3 py-1 rounded-full">
                        {srv.turnaround}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                        {srv.price}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {srv.summary}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {srv.details.map((dt, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">
                          <Check size={14} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openModal({ serviceType: srv.title })}
                    className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Request Software Fix</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Diagnostic & Software Workflow */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">SERVICE WORKFLOW</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                4-Step Software Optimization Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'User Data Backup',
                  desc: 'Pre-service backup of Desktop, Documents, Downloads & browser data to prevent loss.'
                },
                {
                  step: '02',
                  title: 'Clean OS / App Setup',
                  desc: 'GPT/UEFI partition creation, genuine OS installation & digital license activation.'
                },
                {
                  step: '03',
                  title: 'OEM Driver Tuning',
                  desc: 'Installation of official chipset, GPU, Wi-Fi & audio drivers for 100% stability.'
                },
                {
                  step: '04',
                  title: 'Final Health Audit',
                  desc: 'Boot time optimization, startup app reduction & antivirus protection setup.'
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
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">WHY ROBUZTA SOFTWARE LAB</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Fast, Genuine & Data-Safe Software Support
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: '100% Zero-OTP Policy',
                  desc: 'We NEVER ask for unlock passwords, pins, or SMS OTPs. Your personal files remain 100% private.'
                },
                {
                  title: 'Genuine Digital Licenses',
                  desc: 'Official Microsoft Windows & Office activation keys that pass Windows Genuine Validation.'
                },
                {
                  title: 'Zero Bloatware',
                  desc: 'Clean OS installation without annoying adware, trialware, or unwanted background apps.'
                },
                {
                  title: 'Same-Day Fast Support',
                  desc: 'Most software services are completed within 30 to 90 minutes at South Bopal & Tragad labs.'
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
          <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">FREQUENTLY ASKED QUESTIONS</span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  Software Service Questions Answered
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
                  <span>SAME-DAY SOFTWARE SERVICES IN AHMEDABAD</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Need Windows, Office, or Virus Removal?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Visit Robuzta Techlabs in South Bopal or Tragad for fast OS installation, software setup, and system optimization.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openModal({ serviceType: 'Software Services' })}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <Wrench size={16} />
                  <span>Book Software Fix</span>
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
