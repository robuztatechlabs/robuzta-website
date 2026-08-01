import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { LocationDetailPageView } from '@/components/pages/LocationDetailPageView';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  const title = `${location.title} | Laptop & Mobile Repair Lab Ahmedabad`;
  const description = `Visit Robuzta Techlabs ${location.title} at ${location.address}. Professional laptop, MacBook, smartphone, and gaming PC repair with live diagnostics.`;
  const canonicalUrl = `https://robuzta.com/locations/${slug}`;

  return {
    title,
    description,
    keywords: [
      `robuzta ${location.title.toLowerCase()}`,
      `laptop repair ${location.title.toLowerCase()}`,
      `mobile repair ${location.title.toLowerCase()}`,
      `repair lab ${location.title.toLowerCase()} ahmedabad`
    ],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Robuzta Techlabs',
      images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: location.title }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/robuzta-logo-scaled.webp']
    }
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const localBizSchema = getLocalBusinessSchema(location);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: location.title, url: `/locations/${slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationDetailPageView location={location} />
    </>
  );
}
