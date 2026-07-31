'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ShieldCheck, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';

const models = [
  {
    id: 'standard',
    name: 'Standard Hardware Lab',
    footprint: '300 - 500 Sq Ft',
    investment: '₹8.5 Lakhs',
    estRevenue: '₹4.5 Lakhs / mo',
    profitMargin: '45%',
    estProfit: '₹2.0 Lakhs / mo',
    payback: '10 - 12 Months',
    includes: [
      'Diagnostic Microscope & ESD Bench',
      'Laptop & Smartphone Parts Starter Stock',
      'Robuzta CRM & WhatsApp Bot License',
      'Local Google Maps Marketing Campaign',
      'Technician Hiring Assistance & 30-Day Training'
    ]
  },
  {
    id: 'flagship',
    name: 'Flagship Enterprise Lab & Hub',
    footprint: '700 - 1200 Sq Ft',
    investment: '₹14.5 Lakhs',
    estRevenue: '₹9.5 Lakhs / mo',
    profitMargin: '55%',
    estProfit: '₹5.2 Lakhs / mo',
    payback: '8 - 11 Months',
    includes: [
      'Full BGA Micro-Soldering Rework Station',
      'OLED Screen Refurbishment Laminator',
      'Expanded Inventory Stock & Spares Supply',
      'Multi-Zone Doorstep Pickup Executive Fleet',
      'Corporate AMC Sales Support Package',
      'Dedicated Regional Master Engineer Escalation'
    ]
  }
];

export function FranchiseInvestmentCalculator() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <section id="franchise-calculator" className="relative bg-gradient-to-b from-slate-50 via-[#F8FAFC] to-white py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block"
          >
            FINANCIAL MODELS & PROJECTIONS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Investment, Unit Economics & ROI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            Compare our store models below to inspect estimated monthly revenue, gross margins, and break-even timelines.
          </motion.p>
        </div>

        {/* Model Selector Tabs */}
        <div className="flex items-center justify-center gap-3">
          {models.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedModel(m)}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                selectedModel.id === m.id
                  ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xl shadow-blue-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Dynamic Financial Overview Box */}
        <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 p-8 sm:p-12 shadow-2xl space-y-8">
          
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/70 space-y-1">
              <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider block">
                Initial Investment
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
                {selectedModel.investment}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{selectedModel.footprint}</div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-1">
              <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider block">
                Est. Monthly Revenue
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
                {selectedModel.estRevenue}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Based on 25+ daily repairs</div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-1">
              <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block">
                Est. Net Monthly Profit
              </span>
              <div className="text-2xl sm:text-4xl font-black text-[#EA580C]">
                {selectedModel.estProfit}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{selectedModel.profitMargin} Net Margin</div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-1">
              <span className="text-[11px] font-extrabold text-purple-700 uppercase tracking-wider block">
                Target Payback Period
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
                {selectedModel.payback}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">100% Capital Recovery</div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
              Deliverables Included in {selectedModel.name}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedModel.includes.map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
