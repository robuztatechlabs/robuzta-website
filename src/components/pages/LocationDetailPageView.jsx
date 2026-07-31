'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { MapPin, Phone, Clock, Mail, CheckCircle2, ChevronRight, Navigation, Sparkles } from 'lucide-react';

export function LocationDetailPageView({ location }) {
  if (!location) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Robuzta Techlabs - ${location.title}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      postalCode: location.pincode,
      addressCountry: 'IN'
    },
    telephone: location.phone,
    email: location.email,
    url: `https://robuzta.com/locations/${location.slug}`,
    openingHours: 'Mo-Sa 11:00-19:00'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Branch Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white py-20 sm:py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <nav className="flex items-center gap-2 text-xs font-extrabold text-slate-500 dark:text-slate-400 justify-center">
              <Link href="/" className="hover:text-[#0E7C7B]">Home</Link> <ChevronRight size={13} />
              <Link href="/locations" className="hover:text-[#0E7C7B]">Locations</Link> <ChevronRight size={13} />
              <span className="text-[#0E7C7B]">{location.title}</span>
            </nav>

            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
                <Sparkles size={14} className="text-[#EA580C]" />
                <span>ROBUZTA LAB BRANCH</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {location.title}
              </h1>

              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
                Your trusted local electronics repair lab. Experience chip-level precision repairs, serial number verification, and zero OTP privacy for your devices.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Branch Details (Col 7) */}
              <div className="lg:col-span-7 space-y-10">
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Branch Details & Contact Information</h2>
                  
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-7 space-y-4 shadow-xl">
                    <div className="flex items-start gap-3.5 border-b border-slate-200 dark:border-slate-700 pb-3.5">
                      <MapPin size={22} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-extrabold uppercase text-slate-400">Address</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{location.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 border-b border-slate-200 dark:border-slate-700 pb-3.5">
                      <Clock size={22} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-extrabold uppercase text-slate-400">Working Hours</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{location.timing}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 border-b border-slate-200 dark:border-slate-700 pb-3.5">
                      <Phone size={22} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-extrabold uppercase text-slate-400">Direct Hotline</div>
                        <a href={`tel:${location.phone}`} className="text-sm font-bold text-[#0E7C7B] hover:underline">
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail size={22} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-extrabold uppercase text-slate-400">Email Inquiry</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{location.email}</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-700 px-6 py-3.5 text-xs font-black text-white shadow-md transition-all"
                      >
                        <Navigation size={16} />
                        <span>Get Directions on Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Services Provided at This Branch</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.servicesAvailable.map((srv) => (
                      <div key={srv} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 size={16} className="text-[#0E7C7B] shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas Covered */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Areas Covered with Free Pickup</h2>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area) => (
                      <span key={area} className="text-xs font-extrabold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-xl">
                        📍 {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Quote Form (Col 5) */}
              <div className="lg:col-span-5">
                <QuoteForm title={`Book Service at ${location.title}`} />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
