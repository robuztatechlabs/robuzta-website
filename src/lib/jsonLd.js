/**
 * Schema.org JSON-LD structured data generators for Robuzta Techlabs
 * Optimized for Google Search rich snippets, Google AI Overviews, and AI Answer Engines.
 */

export const siteBaseUrl = 'https://robuzta.com';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteBaseUrl}/#organization`,
    name: 'Robuzta Techlabs',
    legalName: 'Robuzta Techlabs Private Limited',
    url: siteBaseUrl,
    logo: `${siteBaseUrl}/robuzta-logo-scaled.webp`,
    image: `${siteBaseUrl}/robuzta-logo-scaled.webp`,
    description: 'Ahmedabad premier precision multi-device repair lab specializing in laptops, MacBooks, smartphones, Surface devices, and gaming PCs with transparent live diagnostics and zero OTP privacy.',
    telephone: '+91 99099 00000',
    email: 'support@robuzta.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Satellite / Vastrapur Main Road',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380015',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.instagram.com/robuztatechlabs',
      'https://www.facebook.com/robuztatechlabs',
      'https://www.linkedin.com/company/robuztatechlabs'
    ]
  };
}

export function getLocalBusinessSchema(location = null) {
  const locTitle = location ? location.title : 'Main Repair Lab - Satellite / Vastrapur';
  const locAddress = location ? location.address : 'Satellite / Vastrapur, Ahmedabad, Gujarat 380015';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': location ? `${siteBaseUrl}/locations/${location.slug}#localbusiness` : `${siteBaseUrl}/#localbusiness`,
    name: `Robuzta Techlabs - ${locTitle}`,
    image: `${siteBaseUrl}/robuzta-logo-scaled.webp`,
    url: location ? `${siteBaseUrl}/locations/${location.slug}` : siteBaseUrl,
    telephone: '+91 99099 00000',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: locAddress,
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380015',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      'South Bopal',
      'Tragad',
      'Science City',
      'Prahlad Nagar',
      'Vastrapur',
      'Satellite',
      'Bodakdev',
      'Gota',
      'Thaltej',
      'Navrangpura',
      'SG Highway',
      'Ahmedabad'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electronics Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laptop Chip-Level & Motherboard Repair'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MacBook Logic Board & Display Repair'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smartphone Screen & Water Damage Repair'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Microsoft Surface Precision Repair'
          }
        }
      ]
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteBaseUrl}/#website`,
    url: siteBaseUrl,
    name: 'Robuzta Techlabs',
    description: 'Precision Laptop, MacBook, Smartphone & Gaming PC Repair Lab in Ahmedabad',
    publisher: {
      '@id': `${siteBaseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteBaseUrl}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getServiceSchema(service) {
  if (!service) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteBaseUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.description || service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Robuzta Techlabs',
      telephone: '+91 99099 00000',
      url: siteBaseUrl
    },
    areaServed: {
      '@type': 'City',
      name: 'Ahmedabad'
    },
    serviceType: service.title,
    termsOfService: `${siteBaseUrl}/faq`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${siteBaseUrl}/services/${service.slug}`
    }
  };
}

export function getFaqPageSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteBaseUrl}${item.url}`
    }))
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteBaseUrl}/contact#contactpage`,
    url: `${siteBaseUrl}/contact`,
    name: 'Contact Robuzta Techlabs',
    description: 'Get in touch with Robuzta Techlabs for fast repair estimates, lab directions, or doorstep pickup in Ahmedabad.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Robuzta Techlabs',
      telephone: '+91 99099 00000',
      email: 'support@robuzta.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Satellite / Vastrapur Main Road',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '380015',
        addressCountry: 'IN'
      }
    }
  };
}

export function getBlogPostingSchema(article) {
  if (!article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${siteBaseUrl}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt || article.title,
    image: article.image ? [article.image] : [`${siteBaseUrl}/robuzta-logo-scaled.webp`],
    datePublished: article.date || '2026-01-01',
    dateModified: article.date || '2026-01-01',
    author: {
      '@type': 'Person',
      name: article.author || 'Robuzta Senior Hardware Repair Specialist'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Robuzta Techlabs',
      logo: {
        '@type': 'ImageObject',
        url: `${siteBaseUrl}/robuzta-logo-scaled.webp`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteBaseUrl}/blog/${article.slug}`
    }
  };
}
