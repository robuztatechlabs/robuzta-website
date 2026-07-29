import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { LocationDetailPageView } from '@/components/pages/LocationDetailPageView';

export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `${location.title} | Laptop & Mobile Repair Lab Ahmedabad`,
    description: `Visit Robuzta Techlabs ${location.title} at ${location.address}. Professional laptop, MacBook, smartphone, and gaming PC repair with live diagnostics.`
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailPageView location={location} />;
}
