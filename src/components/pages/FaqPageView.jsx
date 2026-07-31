'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqs } from '@/data/faqs';
import { HelpCircle, Phone, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import Link from 'next/link';

export function FaqPageView() {
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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* FAQ Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white py-20 sm:py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
              <Sparkles size={14} className="text-[#EA580C]" />
              <span>ROBUZTA HELP CENTER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Clear, transparent answers regarding device security, repair turnarounds, warranty terms, and free doorstep pickup in Ahmedabad.
            </p>
          </div>
        </section>

        {/* FAQ List & Sidebar */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* FAQ Accordion List (Col 8) */}
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl bg-slate-50/80 border border-slate-200 dark:border-slate-700 p-6 font-extrabold text-slate-900 dark:text-slate-100 transition-all duration-200 hover:bg-white hover:border-[#0E7C7B]/40 hover:shadow-md"
                  >
                    <summary className="flex items-center gap-3 cursor-pointer text-base sm:text-lg list-none justify-between">
                      <div className="flex items-center gap-3">
                        <HelpCircle size={20} className="text-[#0E7C7B] shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <span className="text-[#0E7C7B] font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/80 pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              {/* Sidebar (Col 4) */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-7 space-y-5 shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Still Have Questions?</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-1">
                      Talk directly to our Senior Hardware Lab Technicians for instant diagnosis.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-black text-white shadow-md"
                    >
                      <WhatsappIcon size={18} className="text-white" />
                      <span>Ask on WhatsApp</span>
                    </a>

                    <a
                      href={siteConfig.phoneHref}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0E7C7B] hover:bg-teal-700 py-3 text-xs font-black text-white shadow-md"
                    >
                      <Phone size={16} />
                      <span>Call +91 999 245 2459</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-900 text-white p-7 space-y-4 shadow-xl">
                  <h3 className="text-xl font-black text-white">Book Free Pickup</h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Free doorstep pickup & delivery in South Bopal, Tragad, Satellite, Vastrapur, and across Ahmedabad.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0E7C7B] hover:bg-teal-600 py-3.5 text-xs font-black text-white shadow-lg"
                  >
                    <span>Book Pickup Now</span>
                    <ArrowRight size={15} />
                  </Link>
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
