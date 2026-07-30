'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Laptop, Smartphone, Cpu, Clock, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const deviceCategories = [
  { id: 'laptop', name: 'Laptop & MacBook', icon: Laptop },
  { id: 'mobile', name: 'Smartphone & Tablet', icon: Smartphone },
  { id: 'pc', name: 'Gaming PC & Desktop', icon: Cpu }
];

const issueOptions = {
  laptop: [
    { id: 'l1', label: 'Screen & Display Repair', badge: 'Same-Day Screen Swap', estTime: '2 - 4 Hours' },
    { id: 'l2', label: 'Motherboard No Power / Liquid Spill', badge: 'BGA Micro-Soldering', estTime: '24 - 48 Hours' },
    { id: 'l3', label: 'Battery Draining & Charging Failure', badge: 'OEM Battery Swap', estTime: '1 - 2 Hours' },
    { id: 'l4', label: 'Overheating & Slow SSD Upgrade', badge: 'High-Speed NVMe', estTime: 'Same-Day' }
  ],
  mobile: [
    { id: 'm1', label: 'Cracked OLED Display & Touch Fault', badge: 'Original Assembly', estTime: '1 - 2 Hours' },
    { id: 'm2', label: 'Battery Health & Sudden Shutdown', badge: 'Original Battery Health', estTime: '45 Mins' },
    { id: 'm3', label: 'Charging Flex, Mic & Speaker Issue', badge: 'Type-C / Lightning Flex', estTime: '1 Hour' },
    { id: 'm4', label: 'Water Spill & Liquid Damage Rescue', badge: 'Ultrasonic Board Cleaning', estTime: 'Same-Day' }
  ],
  pc: [
    { id: 'p1', label: 'GPU Crash, FPS Drop & Overheating', badge: 'Liquid Metal Repasting', estTime: 'Same-Day' },
    { id: 'p2', label: 'No Display, RAM & PSU Short-Circuit', badge: 'Voltage Diagnostics', estTime: '24 Hours' },
    { id: 'p3', label: 'Custom AIO Cooler Loop Maintenance', badge: 'Loop Flush & Clean', estTime: 'Same-Day' }
  ]
};

export function DiagnosticEstimator() {
  const [category, setCategory] = useState('laptop');
  const [selectedIssue, setSelectedIssue] = useState(issueOptions['laptop'][0]);

  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setSelectedIssue(issueOptions[catId][0]);
  };

  const whatsappMsg = `Hi Robuzta Techlabs! I need a repair estimate:\n- Device: ${deviceCategories.find(c => c.id === category)?.name}\n- Issue: ${selectedIssue.label}\n\nPlease share discounted quote & free doorstep pickup availability in Ahmedabad.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-2xl shadow-slate-200/60 space-y-8 relative overflow-hidden">
      
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#0E7C7B]">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
              Instant Diagnostic Price Estimator
            </h3>
            <p className="text-xs text-slate-500 font-medium">Select your device and fault for instant estimate</p>
          </div>
        </div>

        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          100% Free Inspection Fee
        </span>
      </div>

      {/* Step 1: Device Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            STEP 1: SELECT DEVICE TYPE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {deviceCategories.map((cat) => {
            const CategoryIcon = cat.icon;
            const active = category === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center justify-center gap-3 p-4 rounded-2xl text-xs font-extrabold transition-all duration-200 cursor-pointer border ${
                  active
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md shadow-slate-900/15 scale-[1.01]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <CategoryIcon size={18} className={active ? 'text-teal-400' : 'text-slate-500'} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Fault Selection List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            STEP 2: SELECT HARDWARE FAULT
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {issueOptions[category].map((issue) => {
            const isSelected = selectedIssue.label === issue.label;

            return (
              <button
                key={issue.id || issue.label}
                type="button"
                onClick={() => setSelectedIssue(issue)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer border text-left ${
                  isSelected
                    ? 'bg-teal-50/70 border-[#0E7C7B] text-slate-900 ring-2 ring-[#0E7C7B]/30 shadow-xs'
                    : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                    isSelected ? 'bg-[#0E7C7B] border-[#0E7C7B] text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && <Check size={14} strokeWidth={3} />}
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-slate-900 block">{issue.label}</span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock size={12} className="text-teal-600 shrink-0" />
                      Turnaround: {issue.estTime}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-extrabold text-[#0E7C7B] bg-teal-50 border border-teal-200 px-3 py-1 rounded-xl shrink-0 hidden sm:inline-block">
                  {issue.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Action & Trust Summary Bar */}
      <div className="pt-4 border-t border-slate-100 space-y-6">
        
        {/* Value Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-extrabold text-slate-700">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Free Doorstep Pickup</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5">
            <ShieldCheck size={15} className="text-[#0E7C7B] shrink-0" />
            <span>180-Day Warranty</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Zero Password Needed</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5">
            <ShieldCheck size={15} className="text-[#0E7C7B] shrink-0" />
            <span>Original Genuine Parts</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-[1.01] transition-all text-center"
          >
            <WhatsappIcon size={22} className="text-white shrink-0" />
            <span>Get Instant Estimate on WhatsApp</span>
          </a>

          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white px-6 py-4 text-sm font-black shadow-md transition-all text-center"
          >
            <Phone size={18} className="text-teal-400 shrink-0" />
            <span>Call Senior Lab Technician Directly</span>
          </a>
        </div>

      </div>

    </div>
  );
}
