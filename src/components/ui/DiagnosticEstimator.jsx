'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Laptop, Smartphone, Cpu, Clock, Zap, Flame, Monitor } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { MagneticButton } from '@/components/ui/MagneticButton';

const deviceCategories = [
  { id: 'laptop', name: 'Laptop / Mac', icon: Laptop, badge: 'Popular' },
  { id: 'mobile', name: 'Phone / Tablet', icon: Smartphone, badge: 'Fast Service' },
  { id: 'pc', name: 'Gaming PC / Desktop', icon: Cpu, badge: 'Chip-Level' }
];

const issueOptions = {
  laptop: [
    { id: 'l1', label: 'Screen / Display Damage', badge: 'Same-Day Screen Swap', estTime: '2 - 4 Hours', icon: Monitor },
    { id: 'l2', label: 'Motherboard No Power / Liquid Damage', badge: 'BGA Micro-Soldering', estTime: '24 - 48 Hours', icon: Zap },
    { id: 'l3', label: 'Battery Health / Charging Port Failure', badge: 'OEM Battery Swap', estTime: '1 - 2 Hours', icon: Zap },
    { id: 'l4', label: 'Slow Boot / Thermal Overheating / SSD', badge: 'High-Speed NVMe', estTime: 'Same-Day', icon: Flame }
  ],
  mobile: [
    { id: 'm1', label: 'Broken OLED Glass / Touch Fail', badge: 'Original Touch Assembly', estTime: '1 - 2 Hours', icon: Monitor },
    { id: 'm2', label: 'Battery Draining Fast / Shutdown', badge: 'Original Battery Health', estTime: '45 Mins', icon: Zap },
    { id: 'm3', label: 'Charging Flex / Mic / Speaker Fault', badge: 'Type-C / Lightning Flex', estTime: '1 Hour', icon: Zap },
    { id: 'm4', label: 'Water / Liquid Damage Emergency', badge: 'Ultrasonic Board Cleaning', estTime: 'Same-Day', icon: Flame }
  ],
  pc: [
    { id: 'p1', label: 'GPU Crash / Thermal Throttling / FPS Drop', badge: 'Liquid Metal Repasting', estTime: 'Same-Day', icon: Flame },
    { id: 'p2', label: 'No Display / RAM / PSU Short-Circuit', badge: 'Voltage Stress Testing', estTime: '24 Hours', icon: Zap },
    { id: 'p3', label: 'Custom AIO Liquid Cooling Loop Flush', badge: 'Loop Flush & Maintenance', estTime: 'Same-Day', icon: Monitor }
  ]
};

export function DiagnosticEstimator() {
  const [category, setCategory] = useState('laptop');
  const [selectedIssue, setSelectedIssue] = useState(issueOptions['laptop'][0]);

  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setSelectedIssue(issueOptions[catId][0]);
  };

  const whatsappMsg = `Hi Robuzta Techlabs! I need a diagnostic quote:\n- Device: ${deviceCategories.find(c => c.id === category)?.name}\n- Issue: ${selectedIssue.label}\n\nPlease provide estimate and doorstep pickup availability in Ahmedabad.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B132B] to-[#070D1B] border border-teal-500/30 p-6 sm:p-9 text-white shadow-2xl shadow-slate-950/80 space-y-8 relative overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#0E7C7B]/20 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px]" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0E7C7B]/20 border border-[#0E7C7B]/40 flex items-center justify-center text-[#0E7C7B]">
            <Sparkles size={18} />
          </div>
          <div>
            <h3 className="text-sm font-extrabold tracking-wider text-white uppercase">
              INSTANT DIAGNOSTIC ESTIMATOR
            </h3>
            <p className="text-xs text-slate-400 font-medium">Select your device and issue for a live estimate</p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          100% Free Inspection Fee
        </span>
      </div>

      {/* Step 1: Device Category Tabs */}
      <div className="space-y-3 relative z-10">
        <label className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block flex items-center gap-1.5">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0E7C7B] text-white text-[10px]">1</span>
          Select Device Category
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {deviceCategories.map((cat) => {
            const CategoryIcon = cat.icon;
            const active = category === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`relative group flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                  active
                    ? 'bg-gradient-to-r from-[#0E7C7B] to-teal-600 text-white border-teal-400/80 shadow-lg shadow-teal-500/25 scale-[1.02]'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${active ? 'bg-white/20 text-white' : 'bg-slate-700/60 text-slate-300'}`}>
                  <CategoryIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-extrabold leading-snug">{cat.name}</div>
                  <span className={`text-[10px] font-mono font-semibold ${active ? 'text-teal-100' : 'text-slate-400'}`}>
                    {cat.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Issue Selection List */}
      <div className="space-y-3 relative z-10">
        <label className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block flex items-center gap-1.5">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0E7C7B] text-white text-[10px]">2</span>
          Select Hardware Fault
        </label>

        <div className="grid grid-cols-1 gap-2.5">
          {issueOptions[category].map((issue) => {
            const IssueIcon = issue.icon || Zap;
            const isSelected = selectedIssue.label === issue.label;

            return (
              <button
                key={issue.id || issue.label}
                type="button"
                onClick={() => setSelectedIssue(issue)}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer border text-left ${
                  isSelected
                    ? 'bg-slate-800/90 border-[#0E7C7B] text-white ring-2 ring-[#0E7C7B]/40 shadow-md shadow-[#0E7C7B]/10'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#0E7C7B] text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold block text-white">{issue.label}</span>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock size={12} className="text-teal-400 shrink-0" />
                      Est. Time: {issue.estTime}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-teal-300 bg-teal-950/80 border border-teal-500/40 px-3 py-1 rounded-xl shrink-0 hidden sm:inline-block">
                  {issue.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Result Summary & WhatsApp Lead Box */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-5 relative z-10">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3.5">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span className="text-xs font-extrabold text-white">Included Protection & Perks:</span>
          </div>
          <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-lg">
            Zero-OTP Privacy Guaranteed
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-200">
          <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
            <span>Free Doorstep Pickup (Ahmedabad)</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
            <span>180-Day Written Warranty</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
            <span>Serial-Verified Genuine Parts</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
            <span>Live Workbench Video Updates</span>
          </div>
        </div>

        {/* Lead Action CTAs */}
        <div className="pt-2 space-y-3">
          <MagneticButton className="w-full">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 hover:scale-[1.02] transition-all text-center group"
            >
              <WhatsappIcon size={22} className="text-white shrink-0" />
              <span className="text-white font-black text-base">Get Discounted Estimate on WhatsApp</span>
            </a>
          </MagneticButton>

          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 px-6 py-3.5 text-xs font-black text-white transition-all text-center shadow-sm"
          >
            <Phone size={16} className="text-[#0E7C7B] shrink-0" />
            <span>Call Senior Lab Technician Directly ({siteConfig.phone})</span>
          </a>
        </div>

      </div>

    </div>
  );
}
