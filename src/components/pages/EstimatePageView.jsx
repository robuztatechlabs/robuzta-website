'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { DiagnosticEstimator } from '@/components/ui/DiagnosticEstimator';
import { Calculator, Clock, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

const trustPills = [
  { icon: Calculator, label: 'Instant Estimate' },
  { icon: Clock, label: '2–4h Express Repair' },
  { icon: ShieldCheck, label: '180-Day Warranty' },
];

export function EstimatePageView() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Header />

      <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">

        {/* Hero Banner */}
        <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0E7C7B]/8 dark:bg-[#0E7C7B]/12 rounded-full blur-[120px]" />

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0E7C7B]/30 bg-[#0E7C7B]/8 dark:bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-widest"
            >
              <Calculator size={13} />
              Free Instant Estimate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Instant Price{' '}
              <span className="bg-gradient-to-r from-[#0E7C7B] via-teal-600 to-slate-700 dark:to-teal-300 bg-clip-text text-transparent">
                Estimator
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl mx-auto"
            >
              Select your device and issue to get an instant repair price range. No commitments — book on WhatsApp after.
            </motion.p>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {trustPills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  <Icon size={12} className="text-[#0E7C7B] dark:text-teal-400" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Estimator */}
        <section className="relative py-14 sm:py-20 lg:py-28 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <DiagnosticEstimator />
            </motion.div>

            {/* WhatsApp CTA below estimator */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 text-center space-y-3"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Want an exact quote? Chat with our technician directly.
              </p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0E7C7B] hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 text-sm font-black shadow-xl shadow-emerald-600/25 hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
