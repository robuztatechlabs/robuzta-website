'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/faqs';
import { HelpCircle, ChevronDown, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
            <Sparkles size={14} className="text-amber-500" />
            <span>CLEAR & TRANSPARENT ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to know about our Zero-OTP policy, doorstep pickup in Ahmedabad, logic board repairs, and warranty guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-slate-900 border-[#0E7C7B] shadow-xl'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-base font-black text-slate-900 dark:text-white hover:text-[#0E7C7B] dark:hover:text-teal-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0E7C7B] dark:text-teal-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium border-t border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Lead Conversion CTA Box Below FAQs */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Have a Specific Device Question?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Speak directly with a senior micro-soldering technician for instant advice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 text-xs font-black shadow-md transition-all"
            >
              <WhatsappIcon size={18} className="text-white" />
              <span>WhatsApp Tech Hotline</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 py-3.5 text-xs font-black transition-all"
            >
              <Phone size={16} className="text-[#0E7C7B] dark:text-teal-400" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
