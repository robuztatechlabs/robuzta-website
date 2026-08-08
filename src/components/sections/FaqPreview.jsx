'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { faqs } from '@/data/faqs';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FaqPreview() {
  const topFaqs = faqs.slice(0, 4);
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 lg:py-32 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Got Questions?
          </h2>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {topFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 p-4.5 sm:p-6 text-left cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0E7C7B] text-white border-transparent' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4.5 sm:px-6 pb-5 pt-1 border-t border-slate-200/60 dark:border-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-3.5 text-xs sm:text-sm font-black shadow-lg shadow-[#0E7C7B]/20 hover:scale-[1.02] transition-all text-center"
          >
            <span>View All FAQs</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 text-xs sm:text-sm font-black shadow-md hover:scale-[1.02] transition-all text-center"
          >
            <WhatsappIcon size={18} className="text-white shrink-0" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
