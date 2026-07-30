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
    <article className="h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-300 transition-all duration-300 relative group overflow-hidden">
      
      {/* Top Gradient Highlight Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header Info */}
      <div className="space-y-4">
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Avatar with Initials */}
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${bgGradient} text-white font-extrabold text-base flex items-center justify-center shadow-md shadow-slate-300/60 shrink-0`}>
              {initials}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                  {review.name}
                </h3>
                <span title="Verified Customer" className="text-emerald-500">
                  <CheckCircle2 size={16} className="fill-emerald-100" />
                </span>
              </div>
              
              {review.location && (
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} className="text-slate-400 shrink-0" />
                  <span>{review.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Google Icon Badge */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full shrink-0 shadow-xs">
            <GoogleIcon size={16} />
            <span className="text-[11px] font-bold text-slate-700 font-mono">Google</span>
          </div>
        </div>

        {/* Rating Stars & Date */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: review.rating || 5 }).map((_, i) => (
              <Star key={i} size={17} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          {review.date && (
            <span className="text-xs font-semibold text-slate-400">
              {review.date}
            </span>
          )}
        </div>

        {/* Review Body */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal pt-1">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Footer / Device Tag */}
      {review.device && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200/60 px-3 py-1.2 rounded-xl text-xs font-extrabold text-teal-800">
            <ShieldCheck size={14} className="text-teal-600 shrink-0" />
            <span>Repaired: {review.device}</span>
          </div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Verified
          </span>
        </div>
      )}

    </article>
  );
}
