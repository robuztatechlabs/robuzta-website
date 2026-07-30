'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, TrendingUp, Award } from 'lucide-react';

const partnerStories = [
  {
    name: 'Vikramaditya Shah',
    location: 'South Bopal Flagship Lab',
    growth: '100% Breakeven in Month 4',
    revenue: '₹5.8 Lakhs / Month Avg',
    quote: 'The live workbench transparency and ESD safety setup won immediate customer trust. Robuzta central marketing brings 20+ laptop & Mac repair leads every single day.',
    verified: true
  },
  {
    name: 'Karan Mehta',
    location: 'Tragad Repair Hub',
    growth: 'Expanded to 2nd Store in Year 2',
    revenue: '₹8.2 Lakhs / Month Avg',
    quote: 'Before Robuzta, I ran an unorganized repair shop with thin margins. Robuzta’s BGA micro-soldering masterclass and genuine parts supply chain transformed my profit margins by 300%.',
    verified: true
  }
];

export function FranchiseSuccessStories() {
  return (
    <section className="relative bg-slate-50 py-24 border-b border-slate-200 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block"
          >
            PARTNER SUCCESS STORIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Hear From Our Franchise Lab Partners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium"
          >
            Read real operational growth stories from franchise operators who scaled their precision tech repair enterprise with Robuzta Techlabs.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 text-slate-100" size={60} />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold italic">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-1.5">
                      {story.name}
                      <CheckCircle2 size={16} className="text-[#2563EB]" />
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">{story.location}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-extrabold">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={13} /> {story.growth}
                  </span>
                  <span className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-1">
                    <Award size={13} /> {story.revenue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
