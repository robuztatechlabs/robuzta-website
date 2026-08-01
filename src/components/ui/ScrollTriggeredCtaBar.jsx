'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, X } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

export function ScrollTriggeredCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Quick Action Bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl"
        >
          <div className="rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 sm:p-3.5 border border-slate-800 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3">
            
            {/* Left Status Badge */}
            <div className="hidden md:flex items-center gap-3 pl-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E7C7B]/20 text-teal-400 border border-[#0E7C7B]/30">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-slate-400 block tracking-widest">
                  LIVE WORKBENCH
                </span>
                <span className="text-xs font-black text-white">
                  Technicians Available Now
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center justify-center gap-2.5 w-full md:w-auto">
              <button
                type="button"
                onClick={() => openModal({ formType: 'Sticky Bottom Bar' })}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 px-4 sm:px-6 py-2.5 text-xs font-black text-white shadow-lg shadow-[#0E7C7B]/25 transition-all text-center cursor-pointer"
              >
                <Calendar size={15} />
                <span>Book Repair</span>
              </button>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 sm:px-6 py-2.5 text-xs font-black text-white shadow-md transition-all text-center"
              >
                <WhatsappIcon size={16} className="text-white" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center h-10 w-10 sm:w-auto sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-extrabold text-white transition-all"
                title="Call Senior Technician"
              >
                <Phone size={15} className="text-teal-400" />
                <span className="hidden sm:inline sm:ml-2">Call Tech</span>
              </a>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="h-8 w-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center shrink-0 cursor-pointer"
              title="Close Floating Bar"
            >
              <X size={14} />
            </button>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
