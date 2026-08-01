import { BlogListingPageView } from '@/components/pages/BlogListingPageView';

export const metadata = {
  title: 'Tech Repair Blog & Hardware Guides | Robuzta Techlabs',
  description: 'Expert repair guides, motherboard troubleshooting tips, laptop screen replacement costs, and phone maintenance advice from Robuzta Techlabs engineers.',
  keywords: ['robuzta tech blog', 'laptop repair guides ahmedabad', 'macbook repair tips', 'phone repair advice'],
  alternates: {
    canonical: 'https://robuzta.com/blog'
  },
  openGraph: {
    title: 'Tech Repair Blog & Hardware Guides | Robuzta Techlabs',
    description: 'Expert repair guides, motherboard troubleshooting tips, laptop screen replacement costs, and phone maintenance advice from Robuzta Techlabs engineers.',
    url: 'https://robuzta.com/blog',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Tech Repair Blog' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Repair Blog & Hardware Guides | Robuzta Techlabs',
    description: 'Expert repair guides, motherboard troubleshooting tips, laptop screen replacement costs.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function BlogListingPage() {
  return <BlogListingPageView />;
}
