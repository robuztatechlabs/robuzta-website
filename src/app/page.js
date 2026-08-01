import { HomePageView } from '@/components/pages/HomePageView';
import { faqs } from '@/data/faqs';
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata = {
  title: 'Robuzta Techlabs | Precision Laptop & Mobile Repair Ahmedabad',
  description: 'Robuzta Techlabs provides laptop, mobile, MacBook, Surface, and gaming PC repair in Ahmedabad with transparent live diagnostics and zero OTP privacy guarantee.',
  keywords: [
    'laptop repair ahmedabad',
    'macbook repair ahmedabad',
    'iphone repair ahmedabad',
    'surface repair ahmedabad',
    'gaming pc repair ahmedabad',
    'chip level laptop repair',
    'electronics repair lab'
  ],
  alternates: {
    canonical: 'https://robuzta.com'
  },
  openGraph: {
    title: 'Robuzta Techlabs | Precision Laptop & Mobile Repair Lab Ahmedabad',
    description: 'Ahmedabad premier multi-device repair lab. Transparent live repairs, genuine spare parts, zero OTP privacy, and free doorstep pickup.',
    url: 'https://robuzta.com',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Techlabs Homepage' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta Techlabs | Laptop & Mobile Repair Ahmedabad',
    description: 'Transparent live repairs, genuine parts, zero OTP privacy, free doorstep pickup in Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function Home() {
  const faqSchema = getFaqPageSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Home', url: '/' }]);

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePageView />
    </>
  );
}
