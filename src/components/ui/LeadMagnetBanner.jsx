'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { submitLeadData } from '@/lib/leadDispatcher';

export function LeadMagnetBanner() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDownloaded(true);

    submitLeadData({
      formType: 'Repair Price Guide & First Aid PDF Magnet',
      email,
      phone
    });

    const whatsappMsg = `Hi Robuzta Techlabs! I requested the Repair Cost & Water Damage First-Aid PDF Guide:\n\n- Email: ${email}\n- Phone: ${phone}\n\nPlease share the download link.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
              <FileText size={14} />
              <span>FREE HARDWARE RESOURCE GUIDE</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Download 2026 Repair Cost & Water Damage First-Aid Guide
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              Get official benchmark price ranges for screen replacements, motherboard logic soldering, battery swaps, plus emergency steps to save liquid-damaged devices.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-extrabold text-slate-700 dark:text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0E7C7B] dark:text-teal-400" />
                Updated 2026 Rates
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-500" />
                Emergency DIY Steps
              </span>
            </div>
          </div>

          {/* Right Lead Capture Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              {isDownloaded ? (
                <div className="text-center py-4 space-y-2">
                  <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">Guide Ready!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Opening WhatsApp download link...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 999 245 2459"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 px-5 py-3 text-xs font-black text-white shadow-md transition-all cursor-pointer"
                  >
                    <Download size={15} />
                    <span>Download Free PDF Guide</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
