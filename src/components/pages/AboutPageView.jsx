'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Cpu, Lock, Eye, Award, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AboutPageView() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen text-slate-900">
        
        {/* About Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white py-20 sm:py-24 border-b border-slate-200 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
              <Sparkles size={14} className="text-[#EA580C]" />
              <span>THE ROBUZTA DIFFERENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Not Your Typical Local Repair Shop
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Robuzta Techlabs was founded to eliminate opacity in tech repairs. We operate a modern, high-precision repair lab where hardware diagnostics and repairs take place in plain sight.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="rounded-3xl bg-slate-50/80 border border-slate-200 p-8 shadow-xl space-y-4 hover:border-[#0E7C7B]/40 hover:bg-white transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Zero OTP & No Password Protocol</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  We test your hardware using specialized external diagnostic boot drives. We NEVER ask for your device screen password, iCloud/Google credentials, or phone OTPs.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50/80 border border-slate-200 p-8 shadow-xl space-y-4 hover:border-[#0E7C7B]/40 hover:bg-white transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Live Workbench Repairs</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Watch your laptop or mobile being diagnosed right in front of you. Complete transparency ensures total peace of mind for your valuable hardware.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50/80 border border-slate-200 p-8 shadow-xl space-y-4 hover:border-[#0E7C7B]/40 hover:bg-white transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Chip-Level Micro-Soldering</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Our senior technicians operate stereoscopic microscopes and BGA rework stations to fix motherboards, logic boards, and power ICs down to component level.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50/80 border border-slate-200 p-8 shadow-xl space-y-4 hover:border-[#0E7C7B]/40 hover:bg-white transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Serial-Number Verified Parts</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Every replacement display, battery, keyboard, or SSD comes with serial number logging and old part return policy to guarantee genuine quality.
                </p>
              </div>

            </div>

            {/* Mission & Guarantee */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 shadow-2xl space-y-8">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-3xl font-black text-white">Our Mission & Quality Guarantee</h2>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  In a market filled with unauthorized part swapping and inflated repair costs, Robuzta Techlabs stands as a beacon of trust, technical excellence, and rapid service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                  <span>Free Comprehensive Hardware Inspection</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                  <span>Same-Day Express Repairs Available</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                  <span>Digital Invoices & Clear Warranty Terms</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                  <span>Free Doorstep Pickup Across Ahmedabad</span>
                </div>
              </div>

              <div className="pt-2 flex justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-8 py-4 text-xs font-black text-white shadow-xl"
                >
                  <span>Book Free Device Inspection</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
