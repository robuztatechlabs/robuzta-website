'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { ArrowRight, Clock, Tag, Sparkles, BookOpen, Search, User, ShieldCheck, Mail, CheckCircle2, ShieldCheck as ShieldIcon } from 'lucide-react';

const CATEGORIES = ['All', 'Laptop Repair', 'MacBook Repair', 'Mobile Repair', 'Gaming PC Repair', 'Data Privacy'];

export function BlogListingPageView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = blogs.find((b) => b.featured) || blogs[0];

  const filteredBlogs = blogs.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
        
        {/* Blog Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest">
              <Sparkles size={14} className="text-amber-500" />
              <span>ROBUZTA KNOWLEDGE HUB & LAB GUIDES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Tech Repair Guides & Hardware Insights
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Empowering Ahmedabad users with transparent hardware pricing guides, MacBook logic board repair diagnostics, water damage first-aid, and zero-password data safety protocols.
            </p>

            {/* Search Input Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, e.g. screen cost, macbook, liquid damage..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0E7C7B] shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article Spotlight Banner */}
        {featuredArticle && !searchQuery && selectedCategory === 'All' && (
          <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full">
                      <Sparkles size={12} className="text-amber-500" /> FEATURED ARTICLE
                    </span>
                    <span className="text-xs font-bold text-slate-400">{featuredArticle.category}</span>
                    <span className="text-xs font-bold text-slate-400">&bull; {featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug hover:text-[#0E7C7B] transition-colors">
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-9 w-9 rounded-full bg-[#0E7C7B] text-white font-black flex items-center justify-center text-xs">
                      R
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 dark:text-white block">{featuredArticle.author}</span>
                      <span className="text-[11px] font-semibold text-slate-400 block">{featuredArticle.authorRole}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-end">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full lg:w-auto rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/25 transition-all hover:scale-[1.02]"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter Pills */}
        <section className="pt-12 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-black rounded-xl transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0E7C7B] text-white shadow-lg shadow-[#0E7C7B]/30'
                      : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-16 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 shadow-xl hover:border-[#0E7C7B]/40 hover:bg-white dark:hover:bg-slate-850 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
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

                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-[#0E7C7B]">
                            {article.author ? article.author[0] : 'R'}
                          </div>
                          <span className="text-slate-500 dark:text-slate-400 font-bold truncate max-w-[120px]">
                            {article.author || 'Robuzta Lab'}
                          </span>
                        </div>
                        <span className="text-slate-400 font-semibold">{article.date}</span>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="flex items-center justify-between gap-1.5 text-xs font-black text-[#0E7C7B] hover:text-teal-600 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-4">
                <p className="text-slate-500 font-bold">No articles found matching "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="text-xs font-black text-[#0E7C7B] underline"
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Free Diagnostic Guide Newsletter Card */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <ShieldIcon size={16} />
                  <span>ROBUZTA HARDWARE ADVISORY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Got Questions About Your Laptop or MacBook Repair?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Get direct advice from senior hardware technicians in Ahmedabad. No sales pitch—just transparent component pricing & honest lab diagnostics.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Ask a Technician Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
