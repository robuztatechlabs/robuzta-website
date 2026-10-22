'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Header
} from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Laptop,
  Smartphone,
  Gamepad2,
  HardDrive,
  Wrench,
  Search,
  Phone,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Check,
  Quote,
  Zap,
  CircleDot
} from 'lucide-react';
import { ABOUT_PAGE_DATA } from '@/data/aboutData';
import { useBookingModal } from '@/context/BookingModalContext';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function AboutPageView() {
  const { openModal } = useBookingModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const data = ABOUT_PAGE_DATA;

  // Icon mapping for What We Do
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop size={22} />;
      case 'Smartphone':
        return <Smartphone size={22} />;
      case 'Gamepad2':
        return <Gamepad2 size={22} />;
      case 'HardDrive':
        return <HardDrive size={22} />;
      case 'Wrench':
      default:
        return <Wrench size={22} />;
    }
  };

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
        name: 'About Us',
        item: data.canonicalUrl
      }
    ]
  };

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: data.h1,
    description: data.metaDescription,
    url: data.canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Robuzta Techlabs',
      telephone: data.getInTouch.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      }
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-24 lg:py-28 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[170px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest mx-auto">
              <Sparkles size={14} className="text-[#0E7C7B]" />
              <span>ROBUZTA TECHLABS &bull; {data.h1}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
              {data.mainHeading}
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {data.introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={() => openModal({ serviceType: 'About Page Inspection' })}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
              >
                <Wrench size={16} />
                <span>Talk to Repair Team</span>
              </button>

              <a
                href={`tel:${data.getInTouch.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#0E7C7B] px-7 py-4 text-xs font-black uppercase tracking-wider transition-all"
              >
                <Phone size={16} className="text-[#0E7C7B]" />
                <span>{data.getInTouch.phone}</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                  {data.whoWeAre.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {data.whoWeAre.heading}
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  <p>{data.whoWeAre.paragraphs[0]}</p>
                  <p>{data.whoWeAre.paragraphs[1]}</p>
                  <p>{data.whoWeAre.paragraphs[3]}</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-gradient-to-br from-[#0E7C7B]/10 via-teal-500/5 to-slate-900/5 dark:from-[#0E7C7B]/20 dark:to-slate-900 border-2 border-[#0E7C7B] p-8 space-y-4 shadow-xl text-center">
                  <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B] text-white flex items-center justify-center mx-auto shadow-md">
                    <Search size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {data.whoWeAre.paragraphs[2]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                    We believe in accurate diagnosis before replacing any parts. Visible symptoms don&apos;t always tell the full story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 4. OUR APPROACH — Connected Step-Flow Diagram */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.ourApproach.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.ourApproach.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                {data.ourApproach.description}
              </p>
            </div>

            {/* Step-Flow Diagram */}
            <div className="relative max-w-4xl mx-auto">
              {/* Connecting vertical line (desktop) */}
              <div className="hidden sm:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#0E7C7B]/60 via-teal-500/40 to-[#0E7C7B]/60" />

              <div className="space-y-3 sm:space-y-0">
                {data.ourApproach.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex items-start gap-4 sm:gap-5 sm:py-4"
                  >
                    {/* Node Circle */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white text-sm font-black shadow-lg shadow-[#0E7C7B]/20">
                      {step.number}
                    </div>

                    {/* Step Content Card */}
                    <div className="flex-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 hover:border-[#0E7C7B]/40 transition-colors">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 6. FREQUENTLY ASKED QUESTIONS */}
        {data.faqs?.length > 0 && (
          <section className="py-14 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                  {data.faqsSubtitle}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {data.faqsTitle}
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

        {/* 7. GET TO KNOW US / CTA */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <Sparkles size={16} />
                  <span>{data.getInTouch.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  {data.getInTouch.heading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {data.getInTouch.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${data.getInTouch.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <Phone size={16} />
                  <span>{data.getInTouch.callLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
