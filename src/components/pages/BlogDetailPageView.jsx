'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ChevronRight, Clock, Tag, Calendar, ShieldCheck, ArrowRight, BookOpen, Share2, Sparkles } from 'lucide-react';

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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Article Hero */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <nav className="flex items-center gap-2 text-xs font-extrabold text-slate-500 dark:text-slate-400 justify-center">
              <Link href="/" className="hover:text-[#0E7C7B]">Home</Link> <ChevronRight size={13} />
              <Link href="/blog" className="hover:text-[#0E7C7B]">Blog</Link> <ChevronRight size={13} />
              <span className="text-[#0E7C7B] truncate max-w-xs">{article.title}</span>
            </nav>

            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1 text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full">
                  <Tag size={13} /> {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {article.title}
              </h1>

              {article.author && (
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 pt-2">
                  <span>Written by <strong className="text-slate-900 dark:text-white">{article.author}</strong></span>
                  <span>&bull; {article.authorRole}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content & Sidebar Form */}
        <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Article HTML Content (Col 7) */}
              <article className="lg:col-span-7 space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                <div
                  className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-a:text-[#0E7C7B] prose-strong:text-slate-900 dark:prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Author Bio Box */}
                <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex items-start gap-4 shadow-lg">
                  <div className="h-12 w-12 rounded-2xl bg-[#0E7C7B] text-white font-black flex items-center justify-center text-lg shrink-0 shadow-md">
                    R
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sm font-black text-slate-900 dark:text-slate-100 block">
                      Written by {article.author || 'Robuzta Hardware Engineering Team'}
                    </strong>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Robuzta Techlabs is a specialized multi-device electronics repair lab in Ahmedabad providing BGA micro-soldering, FLIR thermal diagnostics, genuine OEM parts, and live workbench transparency.
                    </p>
                  </div>
                </div>
              </article>

              {/* Sidebar Form (Col 5) */}
              <div className="lg:col-span-5 sticky top-28 space-y-6">
                <QuoteForm title="Have a Hardware Issue?" defaultDevice={article.category.split(' ')[0]} />

                {/* Emergency Hotline Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-white space-y-3 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                    <Sparkles size={14} />
                    <span>NEED IMMEDIATE ASSISTANCE?</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    Speak directly with a senior repair engineer in Ahmedabad for instant pricing or same-day doorstep pickup.
                  </p>
                  <a
                    href="tel:+919992452459"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-5 py-3 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <span>Call +91 999 245 2459</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] block">RECOMMENDED READS</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Related Hardware Guides</h3>
                </div>
                <Link href="/blog" className="text-xs font-black text-[#0E7C7B] flex items-center gap-1 hover:underline">
                  <span>View All Articles</span> <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3 hover:border-[#0E7C7B] shadow-md hover:shadow-xl transition-all block group"
                  >
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
