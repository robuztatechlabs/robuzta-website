'use client';

import { useState, useEffect } from 'react';
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
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

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

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070E1A] pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
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

        {/* Staggered Vertical Light Beams */}
        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: 'easeInOut'
          }}
          className="absolute left-[18%] w-[2px] h-40 bg-gradient-to-b from-transparent via-[#0E7C7B] to-transparent shadow-[0_0_12px_#0E7C7B]"
        />

        <motion.div
          initial={{ top: '-30%' }}
          animate={{ top: ['-30%', '120%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut'
          }}
          className="absolute left-[52%] w-[2px] h-48 bg-gradient-to-b from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf]"
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

              {/* Central Graphic Visual */}
              <div className="relative py-6 px-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 overflow-hidden flex flex-col items-center justify-center text-center space-y-3">
                {/* Animated Circuit Radial Rings */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,124,123,0.25)_0,transparent_70%)] pointer-events-none" />
                
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0E7C7B] to-teal-400 text-white shadow-xl shadow-[#0E7C7B]/30 ring-4 ring-[#0E7C7B]/20">
                  <Cpu size={32} />
                </div>

                <div className="relative z-10 space-y-1">
                  <h4 className="text-base font-black text-white">Chip-Level Diagnostic Suite</h4>
                  <p className="text-xs text-slate-400 font-medium">Bopal & Tragad Micro-Soldering Workbenches</p>
                </div>
              </div>

              {/* 4 Feature Badges Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200">Zero-OTP Safety</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-2.5">
                  <Clock size={16} className="text-teal-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200">2–4h Express</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-2.5">
                  <Zap size={16} className="text-amber-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200">Original Parts</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-2.5">
                  <Lock size={16} className="text-purple-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200">Live Workbench</span>
                </div>
              </div>

              {/* Rating Trust Bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300 font-bold">
                <span>15,000+ Devices Restored</span>
                <span className="flex items-center gap-1 text-amber-400 font-black">
                  4.9★ Google Rating
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
