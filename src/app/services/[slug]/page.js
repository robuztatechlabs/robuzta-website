import { notFound, redirect } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import { ServiceDetailPageView } from '@/components/pages/ServiceDetailPageView';
import { getServiceSchema, getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd';

const DEDICATED_SERVICE_URLS = {
  'mobile-repair': '/mobile-repair/',
  'laptop-repair': '/laptop-repair/',
  'macbook-repair': '/laptop-repair/macbook/',
  'surface-repair': '/laptop-repair/surface/',
  'gaming-desktop': '/gaming-desktop/repair/',
  'gaming-pc-repair': '/gaming-desktop/repair/',
  'desktop-repair': '/gaming-desktop/repair/',
  'data-recovery': '/data-recovery/',
  'software-services': '/software-services/',
  'cleaning-tune-up': '/cleaning-tune-up/'
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const title = service.metaTitle || `${service.title} | Robuzta Techlabs Ahmedabad`;
  const description = service.metaDescription || service.description || `Professional ${service.title} services at Robuzta Techlabs Ahmedabad. Genuine parts, live diagnostics, zero OTP privacy.`;
  const canonicalUrl = DEDICATED_SERVICE_URLS[slug] ? `https://robuzta.com${DEDICATED_SERVICE_URLS[slug]}` : `https://robuzta.com/services/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} ahmedabad`,
      `robuzta ${service.slug}`,
      `${service.title.toLowerCase()} near me`,
      'repair lab ahmedabad'
    ],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Robuzta Techlabs',
      images: [{ url: service.icon || '/robuzta-logo-scaled.webp', width: 1200, height: 630, alt: service.title }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.icon || '/robuzta-logo-scaled.webp']
    }
  };
}



export default async function ServicePage({ params }) {
  const { slug } = await params;

  if (DEDICATED_SERVICE_URLS[slug]) {
    redirect(DEDICATED_SERVICE_URLS[slug]);
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service);
  const faqSchema = service.faqs ? getFaqPageSchema(service.faqs) : null;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: service.title, url: `/services/${slug}` }
  ]);

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
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
      <ServiceDetailPageView slug={slug} />
    </>
  );
}
