'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ChevronRight, Clock, Tag, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function BlogDetailPageView({ article }) {
  if (!article) {
    notFound();
  }

  // Related articles (excluding current one)
  const relatedArticles = blogs
    .filter((b) => b.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: article.author || 'Robuzta Techlabs'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Robuzta Techlabs',
      url: 'https://robuzta.com'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Article Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-8 sm:py-8 lg:py-8 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8"
          >
            <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 rounded-full text-xs">
                  <Tag size={13} /> {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#0E7C7B]" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#0E7C7B]" /> {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {article.title}
              </h1>

              {article.author && (
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-500 pt-1">
                  <span>Written by <strong className="text-slate-900 dark:text-white">{article.author}</strong></span>
                  <span>&bull; {article.authorRole}</span>
                </div>
              )}
            </div>

            {/* Featured Article WebP Hero Banner */}
            {article.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                className="relative aspect-[16/9] sm:aspect-[2.2/1] w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl mt-8"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Article Content & Sidebar Form */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">
              
              {/* Article HTML Content (Col 7) */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={SMOOTH_TRANSITION}
                className="lg:col-span-7 space-y-8 sm:space-y-10 text-slate-800 dark:text-slate-200 leading-relaxed font-medium"
              >
                <div
                  className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:my-4 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-ul:space-y-3 prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6 prose-ol:space-y-3 prose-li:pl-1 prose-li:my-2.5 prose-li:leading-relaxed prose-li:marker:text-[#0E7C7B] prose-li:marker:font-black prose-a:text-[#0E7C7B] prose-strong:text-slate-900 dark:prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </motion.article>

              {/* Sidebar Form (Col 5) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                className="lg:col-span-5 sticky top-32"
              >
                <QuoteForm title="Have a Hardware Issue?" defaultDevice={article.category.split(' ')[0]} />
              </motion.div>

            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={SMOOTH_TRANSITION}
                className="flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] block">RECOMMENDED READS</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Related Hardware Guides</h3>
                </div>
                <Link href="/blog" className="text-xs font-black text-[#0E7C7B] flex items-center gap-1 hover:underline">
                  <span>View All Articles</span> <ArrowRight size={14} />
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((rel, idx) => (
                  <motion.div
                    key={rel.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4 hover:border-[#0E7C7B] shadow-md hover:shadow-xl transition-all block group h-full"
                    >
                      {/* WebP Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 px-2.5 py-0.5 rounded-md inline-block">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#0E7C7B] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                        {rel.excerpt}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
