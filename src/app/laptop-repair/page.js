import { LaptopRepairHubView } from '@/components/laptop-repair/LaptopRepairHubView';

export const metadata = {
  title: 'Laptop Repair Services in Ahmedabad — By Brand & Problem | Robuzta Techlabs',
  description:
    'Comprehensive laptop repair services in Ahmedabad. Select repair by brand (Dell, HP, Acer, ASUS, MSI, Surface, MacBook) or by problem (screen, battery, motherboard, liquid damage).',
  alternates: {
    canonical: 'https://robuzta.com/laptop-repair/'
  },
  openGraph: {
    title: 'Laptop Repair Services in Ahmedabad | Robuzta Techlabs',
    description:
      'Component-level laptop repair, logic board diagnostics, OEM display & battery replacements in Ahmedabad. No fix, no fee.',
    url: 'https://robuzta.com/laptop-repair/',
    type: 'website'
  }
};

export default function LaptopRepairHubPage() {
  return <LaptopRepairHubView />;
}
