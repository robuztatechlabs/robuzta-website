'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Wrench, ShieldCheck, Clock, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const diagnosticData = {
  Laptop: {
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI'],
    issues: [
      { name: 'Cracked Screen / Display Bleed', price: '₹2,499 – ₹4,999', time: '2 to 3 Hours', warranty: '180 Days' },
      { name: 'Battery Not Charging / Draining', price: '₹1,799 – ₹3,299', time: '1 to 2 Hours', warranty: '180 Days' },
      { name: 'Keyboard / Touchpad Failure', price: '₹1,299 – ₹2,499', time: '2 Hours', warranty: '90 Days' },
      { name: 'Motherboard No Power / Dead', price: '₹2,999 – ₹6,499', time: '24 to 48 Hours', warranty: '90 Days' },
      { name: 'Slow Boot / Hard Drive Failure', price: '₹1,999 – ₹4,499', time: '1 Hour', warranty: '3 Years (SSD)' },
      { name: 'Overheating / Thermal Throttling', price: '₹899 – ₹1,499', time: '1 Hour', warranty: '90 Days' }
    ]
  },
  MacBook: {
    brands: ['MacBook Air M1/M2/M3', 'MacBook Pro 13"/14"/16"', 'Intel MacBook Air', 'Intel MacBook Pro'],
    issues: [
      { name: 'Retina Display Replacement', price: '₹8,999 – ₹18,999', time: '3 to 4 Hours', warranty: '180 Days' },
      { name: 'Battery Service Warning', price: '₹4,999 – ₹8,999', time: '2 Hours', warranty: '180 Days' },
      { name: 'Logic Board Micro-Soldering', price: '₹6,499 – ₹14,999', time: '24 to 48 Hours', warranty: '90 Days' },
      { name: 'Liquid Damage Clean & Repair', price: '₹4,499 – ₹9,999', time: '24 Hours', warranty: '90 Days' },
      { name: 'Keyboard / Trackpad Fix', price: '₹3,999 – ₹7,499', time: '3 Hours', warranty: '90 Days' },
      { name: 'USB-C / Thunderbolt Port Repair', price: '₹2,999 – ₹5,499', time: '2 Hours', warranty: '90 Days' }
    ]
  },
  Smartphone: {
    brands: ['iPhone (All Series)', 'Samsung Galaxy S/A', 'OnePlus', 'Google Pixel', 'Xiaomi / Realme'],
    issues: [
      { name: 'OLED / Display Replacement', price: '₹1,999 – ₹9,999', time: '1 Hour', warranty: '180 Days' },
      { name: 'Battery Health Replacement', price: '₹1,299 – ₹3,999', time: '45 Mins', warranty: '180 Days' },
      { name: 'Charging Port Flex Repair', price: '₹899 – ₹1,999', time: '45 Mins', warranty: '90 Days' },
      { name: 'Speaker / Mic / Earpiece', price: '₹799 – ₹1,799', time: '45 Mins', warranty: '90 Days' },
      { name: 'Water Spill Remediation', price: '₹1,499 – ₹3,499', time: '12 Hours', warranty: '90 Days' }
    ]
  },
  Surface: {
    brands: ['Surface Pro 7/8/9', 'Surface Laptop 3/4/5', 'Surface Book 2/3', 'Surface Go'],
    issues: [
      { name: 'Touchscreen Digitizer Panel', price: '₹7,999 – ₹15,999', time: '4 Hours', warranty: '180 Days' },
      { name: 'Battery Swap & Seal', price: '₹4,499 – ₹8,499', time: '3 Hours', warranty: '180 Days' },
      { name: 'Power IC & Logic Port', price: '₹3,999 – ₹7,999', time: '24 Hours', warranty: '90 Days' }
    ]
  },
  'Gaming PC': {
    brands: ['Custom Intel/AMD Rig', 'ASUS ROG', 'MSI Gaming', 'Alienware / Dell G Series'],
    issues: [
      { name: 'GPU Micro-Soldering / VRAM Fix', price: '₹3,499 – ₹8,999', time: '24 Hours', warranty: '90 Days' },
      { name: 'Thermal Paste & Liquid Loop', price: '₹1,199 – ₹2,499', time: '1 Hour', warranty: '90 Days' },
      { name: 'Modular PSU Swap', price: '₹2,499 – ₹5,999', time: '1 Hour', warranty: '3 Years' }
    ]
  }
};

export function DiagnosticEstimator() {
  const [device, setDevice] = useState('Laptop');
  const [brand, setBrand] = useState(diagnosticData.Laptop.brands[0]);
  const [selectedIssue, setSelectedIssue] = useState(diagnosticData.Laptop.issues[0]);

  const handleDeviceChange = (dev) => {
    setDevice(dev);
    setBrand(diagnosticData[dev].brands[0]);
    setSelectedIssue(diagnosticData[dev].issues[0]);
  };

  const whatsappMsg = `Hi Robuzta Techlabs! I used your Hardware Diagnostic Estimator:\n\n*Device:* ${device} (${brand})\n*Issue:* ${selectedIssue.name}\n*Estimated Cost:* ${selectedIssue.price}\n\nI would like to book free doorstep pickup / lab inspection.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] border border-[#0E7C7B]/20">
            <Wrench size={24} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              Interactive Diagnostic Cost Calculator
              <Sparkles size={16} className="text-[#0E7C7B]" />
            </h3>
            <p className="text-xs text-slate-600 font-medium">Instant estimate with zero hidden diagnosis fees.</p>
          </div>
        </div>

        <span className="text-[11px] font-mono font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Zero-OTP Data Safety Protected
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Device Category */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              1. Select Device Category
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.keys(diagnosticData).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleDeviceChange(cat)}
                  className={`px-4 py-2.5 text-xs font-extrabold rounded-xl transition-all ${
                    device === cat
                      ? 'bg-[#0E7C7B] text-white shadow-md shadow-[#0E7C7B]/30'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Brand / Model */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              2. Select Brand / Series
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0E7C7B] font-bold"
            >
              {diagnosticData[device].brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Hardware Issue */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              3. Select Reported Fault
            </label>
            <div className="space-y-2">
              {diagnosticData[device].issues.map((iss) => (
                <button
                  key={iss.name}
                  type="button"
                  onClick={() => setSelectedIssue(iss)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs transition-all ${
                    selectedIssue.name === iss.name
                      ? 'bg-[#0E7C7B]/10 border-[#0E7C7B] text-slate-900 font-extrabold shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-medium'
                  }`}
                >
                  <span className="font-bold">{iss.name}</span>
                  <span className="text-[#0E7C7B] font-black">{iss.price}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Live Estimate Output */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-teal-50/30 border border-slate-200 p-6 space-y-6 flex flex-col justify-between shadow-md">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-2">
              Diagnostic Summary Breakdown
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Device:</span>
                <span className="text-slate-900 font-extrabold">{device} ({brand})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Primary Fault:</span>
                <span className="text-[#0E7C7B] font-extrabold">{selectedIssue.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Avg Lab Time:</span>
                <span className="text-slate-900 flex items-center gap-1 font-mono text-xs font-extrabold">
                  <Clock size={14} className="text-[#0E7C7B]" /> {selectedIssue.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Official Warranty:</span>
                <span className="text-emerald-700 font-mono text-xs font-extrabold flex items-center gap-1">
                  <ShieldCheck size={14} /> {selectedIssue.warranty}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 border border-slate-200 text-center space-y-1 shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Estimated Service Cost</div>
              <div className="text-3xl font-black text-[#0E7C7B] font-mono">
                {selectedIssue.price}
              </div>
              <div className="text-[10px] text-slate-500 font-medium">Includes genuine parts + workbench labor</div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0E7C7B]" /> Zero password needed during test
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#0E7C7B]" /> Free doorstep pickup available in Ahmedabad
              </div>
            </div>
          </div>

          {/* Fixed WhatsApp Button */}
          <div className="pt-2">
            <MagneticButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-emerald-600 px-6 py-4 text-xs font-black text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-[1.02] transition-transform"
              >
                <WhatsappIcon size={20} className="text-white shrink-0" />
                <span className="text-white font-extrabold">Book Diagnostic via WhatsApp</span>
              </a>
            </MagneticButton>
          </div>

        </div>

      </div>

    </div>
  );
}
