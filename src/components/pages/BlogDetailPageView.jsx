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
      <main>
        <section className="service-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <ChevronRight size={14} />
              <Link href="/blog">Blog</Link> <ChevronRight size={14} />
              <span>{article.title}</span>
            </nav>
            <div className="blog-meta-row">
              <span>
                <Tag size={14} /> {article.category}
              </span>
              <span>
                <Calendar size={14} /> {article.date}
              </span>
              <span>
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
            <h1 style={{ marginTop: '16px' }}>{article.title}</h1>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <article className="article-body">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />

              <div className="article-author-box">
                <ShieldCheck size={28} className="text-teal" />
                <div>
                  <strong>Written by Robuzta Hardware Engineering Team</strong>
                  <p>
                    Robuzta Techlabs is a specialized multi-device electronics repair lab in Ahmedabad providing chip-level diagnostics, genuine parts, and live workbench transparency.
                  </p>
                </div>
              </div>
            </article>

            <div>
              <QuoteForm title="Have a Hardware Issue?" defaultDevice={article.category.split(' ')[0]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
