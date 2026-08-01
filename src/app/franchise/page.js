import { FranchisePageView } from '@/components/pages/FranchisePageView';

export const metadata = {
  title: 'Robuzta Techlabs Franchise | Partner with Gujarat Top Electronics Repair Brand',
  description: 'Own a Robuzta Techlabs franchise in Ahmedabad, Vadodara, Surat, Rajkot, or major Gujarat cities. High-margin, tech-enabled repair lab model.',
  keywords: ['robuzta franchise', 'electronics repair franchise gujarat', 'laptop repair franchise ahmedabad', 'tech startup franchise'],
  alternates: {
    canonical: 'https://robuzta.com/franchise'
  },
  openGraph: {
    title: 'Robuzta Techlabs Franchise | Partner with Gujarat Top Electronics Repair Brand',
    description: 'Own a Robuzta Techlabs franchise in Ahmedabad, Vadodara, Surat, Rajkot, or major Gujarat cities. High-margin, tech-enabled repair lab model.',
    url: 'https://robuzta.com/franchise',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Franchise' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta Techlabs Franchise Opportunity',
    description: 'Own a Robuzta Techlabs franchise in Gujarat. High-margin tech repair lab franchise model.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function FranchisePage() {
  return <FranchisePageView />;
}
