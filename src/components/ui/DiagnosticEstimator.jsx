'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { MagneticButton } from '@/components/ui/MagneticButton';

const deviceCategories = [
  { id: 'laptop', name: 'Laptop / MacBook' },
  { id: 'mobile', name: 'Smartphone / iPhone' },
  { id: 'pc', name: 'Gaming PC / Desktop' }
];

const issueOptions = {
  laptop: [
    { label: 'Screen / Display Damage', badge: 'Same-Day Screen Swap' },
    { label: 'Motherboard No Power / Liquid Spill', badge: 'BGA Micro-Soldering' },
    { label: 'Battery / Charging Failure', badge: 'OEM Battery Swap' },
    { label: 'Slow Performance / SSD Upgrade', badge: 'High-Speed NVMe' }
  ],
  mobile: [
    { label: 'Broken OLED Glass / Touch Fail', badge: 'Original OLED Touch' },
    { label: 'Battery Draining Quickly', badge: 'Battery Health Care' },
    { label: 'Charging Port Flex Issue', badge: 'Type-C / Lightning Flex' },
    { label: 'Water / Liquid Damage', badge: 'Chemical Board Wash' }
  ],
  pc: [
    { label: 'GPU Crash / Thermal Throttling', badge: 'VRAM Repasting' },
    { label: 'No Display / RAM / PSU Fault', badge: 'Voltage Stress Test' },
    { label: 'Liquid Cooling Loop Cleanup', badge: 'Loop Flush & Maintenance' }
  ]
};

export function DiagnosticEstimator() {
  const [category, setCategory] = useState('laptop');
  const [selectedIssue, setSelectedIssue] = useState(issueOptions['laptop'][0]);

  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setSelectedIssue(issueOptions[catId][0]);
  };

  const whatsappMsg = `Hi Robuzta Techlabs! I need a repair estimate:\n- Device: ${deviceCategories.find(c => c.id === category)?.name}\n- Fault: ${selectedIssue.label}\n\nPlease share discounted quote & doorstep pickup availability.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl space-y-6">
      
      {/* Badge Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-[#0E7C7B]" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E7C7B]">
            INSTANT DIAGNOSTIC ESTIMATOR
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ₹0 Diagnosis Fee
        </span>
      </div>

      {/* Step 1: Select Device */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          1. Select Device Type
        </label>
        <div className="grid grid-cols-3 gap-2">
          {deviceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-extrabold transition-all border text-center ${
                category === cat.id
                  ? 'bg-[#0E7C7B] text-white border-[#0E7C7B] shadow-md'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Issue */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          2. Select Hardware Issue
        </label>
        <div className="space-y-2">
          {issueOptions[category].map((issue) => (
            <button
              key={issue.label}
              type="button"
              onClick={() => setSelectedIssue(issue)}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all border text-left ${
                selectedIssue.label === issue.label
                  ? 'bg-slate-800 border-[#0E7C7B] text-white'
                  : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/80'
              }`}
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className={selectedIssue.label === issue.label ? 'text-[#0E7C7B]' : 'text-slate-600'} />
                {issue.label}
              </span>
              <span className="text-[10px] font-mono text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-2 py-0.5 rounded-md">
                {issue.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Result Card: Value Badges & Lead Capture */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 border border-slate-800 space-y-4">
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">Included Services:</span>
          <span className="text-xs font-mono text-emerald-400 font-bold">100% Free Inspection</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
            <CheckCircle2 size={14} className="text-[#0E7C7B]" /> Free Pickup across Ahmedabad
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
            <CheckCircle2 size={14} className="text-[#0E7C7B]" /> 180-Day Warranty Included
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
            <CheckCircle2 size={14} className="text-[#0E7C7B]" /> Zero Password / OTP Needed
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
            <CheckCircle2 size={14} className="text-[#0E7C7B]" /> Live Workbench Video Log
          </div>
        </div>

        {/* Lead Action CTAs */}
        <div className="pt-2 space-y-3 w-full">
          <MagneticButton className="w-full">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:scale-[1.01] transition-all text-center"
            >
              <WhatsappIcon size={20} className="text-white shrink-0" />
              <span className="text-white font-extrabold truncate">Get Discounted Quote on WhatsApp</span>
            </a>
          </MagneticButton>

          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-3.5 text-sm font-extrabold text-white transition-all text-center shadow-sm"
          >
            <Phone size={17} className="text-[#0E7C7B] shrink-0" />
            <span className="truncate">Call Senior Technician Directly</span>
          </a>
        </div>

      </div>

    </div>
  );
}
