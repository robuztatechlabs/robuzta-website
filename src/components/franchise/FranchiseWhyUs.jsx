'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Wrench, Sparkles, CheckCircle2, Award, Zap, Layers } from 'lucide-react';

const whyUsPillars = [
  {
    icon: TrendingUp,
    title: 'High-Margin Unit Economics',
    description: 'Hardware repairs carry up to 55%–70% gross margins compared to razor-thin 3% retail laptop sales margins.',
    badge: '55% - 70% Margins',
    color: '#2563EB'
  },
  {
    icon: Wrench,
    title: 'ESD-Isolated Turnkey Lab Setup',
    description: 'Receive ISO 27001-compliant diagnostic microscopes, BGA micro-soldering stations, and test boot drives out of the box.',
    badge: 'ISO-Compliant Lab',
    color: '#EA580C'
  },
  {
    icon: Zap,
    title: 'Centralized Lead Generation Engine',
    description: 'Our automated Google Maps SEO, targeted Meta advertising, and WhatsApp bots drive pre-qualified repair leads directly to your store.',
    badge: 'Automated Leads',
    color: '#2563EB'
  },
  {
    icon: Award,
    title: '30-Day Masterclass & Certification',
    description: 'Intensive hands-on technician coaching covering Apple M1/M2 logic board soldering, OLED screen refurbishment, and store SOPs.',
    badge: 'Complete Training',
    color: '#EA580C'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-OTP Privacy System',
    description: 'Gain immediate customer trust through external test drive boot diagnostics—no customer passcode or OTP ever required.',
    badge: 'Strict Privacy',
    color: '#2563EB'
  },
  {
    icon: Layers,
    title: 'Protected Territory & Multi-Store Growth',
    description: 'Lock exclusive rights for your city zone with seamless options to expand into additional retail locations as revenue scales.',
    badge: 'Exclusive Rights',
    color: '#EA580C'
  }
];

export function FranchiseWhyUs() {
  return (
    <section className="relative bg-white py-24 border-b border-slate-200 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block"
          >
            WHY PARTNER WITH ROBUZTA TECHLABS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Engineered for Long-Term Regional Dominance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium"
          >
            Unlike unorganized local repair shops, Robuzta offers an Apple & Stripe-grade customer experience with standard operating procedures and high-return business models.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-3xl bg-slate-50/70 border border-slate-200/90 p-8 flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="text-[11px] font-black px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        borderColor: `${pillar.color}30`,
                        color: pillar.color
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-extrabold text-emerald-700">
                  <CheckCircle2 size={15} className="text-[#2563EB]" /> Verified Ecosystem Advantage
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
