'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { instagramReels } from '@/data/reels';
import { InstagramIcon } from '@/components/icons/InstagramIcon';

function OfficialInstagramEmbed({ reel, idx }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-pink-500/20 max-w-[340px] mx-auto w-full"
    >
      {/* Official Instagram iFrame Embed */}
      <div className="relative w-full h-[480px] sm:h-[500px] bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center">
        <iframe
          src={`https://www.instagram.com/reel/${reel.reelId}/embed`}
          className="w-full h-full border-0 overflow-hidden rounded-2xl"
          scrolling="no"
          allowTransparency={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={() => setIsLoaded(true)}
          title={`Official Instagram Reel ${reel.title}`}
          style={{ border: 'none', overflow: 'hidden' }}
        />

        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 space-y-3 p-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 via-pink-600 to-amber-500 text-white animate-pulse">
              <InstagramIcon size={24} />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Loading Official Reel...</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ReelsSection({
  title = "Watch Real Repairs in Action",
  subtitle = "Official Instagram Reel embeds directly from our verified channel @robuztatechlabs."
}) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-b border-slate-200 dark:border-slate-800">
      {/* Glow Ambient Background Lights */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-600/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 dark:bg-gradient-to-r dark:from-fuchsia-600/20 dark:via-pink-600/20 dark:to-amber-500/20 border border-[#0E7C7B]/20 dark:border-pink-500/30 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B] dark:text-pink-300">
            <Sparkles size={14} className="text-[#EA580C] dark:text-amber-400" />
            <span>OFFICIAL INSTAGRAM REELS &bull; @ROBUZTATECHLABS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

        {/* 4 Official Instagram Reel Embeds in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {instagramReels.map((reel, idx) => (
            <OfficialInstagramEmbed key={reel.id} reel={reel} idx={idx} />
          ))}
        </div>

        {/* Bottom "View More on Instagram" Button */}
        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/robuztatechlabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-amber-500 hover:from-fuchsia-500 hover:to-amber-400 px-8 py-4 text-xs font-black text-white shadow-xl shadow-pink-600/20 transition-all transform hover:scale-105"
          >
            <InstagramIcon size={18} />
            <span>View More on Instagram</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
