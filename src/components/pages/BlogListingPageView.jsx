'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { ArrowRight, Clock, Tag, Sparkles, BookOpen } from 'lucide-react';

export function BlogListingPageView() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Blog Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-extrabold text-[#0E7C7B]">
              <Sparkles size={14} className="text-[#EA580C]" />
              <span>ROBUZTA KNOWLEDGE HUB</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Tech Repair Guides & Hardware Insights
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Empowering users with transparent hardware pricing guides, laptop maintenance tips, MacBook logic board repair diagnostics, and mobile care tutorials.
            </p>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-7 shadow-xl hover:border-[#0E7C7B]/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-extrabold text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full">
                        <Tag size={13} />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors leading-snug">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">{article.date}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="flex items-center gap-1.5 text-[#0E7C7B] hover:text-teal-700 font-extrabold"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
