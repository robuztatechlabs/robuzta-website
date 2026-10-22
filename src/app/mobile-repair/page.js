import { MobileRepairHubView } from '@/components/mobile-repair/MobileRepairHubView';

export const metadata = {
  title: 'Mobile Repair Services in Ahmedabad — By Brand & Problem | Robuzta Techlabs',
  description:
    'Comprehensive mobile phone repair services in Ahmedabad. Select repair by brand (iPhone, Samsung, Pixel, OnePlus, OPPO, Vivo, Realme, Motorola, Nothing, iQOO) or by problem (screen, battery, charging, motherboard, dead phone).',
  alternates: {
    canonical: 'https://robuzta.com/mobile-repair/'
  },
  openGraph: {
    title: 'Mobile Repair Services in Ahmedabad | Robuzta Techlabs',
    description:
      'Chip-level smartphone repair, motherboard diagnostics, OEM AMOLED display & battery replacements in Ahmedabad. No Password Needed protected. No fix, no fee.',
    url: 'https://robuzta.com/mobile-repair/',
    type: 'website'
  }
};

export default function MobileRepairHubPage() {
  return <MobileRepairHubView />;
}
