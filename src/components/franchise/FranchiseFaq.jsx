'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the total investment required for a Robuzta Techlabs store?',
    answer: 'Total investment ranges between ₹8.5 Lakhs for a Standard Hardware Lab (300-500 sq ft) to ₹14.5 Lakhs for a Flagship Enterprise Hub (700-1200 sq ft). This includes store interior SOP setup, ESD diagnostic microscopes, initial spare parts inventory, CRM license, and local launch marketing.'
  },
  {
    question: 'Do I need prior hardware repair or engineering experience?',
    answer: 'No. Robuzta provides complete operational coaching, hiring assistance to recruit skilled hardware engineers, and a 30-day masterclass training program covering Apple logic board soldering, OLED screen refurbishment, and customer service SOPs.'
  },
  {
    question: 'What is the expected Return on Investment (ROI) and payback period?',
    answer: 'Most Robuzta franchise labs achieve store-level breakeven within 3 to 5 months, with full capital recovery (ROI) targeted within 10 to 14 months based on repair volume and local lead conversion.'
  },
  {
    question: 'How are exclusive territory rights granted to franchise partners?',
    answer: 'Each franchise agreement locks a defined demographic radius (typically 5 to 8 km or 500,000+ population zone). No other Robuzta store can be opened within your exclusive territory.'
  },
  {
    question: 'How does Robuzta supply genuine OEM replacement spare parts?',
    answer: 'Franchise partners get direct access to Robuzta’s centralized supply chain portal to order genuine screens, batteries, motherboards, and micro-chips at wholesale partner pricing.'
  },
  {
    question: 'What marketing and lead generation support is provided?',
    answer: 'Our central digital marketing team manages local Google Maps SEO, Meta video advertising campaigns, and WhatsApp lead bots that direct qualified customer repair leads straight to your store.'
  }
];

export function FranchiseFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-slate-50 dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Franchise Partnership FAQs
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Find answers to common questions about capital requirements, territory rights, training, and operational support.
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
                    ? 'bg-white dark:bg-slate-950 border-[#2563EB]/40 shadow-xl'
                    : 'bg-white/80 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100">
                    {faq.question}
                  </span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all ${
                    isOpen ? 'bg-[#2563EB] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-800"
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
