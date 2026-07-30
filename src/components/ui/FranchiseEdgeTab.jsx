'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function FranchiseEdgeTab() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-40 hidden lg:block">
      <Link href="/franchise" className="block focus:outline-none">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            width: isHovered ? 280 : 58
          }}
          transition={{
            type: 'spring',
            stiffness: 320,
            damping: 26,
            mass: 0.8
          }}
          className="relative h-[230px] rounded-l-[22px] bg-gradient-to-b from-[#0E7C7B] via-[#0D6E6D] to-[#0F172A] text-white shadow-2xl shadow-teal-900/40 border-y border-l border-teal-400/30 overflow-hidden cursor-pointer backdrop-blur-xl"
        >
          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/20" />
          
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 bg-[#EA580C]/25 rounded-full blur-2xl"
            />
          )}

          {/* COLLAPSED STATE */}
          {!isHovered && (
            <div className="flex flex-col items-center justify-between h-full py-4 px-2.5">
              {/* Top Rocket Icon Box */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-amber-300 shadow-inner shrink-0"
              >
                <Rocket size={18} />
              </motion.div>

              {/* Vertical Text: BUILD WITH ROBUZTA */}
              <div className="writing-mode-vertical text-[11px] font-black uppercase tracking-widest text-white select-none my-auto py-2">
                <span>BUILD WITH ROBUZTA</span>
              </div>

              {/* Bottom Glowing Status Indicator */}
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
          )}

          {/* EXPANDED STATE (ON HOVER) */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col justify-between h-full p-5 text-white space-y-3 relative z-10"
            >
              {/* Header Badge */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-wider text-amber-300 bg-white/15 border border-white/20 px-2.5 py-0.5 rounded-full w-fit">
                  <Sparkles size={12} />
                  <span>FRANCHISE OPPORTUNITY</span>
                </div>
                
                <h4 className="text-base font-black text-white leading-snug">
                  Build With Robuzta
                </h4>

                <p className="text-[11px] text-teal-100 font-medium leading-relaxed line-clamp-3">
                  Partner with India’s premier hardware repair lab network. Turnkey ESD setup & 55%–70% gross margins.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <div className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#EA580C] hover:bg-orange-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-orange-600/30 transition-all transform hover:scale-[1.02]">
                  <span>Explore Franchise</span>
                  <ArrowRight size={14} />
                </div>
              </div>

            </motion.div>
          )}

        </motion.div>
      </Link>
    </div>
  );
}
