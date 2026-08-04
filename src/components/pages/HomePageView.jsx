'use client';

import dynamic from 'next/dynamic';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';


// Synchronously loaded top sections
import { HeroSection } from '@/components/sections/HeroSection';

// Lead overlays & widgets lazy-loaded dynamically to zero out initial main-thread blocking time
const ExitIntentModal = dynamic(
  () => import('@/components/ui/ExitIntentModal').then(m => m.ExitIntentModal),
  { ssr: false }
);

const QuickCallbackWidget = dynamic(
  () => import('@/components/ui/QuickCallbackWidget').then(m => m.QuickCallbackWidget),
  { ssr: false }
);

const ScrollTriggeredCtaBar = dynamic(
  () => import('@/components/ui/ScrollTriggeredCtaBar').then(m => m.ScrollTriggeredCtaBar),
  { ssr: false }
);

// Below-the-fold sections lazy-loaded dynamically + deferred on scroll via LazySection
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


const BrandLogosGrid = dynamic(
  () => import('@/components/sections/BrandLogosGrid').then(m => m.BrandLogosGrid),
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
      <ExitIntentModal />
      <QuickCallbackWidget />
      <ScrollTriggeredCtaBar />

      <Header />
      <main className="bg-white text-slate-900 min-h-screen">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Custom 3D Model */}
        <LaptopExplorerSection />

        {/* 3. Trust Stats Strip */}
        <TrustSection />

        {/* 4. Services Overview */}
        <ServicesSection />

        {/* 5. Brands We Repair */}
        <BrandLogosGrid />

        {/* 6. How It Works */}
        <ProcessSection />

        {/* 7. Transparent Pricing & Hardware Estimator */}
        <RepairShowcaseSection />

        {/* 8. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 9. Customer Reviews */}
        <ReviewsSection />

        {/* 10. FAQ */}
        <FaqPreview />

        {/* 11. Location, Hours & Final Contact CTA */}
        <CourierHighlight />
        <FranchiseHomeSection />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
