import { ReviewCard } from '@/components/cards/ReviewCard';
import { Section } from '@/components/ui/Section';
import { GsapStagger, GsapReveal } from '@/components/ui/GsapAnimations';
import { reviews } from '@/data/reviews';

export function ReviewsSection() {
  return (
    <Section
      id="reviews"
      eyebrow="Verified Customer Feedback"
      title="Trusted by over 12,500+ laptop, phone, and PC owners in Ahmedabad."
      muted
    >
      <GsapReveal direction="up" delay={0.1}>
        <p className="section-lead-text">
          Real reviews from customers who experienced our diagnosis-first workbench transparency and zero OTP data protection.
        </p>
      </GsapReveal>

      <GsapStagger selector=".review-card" delay={0.12} className="review-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </GsapStagger>
    </Section>
  );
}
