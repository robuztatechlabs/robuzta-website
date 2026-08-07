'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Phone, Wrench, X, ChevronUp, ExternalLink, Calendar, MonitorPlay } from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

// Custom High-End Live Stream TV Icon
const LiveTvIcon = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="13" rx="3" ry="3" />
    <polyline points="17 2 12 7 7 2" />
    <polygon points="10 11 15 13.5 10 16 10 11" fill="currentColor" stroke="none" />
  </svg>
);

export function FloatingWidget() {
  const [expanded, setExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const { openModal } = useBookingModal();

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

      {/* RIGHT SIDE: STICKY ACTIONS STACK (Live Watch Cam + WhatsApp) */}
      <div 
        className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3.5 pointer-events-auto"
        aria-label="Sticky actions widget"
      >
        {/* 2. WATCH REPAIRS LIVE STICKY BUTTON */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLiveModalOpen(true)}
          className="group relative flex h-11 sm:h-14 items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-2xl shadow-red-600/50 border-2 border-white transition-all duration-300 cursor-pointer px-3 sm:px-4 overflow-hidden"
          title="Watch Repairs Live"
        >
          <LiveTvIcon size={18} className="shrink-0 sm:w-[22px] sm:h-[22px]" />
          <div className="flex items-center max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:ml-2 whitespace-nowrap overflow-hidden">
            <span className="relative flex h-2 w-2 shrink-0 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase">
              Watch Repairs Live
            </span>
          </div>
        </motion.button>

        {/* Expandable Contact Menu Box */}
        {expanded && (
          <div className="w-[calc(100vw-2rem)] sm:w-80 max-w-[320px] rounded-2xl sm:rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-4 sm:p-5 text-white shadow-2xl space-y-3.5 sm:space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3">
              <strong className="text-xs font-black text-white uppercase tracking-wider">Robuzta Live Lab Support</strong>
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

        {/* 3. WHATSAPP STICKY FLOATING TRIGGER BUTTON */}
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

      {/* YOUTUBE LIVE STREAM MODAL (Triggered by Live Sticky Button) */}
      <AnimatePresence>
        {isLiveModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLiveModalOpen(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-red-500/40 bg-slate-900 shadow-2xl shadow-red-950/50"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-5 sm:px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-red-950/90 px-3 py-1 border border-red-800/60">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="font-mono text-xs font-black text-red-400 tracking-wider">LIVE STREAM</span>
                  </div>
                  <h3 className="font-black text-white text-sm sm:text-base hidden sm:block">
                    Robuzta Techlabs — Micro-Soldering & Hardware Repair Lab
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLiveModalOpen(false)}
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player Frame */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=robuztatechlabs"
                  title="Robuzta YouTube Live Repair Cam"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 px-5 sm:px-6 py-4 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Streaming Live from Robuzta South Bopal ESD-Safe Workstation</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://www.youtube.com/@robuztatechlabs/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 px-5 py-2.5 text-xs font-bold text-white transition-colors shadow-md shadow-red-600/20"
                  >
                    <ExternalLink size={14} />
                    <span>Watch on YouTube</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsLiveModalOpen(false);
                      openModal();
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 px-5 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer shadow-md shadow-[#0E7C7B]/20"
                  >
                    <Calendar size={14} />
                    <span>Book Repair Audit</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
