'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const standardModel = {
  id: 'standard',
  name: 'Standard Hardware Lab',
  footprint: '300 - 500 Sq Ft',
  investment: '₹8-16 Lakhs',
  estRevenue: '₹6-7 Lakhs / mo',
  profitMargin: '45%',
  estProfit: '₹1-3 Lakhs / mo',
  payback: '10 - 12 Months',
  includes: [
    'Diagnostic Microscope & ESD Bench',
    'Laptop & Smartphone Parts Starter Stock',
    'Robuzta CRM & WhatsApp Bot License',
    'Local Google Maps Marketing Campaign',
    'Technician Hiring Assistance & 30-Day Training'
  ]
};

export function FranchiseInvestmentCalculator() {
  return (
    <section id="franchise-calculator" className="relative bg-slate-50/50 dark:bg-slate-900/60 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0E7C7B]/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 rounded-full inline-block"
          >
            FINANCIAL MODELS & PROJECTIONS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
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
            Inspect estimated monthly revenue, gross margins, and break-even timelines for our standard hardware lab model.
          </motion.p>
        </div>

        {/* Dynamic Financial Overview Box */}
        <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl space-y-8">
          
          {/* Model Title & Footprint Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-[#0E7C7B] dark:text-teal-400 uppercase tracking-wider block">
                Store Model
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {standardModel.name}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-black text-slate-700 dark:text-slate-300 w-fit">
              <span>Required Area:</span>
              <span className="text-[#0E7C7B] dark:text-teal-400">{standardModel.footprint}</span>
            </div>
          </div>

          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[11px] font-black text-[#0E7C7B] dark:text-teal-400 uppercase tracking-wider block">
                Initial Investment
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {standardModel.investment}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">{standardModel.footprint}</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Est. Monthly Revenue
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {standardModel.estRevenue}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Based on 25+ daily repairs</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Est. Net Monthly Profit
              </span>
              <div className="text-2xl sm:text-4xl font-black text-[#EA580C]">
                {standardModel.estProfit}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">{standardModel.profitMargin} Net Margin</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[11px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
                Target Payback Period
              </span>
              <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {standardModel.payback}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">100% Capital Recovery</div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-black text-slate-900 dark:text-white">
              Deliverables Included in {standardModel.name}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {standardModel.includes.map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 size={16} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
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
