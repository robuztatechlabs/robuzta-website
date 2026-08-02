import { FaqPageView } from '@/components/pages/FaqPageView';
import { faqs } from '@/data/faqs';
import { getFaqPageSchema, getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/jsonLd';

export const metadata = {
  title: 'Robuzta FAQ | Device Security, Repair Turnaround & Free Pickup Questions',
  description: 'Authoritative answers on Robuzta Zero-OTP data privacy, 1-4 hour express repairs, 180-day warranty policies, and free doorstep pickup across South Bopal, Tragad & Ahmedabad.',
  keywords: [
    'Robuzta FAQ',
    'Laptop repair questions Ahmedabad',
    'MacBook micro soldering FAQ',
    'Zero OTP data privacy repair',
    'Free doorstep pickup South Bopal Tragad',
    'iPhone screen repair warranty Ahmedabad',
    'No repair no fee policy Ahmedabad'
  ],
  alternates: {
    canonical: 'https://robuzta.com/faq'
  },
  openGraph: {
    title: 'Robuzta FAQ | Device Security, Repair Turnaround & Free Pickup Questions',
    description: 'Authoritative answers on Robuzta Zero-OTP data privacy, 1-4 hour express repairs, 180-day warranty policies, and free doorstep pickup across South Bopal, Tragad & Ahmedabad.',
    url: 'https://robuzta.com/faq',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Techlabs FAQ' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta FAQ | Device Security, Repair Turnaround & Free Pickup Questions',
    description: 'Authoritative answers on Robuzta Zero-OTP data privacy, 1-4 hour express repairs, 180-day warranty policies, and free doorstep pickup across South Bopal, Tragad & Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function FaqPage() {
  const faqSchema = getFaqPageSchema(faqs);
  const localBizSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ]);

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {localBizSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqPageView />
    </>
  );
}
