'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Focused Enterprise Franchise Sections
import { FranchiseHero } from '@/components/franchise/FranchiseHero';
import { FranchiseProcessTimeline } from '@/components/franchise/FranchiseProcessTimeline';
import { FranchiseInvestmentCalculator } from '@/components/franchise/FranchiseInvestmentCalculator';
import { FranchiseComparisonTable } from '@/components/franchise/FranchiseComparisonTable';
import { FranchiseFaq } from '@/components/franchise/FranchiseFaq';
import { FranchiseMultiStepForm } from '@/components/franchise/FranchiseMultiStepForm';
import { FranchiseFinalCta } from '@/components/franchise/FranchiseFinalCta';

export function FranchisePageView() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-950">
        {/* Section 1: Enterprise Hero Section */}
        <FranchiseHero />

        {/* Section 2: Franchise Onboarding Process Timeline */}
        <FranchiseProcessTimeline />

        {/* Section 3: Financial Models & Investment Projections */}
        <FranchiseInvestmentCalculator />

        {/* Section 4: Enterprise Comparison Table */}
        <FranchiseComparisonTable />

        {/* Section 5: Frequently Asked Questions Accordion */}
        <FranchiseFaq />

        {/* Section 6: Multi-Step Interactive Application Form */}
        <FranchiseMultiStepForm />

        {/* Section 7: Final Call to Action */}
        <FranchiseFinalCta />
      </main>
      <Footer />
    </>
  );
}
