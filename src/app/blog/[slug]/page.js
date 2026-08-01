import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { BlogDetailPageView } from '@/components/pages/BlogDetailPageView';
import { getBlogPostingSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

export function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogs.find((b) => b.slug === slug);
  if (!article) return {};

  const title = `${article.title} | Robuzta Techlabs`;
  const description = article.excerpt || article.title;
  const canonicalUrl = `https://robuzta.com/blog/${slug}`;

  return {
    title,
    description,
    keywords: [
      article.category ? article.category.toLowerCase() : 'tech repair',
      'laptop repair guide',
      'robuzta blog',
      'electronics repair ahmedabad'
    ],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Robuzta Techlabs',
      images: [{ url: article.image || '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: article.title }],
      locale: 'en_IN',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'Robuzta Engineering Team']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [article.image || '/robuzta-logo-scaled.webp']
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = blogs.find((b) => b.slug === slug);

  if (!article) {
    notFound();
  }

  const blogSchema = getBlogPostingSchema(article);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title, url: `/blog/${slug}` }
  ]);

  return (
    <>
      {blogSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogDetailPageView article={article} />
    </>
  );
}
