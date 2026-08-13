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
  MousePointerClick
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
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-32 sm:pt-40 lg:pt-48 pb-10 sm:pb-16 lg:pb-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
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
            
            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Precision Repair for{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#0E7C7B] via-teal-600 dark:via-teal-400 to-slate-900 dark:to-teal-200 bg-clip-text text-transparent">
                Laptops & Mobiles
              </span>
            </h1>

            <p className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide leading-relaxed px-1">
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

              {/* Single Primary High-Converting Button */}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0E7C7B] hover:from-emerald-500 hover:to-teal-500 text-white px-7 py-4 text-sm sm:text-base font-black shadow-xl shadow-emerald-600/30 hover:scale-[1.02] transition-all w-full sm:w-auto"
              >
                <WhatsappIcon size={22} className="text-white shrink-0" />
                <span>Get WhatsApp Estimate & Book</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

            </div>

          </div>

          {/* Right Column: 3D Custom Model Hero Feature Box */}
          <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-xl">
            <div className="w-full h-full relative">
              {/* Top Controls Bar (Top Left) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setIsExploded(!isExploded)}
                  className={`flex items-center gap-2 text-[11px] sm:text-xs font-bold px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border backdrop-blur-md transition-all cursor-pointer ${
                    isExploded
                      ? 'bg-[#0E7C7B] border-teal-500 text-white shadow-md'
                      : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-500'
                  }`}
                >
                  <Layers size={14} />
                  <span>{isExploded ? 'Deck Lifted' : 'Reveal Internals'}</span>
                </button>

                {selectedComponent && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-[#0E7C7B] text-slate-900 dark:text-white text-[11px] sm:text-xs font-bold px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Quick Zoom Controls (Bottom Left Overlay) */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-30 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-1 rounded-xl shadow-md">
                <button
                  type="button"
                  onClick={() => triggerZoom('in')}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn size={15} />
                </button>
                <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800" />
                <button
                  type="button"
                  onClick={() => triggerZoom('out')}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut size={15} />
                </button>
              </div>

              <LaptopExplorer
                onComponentSelect={handleComponentSelect}
                selectedComponent={selectedComponent}
                onResetView={handleResetView}
                isExploded={isExploded}
                zoomAction={zoomAction}
              />

              {/* Interaction Hint Badge */}
              {!selectedComponent && (
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 pointer-events-none px-4 z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl">
                    <MousePointerClick size={14} className="text-[#0E7C7B] dark:text-teal-400 animate-bounce" />
                    <span>Click any IC to inspect details</span>
                  </div>
                </div>
              )}

              {/* Overlay Button that appears when a component is selected */}
              {selectedComponent && (
                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center pointer-events-none z-40 px-4">
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto flex flex-col items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-2xl shadow-2xl shadow-teal-500/40 transition-transform hover:scale-105 active:scale-95 text-center border border-teal-400/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="flex items-center gap-2 text-base sm:text-lg">
                      <WhatsappIcon size={22} className="text-white" />
                      Book Repair For This Part
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
