'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { MapPin, Phone, Clock, Mail, CheckCircle2, ChevronRight, Navigation, Sparkles, Building2 } from 'lucide-react';

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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Branch Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 rounded-full blur-[130px]" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">


            <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-300 shadow-sm">
                <Building2 size={13} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                <span>ROBUZTA LAB BRANCH</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {location.title}
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                Walk into our lab or request free doorstep pickup. Live diagnostics, genuine parts, and 100% data safety.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-14 sm:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              
              {/* Left Column: Unified Executive Branch Card (Col 7) */}
              <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 space-y-7 shadow-sm">
                
                {/* Branch Card Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Branch Info & Navigation
                    </h2>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Official Robuzta Flagship Lab
                    </span>
                  </div>
                </div>

                {/* Address & Contact Info Bar */}
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-3 text-sm sm:text-base font-medium">
                    <MapPin size={18} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{location.address}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-bold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                      {location.timing}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                      <a href={`tel:${location.phone}`} className="hover:underline">{location.phone}</a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                      {location.email}
                    </span>
                  </div>
                </div>

                {/* Get Directions Button */}
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-md shadow-[#0E7C7B]/20 transition-all text-center"
                >
                  <Navigation size={16} />
                  <span>Get Directions on Google Maps</span>
                </a>

                {/* Services Provided List */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Services Provided at This Branch
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.servicesAvailable.map((srv) => (
                      <div key={srv} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 size={16} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas Covered with Free Pickup */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Areas Covered with Free Pickup
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {location.nearbyAreas.map((area) => (
                      <span key={area} className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 px-3 py-1.5 rounded-xl">
                        📍 {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Quote Form (Col 5) */}
              <div className="lg:col-span-5 pt-6 lg:pt-0">
                <QuoteForm title={`Book Repair at ${location.title}`} />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
