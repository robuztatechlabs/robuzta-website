'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, CheckCircle2, MessageSquarePlus, Pause, Play } from 'lucide-react';
import { reviews, googleStats } from '@/data/reviews';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive items per view count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay interval
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoplay, maxIndex]);

  return (
    <section id="reviews" className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 py-24 border-b border-slate-200 overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-amber-400/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Google Maps Trust Header Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Rating Summary */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-extrabold text-emerald-800">
                <GoogleIcon size={18} />
                <span>OFFICIAL GOOGLE MAPS REVIEWS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {googleStats.rating}
                </h2>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-600">
                    Based on <strong className="text-slate-900">{googleStats.totalReviews}</strong> verified reviews in Ahmedabad
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Read real feedback from Mac, Laptop, and Smartphone owners across Ahmedabad who experienced our diagnosis-first workbench transparency and zero OTP data safety.
              </p>
            </div>

            {/* Google Actions */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 items-center lg:items-end justify-center">
              <a
                href={googleStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0F172A] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg hover:bg-[#0E7C7B] hover:shadow-teal-500/20 hover:scale-[1.02] transition-all group"
              >
                <GoogleIcon size={20} />
                <span>View All Reviews on Google Maps</span>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={googleStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all"
              >
                <MessageSquarePlus size={18} className="text-emerald-600" />
                <span>Write a Google Review</span>
              </a>
            </div>

          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative space-y-6"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Carousel Controls Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                SWIPE OR USE ARROWS
              </span>
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-700 bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-2xs transition-colors"
                title={isAutoplay ? 'Pause Carousel Autoplay' : 'Start Carousel Autoplay'}
              >
                {isAutoplay ? (
                  <>
                    <Pause size={12} className="text-teal-600" />
                    <span>Autoplay Active</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="text-slate-400" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-md hover:bg-teal-600 hover:text-white hover:border-teal-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200 transition-all cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-md hover:bg-teal-600 hover:text-white hover:border-teal-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200 transition-all cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Track with Smooth Motion */}
          <div className="overflow-hidden py-4 -mx-2 px-2">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / visibleCount + (24 / visibleCount))}%`
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / visibleCount}% - ${(24 * (visibleCount - 1)) / visibleCount}px)`
                  }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators (Dots) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#0E7C7B]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Bottom Trust Feature Badges */}
        <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800">
            <ShieldCheck size={16} className="text-teal-600 shrink-0" />
            <span>Zero-OTP Data Protection</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>Serial-Verified Genuine Parts</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800">
            <GoogleIcon size={16} className="shrink-0" />
            <span>100% Verified Google Reviews</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800">
            <ShieldCheck size={16} className="text-amber-500 shrink-0" />
            <span>180-Day Written Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
