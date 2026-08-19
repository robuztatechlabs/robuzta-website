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
  ChevronDown,
  ArrowRight,
  Sparkles,
  Wrench,
  Clock,
  ChevronRight,
  Check,
  HelpCircle,
  Cpu,
  Monitor,
  Battery,
  Droplets,
  Layers,
  Smartphone,
  CheckCircle
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import { MOBILE_BRANDS, MOBILE_PROBLEMS } from '@/data/mobileRepairData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

// Problem Icons Mapping
const problemIconMap = {
  'screen-replacement': Monitor,
  'battery-replacement': Battery,
  'charging-port-repair': Zap,
  'motherboard-repair': Cpu,
  'dead-phone-repair': Droplets
};

export function MobileRepairSlugView({ data }) {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  if (!data) return null;

  const isBrand = data.entityType === 'brand';
  const pageTitle = isBrand ? `${data.name} Mobile Repair` : data.name;
  const canonicalUrl = `https://robuzta.com/mobile-repair/${data.slug}/`;

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
        name: 'Mobile Repair',
        item: 'https://robuzta.com/mobile-repair/'
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
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-10 sm:py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

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
                  <Smartphone size={14} className="text-[#0E7C7B]" />
                  <span>{isBrand ? 'BRAND SPECIALIST LAB' : 'EXPERT PROBLEM DIAGNOSTICS'}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                  {data.h1}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                  {data.tagline}
                </p>

                {/* Key Perks Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} /> 100% Zero OTP Required
                  </span>
                  <span className="flex items-center gap-1.5 text-[#0E7C7B]">
                    <ShieldCheck size={16} /> 180-Day Warranty
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Clock size={16} /> 30-Min Fast Turnaround
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openModal({ serviceType: data.name })}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                  >
                    <Wrench size={16} />
                    <span>Get Instant Quote</span>
                  </button>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#0E7C7B] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <Phone size={16} className="text-[#0E7C7B]" />
                    <span>Call Engineer</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi Robuzta Techlabs, I need ${data.h1}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-md"
                  >
                    <WhatsappIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Header Card / Logo Graphic */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      {isBrand ? 'Supported Series' : 'Diagnostic Info'}
                    </span>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      Live Lab Inspection
                    </span>
                  </div>

                  {isBrand ? (
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        We stock Grade-A OEM display panels, batteries, and charging flex assemblies for:
                      </p>
                      <ul className="space-y-1.5 text-xs font-bold text-slate-900 dark:text-slate-100">
                        {data.supportedModels?.map((mod, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check size={14} className="text-[#0E7C7B] shrink-0" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">Repair Time:</span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{data.estimatedTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">Estimated Cost:</span>
                        <span className="font-extrabold text-[#0E7C7B]">{data.priceEstimate}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">Data Privacy:</span>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">100% Safe (No OTP)</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => openModal({ serviceType: data.name })}
                    className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    Book Diagnostic Check
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Symptoms or Brand Highlights Section */}
        <section className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={SMOOTH_TRANSITION}
              className="space-y-8"
            >
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                  {isBrand ? 'WHY CHOOSE ROBUZTA' : 'COMMON SYMPTOMS & FAULTS'}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {isBrand ? `Specialized ${data.name} Repair Standards` : `Signs Your Device Needs ${data.name}`}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(isBrand ? data.brandHighlights : data.symptoms)?.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-sm hover:border-[#0E7C7B]/40 hover:shadow-lg transition-all"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black text-sm">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Customers Choose Us */}
        <section className="py-12 sm:py-16 bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                PROVEN REPAIR EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Why Customers Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: '1000+ Devices Repaired', desc: 'Trusted by thousands across Ahmedabad' },
                { title: 'Chip-Level Repair Experts', desc: 'Precision BGA & motherboard schematics' },
                { title: 'Genuine OEM Parts', desc: '100% original displays, batteries & ICs' },
                { title: 'Same-Day Repairs', desc: 'Fast express 1–3 hours turnaround' },
                { title: 'Transparent Pricing', desc: 'Upfront estimate with no hidden fees' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-2 shadow-sm hover:border-[#0E7C7B] dark:hover:border-teal-500/80 transition-all duration-300 group text-center flex flex-col items-center justify-center"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center text-lg font-black shrink-0 group-hover:scale-110 transition-transform">
                    ⭐
                  </div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic & Repair Protocol */}

        <section className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">WORKBENCH TRANSPARENCY</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                4-Step Precision Mobile Repair Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Free Diagnostic Check',
                  desc: 'Microscopic inspection of display connectors, battery health, or power IC short circuits in your presence.'
                },
                {
                  step: '02',
                  title: 'Transparent Quote',
                  desc: 'Upfront component pricing with zero hidden charges. You approve before any repair work begins.'
                },
                {
                  step: '03',
                  title: 'ESD-Safe Component Fix',
                  desc: 'Original OEM display swap or BGA chip micro-soldering performed live at our open glass workbench.'
                },
                {
                  step: '04',
                  title: 'Quality Testing & Warranty',
                  desc: 'Comprehensive 15-point diagnostic check (touch, camera, audio, charging) backed by 180-day warranty.'
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

        {/* Cross-Linking Section */}
        {/* Brand Pages -> Link to all Problem/Specialty Pages */}
        {/* Problem/Specialty Pages -> Link to all 10 Brand Pages */}
        <section className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                  {isBrand ? 'EXPLORE REPAIR SERVICES' : 'EXPLORE SUPPORTED BRANDS'}
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {isBrand ? `Common Repairs for ${data.name} Phones` : `Mobile Repair for All Major Brands`}
                </h3>
              </div>
              <Link
                href="/mobile-repair/"
                className="text-xs font-black text-[#0E7C7B] hover:underline flex items-center gap-1"
              >
                <span>View Mobile Hub</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {isBrand ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {MOBILE_PROBLEMS.map((prob) => {
                  const IconComp = problemIconMap[prob.slug] || Wrench;
                  return (
                    <Link
                      key={prob.slug}
                      href={`/mobile-repair/${prob.slug}/`}
                      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3 hover:border-[#0E7C7B] shadow-sm hover:shadow-lg transition-all group block"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center group-hover:bg-[#0E7C7B] group-hover:text-white transition-all">
                        <IconComp size={18} />
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors leading-snug">
                        {data.name} {prob.name}
                      </h4>
                      <span className="text-[11px] text-[#0E7C7B] font-bold flex items-center gap-1">
                        <span>View Fix</span> <ArrowRight size={12} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {MOBILE_BRANDS.map((br) => (
                  <Link
                    key={br.slug}
                    href={`/mobile-repair/${br.slug}/`}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3 hover:border-[#0E7C7B] shadow-sm hover:shadow-lg transition-all group block flex flex-col justify-between"
                  >
                    <div className="space-y-1.5 text-center">
                      <div className="h-14 w-full rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 p-2.5 flex items-center justify-center transition-all group-hover:border-[#0E7C7B]/40">
                        <img
                          src={br.logoImage}
                          alt={`${br.name} logo`}
                          className="max-h-9 w-auto max-w-[110px] object-contain dark:brightness-110 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors block">
                        {br.name}
                      </span>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                        {br.shortTag}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#0E7C7B] font-bold flex items-center justify-center gap-1 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span>Service Page</span> <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQs Section */}
        {data.faqs?.length > 0 && (
          <section className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">FREQUENTLY ASKED QUESTIONS</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Got Questions About {data.name}?
                </h3>
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
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <Sparkles size={16} />
                  <span>SAME-DAY MOBILE REPAIR IN AHMEDABAD</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Need Fast Repair for Your {data.name}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Visit Robuzta Techlabs in South Bopal or Tragad for live workbench diagnosis, 100% data safety, and 180-day warranty.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openModal({ serviceType: data.name })}
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
