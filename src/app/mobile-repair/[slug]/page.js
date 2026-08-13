import { notFound } from 'next/navigation';
import { getMobileBySlug, getAllMobileSlugs } from '@/data/mobileRepairData';
import { MobileRepairSlugView } from '@/components/mobile-repair/MobileRepairSlugView';

export async function generateStaticParams() {
  const slugs = getAllMobileSlugs();
  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getMobileBySlug(slug);

  if (!data) {
    return {
      title: 'Page Not Found | Robuzta Techlabs'
    };
  }

  const canonicalUrl = `https://robuzta.com/mobile-repair/${data.slug}/`;

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

export default async function MobileRepairSlugPage({ params }) {
  const { slug } = await params;
  const data = getMobileBySlug(slug);

  if (!data) {
    notFound();
  }

  return <MobileRepairSlugView data={data} />;
}
