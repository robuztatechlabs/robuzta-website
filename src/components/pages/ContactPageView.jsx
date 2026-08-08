'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/data/site';
import { Phone, Mail, Clock, Truck, ChevronDown, MessageSquare } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { PlatformTrustSection } from '@/components/sections/PlatformTrustSection';

const CONTACT_FAQS = [
  {
    q: 'How fast is diagnostic testing?',
    a: 'Diagnostic testing takes 30 to 60 minutes live in our South Bopal and Tragad labs.',
  },
  {
    q: 'Is my data safe during repair?',
    a: 'Yes, 100%. We operate under a Zero-OTP and Zero-Password Data Privacy Policy. We never ask for passwords or PINs.',
  },
  {
    q: 'What if my device cannot be fixed?',
    a: 'We operate on a No Fix, No Fee Guarantee. If we cannot fix your device, you pay zero diagnostic charges.',
  },
  {
    q: 'Do you offer doorstep pickup in Ahmedabad?',
    a: 'Yes! We provide free doorstep pickup and delivery across all major Ahmedabad areas.',
  },
];

// Smooth cubic-bezier transition preset (like About page)
const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function ContactPageView() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Contact Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-9 sm:py-8 lg:py-8 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0E7C7B]/10 rounded-full blur-[130px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-300"
            >
              <MessageSquare size={13} />
              <span>DIRECT CONTACT</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Contact Robuzta Techlabs
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Need a repair estimate or lab visit? Call, WhatsApp, or request free doorstep pickup below.
            </p>
          </motion.div>
        </section>

        {/* Main Content: Support Channels (Left) vs Quote Form (Right) */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              
              {/* Left Column: Direct Support Channels (Col 7) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={SMOOTH_TRANSITION}
                className="lg:col-span-7 space-y-8 sm:space-y-12"
              >
                
                {/* Quick Action Channels Grid */}
                <div className="space-y-5">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    <MessageSquare size={20} className="text-[#0E7C7B] dark:text-teal-400" />
                    <span>Direct Support Channels</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Call Technician */}
                    <motion.a
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ ...SMOOTH_TRANSITION, delay: 0.1 }}
                      href={siteConfig.phoneHref}
                      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0E7C7B] hover:shadow-lg transition-all space-y-3 group shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors">
                          Call Senior Tech
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">{siteConfig.phone}</div>
                        <span className="text-[11px] font-medium text-slate-400 block pt-0.5">Instant Phone Estimate</span>
                      </div>
                    </motion.a>

                    {/* WhatsApp Live Chat */}
                    <motion.a
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ ...SMOOTH_TRANSITION, delay: 0.18 }}
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all space-y-3 group shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                        <WhatsappIcon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                          WhatsApp Chat
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">+91 999 245 2459</div>
                        <span className="text-[11px] font-medium text-slate-400 block pt-0.5">Send Photo for Fast Quote</span>
                      </div>
                    </motion.a>

                    {/* Email Support */}
                    <motion.a
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ ...SMOOTH_TRANSITION, delay: 0.26 }}
                      href={`mailto:${siteConfig.email}`}
                      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0E7C7B] hover:shadow-lg transition-all space-y-3 group shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors">
                          Email Support
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">{siteConfig.email}</div>
                        <span className="text-[11px] font-medium text-slate-400 block pt-0.5">Corporate & Inquiries</span>
                      </div>
                    </motion.a>

                    {/* Operating Hours */}
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ ...SMOOTH_TRANSITION, delay: 0.34 }}
                      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-white">Operating Hours</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">11:00 AM – 7:00 PM</div>
                        <span className="text-[11px] font-medium text-slate-400 block pt-0.5">Monday to Saturday</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

              </motion.div>

              {/* Right Column: Quote Form (Col 5) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                className="lg:col-span-5 pt-6 lg:pt-0"
              >
                <QuoteForm title="Request Free Repair Quote" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* 4-Step Repair Workflow */}
        <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={SMOOTH_TRANSITION}
              className="text-center max-w-2xl mx-auto space-y-3"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400">
                SIMPLE PROCESS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                How Our Repair Service Works
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { num: '01', title: 'Book Online', desc: 'Fill out the quote form or WhatsApp us your issue details.' },
                { num: '02', title: 'Free Pickup', desc: 'Free doorstep pickup in Ahmedabad or insured courier across India.' },
                { num: '03', title: 'Live Diagnostics', desc: 'Fast hardware inspection and transparent pricing approval.' },
                { num: '04', title: 'Fixed & Delivered', desc: 'Device stress-tested and returned with up to 180 days warranty.', isGreen: true }
              ].map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.12 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-3 shadow-sm transition-all"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-white font-black text-xs ${step.isGreen ? 'bg-emerald-600' : 'bg-[#0E7C7B]'}`}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Platform Verified Ratings */}
        <PlatformTrustSection />

        {/* Contact FAQs Section */}
        <section className="py-14 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={SMOOTH_TRANSITION}
              className="text-center space-y-2"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-400 block">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-3">
              {CONTACT_FAQS.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0E7C7B] dark:text-teal-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courier Banner */}
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={SMOOTH_TRANSITION}
              className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md shrink-0">
                  <Truck size={24} />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-black text-white">Outside Ahmedabad? Courier Repair</h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Ship your device to Robuzta. Insured courier return dispatch with video tracking.
                  </p>
                </div>
              </div>

              <a
                href={`${siteConfig.whatsappHref}?text=${encodeURIComponent('Hi Robuzta! I want to inquire about Courier Repair for my device.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs font-black text-white shadow-md shrink-0 transition-all"
              >
                <WhatsappIcon size={16} className="text-white" />
                <span>Inquire Courier Repair</span>
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
