'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, X, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

export function ScrollTriggeredCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
          aria-label="Unified Quick Action Floating Bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl pointer-events-auto"
        >
          <div className="rounded-2xl sm:rounded-full bg-slate-900/95 dark:bg-slate-950/95 text-white p-2.5 sm:p-3 border border-slate-700/80 shadow-2xl backdrop-blur-xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-4 shrink-0">
            
            {/* Left Status Badge (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-2.5 pl-2 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0E7C7B]/20 text-teal-400 border border-[#0E7C7B]/30 shrink-0">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-left whitespace-nowrap">
                <span className="text-[10px] font-black uppercase text-[#0E7C7B] dark:text-teal-400 block tracking-widest leading-none">
                  LIVE WORKBENCH
                </span>
                <span className="text-xs font-extrabold text-white leading-tight">
                  Technicians Available
                </span>
              </div>
            </div>

            {/* Unified Action Buttons in ONE Single Line */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-2 shrink-0">
              
              {/* WhatsApp Quote */}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-emerald-600 hover:bg-emerald-500 px-3.5 py-2.5 sm:px-5 sm:py-2.5 text-xs font-black text-white shadow-md transition-all whitespace-nowrap"
              >
                <WhatsappIcon size={16} className="text-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Book Pickup / Diagnosis */}
              <button
                type="button"
                onClick={() => openModal({ formType: 'Unified Floating Bar' })}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-[#0E7C7B] hover:bg-teal-600 px-3.5 py-2.5 sm:px-5 sm:py-2.5 text-xs font-black text-white shadow-lg shadow-[#0E7C7B]/25 transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar size={15} className="shrink-0" />
                <span>Book Pickup</span>
              </button>

              {/* Direct Call */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 text-xs font-extrabold text-white transition-all whitespace-nowrap"
                title="Call Senior Technician"
              >
                <Phone size={14} className="text-teal-400 shrink-0" />
                <span>Call Tech</span>
              </a>

            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="hidden sm:flex h-8 w-8 rounded-full bg-slate-800/80 text-slate-400 hover:text-white items-center justify-center shrink-0 cursor-pointer transition-colors"
              title="Dismiss Floating Bar"
            >
              <X size={14} />
            </button>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
