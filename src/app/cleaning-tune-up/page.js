import { CLEANING_PAGE_DATA } from '@/data/cleaningTuneUpData';
import { CleaningTuneUpView } from '@/components/cleaning-tune-up/CleaningTuneUpView';

export const metadata = {
  title: CLEANING_PAGE_DATA.metaTitle,
  description: CLEANING_PAGE_DATA.metaDescription,
  alternates: {
    canonical: CLEANING_PAGE_DATA.canonicalUrl
  },
  openGraph: {
    title: CLEANING_PAGE_DATA.metaTitle,
    description: CLEANING_PAGE_DATA.metaDescription,
    url: CLEANING_PAGE_DATA.canonicalUrl,
    type: 'website'
  }
};

export default function CleaningTuneUpPage() {
  return <CleaningTuneUpView />;
}
