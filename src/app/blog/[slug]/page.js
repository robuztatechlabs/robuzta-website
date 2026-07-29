import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { BlogDetailPageView } from '@/components/pages/BlogDetailPageView';

export function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogs.find((b) => b.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Robuzta Techlabs`,
    description: article.excerpt
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = blogs.find((b) => b.slug === slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailPageView article={article} />;
}
