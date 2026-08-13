import { SOFTWARE_SERVICES_PAGE_DATA } from '@/data/softwareServicesData';
import { SoftwareServicesView } from '@/components/software-services/SoftwareServicesView';

export const metadata = {
  title: SOFTWARE_SERVICES_PAGE_DATA.metaTitle,
  description: SOFTWARE_SERVICES_PAGE_DATA.metaDescription,
  alternates: {
    canonical: SOFTWARE_SERVICES_PAGE_DATA.canonicalUrl
  },
  openGraph: {
    title: SOFTWARE_SERVICES_PAGE_DATA.metaTitle,
    description: SOFTWARE_SERVICES_PAGE_DATA.metaDescription,
    url: SOFTWARE_SERVICES_PAGE_DATA.canonicalUrl,
    type: 'website'
  }
};

export default function SoftwareServicesPage() {
  return <SoftwareServicesView />;
}
