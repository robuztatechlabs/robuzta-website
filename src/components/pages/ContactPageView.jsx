'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/data/site';
import { locations } from '@/data/locations';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function ContactPageView() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Contact Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
              <Sparkles size={14} className="text-[#EA580C]" />
              <span>ROBUZTA CONTACT & BOOKING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Get in Touch with Our Lab Technicians
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Need an instant repair quote, doorstep pickup, or hardware diagnostic help? Reach us directly via WhatsApp, Phone, or drop by our South Bopal & Tragad labs.
            </p>
          </div>
        </section>

        {/* Main Content Split Section */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Channels & Locations (Col 7) */}
              <div className="lg:col-span-7 space-y-10">
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Direct Contact Channels</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={siteConfig.phoneHref}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-[#0E7C7B] hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all space-y-2 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E7C7B] text-white">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors">
                          Call Senior Technician
                        </div>
                        <div className="text-xs font-bold text-slate-600 dark:text-slate-400">{siteConfig.phone}</div>
                        <span className="text-[11px] font-semibold text-slate-400">Instant Phone Support</span>
                      </div>
                    </a>

                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/40 hover:shadow-xl transition-all space-y-2 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 dark:bg-emerald-500/20 text-white dark:text-emerald-400">
                        <WhatsappIcon size={22} className="text-white dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-emerald-950 dark:text-emerald-100">WhatsApp Live Chat</div>
                        <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400">+91 999 245 2459</div>
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-600">Photos & Live Quotes</span>
                      </div>
                    </a>

                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E7C7B] text-white">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">Email Support</div>
                        <div className="text-xs font-bold text-slate-600 dark:text-slate-400">{siteConfig.email}</div>
                        <span className="text-[11px] font-semibold text-slate-400">Official & Corporate</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E7C7B] text-white">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">Lab Hours</div>
                        <div className="text-xs font-bold text-slate-600 dark:text-slate-400">11:00 AM – 7:00 PM</div>
                        <span className="text-[11px] font-semibold text-slate-400">Monday to Saturday</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lab Locations List */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Robuzta Lab Locations</h2>
                  <div className="space-y-3">
                    {locations.map((loc) => (
                      <div
                        key={loc.slug}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5"
                      >
                        <MapPin size={22} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">{loc.title}</div>
                          <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{loc.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Quote Form (Col 5) */}
              <div className="lg:col-span-5">
                <QuoteForm title="Request Free Repair Quote & Pickup" />
              </div>

            </div>
          </div>
        </section>

        {/* Courier Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shrink-0">
                  <ShieldCheck size={30} />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Pan-India Courier Repair Option</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Outside Ahmedabad? Ship your MacBook, Laptop, or Gaming PC to Robuzta. Insured courier return dispatch.
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
