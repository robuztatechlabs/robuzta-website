'use client';

import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Brand Credibility & National Recognition',
    robuzta: 'High (Established Tech Lab Brand)',
    independent: 'Zero (Unorganized Local Shop)',
    generic: 'Moderate (Generic Franchise)'
  },
  {
    feature: 'Automated Lead Generation Engine',
    robuzta: 'Centralized Meta Ads & Google Maps SEO',
    independent: 'None (Relies only on walk-ins)',
    generic: 'Basic Local Flyers Only'
  },
  {
    feature: 'Chip-Level BGA Micro-Soldering Support',
    robuzta: '100% On-Demand Master Lab Escalation',
    independent: 'Outsourced to Third-Party Labs',
    generic: 'Component Swap Only'
  },
  {
    feature: 'Zero-OTP Customer Data Privacy SOP',
    robuzta: 'Standard Test Drive Boot Diagnostic',
    independent: 'Asks Customer for PIN / Passcode',
    generic: 'No Privacy Standard'
  },
  {
    feature: 'Turnkey ESD Anti-Static Lab Equipment',
    robuzta: 'ISO-Compliant Setup Included',
    independent: 'Manual Tooling Purchase',
    generic: 'Basic Hand Tools Only'
  },
  {
    feature: 'Genuine Parts Wholesale Sourcing',
    robuzta: 'Direct OEM Supply Chain Access',
    independent: 'High Retail Component Cost',
    generic: 'Third-Party Vendor Margins'
  },
  {
    feature: 'Target Return on Investment (ROI)',
    robuzta: '10 to 14 Months Payback',
    independent: 'High Risk / Uncertain',
    generic: '18 to 24 Months'
  }
];

export function FranchiseComparisonTable() {
  return (
    <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 rounded-full inline-block"
          >
            ENTERPRISE COMPARISON MATRIX
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Why Robuzta Outperforms Generic Repair Models
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            Compare how a Robuzta Techlabs franchise compares to starting an independent shop or buying a generic retail franchise.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-900 dark:bg-slate-900 text-white">
                <th className="p-5 text-sm font-black uppercase tracking-wider w-2/5">
                  Business Feature / Operational Advantage
                </th>
                <th className="p-5 text-sm font-black uppercase tracking-wider text-teal-300 bg-[#0E7C7B] w-1/5 text-center border-x border-slate-800">
                  Robuzta Franchise 🏆
                </th>
                <th className="p-5 text-sm font-black uppercase tracking-wider text-slate-400 w-1/5 text-center">
                  Independent Repair Shop
                </th>
                <th className="p-5 text-sm font-black uppercase tracking-wider text-slate-400 w-1/5 text-center">
                  Generic Agency Franchise
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              {comparisonRows.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900/60'}>
                  <td className="p-5 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                  
                  {/* Robuzta Column */}
                  <td className="p-5 text-center font-black text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-950/40 border-x border-[#0E7C7B]/20 dark:border-slate-800">
                    <div className="flex items-center justify-center gap-1.5">
                      <Check size={16} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                      <span>{row.robuzta}</span>
                    </div>
                  </td>

                  {/* Independent Column */}
                  <td className="p-5 text-center font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <X size={15} className="text-red-500 shrink-0" />
                      <span>{row.independent}</span>
                    </div>
                  </td>

                  {/* Generic Column */}
                  <td className="p-5 text-center font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <X size={15} className="text-amber-500 shrink-0" />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
