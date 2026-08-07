'use client';

import { motion } from 'framer-motion';
import { Lock, Clock, ShieldCheck, Eye, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

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
    title: 'Doorstep Pickup & Pan-India Courier',
    description: 'Anti-static pickup across South Bopal, Satellite, Tragad, Vastrapur in Ahmedabad, plus insured Pan-India express ship-in service.',
    tag: 'Doorstep Pickup'
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-10 sm:py-14 lg:py-16 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Built on Workbench Transparency & Data Safety
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            From chip-level motherboard logic soldering to screen and battery replacements, every process is documented, ESD-isolated, and protected under our strict Zero-OTP Privacy Policy.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl sm:rounded-3xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-9 flex flex-col justify-between hover:border-[#0E7C7B]/40 hover:bg-white dark:hover:bg-slate-700 hover:shadow-2xl hover:shadow-[#0E7C7B]/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 sm:space-y-6"
              >
                <div className="space-y-3.5 sm:space-y-5">
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B] text-white shadow-md shadow-[#0E7C7B]/20 group-hover:scale-110 transition-transform shrink-0">
                      <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-slate-200/80 dark:border-slate-700 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 size={14} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 sm:w-[15px] sm:h-[15px]" />
                  <span>Guaranteed Robuzta Quality</span>
                </div>
              </motion.div>
            );
          })}

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0E7C7B] to-[#0F172A] text-white p-4.5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/20 inline-block">
                ROBUZTA PROMISE
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug">Need Immediate Technical Consultation?</h3>
              <p className="text-xs text-teal-100 leading-relaxed font-medium">
                Our senior lab technicians are available right now to answer your hardware questions via direct call or WhatsApp with zero diagnosis fee.
              </p>
            </div>
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-xs font-black shadow-lg hover:bg-slate-100 transition-all text-center"
              style={{ backgroundColor: '#ffffff', color: '#0F172A' }}
            >
              <span style={{ color: '#0F172A', fontWeight: 900 }}>Talk to Senior Technician Now</span>
              <ArrowRight size={14} style={{ color: '#0E7C7B' }} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
