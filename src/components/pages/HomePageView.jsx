'use client';

import dynamic from 'next/dynamic';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Lead overlays & widgets
import { ExitIntentModal } from '@/components/ui/ExitIntentModal';
import { ScrollTriggeredCtaBar } from '@/components/ui/ScrollTriggeredCtaBar';

// Synchronously loaded top sections
import { HeroSection } from '@/components/sections/HeroSection';

// Below-the-fold sections are lazy-loaded dynamically to prevent initial route render lag
const MultiStepLeadWizard = dynamic(
  () => import('@/components/sections/MultiStepLeadWizard').then(m => m.MultiStepLeadWizard),
  { ssr: false }
);

const LaptopExplorerSection = dynamic(
  () => import('@/components/sections/LaptopExplorerSection').then(m => m.LaptopExplorerSection),
  { ssr: false }
);

const TrustSection = dynamic(
  () => import('@/components/sections/TrustSection').then(m => m.TrustSection),
  { ssr: false }
);

const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(m => m.ServicesSection),
  { ssr: false }
);

const WhyChooseUsSection = dynamic(
  () => import('@/components/sections/WhyChooseUsSection').then(m => m.WhyChooseUsSection),
  { ssr: false }
);

const PortfolioSection = dynamic(
  () => import('@/components/sections/PortfolioSection').then(m => m.PortfolioSection),
  { ssr: false }
);

const RepairShowcaseSection = dynamic(
  () => import('@/components/sections/RepairShowcaseSection').then(m => m.RepairShowcaseSection),
  { ssr: false }
);

const TechStackSection = dynamic(
  () => import('@/components/sections/TechStackSection').then(m => m.TechStackSection),
  { ssr: false }
);

const ProcessSection = dynamic(
  () => import('@/components/sections/ProcessSection').then(m => m.ProcessSection),
  { ssr: false }
);

const CourierHighlight = dynamic(
  () => import('@/components/sections/CourierHighlight').then(m => m.CourierHighlight),
  { ssr: false }
);

const ReviewsSection = dynamic(
  () => import('@/components/sections/ReviewsSection').then(m => m.ReviewsSection),
  { ssr: false }
);

const FaqPreview = dynamic(
  () => import('@/components/sections/FaqPreview').then(m => m.FaqPreview),
  { ssr: false }
);

const FranchiseHomeSection = dynamic(
  () => import('@/components/sections/FranchiseHomeSection').then(m => m.FranchiseHomeSection),
  { ssr: false }
);

const FinalCta = dynamic(
  () => import('@/components/sections/FinalCta').then(m => m.FinalCta),
  { ssr: false }
);

export function HomePageView() {
  return (
    <SmoothScroll>
      <ScrollProgress />

      {/* Global Lead Capture Overlays */}
      <ExitIntentModal />
      <ScrollTriggeredCtaBar />

      <Header />
      <main className="bg-white text-slate-900 min-h-screen">
        <HeroSection />
        <MultiStepLeadWizard />

        {/* Interactive 3D Laptop Explorer */}
        <LaptopExplorerSection />
        <TrustSection />
        <ServicesSection />
        <WhyChooseUsSection />

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
