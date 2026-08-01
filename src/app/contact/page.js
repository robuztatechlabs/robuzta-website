import { ContactPageView } from '@/components/pages/ContactPageView';
import { getContactPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata = {
  title: 'Contact Robuzta Techlabs | Repair Diagnostics Ahmedabad',
  description: 'Contact Robuzta Techlabs for fast repair estimates, doorstep pickup in Ahmedabad, lab location guidance, or WhatsApp diagnostic quotes.',
  keywords: ['contact robuzta', 'laptop repair contact ahmedabad', 'mobile repair lab satellite vastrapur', 'robuzta phone number'],
  alternates: {
    canonical: 'https://robuzta.com/contact'
  },
  openGraph: {
    title: 'Contact Robuzta Techlabs | Repair Diagnostics Ahmedabad',
    description: 'Contact Robuzta Techlabs for fast repair estimates, doorstep pickup in Ahmedabad, lab location guidance, or WhatsApp diagnostic quotes.',
    url: 'https://robuzta.com/contact',
    siteName: 'Robuzta Techlabs',
    images: [{ url: '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: 'Contact Robuzta Techlabs' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Robuzta Techlabs | Repair Diagnostics Ahmedabad',
    description: 'Contact Robuzta Techlabs for fast repair estimates, doorstep pickup in Ahmedabad, lab location guidance, or WhatsApp diagnostic quotes.',
    images: ['/robuzta-logo-scaled.webp']
  }
};

export default function ContactPage() {
  const contactSchema = getContactPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageView />
    </>
  );
}
