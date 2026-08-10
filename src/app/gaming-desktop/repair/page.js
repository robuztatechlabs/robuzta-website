import { GAMING_REPAIR_DATA } from '@/data/gamingDesktopData';
import { GamingDesktopView } from '@/components/gaming-desktop/GamingDesktopView';

export const metadata = {
  title: GAMING_REPAIR_DATA.metaTitle,
  description: GAMING_REPAIR_DATA.metaDescription,
  alternates: {
    canonical: GAMING_REPAIR_DATA.canonicalUrl
  },
  openGraph: {
    title: GAMING_REPAIR_DATA.metaTitle,
    description: GAMING_REPAIR_DATA.metaDescription,
    url: GAMING_REPAIR_DATA.canonicalUrl,
    type: 'website'
  }
};

export default function GamingDesktopRepairPage() {
  return <GamingDesktopView data={GAMING_REPAIR_DATA} />;
}
