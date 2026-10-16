import { FaqPageView } from '@/components/pages/FaqPageView';
import { faqs } from '@/data/faqs';
import { getFaqPageSchema, getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/jsonLd';

export const metadata = {
  title: 'Robuzta FAQ | Device Security, Repair Turnaround & Pickup Questions',
  description: 'Authoritative answers on Robuzta No Password Needed data privacy, 1-4 hour express repairs, Limited Warranty policies, and doorstep pickup across South Bopal, Tragad & Ahmedabad.',
  keywords: [
    'Robuzta FAQ',
    'Laptop repair questions Ahmedabad',
    'MacBook micro soldering FAQ',
    'No Password Needed data privacy repair',
    'doorstep pickup South Bopal Tragad',
    'iPhone screen repair warranty Ahmedabad',
    'No repair no fee policy Ahmedabad'
  ],
  alternates: {
    canonical: 'https://robuzta.com/faq'
  },
  openGraph: {
    title: 'Robuzta FAQ | Device Security, Repair Turnaround & Pickup Questions',
    description: 'Authoritative answers on Robuzta No Password Needed data privacy, 1-4 hour express repairs, Limited Warranty policies, and doorstep pickup across South Bopal, Tragad & Ahmedabad.',
    url: 'https://robuzta.com/faq',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta Techlabs FAQ' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta FAQ | Device Security, Repair Turnaround & Pickup Questions',
    description: 'Authoritative answers on Robuzta No Password Needed data privacy, 1-4 hour express repairs, Limited Warranty policies, and doorstep pickup across South Bopal, Tragad & Ahmedabad.',
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
