import { LocationsPageView } from '@/components/pages/LocationsPageView';

export const metadata = {
  title: 'Robuzta Repair Lab Locations & Service Coverage | Ahmedabad',
  description: 'Find Robuzta Techlabs repair branches and doorstep service coverage across South Bopal, Tragad, Science City, Prahlad Nagar, Vastrapur, and all Ahmedabad zones.',
  keywords: ['robuzta locations ahmedabad', 'laptop repair lab satellite', 'mobile repair lab tragad', 'electronics repair prahlad nagar'],
  alternates: {
    canonical: 'https://robuzta.com/locations'
  },
  openGraph: {
    title: 'Robuzta Repair Lab Locations & Service Coverage | Ahmedabad',
    description: 'Find Robuzta Techlabs repair branches and doorstep service coverage across South Bopal, Tragad, Science City, Prahlad Nagar, Vastrapur, and all Ahmedabad zones.',
    url: 'https://robuzta.com/locations',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Locations' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta Repair Lab Locations | Ahmedabad',
    description: 'Find Robuzta repair branches and doorstep service coverage across Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function LocationsListingPage() {
  return <LocationsPageView />;
}
