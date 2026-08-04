'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, ShieldCheck, Truck, ArrowRight, Sparkles } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { submitLeadData } from '@/lib/leadDispatcher';

export function BookRepairModal() {
  const { isOpen, closeModal, modalData } = useBookingModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [device, setDevice] = useState(modalData?.device || 'Laptop / MacBook');
  const [issue, setIssue] = useState(modalData?.issue || 'Motherboard / Display Repair');
  const [locality, setLocality] = useState('South Bopal');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // 1. Dispatch Lead to API (Google Sheets, Email & Local Backup)
    submitLeadData({
      formType: 'Instant Modal Booking',
      name,
      phone,
      device,
      issue,
      locality,
      notes: 'Submitted via Instant Book Repair Popup'
    });

    // 2. Format WhatsApp Redirection
    const whatsappMsg = `Hi Robuzta Techlabs! I booked a Repair Appointment:\n\n- Name: ${name}\n- Phone: ${phone}\n- Device: ${device}\n- Issue: ${issue}\n- Locality: ${locality}\n\nPlease confirm my slot and diagnostic inspection.`;
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      closeModal();
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-7 sm:p-9 shadow-2xl overflow-hidden text-slate-900 dark:text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Accent Glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-[#0E7C7B]/20 rounded-full blur-[90px]" />

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black">Appointment Booked!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Connecting to WhatsApp for instant technician slot confirmation...
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300">
                    <Calendar size={14} />
                    <span>INSTANT REPAIR APPOINTMENT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Book Zero-Cost Inspection & Pickup
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Zero inspection fees. Standard doorstep pickup across South Bopal, Satellite & Ahmedabad.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Shah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                      />
                    </div>

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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Device Type</label>
                      <select
                        value={device}
                        onChange={(e) => setDevice(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                      >
                        <option value="Laptop / MacBook">Laptop / MacBook</option>
                        <option value="iPhone / Android">iPhone / Android</option>
                        <option value="iPad / Tablet">iPad / Tablet</option>
                        <option value="Gaming PC / Rig">Gaming PC / Rig</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Ahmedabad Locality</label>
                      <select
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                      >
                        <option value="South Bopal & Bopal">South Bopal & Bopal</option>
                        <option value="Satellite & Vastrapur">Satellite & Vastrapur</option>
                        <option value="Prahlad Nagar & SG Highway">Prahlad Nagar & SG Highway</option>
                        <option value="Shela & Ghuma">Shela & Ghuma</option>
                        <option value="Tragad & Chandkheda">Tragad & Chandkheda</option>
                        <option value="Other Area">Other Area</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Main Issue / Notes</label>
                    <input
                      type="text"
                      placeholder="e.g. Screen damage, Liquid spill, No power..."
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 text-xs sm:text-sm font-medium focus:border-[#0E7C7B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl shadow-[#0E7C7B]/25 transition-all cursor-pointer"
                  >
                    <Truck size={16} />
                    <span>Confirm Zero-Cost Inspection & Pickup</span>
                  </button>
                </form>

                {/* Footer Trust */}
                <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={13} className="text-emerald-500" /> ₹0 Inspection Fee
                  </span>
                  <span>&bull;</span>
                  <span>180-Day Warranty</span>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
