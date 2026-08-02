'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqs, faqCategories } from '@/data/faqs';
import {
  HelpCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  Zap,
  Lock,
  Clock,
  Tag,
  MapPin,
  Award,
  ChevronDown,
  MessageSquare,
  Bot,
  Info
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

export function FaqPageView() {
  const { openModal } = useBookingModal();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0); // Default open first FAQ for immediate readability

  // Category Icon Resolver
  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'privacy':
        return Lock;
      case 'diagnostics':
        return Zap;
      case 'pricing':
        return Tag;
      case 'pickup':
        return MapPin;
      case 'warranty':
        return Award;
      default:
        return HelpCircle;
    }
  };

  // Filtered FAQ List based on Search & Selected Category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const queryLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !queryLower ||
        faq.question.toLowerCase().includes(queryLower) ||
        faq.answer.toLowerCase().includes(queryLower) ||
        faq.shortAnswer.toLowerCase().includes(queryLower) ||
        (faq.geoEntities && faq.geoEntities.some((entity) => entity.toLowerCase().includes(queryLower)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
        
        {/* 1. HERO SECTION WITH AEO & GEO BADGE */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Ambient Lighting Glows */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 dark:bg-teal-500/10 rounded-full blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300 shadow-xs"
            >
              <Bot size={14} className="text-[#EA580C] dark:text-amber-400" />
              <span>ROBUZTA KNOWLEDGE CENTER &bull; AEO & GEO VERIFIED</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Authoritative, transparent answers regarding device data security, repair turnarounds, free doorstep pickup in Ahmedabad, zero OTP policies, and warranty protection.
            </motion.p>

            {/* Live Search Input Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto pt-4"
            >
              <div className="relative flex items-center">
                <Search size={20} className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hardware issues, Zero-OTP policy, warranty, pickup..."
                  className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 py-4 pl-12 pr-4 text-sm font-bold text-slate-900 dark:text-white shadow-xl focus:border-[#0E7C7B] focus:ring-2 focus:ring-[#0E7C7B]/30 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. CATEGORY TABS & INTERACTIVE FAQ ACCORDION SECTION */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {faqCategories.map((cat) => {
                const CatIcon = getCategoryIcon(cat.id);
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setOpenIndex(0);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'bg-[#0E7C7B] text-white border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/20 scale-105'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <CatIcon size={15} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Content Grid: FAQ Accordion (Col 8) + Sticky Lead Sidebar (Col 4) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* FAQ Accordions (Col 8) */}
              <div className="lg:col-span-8 space-y-4">
                {filteredFaqs.length === 0 ? (
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
                    <HelpCircle size={36} className="text-slate-400 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching questions found</h3>
                    <p className="text-xs text-slate-500 font-medium">Try searching for keywords like "password", "warranty", "pickup", or "micro-soldering".</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="mt-2 text-xs font-bold text-[#0E7C7B] dark:text-teal-400 hover:underline"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredFaqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;

                    return (
                      <motion.div
                        key={faq.id || faq.question}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'bg-white dark:bg-slate-900 border-[#0E7C7B] shadow-xl shadow-[#0E7C7B]/10 ring-2 ring-[#0E7C7B]/20'
                            : 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        {/* Question Title Bar */}
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                          className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors shrink-0 ${
                              isOpen
                                ? 'bg-[#0E7C7B] text-white shadow-md'
                                : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              <HelpCircle size={18} />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                              {faq.question}
                            </h3>
                          </div>

                          <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-300' : 'text-slate-400'
                          }`}>
                            <ChevronDown size={18} />
                          </div>
                        </button>

                        {/* Collapsible Content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                                
                                {/* AEO Snippet Callout Box (Direct Answer Engine Optimization) */}
                                {faq.shortAnswer && (
                                  <div className="rounded-xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 p-4 space-y-1.5 mt-4">
                                    <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-[#0E7C7B] dark:text-teal-300">
                                      <Bot size={15} />
                                      <span>AI DIRECT ANSWER SUMMARY</span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-teal-100 leading-relaxed">
                                      {faq.shortAnswer}
                                    </p>
                                  </div>
                                )}

                                {/* Detailed Full Answer */}
                                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                  {faq.answer}
                                </p>

                                {/* GEO Local Entity Tags */}
                                {faq.geoEntities && (
                                  <div className="pt-2 flex flex-wrap items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                      Verified Context:
                                    </span>
                                    {faq.geoEntities.map((entity) => (
                                      <span
                                        key={entity}
                                        className="text-[10px] font-bold text-[#0E7C7B] dark:text-teal-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-md"
                                      >
                                        {entity}
                                      </span>
                                    ))}
                                  </div>
                                )}

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Sticky Technician Lead Sidebar (Col 4) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                
                {/* Ask Senior Technician Card */}
                <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 space-y-6 shadow-xl relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#0E7C7B]/10 rounded-full blur-2xl" />

                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shadow-[#0E7C7B]/20">
                    <ShieldCheck size={26} />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 px-2.5 py-0.5 rounded-full border border-[#0E7C7B]/20 inline-block">
                      STILL HAVE QUESTIONS?
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      Ask a Senior Lab Technician
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Got a complex laptop, MacBook, or phone fault? Speak directly with our senior hardware repair engineers.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <button
                      type="button"
                      onClick={() => openModal({ formType: 'FAQ Page Technician Consultation' })}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0E7C7B] hover:bg-teal-600 py-3.5 text-xs font-black text-white shadow-lg shadow-[#0E7C7B]/20 cursor-pointer transition-all transform hover:scale-[1.02]"
                    >
                      <MessageSquare size={16} />
                      <span>Ask Senior Technician</span>
                    </button>

                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-all text-center"
                    >
                      <WhatsappIcon size={18} className="text-white shrink-0" />
                      <span>Instant WhatsApp Quote</span>
                    </a>

                    <a
                      href={siteConfig.phoneHref}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 hover:bg-slate-800 py-3 text-xs font-bold text-slate-200 transition-all text-center"
                    >
                      <Phone size={15} className="text-teal-400" />
                      <span>Call {siteConfig.phone}</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Free Inspection & Zero Obligation</span>
                  </div>

                </div>

                {/* Free Pickup Banner */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-7 space-y-4 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                      FREE AHMEDABAD PICKUP
                    </span>
                    <MapPin size={18} className="text-teal-400" />
                  </div>

                  <h3 className="text-lg font-black text-white">Need Doorstep Collection?</h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Our insured rider will pick up your device from South Bopal, Tragad, Satellite, Vastrapur, or nearby localities.
                  </p>

                  <button
                    type="button"
                    onClick={() => openModal({ formType: 'FAQ Page Book Pickup Banner' })}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-black text-white shadow-lg cursor-pointer transition-all transform hover:scale-[1.02]"
                  >
                    <span>Book Free Pickup Now</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
