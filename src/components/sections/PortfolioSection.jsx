'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import Link from 'next/link';

const repairCases = [
  {
    id: 1,
    category: 'MacBook & Laptop',
    title: 'MacBook Pro M2 Liquid Damage Logic Board Recovery',
    description: 'Micro-soldered blown power ICs and corrosion-damaged capacitors under microscope. Recovered 100% of user data with 24-hour turnaround.',
    metrics: ['100% Data Saved', 'Micro-Soldering', '24h Turnaround'],
    tags: ['MacBook Pro M2', 'Logic Board', 'FLIR Thermal Scan'],
    gradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    id: 2,
    category: 'Gaming PC & Desktop',
    title: 'RTX 3080 Gaming Rig GPU VRAM & Thermal Overhaul',
    description: 'Diagnosed GPU artifacts and thermal throttling at 94°C. Re-seated liquid cooling loop, replaced VRAM thermal pads, dropped load temps to 68°C.',
    metrics: ['26°C Temp Drop', 'Zero Artifacts', 'Stress Tested'],
    tags: ['Gaming PC', 'GPU VRAM', 'Liquid Cooling'],
    gradient: 'from-orange-500/10 to-amber-500/10'
  },
  {
    id: 3,
    category: 'MacBook & Laptop',
    title: 'Enterprise Workstation Fleet Display & Battery Overhaul',
    description: 'Upgraded and serviced 45 Dell XPS and ThinkPad laptops for a local engineering office under Zero-OTP privacy protocols.',
    metrics: ['45 Workstations', 'Zero Password', 'Serial Verified'],
    tags: ['Dell XPS', 'ThinkPad', 'Battery Swap'],
    gradient: 'from-blue-500/10 to-emerald-500/10'
  },
  {
    id: 4,
    category: 'Gaming PC & Desktop',
    title: 'Microsoft Surface Pro Touchscreen & Battery Restoration',
    description: 'Safely unbonded delicate Surface Pro 8 OLED display panel using specialized thermal heating tools and installed grade-A battery.',
    metrics: ['Zero Screen Crack', 'Original OLED', '90-Day Warranty'],
    tags: ['Surface Pro 8', 'OLED Screen', 'Precision Disassembly'],
    gradient: 'from-slate-500/10 to-blue-500/10'
  }
];

const categories = ['All Repairs', 'MacBook & Laptop', 'Gaming PC & Desktop'];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All Repairs');

  const filteredCases = repairCases.filter((item) => {
    if (activeTab === 'All Repairs') return true;
    return item.category === activeTab;
  });

  return (
    <section className="relative bg-slate-50 py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              FEATURED HARDWARE REPAIR CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Precision Engineering in Action
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore real-world case studies of complex logic board soldering, screen replacements, and liquid damage recoveries performed at our lab.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between p-8 space-y-6"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${item.gradient} rounded-full blur-3xl opacity-50 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="h-8 w-8 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metrics & Tech Stack */}
                <div className="space-y-4 pt-4 border-t border-slate-200 relative z-10">
                  <div className="grid grid-cols-3 gap-2">
                    {item.metrics.map((metric) => (
                      <div key={metric} className="bg-slate-50 p-2 rounded-xl text-center border border-slate-200">
                        <span className="text-xs font-bold text-slate-800 block">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
