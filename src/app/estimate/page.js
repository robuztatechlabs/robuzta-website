import { EstimatePageView } from '@/components/pages/EstimatePageView';

export const metadata = {
  title: 'Instant Repair Price Estimator | Robuzta Techlabs Ahmedabad',
  description: 'Get an instant price estimate for laptop, mobile, MacBook, and gaming PC repairs in Ahmedabad. Transparent pricing with no hidden charges. Book on WhatsApp.',
  keywords: ['repair price estimate', 'laptop repair cost ahmedabad', 'mobile repair cost', 'macbook repair price', 'robuzta price estimator'],
  alternates: {
    canonical: 'https://robuzta.com/estimate'
  },
  openGraph: {
    title: 'Instant Repair Price Estimator | Robuzta Techlabs',
    description: 'Get an instant price estimate for laptop, mobile, MacBook, and gaming PC repairs in Ahmedabad.',
    url: 'https://robuzta.com/estimate',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Repair Price Estimator' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Repair Price Estimator | Robuzta Techlabs',
    description: 'Get an instant price estimate for laptop, mobile, MacBook, and gaming PC repairs in Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function EstimatePage() {
  return <EstimatePageView />;
}
