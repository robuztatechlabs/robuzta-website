'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, ShieldCheck, Wrench, Sparkles, Send, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FranchiseModalPopup({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('5L - 10L');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Robuzta Techlabs! I am interested in a Franchise Partnership:\n\n- Name: ${name}\n- Phone: ${phone}\n- City: ${city}\n- Budget Range: ${budget}\n\nPlease share Franchise Model Details & Consultation.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-8 shadow-2xl overflow-hidden z-10 space-y-6"
          >
            
            {/* Ambient Corner Glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 bg-[#0E7C7B]/20 rounded-full blur-[80px]" />

            {/* Modal Header & Close */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Sparkles size={16} />
                </span>
                <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-400">
                  ROBUZTA LAB FRANCHISE OPPORTUNITY
                </span>
              </div>
              
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
                aria-label="Close Franchise Popup"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Heading & Intro */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Own a High-Profit Hardware Repair Lab in Your City
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Partner with India’s leading chip-level diagnostic lab brand. Get turnkey ESD workbench equipment, technician training, and marketing support.
              </p>
            </div>

            {/* 3 Key Profit Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-extrabold">
                  <TrendingUp size={15} />
                  <span>₹3L - ₹6L/mo</span>
                </div>
                <div className="text-[11px] text-slate-300 font-bold">Est. Monthly Profit</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-extrabold">
                  <Wrench size={15} />
                  <span>Turnkey Setup</span>
                </div>
                <div className="text-[11px] text-slate-300 font-bold">ESD Workbench Provided</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-extrabold">
                  <ShieldCheck size={15} />
                  <span>100% Training</span>
                </div>
                <div className="text-[11px] text-slate-300 font-bold">30-Day Tech Coaching</div>
              </div>
            </div>

            {/* Form / Submitted Success View */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center space-y-3">
                <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                <h4 className="text-lg font-black text-white">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-emerald-200">
                  Redirecting to WhatsApp to share your franchise consultation details with our expansion team...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98980 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                      Target City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad, Surat, Rajkot"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                      Investment Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="5L - 10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10L - 20L">₹10 Lakhs - ₹20 Lakhs</option>
                      <option value="20L+">₹20 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Apply for Franchise Consultation</span>
                  </button>

                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3.5 text-xs font-black text-white transition-all shrink-0"
                  >
                    <WhatsappIcon size={18} className="text-white" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

            <div className="pt-2 text-center border-t border-slate-800 text-[11px] text-slate-400">
              Need immediate phone guidance? Call Franchise Hotline at{' '}
              <a href={siteConfig.phoneHref} className="text-amber-400 font-bold hover:underline">
                +91 999 245 2459
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
