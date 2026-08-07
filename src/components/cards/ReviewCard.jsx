'use client';

import { Star, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const bgGradient = review.avatarBg || 'from-teal-600 to-emerald-700';

  return (
    <article className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 xs:p-5 sm:p-7 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-xl hover:border-[#0E7C7B] transition-all duration-300 relative group overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0E7C7B] via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header Info */}
      <div className="space-y-3 sm:space-y-4">
        
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            {/* Avatar with Initials */}
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${bgGradient} text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-sm shrink-0`}>
              {initials}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs sm:text-base group-hover:text-[#0E7C7B] transition-colors truncate">
                  {review.name}
                </h3>
                <CheckCircle2 size={14} className="text-emerald-500 fill-emerald-100 dark:fill-emerald-950/60 shrink-0 sm:w-4 sm:h-4" title="Verified Customer" />
              </div>
              
              {review.location && (
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin size={11} className="text-slate-400 shrink-0 sm:w-3 sm:h-3" />
                  <span className="truncate">{review.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* ONLY Google Logo Icon */}
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-xs">
            <GoogleIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
        </div>

        {/* Rating Stars & Date */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
            {Array.from({ length: review.rating || 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400 sm:w-4 sm:h-4" />
            ))}
          </div>

          {review.date && (
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 shrink-0">
              {review.date}
            </span>
          )}
        </div>

        {/* Review Body */}
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic font-normal pt-0.5">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Footer / Device Tag with Clean ONLY Verified Icon Badge */}
      {review.device && (
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-extrabold text-[#0E7C7B] dark:text-teal-400 min-w-0">
            <ShieldCheck size={13} className="text-[#0E7C7B] dark:text-teal-400 shrink-0 sm:w-3.5 sm:h-3.5" />
            <span className="truncate">Repaired: {review.device}</span>
          </div>

          {/* ONLY Verified Icon Badge without text */}
          <div
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800 flex items-center justify-center shrink-0"
            title="Verified Review"
          >
            <CheckCircle2 size={14} className="text-emerald-500 fill-emerald-100 dark:fill-emerald-950/60 shrink-0 sm:w-4 sm:h-4" />
          </div>
        </div>
      )}

    </article>
  );
}
