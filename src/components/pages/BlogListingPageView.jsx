import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogs } from '@/data/blogs';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export function BlogListingPageView() {
  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">Robuzta Knowledge Hub</p>
            <h1>Tech Repair Guides & Hardware Insights</h1>
            <p className="service-direct-answer">
              Empowering users with transparent hardware pricing, laptop maintenance tips, MacBook logic board repair diagnostics, and mobile care guides.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {blogs.map((article) => (
                <article className="blog-card" key={article.slug}>
                  <div className="blog-card-meta">
                    <span className="blog-category">
                      <Tag size={14} />
                      {article.category}
                    </span>
                    <span className="blog-readtime">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h2>
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="blog-excerpt">{article.excerpt}</p>

                  <div className="blog-card-footer">
                    <span className="blog-date">{article.date}</span>
                    <Link href={`/blog/${article.slug}`} className="blog-read-link">
                      Read Full Article <ArrowRight size={16} />
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
