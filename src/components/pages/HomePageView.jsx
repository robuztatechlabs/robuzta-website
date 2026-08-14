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
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FinalCta } from '@/components/sections/FinalCta';



export function HomePageView() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Header />

      <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust stats strip */}
        <LazySection>
          <TrustSection />
        </LazySection>

        {/* 3. Services overview */}
        <LazySection>
          <ServicesSection />
        </LazySection>

        {/* 4. Brands we repair */}
        <LazySection>
          <BrandLogosGrid />
        </LazySection>

        {/* 5. How it works */}
        <LazySection>
          <ProcessSection />
        </LazySection>

        {/* 6. Why choose us */}
        <LazySection>
          <WhyChooseUsSection />
        </LazySection>


        {/* 8. Customer reviews */}
        <LazySection>
          <ReviewsSection />
        </LazySection>

        {/* 9. Final contact CTA */}
        <LazySection>
          <FinalCta />
        </LazySection>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
