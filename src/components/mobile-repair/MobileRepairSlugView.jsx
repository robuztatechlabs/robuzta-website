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
  CheckCircle,
  Camera,
  ScanFace,
  RotateCcw,
  Lock,
  Flame,
  Wifi,
  Volume2
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

function getProblemIcon(prob) {
  const t = (prob.title || '').toLowerCase();
  if (t.includes('face id') || t.includes('biometric')) return ScanFace;
  if (t.includes('camera') || t.includes('lens')) return Camera;
  if (t.includes('water') || t.includes('liquid') || t.includes('moisture')) return Droplets;
  if (t.includes('screen') || t.includes('display') || t.includes('touch') || t.includes('amoled') || t.includes('lcd')) return Monitor;
  if (t.includes('battery') || t.includes('drain')) return Battery;
  if (t.includes('charging') || t.includes('charge') || t.includes('port')) return Zap;
  if (t.includes('stuck') || t.includes('restart') || t.includes('boot') || t.includes('logo')) return RotateCcw;
  if (t.includes('unavailable') || t.includes('lock') || t.includes('passcode')) return Lock;
  if (t.includes('back glass') || t.includes('hinge') || t.includes('body') || t.includes('casing')) return Layers;
  if (t.includes('heat') || t.includes('warm') || t.includes('hot') || t.includes('overheat')) return Flame;
  if (t.includes('motherboard') || t.includes('dead') || t.includes('power') || t.includes('board') || t.includes('circuit')) return Cpu;
  if (t.includes('wifi') || t.includes('wi-fi') || t.includes('network') || t.includes('signal') || t.includes('sim')) return Wifi;
  if (t.includes('speaker') || t.includes('mic') || t.includes('sound') || t.includes('audio')) return Volume2;

  // Secondary fallback to description
  const desc = (prob.description || '').toLowerCase();
  if (desc.includes('face id')) return ScanFace;
  if (desc.includes('camera')) return Camera;
  if (desc.includes('screen') || desc.includes('display')) return Monitor;
  if (desc.includes('battery')) return Battery;
  if (desc.includes('charging') || desc.includes('charge')) return Zap;
  if (desc.includes('water') || desc.includes('liquid')) return Droplets;
  if (desc.includes('heat') || desc.includes('hot')) return Flame;

  return problemIconMap[prob.slug] || Smartphone;
}

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
              <div className="lg:col-span-7 space-y-5">
                
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
                    <CheckCircle2 size={16} /> 100% No Password Needed
                  </span>
                  <span className="flex items-center gap-1.5 text-[#0E7C7B]">
                    <ShieldCheck size={16} /> Limited Warranty
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
                    href={siteConfig.phoneHref}
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

              {/* Right Side: Brand Logo Graphic or Problem Card */}
              <div className="lg:col-span-5 flex justify-center">
                {isBrand ? (
                  <div className="w-full max-w-sm sm:max-w-md rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0E7C7B]/10 via-transparent to-cyan-500/10 dark:from-[#0E7C7B]/20 dark:to-teal-500/10 rounded-3xl blur-2xl" />
                    <div className="relative z-10 w-full flex items-center justify-center min-h-[200px] sm:min-h-[240px]">
                      <img
                        src={data.logoImage}
                        alt={`${data.name} logo`}
                        className={`max-h-40 sm:max-h-52 w-auto max-w-[240px] sm:max-w-[320px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md ${
                          (data.slug === 'iphone' || data.slug === 'apple' || data.slug === 'nothing')
                            ? 'dark:invert dark:brightness-200'
                            : 'dark:brightness-110'
                        }`}
                      />
                    </div>
                    <div className="relative z-10 mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                      <span>Certified {data.name} Care & Lab Diagnostics</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Diagnostic Info
                      </span>
                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        Live Lab Inspection
                      </span>
                    </div>

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

                    <button
                      onClick={() => openModal({ serviceType: data.name })}
                      className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0E7C7B] hover:text-white text-slate-900 dark:text-white py-3 text-xs font-black uppercase tracking-wider transition-all"
                    >
                      Book Diagnostic Check
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Common Symptoms Section (Only for Problem/Fault Pages) */}
        {!isBrand && data.symptoms?.length > 0 && (
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
                    COMMON SYMPTOMS & FAULTS
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    Signs Your Device Needs {data.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.symptoms.map((item, idx) => (
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
        )}

        {/* Common Problems Grid Section (If custom commonProblems specified on brand) */}
        {data.commonProblems?.length > 0 && (
          <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {data.problemsTitle || `What's Going Wrong With Your ${data.name} Phone?`}
                </h2>
                {data.problemsDescription && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                    {data.problemsDescription}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.commonProblems.map((prob, idx) => {
                  const IconComp = getProblemIcon(prob);
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.05 }}
                      className="h-full"
                    >
                      <div
                        className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm h-full flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="h-11 w-11 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-400 flex items-center justify-center font-black shadow-sm">
                            <IconComp size={22} />
                          </div>
                          <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                            {prob.title}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            {prob.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Cross-Linking Section */}
        {/* Brand Pages -> Link to all Problem/Specialty Pages */}
        {/* Problem/Specialty Pages -> Link to all 10 Brand Pages */}

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
                  Visit Robuzta Techlabs in South Bopal or Tragad for live workbench diagnosis, 100% data safety, and Limited Warranty.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openModal({ serviceType: data.name })}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <Wrench size={16} />
                  <span>Book Check</span>
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
