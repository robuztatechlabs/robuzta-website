'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Phone,
  Calendar,
  Laptop,
  Smartphone,
  Tablet,
  Database,
  Droplets,
  HardDrive,
  Sparkles,
  Lock,
  Zap,
  Cpu,
  CheckCircle2,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MousePointerClick,
  X,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const LaptopExplorer = dynamic(
  () => import('@/components/3d/LaptopExplorer').then(mod => mod.LaptopExplorer),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-transparent min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 dark:border-slate-700 border-t-[#0E7C7B]" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Loading 3D Hardware Model…</span>
        </div>
      </div>
    ),
  }
);

const typingPhrases = [
  'Fix My Broken Display Screen',
  'Replace Mobile Battery',
  'Motherboard Chip Diagnostics',
  'Free Doorstep Device Pickup'
];

function useTypingText(phrases, typingSpeed = 70, deletingSpeed = 35, delay = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delay]);

  return text;
}

export function HeroSection() {
  const typedText = useTypingText(typingPhrases);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isExploded, setIsExploded] = useState(true);
  const [zoomAction, setZoomAction] = useState(null);
  const resetFnRef = useRef(null);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  const handleComponentSelect = useCallback((id) => {
    setSelectedComponent(id);
  }, []);

  const handleResetView = useCallback((resetFn) => {
    resetFnRef.current = resetFn;
  }, []);

  const handleReset = useCallback(() => {
    setSelectedComponent(null);
    if (resetFnRef.current) resetFnRef.current();
  }, []);

  const triggerZoom = (direction) => {
    setZoomAction(direction);
    setTimeout(() => setZoomAction(null), 100);
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Soft Ambient Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/70 via-teal-50/20 to-white dark:from-[#070E1A] dark:via-[#0a1626] dark:to-[#070E1A]" />

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 rounded-full blur-3xl will-change-transform" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl will-change-transform" />

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b80_1px,transparent_1px),linear-gradient(to_bottom,#1e293b80_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"
      />

      {/* Futuristic Top-to-Bottom Glowing Laser Light Scan Beam */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal Ambient Glow Wave */}
        <motion.div
          initial={{ top: '-10%', opacity: 0 }}
          animate={{
            top: ['-10%', '110%'],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0E7C7B]/20 dark:via-[#0E7C7B]/30 to-transparent blur-xl"
        />

        {/* Crisp Laser Beam Line */}
        <motion.div
          initial={{ top: '-10%' }}
          animate={{
            top: ['-10%', '110%']
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E7C7B] dark:via-teal-400 to-transparent shadow-[0_0_15px_#0E7C7B]"
        />


      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Hero Copy & Single Animated Typing Button */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">

            {/* Top Badges: ISO Badge + Watch Repairs Live Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-[#0E7C7B]/20 border border-[#0E7C7B]/30 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#0E7C7B] dark:text-teal-300">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0E7C7B] dark:text-teal-400" />
                <span>ISO 9001:2015 REPAIR LAB</span>
              </div>

              <button
                type="button"
                onClick={() => setIsLiveModalOpen(true)}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-red-600 hover:bg-red-500 text-white px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white"></span>
                </span>
                <span>Watch Live</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white sm:leading-tight">
              Precision Repair for{' '}
              <span className="bg-gradient-to-r from-[#0E7C7B] via-teal-600 dark:via-teal-400 to-slate-900 dark:to-teal-200 bg-clip-text text-transparent">
                Laptops & Mobiles
              </span>
            </h1>

            <p className="text-[11px] xs:text-xs sm:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide leading-relaxed px-2 sm:px-1">
              ISO-certified hardware lab • Zero-OTP data safety • Free doorstep pickup
            </p>

            {/* Interactive Typing Box & Single Primary CTA Button */}
            <div className="space-y-3.5 pt-2 flex flex-col items-center lg:items-start">

              {/* Typing Keyboard Indicator */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs sm:text-sm font-mono text-emerald-400 shadow-md">
                <span className="text-slate-400 font-sans font-medium">Type issue:</span>
                <span className="font-bold text-teal-300">"{typedText}"</span>
                <span className="animate-pulse text-emerald-400 font-bold">|</span>
              </div>

              {/* Action Button */}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0E7C7B] hover:from-emerald-500 hover:to-teal-500 text-white px-5 py-3 sm:px-7 sm:py-4 text-xs xs:text-sm sm:text-base font-black shadow-xl shadow-emerald-600/30 hover:scale-[1.02] transition-all w-[90%] xs:w-auto sm:w-auto"
              >
                <WhatsappIcon size={22} className="text-white shrink-0" />
                <span>Get WhatsApp Estimate & Book</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

            </div>

          </div>

          {/* Right Column: One Visual Hero Feature Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl p-5 sm:p-8 shadow-2xl space-y-6 overflow-hidden">
              
              {/* Visual Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black tracking-widest text-slate-300 uppercase font-mono">
                    Robuzta Hardware Lab
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/60 px-2.5 py-1 rounded-full">
                  ISO 9001:2015
                </span>
              </div>



              {/* 3D Explorer Viewport */}
              <div className="relative w-full h-[250px] sm:h-[350px] mt-4 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/50 shadow-inner">
                <LaptopExplorer
                  onComponentSelect={handleComponentSelect}
                  selectedComponent={selectedComponent}
                  onResetView={handleResetView}
                  isExploded={isExploded}
                  zoomAction={zoomAction}
                />

                {/* Interaction Hint Badge */}
                {!selectedComponent && (
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4 pointer-events-none px-4 z-20">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl">
                      <MousePointerClick size={14} className="text-[#0E7C7B] dark:text-teal-400 animate-bounce" />
                      <span>Click any IC to inspect details</span>
                    </div>
                  </div>
                )}

                {/* Overlay Button that appears when a component is selected */}
                {selectedComponent && (
                  <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center pointer-events-none z-40 px-4">
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl shadow-xl transition-transform hover:scale-105 active:scale-95 text-center border border-teal-400/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <WhatsappIcon size={18} className="text-white" />
                      <span className="text-sm sm:text-base">Book Repair For This Part</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* YOUTUBE LIVE STREAM MODAL (Triggered by Watch Live badge) */}
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
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
