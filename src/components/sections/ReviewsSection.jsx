'use client';

import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';
import { reviews, googleStats } from '@/data/reviews';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export function ReviewsSection() {
  const scrollContainerRef = useRef(null);

  // Manual smooth scroll handlers for arrow buttons
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  // Duplicate reviews array for a 100% mathematically seamless -50% endless marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-10 sm:py-14 lg:py-16 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-amber-400/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* Top Google Maps Trust Header Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-10 shadow-xl shadow-slate-200/60 dark:shadow-none relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Rating Summary */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  {googleStats.rating}
                </h2>
                <div className="space-y-0.5 sm:space-y-1 text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                    Based on <strong className="text-slate-900 dark:text-slate-100">{googleStats.totalReviews}</strong> 5-Star verified Google reviews in Ahmedabad
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base leading-relaxed max-w-2xl">
                Read real feedback from Mac, Laptop, and Smartphone owners across Ahmedabad who experienced our diagnosis-first workbench transparency and zero OTP data safety.
              </p>
            </div>

            {/* Google, Justdial & Sulekha Listing Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3.5 items-stretch lg:items-end justify-center">
              <a
                href={googleStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-2.5 rounded-2xl bg-[#0F172A] dark:bg-slate-900 border border-transparent dark:border-slate-800 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-[#0E7C7B] dark:hover:bg-[#0E7C7B] transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <GoogleIcon size={16} className="shrink-0" />
                  <span className="truncate">Google Maps Reviews (4.9★)</span>
                </div>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-white transition-colors shrink-0" />
              </a>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full">
                <a
                  href="https://www.justdial.com/Ahmedabad/Robuzta-Techlabs-Bopal/079PXX79-XX79-221124120052-T5Z4_BZDET?via=scode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3 sm:px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:border-[#0073E6] hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-all text-center"
                >
                  <span className="font-black text-[#0073E6]">Just</span>
                  <span className="font-black text-[#FF6F00]">dial</span>
                  <ExternalLink size={12} className="text-slate-400 shrink-0" />
                </a>

                <a
                  href="https://www.sulekha.com/robuzta-techlabs-bopal-ahmedabad-contact-address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3 sm:px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:border-[#E53935] hover:bg-red-50/50 dark:hover:bg-red-950/40 transition-all text-center"
                >
                  <span className="font-black text-[#E53935]">Sulekha</span>
                  <ExternalLink size={12} className="text-slate-400 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Endless Continuous Infinite Marquee Carousel Container */}
        <div className="relative space-y-4">
          
          {/* Header Controls Bar (Clean Title & Nav Arrows) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-500" /> RECENT 5-STAR GOOGLE REVIEWS
              </span>
            </div>

            {/* Manual Navigation Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all cursor-pointer"
                aria-label="Scroll Reviews Left"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={scrollRight}
                className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all cursor-pointer"
                aria-label="Scroll Reviews Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Endless Seamless Marquee Track with Zero-Jhatka Pure CSS Hover Pause */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar py-4 -mx-2 px-2 scroll-smooth"
          >
            <div
              className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
              style={{
                animationDuration: '65s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}
            >
              {duplicatedReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-[310px] sm:w-[350px] lg:w-[340px] xl:w-[350px] shrink-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Trust Feature Badges */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <ShieldCheck size={16} className="text-teal-600 shrink-0" />
            <span>Zero-OTP Data Protection</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>Serial-Verified Genuine Parts</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <GoogleIcon size={16} className="shrink-0" />
            <span>100% Verified Google Reviews</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
            <ShieldCheck size={16} className="text-amber-500 shrink-0" />
            <span>180-Day Written Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
