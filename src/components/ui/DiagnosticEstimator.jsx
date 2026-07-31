'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ShieldCheck, Sparkles, Laptop, Smartphone, Cpu, Clock, Monitor, Zap, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const deviceCategories = [
  { id: 'laptop', name: 'Laptop / Mac', icon: Laptop },
  { id: 'mobile', name: 'Phone / Tablet', icon: Smartphone },
  { id: 'pc', name: 'Gaming PC / Desktop', icon: Cpu }
];

const issueOptions = {
  laptop: [
    { id: 'l1', label: 'Screen & Display Damage', badge: 'Same-Day Screen Swap', estTime: '2 - 4 Hours', icon: Monitor },
    { id: 'l2', label: 'Motherboard No Power / Liquid', badge: 'BGA Micro-Soldering', estTime: '24 - 48 Hours', icon: Zap },
    { id: 'l3', label: 'Battery Health & Charging Port', badge: 'OEM Battery Swap', estTime: '1 - 2 Hours', icon: ShieldCheck },
    { id: 'l4', label: 'Overheating & Slow SSD Upgrade', badge: 'High-Speed NVMe', estTime: 'Same-Day', icon: Flame }
  ],
  mobile: [
    { id: 'm1', label: 'Cracked OLED Glass & Touch', badge: 'Original Assembly', estTime: '1 - 2 Hours', icon: Monitor },
    { id: 'm2', label: 'Battery Draining & Fast Health Drop', badge: 'Original Battery', estTime: '45 Mins', icon: ShieldCheck },
    { id: 'm3', label: 'Charging Port, Mic & Speaker', badge: 'Flex Assembly Swap', estTime: '1 Hour', icon: Zap },
    { id: 'm4', label: 'Water Spill & Liquid Emergency', badge: 'Ultrasonic Board Clean', estTime: 'Same-Day', icon: Flame }
  ],
  pc: [
    { id: 'p1', label: 'GPU Crash, FPS Drop & Overheating', badge: 'Liquid Metal Repasting', estTime: 'Same-Day', icon: Flame },
    { id: 'p2', label: 'No Display, RAM & Power Short', badge: 'Voltage Stress Test', estTime: '24 Hours', icon: Zap },
    { id: 'p3', label: 'Custom AIO Cooling Loop Flush', badge: 'Loop Maintenance', estTime: 'Same-Day', icon: ShieldCheck }
  ]
};

export function DiagnosticEstimator() {
  const [category, setCategory] = useState('laptop');
  const [selectedIssue, setSelectedIssue] = useState(issueOptions['laptop'][0]);

  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setSelectedIssue(issueOptions[catId][0]);
  };

  const currentCategoryObj = deviceCategories.find(c => c.id === category);

  const whatsappMsg = `Hi Robuzta Techlabs! I need a repair estimate:\n- Device: ${currentCategoryObj?.name}\n- Issue: ${selectedIssue.label}\n\nPlease share discounted quote & free doorstep pickup availability in Ahmedabad.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-9 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 relative overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Category Tabs & Visual Issue Grid (Col 7) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          
          {/* Header Title */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-bold text-[#0E7C7B]">
              <Sparkles size={14} />
              <span>INTERACTIVE HARDWARE CONFIGURATOR</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Select Device & Hardware Issue
            </h3>
          </div>

          {/* Device Category Pills */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100/80 dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800">
            {deviceCategories.map((cat) => {
              const CategoryIcon = cat.icon;
              const active = category === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#0F172A] text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <CategoryIcon size={16} className={active ? 'text-teal-400' : 'text-slate-500 dark:text-slate-400'} />
                  <span className="truncate">{cat.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* 2x2 Visual Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {issueOptions[category].map((issue) => {
              const IssueIcon = issue.icon || Zap;
              const isSelected = selectedIssue.label === issue.label;

              return (
                <button
                  key={issue.id || issue.label}
                  type="button"
                  onClick={() => setSelectedIssue(issue)}
                  className={`group relative p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-gradient-to-br from-teal-50/90 to-emerald-50/40 dark:from-teal-900/30 dark:to-emerald-900/20 border-[#0E7C7B] shadow-md shadow-teal-500/10 ring-2 ring-[#0E7C7B]/30'
                      : 'bg-white dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md hover:bg-slate-50/50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isSelected ? 'bg-[#0E7C7B] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}>
                      <IssueIcon size={18} />
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isSelected ? 'bg-[#0E7C7B] text-white border-[#0E7C7B]' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {issue.badge.split(' ')[0]}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                      {issue.label}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-1 flex items-center gap-1">
                      <Clock size={12} className="text-teal-600 shrink-0" />
                      {issue.estTime}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Live Summary & Direct Booking Box (Col 5) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#070D1B] p-6 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
          
          {/* Ambient Corner Accent */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-[#0E7C7B]/30 rounded-full blur-[60px]" />

          {/* Top Selection Overview */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                LIVE ESTIMATE SUMMARY
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                ₹0 Inspection Fee
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-slate-400 font-medium">Selected Config:</div>
              <div className="text-base font-extrabold text-white leading-snug">
                {currentCategoryObj?.name} &bull; <span className="text-teal-300">{selectedIssue.label}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                <span>Estimated Turnaround:</span>
                <span className="text-emerald-400 font-mono font-extrabold">{selectedIssue.estTime}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                <span>Diagnostic Inspection:</span>
                <span className="text-white font-mono font-extrabold">FREE (No Obligation)</span>
              </div>
            </div>
          </div>

          {/* Protection Highlights */}
          <div className="space-y-2 text-xs font-semibold text-slate-300 relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              <span>Free Doorstep Pickup Across Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-teal-400 shrink-0" />
              <span>180-Day Written Warranty Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              <span>Zero Password / OTP Data Safety</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:scale-[1.02] transition-all text-center"
            >
              <WhatsappIcon size={20} className="text-white shrink-0" />
              <span>Get Discounted Quote on WhatsApp</span>
            </a>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-5 py-3 text-xs font-bold text-slate-200 transition-all text-center"
            >
              <Phone size={15} className="text-teal-400 shrink-0" />
              <span>Call Technician ({siteConfig.phone})</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
