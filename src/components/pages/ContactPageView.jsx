'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/data/site';
import { locations } from '@/data/locations';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, ArrowRight, Truck, CheckCircle2, ChevronDown, MessageSquare, Zap, Navigation } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { SocialBar } from '@/components/ui/SocialBar';
import Link from 'next/link';

const CONTACT_FAQS = [
  {
    q: 'How long does a hardware diagnosis take?',
    a: 'We perform diagnostic testing within 30 to 60 minutes live in our South Bopal or Tragad labs. For complex micro-soldering liquid damage cases, full thermal trace scanning takes 2 to 4 hours.',
  },
  {
    q: 'Is my data safe during the repair process?',
    a: 'Yes, 100%. Robuzta operates under a strict Zero-OTP and Zero-Password Data Privacy Policy. We never ask for your PIN codes, screen passwords, or OTPs. We test hardware using external diagnostic boot drives.',
  },
  {
    q: 'What if my device cannot be repaired?',
    a: 'Robuzta operates on a strict No Fix, No Fee Guarantee. If we cannot fix your device or restore power, you pay zero diagnostic charges.',
  },
  {
    q: 'Do you offer doorstep pickup in Ahmedabad?',
    a: 'Yes! We provide free doorstep pickup and delivery across South Bopal, Tragad, Satellite, SG Highway, Prahlad Nagar, Vastrapur, Chandkheda, and surrounding Ahmedabad areas.',
  },
  {
    q: 'How does Pan-India courier repair work?',
    a: 'Customers outside Ahmedabad can ship their MacBook, laptop, or gaming PC in a sealed courier box. Once received, we record an unboxing video, perform live lab diagnostics, send a transparent quote, and ship it back via insured courier.',
  },
];

export function ContactPageView() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Contact Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
              <Sparkles size={14} className="text-amber-500" />
              <span>ROBUZTA DIRECT CONTACT & BOOKING HUB</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Get in Touch with Our Repair Engineers
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Need an instant repair quote, doorstep pickup in Ahmedabad, or emergency liquid damage help? Reach us directly via WhatsApp, Phone, or drop by our South Bopal & Tragad labs.
            </p>

            {/* Quick Emergency Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs font-black text-emerald-600 dark:text-emerald-400 shadow-sm hover:scale-105 transition-transform"
              >
                <Zap size={14} className="text-amber-500 animate-bounce" />
                <span>Emergency Liquid Damage Hotline: {siteConfig.phone}</span>
              </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-2 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
                <Clock size={14} />
                <span>Lab Hours: 11:00 AM – 7:00 PM (Mon–Sat)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Split Section: Channels & Lab Stores (Left) vs Quote Form (Right) */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Channels, Stores & Social (Col 7) */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* Direct Contact Grid */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <MessageSquare size={22} className="text-[#0E7C7B]" />
                    <span>Direct Support Channels</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Call Senior Technician */}
                    <a
                      href={siteConfig.phoneHref}
                      className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0E7C7B] hover:bg-white dark:hover:bg-slate-850 hover:shadow-xl transition-all space-y-3 group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Phone size={22} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors">
                          Call Senior Technician
                        </div>
                        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">{siteConfig.phone}</div>
                        <span className="text-xs font-semibold text-slate-400 block pt-1">Instant Phone Consultation</span>
                      </div>
                    </a>

                    {/* WhatsApp Live Chat */}
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/50 hover:shadow-xl transition-all space-y-3 group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                        <WhatsappIcon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-base font-black text-emerald-950 dark:text-emerald-100">WhatsApp Live Chat</div>
                        <div className="text-sm font-bold text-emerald-800 dark:text-emerald-300 pt-0.5">+91 999 245 2459</div>
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-500 block pt-1">Send Photo for Instant Estimate</span>
                      </div>
                    </a>

                    {/* Email Support */}
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Mail size={22} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-slate-100">Email Support</div>
                        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">{siteConfig.email}</div>
                        <span className="text-xs font-semibold text-slate-400 block pt-1">Corporate & Fleet Inquiries</span>
                      </div>
                    </div>

                    {/* Lab Operating Hours */}
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                        <Clock size={22} />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-900 dark:text-slate-100">Lab Operating Hours</div>
                        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 pt-0.5">11:00 AM – 7:00 PM</div>
                        <span className="text-xs font-semibold text-slate-400 block pt-1">Monday to Saturday</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Lab Store Locations in Ahmedabad */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <MapPin size={22} className="text-[#0E7C7B]" />
                    <span>Robuzta Lab Stores in Ahmedabad</span>
                  </h2>

                  <div className="space-y-4">
                    {locations.map((loc) => (
                      <div
                        key={loc.slug}
                        className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-md hover:border-[#0E7C7B] transition-all"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> OPEN NOW &bull; 11 AM – 7 PM
                            </span>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white pt-1">{loc.title}</h3>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                          {loc.address}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                          <a
                            href={loc.gmapsUrl || `https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-md transition-all"
                          >
                            <Navigation size={14} />
                            <span>Get Google Maps Directions</span>
                          </a>

                          <Link
                            href={`/locations/${loc.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E7C7B] hover:underline"
                          >
                            <span>View Store Details</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media & Live Repair Streaming */}
                <div className="p-7 rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 border border-slate-800 text-white space-y-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                    <Sparkles size={16} />
                    <span>Watch Live Repair Videos</span>
                  </div>
                  <h3 className="text-xl font-black text-white">Follow Robuzta Techlabs</h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Watch live BGA micro-soldering teardowns, liquid damage restoration tests, and real customer repair stories on Instagram, YouTube & Facebook.
                  </p>
                  <SocialBar size="md" />
                </div>

              </div>

              {/* Right Column: Free Diagnostic Quote & Pickup Form (Col 5) */}
              <div className="lg:col-span-5 sticky top-28">
                <QuoteForm title="Request Free Repair Quote & Pickup" />
              </div>

            </div>
          </div>
        </section>

        {/* 4-Step Doorstep Pickup & Pan-India Courier Workflow */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 rounded-full">
                AHMEDABAD PICKUP & COURIER REPAIR WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                How Our Repair Service Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                Simple, transparent 4-step process for doorstep pickup in Ahmedabad or insured courier repair across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white font-black text-sm">
                  01
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Book Online or Call</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Fill out the quote form or WhatsApp us your device model and issue details.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white font-black text-sm">
                  02
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Free Doorstep Pickup</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Our runner picks up your device in a cushioned box or ship it via insured courier.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white font-black text-sm">
                  03
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Live Lab Diagnostics</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  We inspect your device under FLIR thermal scanners and send a transparent quote before repair.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-lg relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-black text-sm">
                  04
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Repaired & Delivered</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Your device is stress-tested, safely delivered, and backed by our 180-day warranty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact FAQs Accordion Section */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] block">HELP & FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Got Questions Before Booking?</h2>
            </div>

            <div className="space-y-4">
              {CONTACT_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0E7C7B] shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-200 dark:border-slate-800/60 mt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pan-India Courier Banner */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shrink-0">
                  <Truck size={30} />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Outside Ahmedabad? Courier Repair Option</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Ship your MacBook, Laptop, or Gaming PC to Robuzta. Insured courier return dispatch with video tracking.
                  </p>
                </div>
              </div>

              <a
                href={`${siteConfig.whatsappHref}?text=${encodeURIComponent('Hi Robuzta! I want to inquire about Courier Repair for my device.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-7 py-4 text-xs font-black text-white shadow-xl shrink-0"
              >
                <WhatsappIcon size={18} className="text-white" />
                <span>Inquire Courier Repair</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
