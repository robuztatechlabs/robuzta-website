'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, X, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function QuickCallbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('Instant (Within 60 Sec)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const whatsappMsg = `Hi Robuzta Techlabs! I requested an Instant Callback:\n\n- Phone: ${phone}\n- Preferred Time: ${time}\n\nPlease call me back to discuss my device repair.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      setIsSubmitted(false);
      setPhone('');
    }, 1200);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="hidden sm:block fixed bottom-6 left-6 z-40">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 rounded-full bg-[#0E7C7B] text-white px-4 py-3 shadow-xl shadow-[#0E7C7B]/30 border border-white/20 text-xs font-black cursor-pointer group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white animate-pulse">
            <PhoneCall size={15} />
          </div>
          <span>Request 60-Sec Callback</span>
        </motion.button>
      </div>

      {/* Callback Request Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-7 shadow-2xl space-y-6"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X size={16} />
              </button>

              {isSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">Callback Scheduled!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Connecting to WhatsApp for instant confirmation...
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3 py-1 text-[11px] font-black text-[#0E7C7B] dark:text-teal-300">
                      <Clock size={12} />
                      <span>INSTANT FREE CALLBACK</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Speak with a Senior Tech</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Enter your mobile number and our lead engineer will call you back.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 999 245 2459"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Preferred Call Time</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                      >
                        <option value="Instant (Within 60 Sec)">Instant (Within 60 Seconds)</option>
                        <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                        <option value="Tomorrow Morning">Tomorrow Morning</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 cursor-pointer"
                    >
                      <Send size={15} />
                      <span>Request Free Callback</span>
                    </button>
                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
