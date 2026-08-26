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
  CheckCircle2,
  Phone,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Shield,
  Clock,
  ArrowRight,
  Cpu,
  Lock,
  MessageSquare,
  Award,
  MapPin,
  Check,
  Zap,
  Quote,
  Star
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

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight max-w-4xl mx-auto">
              {data.mainHeading}
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
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
                href={`tel:${data.getInTouch.phone}`}
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

        {/* 3. WHAT WE DO (5 Technology Services) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.whatWeDo.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.whatWeDo.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whatWeDo.services.map((srv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.06 }}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all group"
                >
                  <div className="h-10 w-10 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black group-hover:bg-[#0E7C7B] group-hover:text-white transition-all">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {srv.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR APPROACH (5-Step Protocol) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.ourApproach.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.ourApproach.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                {data.ourApproach.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {data.ourApproach.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-2.5 shadow-sm relative hover:border-[#0E7C7B] transition-all"
                >
                  <span className="text-xs font-black text-[#0E7C7B] tracking-widest block">
                    {st.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHY CUSTOMERS CHOOSE US (6 Trust Cards) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.whyChooseUs.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.whyChooseUs.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whyChooseUs.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md hover:border-[#0E7C7B] transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black shrink-0 text-base group-hover:scale-110 transition-transform">
                    ⭐
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CEO / FOUNDER STATEMENT SPOTLIGHT (KEPT AS REQUESTED) */}
        <section className="py-14 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800/80 relative bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden"
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center z-10">
                
                {/* Photo Frame */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 p-2 bg-white dark:bg-slate-950 shadow-md max-w-[260px] sm:max-w-[300px] w-full text-center space-y-2">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src="https://robuzta.com/wp-content/uploads/2026/02/Mr.-Pranshu-Maheshwari.png"
                        alt="Mr. Pranshu Maheshwari - Founder & CEO Robuzta Techlabs"
                        width={300}
                        height={360}
                        loading="lazy"
                        className="w-full h-auto object-cover rounded-2xl"
                      />
                    </div>

                    <div className="pt-1.5 pb-1">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        Mr. Pranshu Maheshwari
                      </h3>
                      <p className="text-xs font-bold text-[#0E7C7B] dark:text-teal-400">
                        Founder & CEO &bull; Robuzta Techlabs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Founder Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md mx-auto lg:mx-0">
                    <Quote size={20} />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 px-3 py-1 rounded-full border border-[#0E7C7B]/20 inline-block">
                      FOUNDER STATEMENT
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                      &quot;No Solution Found? Robuzta Hai Na!&quot;
                    </h2>
                  </div>

                  <blockquote className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium italic border-l-0 lg:border-l-4 border-[#0E7C7B] pl-0 lg:pl-3.5 py-0.5">
                    &quot;Over a decade of repair care shaped our core promise: total accuracy, upfront pricing, and zero data risk.&quot;
                  </blockquote>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-extrabold pt-1 max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-800 dark:text-slate-200">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                        <Check size={13} />
                      </div>
                      <span>Expert Technicians</span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-800 dark:text-slate-200">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                        <Check size={13} />
                      </div>
                      <span>Zero Password Data Protection</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openModal({ formType: 'About Page Contact Senior Technician' })}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/20 transition-all transform hover:scale-105 cursor-pointer min-h-[46px]"
                    >
                      <span>Contact Senior Technician</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. OUR REPAIR PHILOSOPHY (LIGHT THEME STYLING) */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
                <Quote size={14} className="text-amber-500" />
                <span>{data.ourPhilosophy.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {data.ourPhilosophy.heading}
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                {data.ourPhilosophy.description}
              </p>
            </div>

            {/* 5 Belief Cards Grid */}
            <div className="space-y-4 max-w-5xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400 text-center block">
                {data.ourPhilosophy.beliefsTitle}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: 'Clear Diagnosis', icon: Search, desc: 'Exact fault finding first' },
                  { title: 'Honest Communication', icon: MessageSquare, desc: 'Upfront cost & details' },
                  { title: 'Careful Repair', icon: ShieldCheck, desc: 'ESD-safe handling' },
                  { title: 'Proper Testing', icon: CheckCircle2, desc: 'Post-repair benchmarking' },
                  { title: 'Responsible Service', icon: Award, desc: 'Warranty backed fix' }
                ].map((b, idx) => {
                  const IconComp = b.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 text-center shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all space-y-3 flex flex-col justify-between group"
                    >
                      <div className="h-10 w-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-300 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-sm">
                        <IconComp size={20} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {b.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full inline-block">
                        ✓ VERIFIED
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 8. OUR WORKSHOP (REDESIGNED WITH WORKSHOP CARDS) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.ourWorkshop.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.ourWorkshop.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Everyday & Complex Servicing',
                  desc: data.ourWorkshop.paragraphs[0],
                  icon: Wrench,
                  tag: 'Full Hardware Scope'
                },
                {
                  title: 'Professional Diagnostic Equipment',
                  desc: data.ourWorkshop.paragraphs[1],
                  icon: Cpu,
                  tag: 'Micro-Soldering Lab'
                },
                {
                  title: 'Dedicated Device Care',
                  desc: data.ourWorkshop.paragraphs[2],
                  icon: ShieldCheck,
                  tag: '100% Quality Focus'
                }
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 space-y-4 shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black">
                          <IconComp size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 px-3 py-1 rounded-full border border-[#0E7C7B]/20">
                          {card.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. SERVING CUSTOMERS IN AHMEDABAD (REDESIGNED WITH LOCATION CARDS) */}
        <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.servingAhmedabad.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.servingAhmedabad.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {data.servingAhmedabad.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-extrabold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    <MapPin size={14} className="text-[#0E7C7B]" />
                    South Bopal Lab
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-extrabold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    <MapPin size={14} className="text-[#0E7C7B]" />
                    Tragad Lab
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 space-y-4 shadow-2xl border-2 border-[#0E7C7B] text-center">
                  <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B] text-white flex items-center justify-center mx-auto shadow-md">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block">
                    OUR CORE MISSION
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                    {data.servingAhmedabad.goal}
                  </h3>
                  <button
                    onClick={() => openModal({ serviceType: 'Serving Ahmedabad Inspection' })}
                    className="w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-lg"
                  >
                    Get Local Repair Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. OUR PROMISE (REDESIGNED WITH 6 PROMISE CARDS) */}
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                {data.ourPromise.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {data.ourPromise.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                {data.ourPromise.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Honest Diagnosis', icon: Search, desc: 'We pinpoint exact faulty components first.' },
                { title: 'Clear Communication', icon: MessageSquare, desc: 'Full estimate provided before work starts.' },
                { title: 'Careful Handling', icon: ShieldCheck, desc: 'ESD-safe bench and careful disassembly.' },
                { title: 'Privacy-Focused Service', icon: Lock, desc: '100% Zero-OTP & password protection.' },
                { title: 'Professional Repair', icon: Wrench, desc: 'Lab-grade micro-soldering & original parts.' },
                { title: 'Proper Testing', icon: CheckCircle2, desc: 'Comprehensive benchmarking before delivery.' }
              ].map((promise, idx) => {
                const IconComp = promise.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md hover:border-[#0E7C7B] hover:shadow-xl transition-all flex items-start gap-4"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center font-black shrink-0">
                      <IconComp size={22} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                          {promise.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {promise.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        {data.faqs?.length > 0 && (
          <section className="py-14 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
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

        {/* 12. GET TO KNOW US / CTA */}
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
                  href={`tel:${data.getInTouch.phone}`}
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
