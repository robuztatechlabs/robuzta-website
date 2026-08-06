'use client';

import dynamic from 'next/dynamic';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LazySection } from '@/components/ui/LazySection';

// Sections
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BrandLogosGrid } from '@/components/sections/BrandLogosGrid';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { RepairShowcaseSection } from '@/components/sections/RepairShowcaseSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { MultiStepLeadWizard } from '@/components/sections/MultiStepLeadWizard';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FaqPreview } from '@/components/sections/FaqPreview';
import { CourierHighlight } from '@/components/sections/CourierHighlight';

// Heavy 3D WebGL Explorer dynamic import (Client-only)
const LaptopExplorerSection = dynamic(
  () => import('@/components/sections/LaptopExplorerSection').then(m => m.LaptopExplorerSection),
  { ssr: false }
);

export function HomePageView() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Header />
      
      <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust Statistics */}
        <LazySection>
          <TrustSection />
        </LazySection>

        {/* 3. Services Overview */}
        <LazySection>
          <ServicesSection />
        </LazySection>

        {/* 4. Brands We Repair */}
        <LazySection>
          <BrandLogosGrid />
        </LazySection>

        {/* 5. How It Works */}
        <LazySection>
          <ProcessSection />
        </LazySection>

        {/* 6. Diagnostics & Repair Calculator */}
        <LazySection>
          <RepairShowcaseSection />
        </LazySection>

        {/* 7. Why Choose Us */}
        <LazySection>
          <WhyChooseUsSection />
        </LazySection>

        {/* Interactive 3D Component Explorer */}
        <LazySection>
          <LaptopExplorerSection />
        </LazySection>

        {/* Lead Wizard */}
        <LazySection>
          <MultiStepLeadWizard />
        </LazySection>

        {/* 8. Customer Reviews */}
        <LazySection>
          <ReviewsSection />
        </LazySection>

        {/* 9. FAQ */}
        <LazySection>
          <FaqPreview />
        </LazySection>

        {/* Courier Highlight */}
        <LazySection>
          <CourierHighlight />
        </LazySection>
        
      </main>

      <Footer />
    </SmoothScroll>
  );
}
