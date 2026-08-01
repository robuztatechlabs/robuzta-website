import { ServicesPageView } from '@/components/pages/ServicesPageView';

export const metadata = {
  title: 'All Electronics & Computer Repair Services | Robuzta Techlabs Ahmedabad',
  description:
    'Explore Robuzta Techlabs repair services in Ahmedabad: Laptop Repair, MacBook Logic Board Repair, Smartphone Display & Battery, Surface Pro, Gaming PC Thermal Tuning & Desktop Repair.',
  openGraph: {
    title: 'All Repair Services | Robuzta Techlabs Ahmedabad',
    description:
      'Lab-grade hardware repair for laptops, MacBooks, iPhones, Surface Pros, and gaming PCs in Ahmedabad. 180-day warranties and Zero-Password data safety.',
    url: 'https://robuzta.com/services',
    siteName: 'Robuzta Techlabs',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Robuzta Techlabs Repair Services',
    description: 'Hardware repair services offered by Robuzta Techlabs in Ahmedabad',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laptop Repair', url: 'https://robuzta.com/services/laptop-repair' },
      { '@type': 'ListItem', position: 2, name: 'Mobile Repair', url: 'https://robuzta.com/services/mobile-repair' },
      { '@type': 'ListItem', position: 3, name: 'MacBook Repair', url: 'https://robuzta.com/services/macbook-repair' },
      { '@type': 'ListItem', position: 4, name: 'Surface Repair', url: 'https://robuzta.com/services/surface-repair' },
      { '@type': 'ListItem', position: 5, name: 'Gaming PC Repair', url: 'https://robuzta.com/services/gaming-pc-repair' },
      { '@type': 'ListItem', position: 6, name: 'Desktop Repair', url: 'https://robuzta.com/services/desktop-repair' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageView />
    </>
  );
}
