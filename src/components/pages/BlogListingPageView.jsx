'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { ArrowRight, Clock, Tag, Sparkles, Search, ShieldCheck as ShieldIcon } from 'lucide-react';

const CATEGORIES = ['All', 'Laptop Repair', 'MacBook Repair', 'Mobile Repair', 'Gaming PC Repair', 'Data Privacy'];

const SMOOTH_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export function BlogListingPageView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
      <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 pt-20 sm:pt-20 lg:pt-20">
        
        {/* Blog Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-8 sm:py-8 lg:py-8 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SMOOTH_TRANSITION}
            className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-[11px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span>ROBUZTA HARDWARE GUIDES</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Tech Repair & Hardware Guides
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Transparent component pricing breakdowns, MacBook logic board diagnostics, and zero-password data safety tips.
            </p>

            {/* Search Input Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
              className="pt-2 max-w-xl mx-auto"
            >
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search guides (e.g. screen cost, macbook, liquid damage)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0E7C7B] shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Category Filter Pills */}
        <section className="py-12 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={SMOOTH_TRANSITION}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
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
            </motion.div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-16 sm:py-24 lg:py-28 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {filteredBlogs.map((article, idx) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ ...SMOOTH_TRANSITION, delay: idx * 0.08 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm hover:border-[#0E7C7B]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
                  >
                    <div className="space-y-4">
                      {/* Image Container with Perfect 16:10 Fit & Centered Subject */}
                      <Link href={`/blog/${article.slug}`} className="block overflow-hidden rounded-2xl">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                          <img
                            src={article.image}
                            alt={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-sm">
                              <Tag size={10} className="text-[#0E7C7B]" />
                              {article.category}
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3">
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-white bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-sm">
                              <Clock size={10} className="text-[#0E7C7B]" />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-semibold text-slate-400 block">{article.date}</span>
                        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="flex items-center justify-between gap-1.5 text-xs font-black text-[#0E7C7B] hover:text-teal-600 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-4">
                <p className="text-slate-500 font-bold">No articles found matching &quot;{searchQuery}&quot;.</p>
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

        {/* Free Diagnostic Guide Advisory Banner */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SMOOTH_TRANSITION}
              className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#070e1a] to-slate-950 text-white p-7 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-400 tracking-wider">
                  <ShieldIcon size={16} />
                  <span>ROBUZTA HARDWARE ADVISORY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Need Help Diagnosing Your Laptop or MacBook?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Get direct advice from senior hardware technicians in Ahmedabad with transparent pricing and zero-password privacy protection.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-7 py-4 text-xs font-black uppercase tracking-wider shadow-xl shadow-[#0E7C7B]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Ask a Technician Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
