import { ServiceCard } from '@/components/cards/ServiceCard';
import { Section } from '@/components/ui/Section';
import { GsapStagger, GsapReveal } from '@/components/ui/GsapAnimations';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Hardware Diagnostic Labs"
      title="Precision repair services for every device."
    >
      <GsapReveal direction="up" delay={0.1}>
        <p className="section-lead-text">
          Select your device type below to inspect our transparent diagnostic process, estimated repair times, and genuine component specifications.
        </p>
      </GsapReveal>

      <GsapStagger selector=".service-card" delay={0.12} className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </GsapStagger>
    </Section>
  );
}
