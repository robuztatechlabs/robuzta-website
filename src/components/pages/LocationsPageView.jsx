'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locations } from '@/data/locations';
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export function LocationsPageView() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">

        {/* Locations Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
              <Sparkles size={14} className="text-[#EA580C]" />
              <span>ROBUZTA SERVICE NETWORK &bull; AHMEDABAD LABS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Robuzta Repair Lab Locations
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Visit our transparent live repair labs in Ahmedabad or request free doorstep pickup across South Bopal, Tragad, Satellite, Vastrapur, and surrounding localities.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <article
                  key={loc.slug}
                  className="rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 shadow-xl hover:border-[#0E7C7B]/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                          <MapPin size={22} />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors">
                          {loc.title}
                        </h2>
                      </div>

                      <span className="shrink-0 whitespace-nowrap text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 px-3.5 py-1 rounded-full inline-block">
                        Live Lab Branch
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                      {loc.address}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                        <Clock size={16} className="text-[#0E7C7B] shrink-0" />
                        <span>{loc.timing}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                        <Phone size={16} className="text-[#0E7C7B] shrink-0" />
                        <span>{loc.phone}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider block">
                        Areas Served Nearby:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.nearbyAreas.map((area) => (
                          <span
                            key={area}
                            className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="flex items-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-700 px-5 py-3 text-xs font-black text-white shadow-md transition-all flex-1 justify-center"
                    >
                      <span>View Branch Details</span>
                      <ArrowRight size={15} />
                    </Link>

                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-[#0E7C7B] hover:border-[#0E7C7B] transition-colors shrink-0"
                      title="Open in Google Maps"
                    >
                      <Navigation size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Courier & Doorstep Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shrink-0">
                  <ShieldCheck size={30} />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Not Near a Physical Store?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Free doorstep device pickup & delivery across all Ahmedabad localities, or insured pan-India courier service.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-4 text-xs font-black text-white shadow-xl shrink-0"
              >
                <span>Book Free Doorstep Pickup</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
