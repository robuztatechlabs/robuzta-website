import { AboutPageView } from '@/components/pages/AboutPageView';

export const metadata = {
  title: 'About Robuzta Techlabs | Electronics Repair Lab Ahmedabad',
  description: 'Learn about Robuzta Techlabs transparency promise, zero OTP data policy, ESD anti-static lab bench, and multi-device repair expertise in Ahmedabad.',
  keywords: ['about robuzta techlabs', 'repair lab ahmedabad', 'zero otp privacy repair', 'esd lab ahmedabad'],
  alternates: {
    canonical: 'https://robuzta.com/about'
  },
  openGraph: {
    title: 'About Robuzta Techlabs | Electronics Repair Lab Ahmedabad',
    description: 'Learn about Robuzta Techlabs transparency promise, zero OTP data policy, ESD anti-static lab bench, and multi-device repair expertise in Ahmedabad.',
    url: 'https://robuzta.com/about',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'About Robuzta Techlabs' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Robuzta Techlabs | Electronics Repair Lab Ahmedabad',
    description: 'Learn about Robuzta Techlabs transparency promise, zero OTP data policy, ESD anti-static lab bench, and multi-device repair expertise in Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function AboutPage() {
  return <AboutPageView />;
}
