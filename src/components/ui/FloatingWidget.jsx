'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Phone, Wrench, X, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FloatingWidget() {
  const [expanded, setExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. LEFT SIDE: GO TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-40">
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              onClick={scrollToTop}
              className="group relative flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-900/90 dark:bg-slate-900 border-2 border-slate-700/80 text-teal-400 hover:text-white hover:bg-slate-800 shadow-2xl hover:scale-110 transition-all cursor-pointer backdrop-blur-md"
              title="Go to Top"
              aria-label="Scroll to top of page"
            >
              <ChevronUp size={20} className="sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform" />
              {/* Tooltip */}
              <span className="absolute left-14 sm:left-16 whitespace-nowrap rounded-xl bg-slate-950 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-slate-800 hidden sm:inline-block">
                Back to Top
              </span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* RIGHT SIDE: STICKY ACTIONS STACK (WhatsApp & Quick Help) */}
      <div 
        className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3.5 pointer-events-auto"
        aria-label="Sticky actions widget"
      >
        {/* Expandable Contact Menu Box */}
        {expanded && (
          <div className="w-[calc(100vw-2rem)] sm:w-80 max-w-[320px] rounded-2xl sm:rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-4 sm:p-5 text-white shadow-2xl space-y-3.5 sm:space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3">
              <strong className="text-xs font-black text-white uppercase tracking-wider">Robuzta Support</strong>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                aria-label="Close widget menu"
              >
                <X size={15} />
              </button>
            </div>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Talk directly to senior repair engineers in South Bopal & Tragad.
            </p>

            <div className="space-y-2 pt-0.5 sm:pt-1">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 sm:py-3 text-xs font-extrabold text-white shadow-md transition-all"
              >
                <WhatsappIcon size={18} className="text-white" />
                <span>WhatsApp Live Chat</span>
              </a>

              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 py-2.5 sm:py-3 text-xs font-extrabold text-white transition-all"
              >
                <Phone size={15} className="text-[#EA580C]" />
                <span>Call Hotline (+91 999 998 8885)</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setExpanded(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0E7C7B] hover:bg-teal-700 py-2.5 sm:py-3 text-xs font-extrabold text-white transition-all"
              >
                <Wrench size={15} />
                <span>Book Doorstep Pickup</span>
              </Link>
            </div>
          </div>
        )}

        {/* WHATSAPP STICKY FLOATING TRIGGER BUTTON */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-all cursor-pointer border-2 border-white"
          aria-label="Toggle live help widget"
          title="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          {expanded ? <X size={22} className="relative z-10 sm:w-6 sm:h-6" /> : <WhatsappIcon size={24} className="relative z-10 text-white sm:w-7 sm:h-7" />}
        </button>
      </div>
    </>
  );
}
