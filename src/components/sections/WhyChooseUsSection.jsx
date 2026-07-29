'use client';

import { motion } from 'framer-motion';
import { Lock, Clock, ShieldCheck, Eye, Truck, Check } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'Zero OTP & Zero-Passcode Policy',
    description: 'We diagnose and service hardware using external test boot drives without asking for your device PIN, iCloud password, or personal OTPs.',
    tag: 'Strict Privacy'
  },
  {
    icon: Clock,
    title: '24/7 SLA & Rapid Turnaround',
    description: 'Urgent workstation repairs and screen replacements are prioritized for same-day completion to prevent downtime.',
    tag: '2 to 4h Average'
  },
  {
    icon: ShieldCheck,
    title: 'Serial-Verified Genuine Spare Parts',
    description: 'Every replacement screen, battery, or logic component is logged with official serial numbers and returned with defective parts intact.',
    tag: '100% Verified'
  },
  {
    icon: Eye,
    title: 'Transparent Live Workbench Inspection',
    description: 'Experience total visibility into your repair. Receive live video updates or watch your laptop diagnostic performed in front of you.',
    tag: 'Live Workbench'
  },
  {
    icon: Truck,
    title: 'Free Doorstep Pickup & Pan-India Courier',
    description: 'Free anti-static pickup across South Bopal, Satellite, Tragad, Vastrapur in Ahmedabad, plus insured Pan-India express ship-in service.',
    tag: 'Doorstep Pickup'
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-white py-24 border-b border-slate-200 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1.5 rounded-full">
            WHY AHMEDABAD TRUSTS ROBUZTA TECHLABS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Setting the Benchmark for Hardware Integrity
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Unlike generic repair shops or secretive service centers, we operate with 100% transparency, ESD anti-static safety, and genuine brand parts.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-5 hover:border-[#0E7C7B]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#0E7C7B]/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md shadow-[#0E7C7B]/20 group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-2.5 py-0.5 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0E7C7B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-extrabold text-emerald-700">
                  <Check size={14} /> Guaranteed Robuzta Standard
                </div>
              </motion.div>
            );
          })}

          {/* Highlight Card with Fixed White Button Text (Image 2 Fix) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-[#0E7C7B] text-white p-8 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-blue-100">ROBUZTA PROMISE</span>
              <h3 className="text-2xl font-extrabold text-white">Need Immediate Diagnosis or Quote?</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Our senior lab technicians are available right now to answer your hardware questions via direct call or WhatsApp.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-xs font-extrabold text-[#0F172A] shadow-md hover:bg-slate-100 hover:text-[#0E7C7B] hover:scale-[1.02] transition-all text-center"
            >
              Talk to Lab Technician Now
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
