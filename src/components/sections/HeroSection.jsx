'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Database,
  Flame,
  Monitor,
  Cpu,
  Code,
  Wind,
  Truck,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const typingPhrases = [
  'Fix My Broken Display Screen',
  'Replace Mobile Battery',
  'Motherboard Chip Diagnostics',
  'Doorstep Device Pickup'
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

      {/* Futuristic Top-to-Bottom Glowing Laser Light Scan Beam - GPU Accelerated (transform y) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal Ambient Glow Wave */}
        <motion.div
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: ['-10vh', '110vh'],
            opacity: [0, 0.5, 0.5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-transparent via-[#0E7C7B]/20 dark:via-[#0E7C7B]/30 to-transparent blur-xl will-change-transform"
        />

        {/* Crisp Laser Beam Line */}
        <motion.div
          initial={{ y: '-10vh' }}
          animate={{
            y: ['-10vh', '110vh']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E7C7B] dark:via-teal-400 to-transparent shadow-[0_0_15px_#0E7C7B] will-change-transform"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Hero Copy & Single Animated Typing Button */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">

            {/* Top Badges: ISO Badge + Watch Repairs Live Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              
              <a
                href={siteConfig.socials?.youtubeLive || "https://youtube.com/@robuztatechlabs/live"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-red-600 hover:bg-red-500 text-white px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white"></span>
                </span>
                <span>Watch Live</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white sm:leading-tight">
              Precision Repair for{' '}
              <span className="bg-gradient-to-r from-[#0E7C7B] via-teal-600 dark:via-teal-400 to-slate-900 dark:to-teal-200 bg-clip-text text-transparent">
                Laptops & Mobiles
              </span>
            </h1>

            {/* Trust & Convenience Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-teal-500/50 hover:shadow-teal-500/5">
                <div className="h-5 w-5 rounded-full bg-[#0E7C7B]/15 dark:bg-teal-400/15 text-[#0E7C7B] dark:text-teal-300 flex items-center justify-center shrink-0">
                  <Truck size={13} className="shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  Doorstep Express Pickup
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/5">
                <div className="h-5 w-5 rounded-full bg-emerald-500/15 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={13} className="shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  100% No Password Policy
                </span>
              </div>
            </div>

            {/* Interactive Typing Box & Single Primary CTA Button */}
            <div className="space-y-3.5 pt-2 flex flex-col items-center lg:items-start">

              {/* Typing Keyboard Indicator */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs sm:text-sm font-mono text-emerald-400 shadow-md min-h-[42px] min-w-[280px]">
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
                <span>Get Whatsapp & Book</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

            </div>

          </div>

          {/* Right Column: 9 Hardware Repair Service Cards Grid (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="relative rounded-3xl border border-slate-800 bg-[#0B132B] p-4 xs:p-5 sm:p-6 shadow-2xl space-y-4 overflow-hidden">
              
              {/* Dark Visual Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black tracking-widest text-teal-400 uppercase font-mono">
                    ROBUZTA HARDWARE REPAIR SERVICES
                  </span>
                </div>
                
              </div>

              {/* 8 Core Services Grid (4 Columns per Row on Desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  { name: 'Laptop Repair', icon: Laptop, href: '/laptop-repair/' },
                  { name: 'Mobile Repair', icon: Smartphone, href: '/mobile-repair/' },
                  { name: 'MacBook Repair', icon: Cpu, href: '/laptop-repair/macbook/' },
                  { name: 'Surface Repair', icon: Monitor, href: '/laptop-repair/surface/' },
                  { name: 'Gaming PC Repair', icon: Flame, href: '/gaming-desktop/repair/' },
                  { name: 'Data Recovery', icon: Database, href: '/data-recovery/' },
                  { name: 'Software Services', icon: Code, href: '/software-services/' },
                  { name: 'Cleaning & Tune-Up', icon: Wind, href: '/cleaning-tune-up/' }
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={idx}
                      href={service.href}
                      className="group relative flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-2xl bg-[#131F37] hover:bg-[#1A2A4A] border border-slate-700/70 hover:border-teal-400/80 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer space-y-2.5"
                    >
                      <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-teal-500/10 text-teal-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0E7C7B] group-hover:text-white transition-all shadow-inner shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-teal-300 leading-snug transition-colors line-clamp-2">
                        {service.name}
                      </span>
                    </Link>
                  );
                })}
              </div>



            </div>
          </div>





        </div>
      </div>


    </section>
  );
}
