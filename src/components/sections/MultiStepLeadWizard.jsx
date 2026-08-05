'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Laptop, Smartphone, Tablet, Cpu, Droplets, HardDrive, ShieldCheck, Truck, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { submitLeadData } from '@/lib/leadDispatcher';

const brands = [
  'Apple MacBook / iPad', 'Dell Laptops', 'HP Pavilion / OMEN',
  'Lenovo ThinkPad', 'ASUS ROG / ZenBook', 'Samsung Galaxy',
  'OnePlus / Android', 'Custom Gaming PC'
];

const issueTypes = [
  { label: 'Screen & Touch Display Damage', icon: Laptop, badge: 'Same-Day Swap' },
  { label: 'Liquid Spill & Water Damage Emergency', icon: Droplets, badge: 'Decontamination' },
  { label: 'Motherboard No Power / Dead Logic Board', icon: Cpu, badge: 'BGA Soldering' },
  { label: 'Battery Drain / Charging Port Repair', icon: ShieldCheck, badge: 'OEM Battery' },
  { label: 'Hard Drive & SSD Data Recovery', icon: HardDrive, badge: 'Data Saved' }
];

export function MultiStepLeadWizard() {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('South Bopal');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // 1. Dispatch to API (Google Sheets, Email Notification & Local Storage Backup)
    submitLeadData({
      formType: '30-Second Diagnostic & Doorstep Pickup Wizard',
      name,
      phone,
      device: selectedBrand,
      issue: selectedIssue.label,
      locality,
      notes: 'Customer requested doorstep pickup in Ahmedabad.'
    });

    // 2. Format WhatsApp Redirection
    const whatsappMsg = `Hi Robuzta Techlabs! I booked a Zero-Cost Inspection & Pickup:\n\n- Brand: ${selectedBrand}\n- Issue: ${selectedIssue.label}\n- Customer: ${name}\n- Phone: ${phone}\n- Locality: ${locality}\n\nPlease confirm my pickup slot and share initial cost estimate.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section className="py-28 lg:py-36 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Accent Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Book Zero-Cost Inspection in 30 Seconds
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            Zero inspection fees. Standard doorstep pickup across South Bopal, Satellite, Vastrapur & Ahmedabad.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl space-y-8">
          
          {/* Step Progress Header */}
          {!isSubmitted && (
            <div className="flex items-center justify-between gap-1 sm:gap-2 max-w-lg mx-auto p-1.5 sm:p-2 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 font-tech text-[10px] sm:text-xs font-bold">
              <div className={`flex-1 text-center py-2 sm:py-2.5 px-1 rounded-xl transition-all ${
                step === 1 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
              }`}>
                01. Brand
              </div>
              <div className={`flex-1 text-center py-2 sm:py-2.5 px-1 rounded-xl transition-all ${
                step === 2 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
              }`}>
                02. Issue
              </div>
              <div className={`flex-1 text-center py-2 sm:py-2.5 px-1 rounded-xl transition-all ${
                step === 3 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
              }`}>
                03. Pickup
              </div>
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="h-20 w-20 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={44} />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Pickup Slot Confirmed & Recorded!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your repair request for <strong>{selectedBrand} ({selectedIssue.label})</strong> in <strong>{locality}</strong> has been recorded in our system. Connecting to WhatsApp...
                </p>
              </div>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-black text-white shadow-xl hover:bg-emerald-500 transition-all"
              >
                <WhatsappIcon size={20} className="text-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: BRAND SELECTOR */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                    Step 1: Select Your Device Brand
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {brands.map((b) => {
                      const isSelected = selectedBrand === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBrand(b)}
                          className={`p-4 rounded-2xl text-xs font-black text-center transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#0E7C7B] text-white border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/25 scale-105'
                              : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#0E7C7B]'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-xs font-black text-white shadow-lg cursor-pointer"
                    >
                      <span>Next: Select Hardware Issue</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: ISSUE SELECTOR */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                    Step 2: Select Main Hardware Issue
                  </h4>

                  <div className="space-y-3">
                    {issueTypes.map((iss) => {
                      const IssIcon = iss.icon;
                      const isSelected = selectedIssue.label === iss.label;
                      return (
                        <button
                          key={iss.label}
                          type="button"
                          onClick={() => setSelectedIssue(iss)}
                          className={`w-full p-4 rounded-2xl text-left transition-all cursor-pointer border flex items-center justify-between gap-4 ${
                            isSelected
                              ? 'bg-[#0E7C7B]/10 dark:bg-teal-950/40 border-[#0E7C7B] shadow-md'
                              : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-[#0E7C7B] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              <IssIcon size={20} />
                            </div>
                            <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                              {iss.label}
                            </span>
                          </div>

                          <span className="text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 px-3 py-1 rounded-full shrink-0">
                            {iss.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-xs font-extrabold text-slate-800 dark:text-slate-200 cursor-pointer"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-xs font-black text-white shadow-lg cursor-pointer"
                    >
                      <span>Next: Enter Contact & Address</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & LOCATION */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                    Step 3: Contact & Doorstep Pickup Locality
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Patel"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 999 998 8885"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none font-tech"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Ahmedabad Locality *</label>
                    <select
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                    >
                      <option value="South Bopal & Bopal">South Bopal & Bopal</option>
                      <option value="Satellite & Vastrapur">Satellite & Vastrapur</option>
                      <option value="Prahlad Nagar & SG Highway">Prahlad Nagar & SG Highway</option>
                      <option value="Shela & Ghuma">Shela & Ghuma</option>
                      <option value="Tragad & Chandkheda">Tragad & Chandkheda</option>
                      <option value="Other Locality in Ahmedabad">Other Locality in Ahmedabad</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-xs font-extrabold text-slate-800 dark:text-slate-200 cursor-pointer"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-xs font-black text-white shadow-xl shadow-[#0E7C7B]/25 cursor-pointer"
                    >
                      <Truck size={16} />
                      <span>Confirm Pickup & Quote</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
