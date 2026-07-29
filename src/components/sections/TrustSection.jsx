import { TrustCard } from '@/components/cards/TrustCard';
import { Section } from '@/components/ui/Section';
import { GsapStagger } from '@/components/ui/GsapAnimations';
import { trustCards } from '@/data/trust';

export function TrustSection() {
  return (
    <Section
      id="trust"
      eyebrow="Zero Compromise Data Safety"
      title="Trust is visible in every repair step, not hidden in fine print."
      muted
    >
      <GsapStagger selector=".trust-card" delay={0.12} className="trust-grid">
        {trustCards.map((card) => (
          <TrustCard card={card} key={card.title} />
        ))}
      </GsapStagger>
    </Section>
  );
}
