import { DATA_RECOVERY_PAGE_DATA } from '@/data/dataRecoveryData';
import { DataRecoveryView } from '@/components/data-recovery/DataRecoveryView';

export const metadata = {
  title: DATA_RECOVERY_PAGE_DATA.metaTitle,
  description: DATA_RECOVERY_PAGE_DATA.metaDescription,
  alternates: {
    canonical: DATA_RECOVERY_PAGE_DATA.canonicalUrl
  },
  openGraph: {
    title: DATA_RECOVERY_PAGE_DATA.metaTitle,
    description: DATA_RECOVERY_PAGE_DATA.metaDescription,
    url: DATA_RECOVERY_PAGE_DATA.canonicalUrl,
    type: 'website'
  }
};

export default function DataRecoveryPage() {
  return <DataRecoveryView />;
}
