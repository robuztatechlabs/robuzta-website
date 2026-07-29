'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { reviews } from '@/data/reviews';

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-slate-50 py-24 border-b border-slate-200">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
            VERIFIED CUSTOMER REVIEWS & FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Laptop, Mac & Phone Owners Across Ahmedabad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read real feedback from customers who experienced our diagnosis-first workbench transparency and zero OTP data protection.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                    {review.source}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
                <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
