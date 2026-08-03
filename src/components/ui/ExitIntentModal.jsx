'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { submitLeadData } from '@/lib/leadDispatcher';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [device, setDevice] = useState('Laptop / MacBook');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check session storage - only show once per visit
    const dismissed = sessionStorage.getItem('robuzta_exit_dismissed');
    if (dismissed) return;

    const handleMouseLeave = (e) => {
      // Triggers ONLY when cursor leaves top edge on desktop
      if (e.clientY <= 5 && !sessionStorage.getItem('robuzta_exit_dismissed')) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('robuzta_exit_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    submitLeadData({
      formType: 'Exit Intent 10% Off Voucher',
      name,
      phone,
      device
    });
    const whatsappMsg = `Hi Robuzta Techlabs! I claimed the 10% Off Repair Coupon & Free Inspection:\n\n- Name: ${name}\n- Phone: ${phone}\n- Device: ${device}\n\nPlease share quote and confirm my appointment.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      handleClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 shadow-2xl overflow-hidden text-slate-900 dark:text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close modal"
            >
              <X size={18} />
            </button>

            {/* Subtle Accent Glow */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 bg-[#0E7C7B]/20 rounded-full blur-[80px]" />

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black">Voucher Claimed!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Opening WhatsApp to send your 10% discount code and free inspection details...
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-black text-amber-600 dark:text-amber-400">
                    <Gift size={14} className="animate-bounce" />
                    <span>EXCLUSIVE 10% OFF VOUCHER</span>
                  </div>

                  <h3 id="exit-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight">
                    Wait! Get ₹200 OFF Your First Repair
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Claim your instant discount code plus free doorstep pickup across South Bopal & Ahmedabad.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98980 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Device</label>
                      <select
                        value={device}
                        onChange={(e) => setDevice(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                      >
                        <option value="Laptop / MacBook">Laptop / MacBook</option>
                        <option value="Mobile Phone">Mobile Phone</option>
                        <option value="Tablet / iPad">Tablet / iPad</option>
                        <option value="Gaming Desktop">Gaming Desktop</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 transition-all cursor-pointer"
                  >
                    <span>Claim 10% Off + Free Inspection</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                {/* Footer Trust */}
                <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={13} className="text-emerald-500" /> No Spam Guarantee
                  </span>
                  <span>&bull;</span>
                  <span>Instant WhatsApp Voucher</span>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
