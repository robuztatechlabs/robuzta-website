'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Wrench, ShieldCheck, Zap } from 'lucide-react';

const techCategories = {
  'Micro-Soldering & Logic Board': [
    { name: 'FLIR Thermal Imaging Camera', desc: 'Pinpoints short-circuits & motherboard overheating chips instantly without invasive probes.', tag: 'Diagnostics' },
    { name: 'BGA Optical Rework Station', desc: 'Precision chip-level micro-soldering, reballing, and SMC/Power IC replacement.', tag: 'Hardware' },
    { name: 'Rigol Digital Oscilloscope', desc: 'Logic board frequency, power rail, and signal wave diagnostics.', tag: 'Testing' },
    { name: 'ESD Anti-Static Bench', desc: 'Electrostatic discharge isolation protecting delicate microchips during repair.', tag: 'Safety' }
  ],
  'Disassembly & Testing': [
    { name: 'Thermal Heating Separator', desc: 'Safe display unbonding for Microsoft Surface, iPad, and OLED phone screens.', tag: 'Screen Repair' },
    { name: 'Stereo Zoom Microscope', desc: '45x magnification inspection for cracked traces and liquid corrosion clean.', tag: 'Inspection' },
    { name: 'External Hardware Boot Drives', desc: 'Testing hardware health under Zero-Password & Zero-OTP customer data safety.', tag: 'Data Privacy' },
    { name: 'Thermal Grizzly & Noctua Paste', desc: 'High-performance thermal compound repasting for gaming PCs and MacBooks.', tag: 'Cooling' }
  ],
  'Genuine Parts & Sourcing': [
    { name: 'Serial-Verified Displays', desc: 'Grade-A original screens for Apple Retina, Dell XPS, HP, and OLED phones.', tag: 'Original Parts' },
    { name: 'OEM Battery Packs', desc: 'High-cycle OEM batteries backed by official 180-day replacement warranty.', tag: 'Battery Health' },
    { name: 'Logic Board IC Components', desc: 'Genuine power ICs, charging flex cables, and capacitors.', tag: 'Components' },
    { name: 'Digital Invoice & Tracking', desc: 'Logged serial numbers and digital invoices for full customer transparency.', tag: 'Trust' }
  ]
};

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState('Micro-Soldering & Logic Board');

  return (
    <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
            LAB INSTRUMENTATION & DIAGNOSTIC GEAR
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Powered by Lab-Grade Diagnostic Instruments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            We utilize high-precision thermal imaging, BGA micro-soldering stations, and ESD-safe workstations to deliver Apple and enterprise-grade hardware care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {Object.keys(techCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {techCategories[activeTab].map((tech) => (
              <div
                key={tech.name}
                className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 flex items-start gap-4 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Cpu size={20} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {tech.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
