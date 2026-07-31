'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/faqs';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full">
            CLEAR & TRANSPARENT ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
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
                className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-base font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
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
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-800 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <span>Explore Complete Help Center</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
