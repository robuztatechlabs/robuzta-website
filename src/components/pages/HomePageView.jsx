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
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FaqPreview } from '@/components/sections/FaqPreview';
import { LocationSection } from '@/components/sections/LocationSection';
import { FinalCta } from '@/components/sections/FinalCta';

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
        
        {/* 1. Hero (who, what, where + call/WhatsApp CTA) */}
        <HeroSection />

        {/* 2. Trust stats strip */}
        <LazySection>
          <TrustSection />
        </LazySection>

        {/* 3. Services overview (links to all 6 service hubs) */}
        <LazySection>
          <ServicesSection />
        </LazySection>

        {/* 4. Brands we repair (logo strip — laptop + mobile brands) */}
        <LazySection>
          <BrandLogosGrid />
        </LazySection>

        {/* 5. How it works */}
        <LazySection>
          <ProcessSection />
        </LazySection>

        {/* 6. Transparent pricing */}
        <LazySection>
          <RepairShowcaseSection />
        </LazySection>

        {/* 7. Why choose us */}
        <LazySection>
          <WhyChooseUsSection />
        </LazySection>

        {/* Interactive 3D Component Explorer (Custom 3D Model preserved) */}
        <LazySection>
          <LaptopExplorerSection />
        </LazySection>

        {/* 8. Customer reviews */}
        <LazySection>
          <ReviewsSection />
        </LazySection>

        {/* 9. FAQ */}
        <LazySection>
          <FaqPreview />
        </LazySection>

        {/* 10. Location and hours */}
        <LazySection>
          <LocationSection />
        </LazySection>

        {/* 11. Final contact CTA */}
        <LazySection>
          <FinalCta />
        </LazySection>
        
      </main>

      <Footer />
    </SmoothScroll>
  );
}
