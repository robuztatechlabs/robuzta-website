import { notFound } from 'next/navigation';
import { getBySlug, getAllSlugs } from '@/data/laptopRepairData';
import { LaptopRepairSlugView } from '@/components/laptop-repair/LaptopRepairSlugView';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getBySlug(slug);

  if (!data) {
    return {
      title: 'Page Not Found | Robuzta Techlabs'
    };
  }

  const canonicalUrl = `https://robuzta.com/laptop-repair/${data.slug}/`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonicalUrl,
      type: 'article'
    }
  };
}

export default async function LaptopRepairSlugPage({ params }) {
  const { slug } = await params;
  const data = getBySlug(slug);

  if (!data) {
    notFound();
  }

  return <LaptopRepairSlugView data={data} />;
}
