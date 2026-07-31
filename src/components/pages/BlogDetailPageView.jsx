'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ChevronRight, Clock, Tag, Calendar, ShieldCheck } from 'lucide-react';

export function BlogDetailPageView({ article }) {
  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Robuzta Techlabs'
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
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-16 sm:py-20 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />

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
            </div>
          </div>
        </section>

        {/* Article Content & Sidebar Form */}
        <section className="py-20 border-b border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Article HTML Content (Col 7) */}
              <article className="lg:col-span-7 space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                <div
                  className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-a:text-[#0E7C7B] prose-[#0E7C7B]"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-7 flex items-start gap-4 shadow-md">
                  <ShieldCheck size={32} className="text-[#0E7C7B] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-sm font-black text-slate-900 dark:text-slate-100 block">
                      Written by Robuzta Hardware Engineering Team
                    </strong>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Robuzta Techlabs is a specialized multi-device electronics repair lab in Ahmedabad providing chip-level diagnostics, genuine parts, and live workbench transparency.
                    </p>
                  </div>
                </div>
              </article>

              {/* Sidebar Form (Col 5) */}
              <div className="lg:col-span-5">
                <QuoteForm title="Have a Hardware Issue?" defaultDevice={article.category.split(' ')[0]} />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
