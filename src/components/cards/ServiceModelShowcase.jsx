'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const GlbModelViewer = dynamic(
  () => import('@/components/3d/GlbModelViewer').then((mod) => mod.GlbModelViewer),
  { ssr: false, loading: () => <div className="h-full w-full animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl" /> }
);

export function ServiceModelShowcase({
  modelPath,
  title,
  description,
  calloutTitle,
  calloutText,
  badge,
  price,
  ctaLabel = 'Get a free quote',
  ctaHref = '/contact',
  scale = 1,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-5 sm:p-8 shadow-lg shadow-slate-200/50 dark:shadow-none"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Dedicated 3D model container — isolated per model */}
        <div className="relative aspect-[4/3] md:aspect-square rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden">
          <GlbModelViewer modelPath={modelPath} scale={scale} className="absolute inset-0" />
        </div>

        {/* Content */}
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="rounded-xl border-l-4 border-blue-600 bg-slate-50 dark:bg-slate-900 px-4 py-3.5 space-y-1">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{calloutTitle}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{calloutText}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {badge && (
              <span className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white">
                {badge}
              </span>
            )}
            {price && (
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{price}</span>
            )}
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              {ctaLabel}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
