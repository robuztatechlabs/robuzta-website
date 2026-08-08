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
    { id: 'l1', label: 'Screen & Display Damage', estPrice: 'Starting ₹1,499*', estTime: '2 - 4 Hours', icon: Monitor },
    { id: 'l2', label: 'Motherboard No Power / Liquid', estPrice: 'Starting ₹1,850*', estTime: '24 Hours', icon: Zap },
    { id: 'l3', label: 'Battery & Charging Port', estPrice: 'Starting ₹1,200*', estTime: '1 - 2 Hours', icon: ShieldCheck },
    { id: 'l4', label: 'Overheating & SSD Upgrade', estPrice: 'Starting ₹899*', estTime: 'Same-Day', icon: Flame }
  ],
  mobile: [
    { id: 'm1', label: 'Cracked Glass & OLED Display', estPrice: 'Starting ₹1,199*', estTime: '1 - 2 Hours', icon: Monitor },
    { id: 'm2', label: 'Battery Drain & Health Drop', estPrice: 'Starting ₹799*', estTime: '45 Mins', icon: ShieldCheck },
    { id: 'm3', label: 'Charging Port & Speaker Fix', estPrice: 'Starting ₹499*', estTime: '1 Hour', icon: Zap },
    { id: 'm4', label: 'Water Damage Cleaning', estPrice: 'Starting ₹999*', estTime: 'Same-Day', icon: Flame }
  ],
  pc: [
    { id: 'p1', label: 'GPU Crash & Overheating', estPrice: 'Starting ₹1,499*', estTime: 'Same-Day', icon: Flame },
    { id: 'p2', label: 'No Display & Power Short', estPrice: 'Starting ₹1,299*', estTime: '24 Hours', icon: Zap },
    { id: 'p3', label: 'Liquid Cooling & Repaste', estPrice: 'Starting ₹999*', estTime: 'Same-Day', icon: ShieldCheck }
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

  const whatsappMsg = `Hi Robuzta Techlabs! I need a repair estimate:\n- Device: ${currentCategoryObj?.name}\n- Issue: ${selectedIssue.label}\n- Est. Cost: ${selectedIssue.estPrice}\n\nPlease share availability & doorstep pickup details in Ahmedabad.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-8 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch relative z-10">
        
        {/* Left Column: Device Selector & Issue Cards */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 flex flex-col justify-between">
          
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
            Select Device & Hardware Issue
          </h3>

          {/* Device Category Pills */}
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-slate-100/80 dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800">
            {deviceCategories.map((cat) => {
              const CategoryIcon = cat.icon;
              const active = category === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-[10px] xs:text-xs font-black transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-slate-900 dark:bg-teal-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-white/60 dark:hover:bg-slate-800'
                  }`}
                >
                  <CategoryIcon size={14} className={active ? 'text-teal-400 text-white' : 'text-slate-500'} />
                  <span className="truncate">{cat.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* 2x2 Issue Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {issueOptions[category].map((issue) => {
              const IssueIcon = issue.icon || Zap;
              const isSelected = selectedIssue.label === issue.label;

              return (
                <button
                  key={issue.id || issue.label}
                  type="button"
                  onClick={() => setSelectedIssue(issue)}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex items-center gap-2.5 sm:gap-3 ${
                    isSelected
                      ? 'bg-gradient-to-br from-teal-50 to-emerald-50/50 dark:from-teal-950/40 dark:to-emerald-950/20 border-[#0E7C7B] shadow-md ring-2 ring-[#0E7C7B]/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-[#0E7C7B] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    <IssueIcon size={16} />
                  </div>

                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                    {issue.label}
                  </h4>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Instant Result Summary */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-900 dark:bg-slate-950 p-4 sm:p-6 text-white flex flex-col justify-between space-y-4 sm:space-y-5 border border-slate-800 shadow-xl relative overflow-hidden">
          
          <div className="space-y-4 relative z-10">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Estimated Quote</span>
              <h4 className="text-base sm:text-lg font-black text-white leading-snug">{selectedIssue.label}</h4>
              <span className="text-xs text-slate-400 font-medium">{currentCategoryObj?.name}</span>
            </div>

            {/* Estimated Price & Time Card */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">Estimated Cost:</span>
                <span className="text-emerald-400 font-black text-sm sm:text-base">{selectedIssue.estPrice}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">Turnaround:</span>
                <span className="text-teal-300 font-bold">{selectedIssue.estTime}</span>
              </div>
            </div>

            {/* Trust Perks */}
            <div className="space-y-1.5 text-xs text-slate-300 font-semibold pt-1">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Free Doorstep Pickup & Drop</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Zero Password Data Protection</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>180-Day Written Warranty</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-black text-white shadow-lg hover:bg-emerald-500 transition-all text-center"
            >
              <WhatsappIcon size={18} className="text-white shrink-0" />
              <span>Get Quote on WhatsApp</span>
            </a>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 transition-all text-center"
            >
              <Phone size={14} className="text-teal-400 shrink-0" />
              <span>Call Technician (+91 999 998 8885)</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
