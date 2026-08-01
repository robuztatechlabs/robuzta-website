'use client';

import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { RepairShowcaseSection } from '@/components/sections/RepairShowcaseSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CourierHighlight } from '@/components/sections/CourierHighlight';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FaqPreview } from '@/components/sections/FaqPreview';
import { FranchiseHomeSection } from '@/components/sections/FranchiseHomeSection';
import { FinalCta } from '@/components/sections/FinalCta';

// High-Converting Lead Capture Additions
import { ExitIntentModal } from '@/components/ui/ExitIntentModal';
import { QuickCallbackWidget } from '@/components/ui/QuickCallbackWidget';
import { ScrollTriggeredCtaBar } from '@/components/ui/ScrollTriggeredCtaBar';
import { MultiStepLeadWizard } from '@/components/sections/MultiStepLeadWizard';
import { LeadMagnetBanner } from '@/components/ui/LeadMagnetBanner';

export function HomePageView() {
  return (
    <SmoothScroll>
      <ScrollProgress />

      {/* Global Lead Capture Overlays */}
      <ExitIntentModal />
      <QuickCallbackWidget />
      <ScrollTriggeredCtaBar />

      <Header />
      <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        <HeroSection />

        {/* 30-Second Multi-Step Diagnostic & Free Pickup Wizard */}
        <MultiStepLeadWizard />

        <TrustSection />
        <ServicesSection />
        <WhyChooseUsSection />

        {/* Lead Magnet Download Banner */}
        <LeadMagnetBanner />

        <PortfolioSection />
        <RepairShowcaseSection />
        <TechStackSection />
        <ProcessSection />
        <CourierHighlight />
        <ReviewsSection />
        <FaqPreview />
        <FranchiseHomeSection />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
