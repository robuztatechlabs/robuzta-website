import { CourierHighlight } from '@/components/sections/CourierHighlight';
import { FaqPreview } from '@/components/sections/FaqPreview';
import { FinalCta } from '@/components/sections/FinalCta';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { DiagnosticEstimator } from '@/components/ui/DiagnosticEstimator';
import { Container } from '@/components/ui/Container';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { GsapReveal } from '@/components/ui/GsapAnimations';

export function HomePageView() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <HeroSection />

        <section className="section section-muted" id="estimator">
          <Container>
            <GsapReveal direction="up" delay={0.1}>
              <DiagnosticEstimator />
            </GsapReveal>
          </Container>
        </section>

        <ServicesSection />
        <ProcessSection />
        <TrustSection />
        <CourierHighlight />
        <ReviewsSection />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
