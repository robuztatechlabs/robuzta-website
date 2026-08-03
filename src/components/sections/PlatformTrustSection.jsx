'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { JustdialIcon } from '@/components/icons/JustdialIcon';
import { SulekhaIcon } from '@/components/icons/SulekhaIcon';

export const platformListings = [
  {
    id: 'google',
    name: 'Google Maps',
    rating: '4.9',
    reviews: '500+ Verified Reviews',
    badge: '#1 Rated Repair Lab in Ahmedabad',
    url: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x395e9bf869418ce7:0x79d2875690697383!12e1?source=g.page.m._&laa=merchant-review-solicitation',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <GoogleIcon size={24} />
        <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">Google</span>
      </div>
    ),
    accentColor: 'from-[#4285F4]/10 via-[#34A853]/10 to-[#EA4335]/10',
    borderColor: 'hover:border-[#4285F4]/50'
  },
  {
    id: 'justdial',
    name: 'Justdial',
    rating: '4.9',
    reviews: 'Verified Business Listing',
    badge: 'Top Rated Tech Lab in Bopal',
    url: 'https://www.justdial.com/Ahmedabad/Robuzta-Techlabs-Bopal/079PXX79-XX79-221124120052-T5Z4_BZDET?via=scode',
    renderLogo: () => <JustdialIcon />,
    accentColor: 'from-[#0073E6]/10 to-[#FF6F00]/10',
    borderColor: 'hover:border-[#0073E6]/50'
  },
  {
    id: 'sulekha',
    name: 'Sulekha',
    rating: '4.9',
    reviews: 'Gold Certified Service',
    badge: 'Hardware & Micro-Soldering Expert',
    url: 'https://www.sulekha.com/robuzta-techlabs-bopal-ahmedabad-contact-address',
    renderLogo: () => <SulekhaIcon size={24} />,
    accentColor: 'from-[#E53935]/10 to-[#FFCC00]/10',
    borderColor: 'hover:border-[#E53935]/50'
  }
];

export function PlatformTrustSection() {
  return (
    <section className="py-16 bg-slate-50/60 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Lighting Accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0E7C7B]/5 dark:bg-teal-500/5 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header Title Bar */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-teal-300"
          >
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>VERIFIED MULTI-PLATFORM RATINGS &bull; AHMEDABAD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Trusted & Top-Rated Across India’s Leading Discovery Platforms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium"
          >
            100% verified customer ratings, transparent service reviews, and official business profiles.
          </motion.p>
        </div>

        {/* 3 Platform Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platformListings.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between space-y-6 transition-all duration-300 ${item.borderColor}`}
            >
              {/* Subtle Gradient Hover Overlay */}
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="space-y-4 relative z-10">
                {/* Logo & Direct Link Arrow */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  {item.renderLogo()}
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 group-hover:bg-[#0E7C7B]/10 transition-colors shrink-0">
                    <ExternalLink size={16} />
                  </span>
                </div>

                {/* Rating Score & Star Bar */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {item.rating}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                    {item.reviews}
                  </p>
                </div>
              </div>

              {/* Bottom Badge Tag */}
              <div className="pt-2 relative z-10">
                <span className="text-[11px] font-black text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3 py-1.5 rounded-xl block text-center truncate">
                  {item.badge}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
