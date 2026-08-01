import { FaqPageView } from '@/components/pages/FaqPageView';
import { faqs } from '@/data/faqs';
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata = {
  title: 'Frequently Asked Questions | Robuzta Repair Services',
  description: 'Get clear answers on repair turnaround times, pricing transparency, zero OTP data protection, doorstep pickup, and warranty policies at Robuzta.',
  keywords: ['robuzta faq', 'laptop repair questions ahmedabad', 'mobile repair warranty ahmedabad', 'zero otp policy repair'],
  alternates: {
    canonical: 'https://robuzta.com/faq'
  },
  openGraph: {
    title: 'Frequently Asked Questions | Robuzta Repair Services',
    description: 'Get clear answers on repair turnaround times, pricing transparency, zero OTP data protection, doorstep pickup, and warranty policies at Robuzta.',
    url: 'https://robuzta.com/faq',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Robuzta FAQ' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Robuzta Repair Services',
    description: 'Get clear answers on repair turnaround times, pricing transparency, zero OTP data protection, doorstep pickup, and warranty policies at Robuzta.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function FaqPage() {
  const faqSchema = getFaqPageSchema(faqs);
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqPageView />
    </>
  );
}
