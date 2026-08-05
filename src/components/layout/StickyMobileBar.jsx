'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { Phone, Wrench } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

export function StickyMobileBar() {
  const { openModal } = useBookingModal();
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-3 right-3 sm:left-6 sm:right-6 z-50 flex lg:hidden items-center justify-between gap-2 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-700/80 dark:border-slate-800 p-2 rounded-2xl shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
      aria-label="Mobile quick action floating bar"
    >
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/80 px-2 py-2.5 text-[11px] font-black text-white shadow-sm transition-all min-h-[42px]"
      >
        <Phone size={14} className="text-teal-400 shrink-0" />
        <span className="truncate">Call Now</span>
      </a>

      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-2 py-2.5 text-[11px] font-black text-white shadow-sm transition-all min-h-[42px]"
      >
        <WhatsappIcon size={15} className="text-white shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={() => openModal({ formType: 'Mobile Sticky Bar' })}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 px-2 py-2.5 text-[11px] font-black text-white shadow-sm transition-all min-h-[42px] cursor-pointer"
      >
        <Wrench size={14} className="text-white shrink-0" />
        <span className="truncate">Book Pickup</span>
      </button>
    </div>
  );
}
