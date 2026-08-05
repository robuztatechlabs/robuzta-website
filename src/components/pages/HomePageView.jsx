'use client';

import dynamic from 'next/dynamic';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LazySection } from '@/components/ui/LazySection';

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

const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(m => m.ServicesSection),
  { ssr: false }
);

const BrandLogosGrid = dynamic(
  () => import('@/components/sections/BrandLogosGrid').then(m => m.BrandLogosGrid),
  { ssr: false }
);

const ProcessSection = dynamic(
  () => import('@/components/sections/ProcessSection').then(m => m.ProcessSection),
  { ssr: false }
);

const RepairShowcaseSection = dynamic(
  () => import('@/components/sections/RepairShowcaseSection').then(m => m.RepairShowcaseSection),
  { ssr: false }
);

const WhyChooseUsSection = dynamic(
  () => import('@/components/sections/WhyChooseUsSection').then(m => m.WhyChooseUsSection),
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

const LocationSection = dynamic(
  () => import('@/components/sections/LocationSection').then(m => m.LocationSection),
  { ssr: false }
);

const CourierHighlight = dynamic(
  () => import('@/components/sections/CourierHighlight').then(m => m.CourierHighlight),
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
        {/* 1. Hero Section */}
        <HeroSection />

        {/* Interactive 3D Model Explorer & Diagnostic Configurator */}
        <LazySection minHeight="450px">
          <LaptopExplorerSection />
        </LazySection>

        <LazySection minHeight="400px">
          <MultiStepLeadWizard />
        </LazySection>

        {/* 2. Trust Statistics */}
        <LazySection minHeight="350px">
          <TrustSection />
        </LazySection>

        {/* 3. Services Overview */}
        <LazySection minHeight="450px">
          <ServicesSection />
        </LazySection>

        {/* 4. Brands We Repair */}
        <LazySection minHeight="200px">
          <BrandLogosGrid />
        </LazySection>

        {/* 5. How It Works */}
        <LazySection minHeight="400px">
          <ProcessSection />
        </LazySection>

        {/* 6. Transparent Pricing & Diagnostic Calculator */}
        <LazySection minHeight="450px">
          <RepairShowcaseSection />
        </LazySection>

        {/* 7. Why Choose Us */}
        <LazySection minHeight="400px">
          <WhyChooseUsSection />
        </LazySection>

        {/* 8. Customer Reviews */}
        <LazySection minHeight="400px">
          <ReviewsSection />
        </LazySection>

        {/* 9. Frequently Asked Questions */}
        <LazySection minHeight="350px">
          <FaqPreview />
        </LazySection>

        {/* 10. Location & Business Hours */}
        <LazySection minHeight="400px">
          <LocationSection />
        </LazySection>

        <LazySection minHeight="300px">
          <CourierHighlight />
        </LazySection>

        <LazySection minHeight="400px">
          <FranchiseHomeSection />
        </LazySection>

        {/* 11. Final Call-To-Action */}
        <LazySection minHeight="350px">
          <FinalCta />
        </LazySection>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
