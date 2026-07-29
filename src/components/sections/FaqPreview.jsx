import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/ui/GsapAnimations';
import { faqs } from '@/data/faqs';
import { HelpCircle, ArrowRight } from 'lucide-react';

export function FaqPreview() {
  return (
    <Section
      id="faq"
      eyebrow="Clear Answers"
      title="Common questions customers ask before booking a repair."
    >
      <GsapReveal direction="up" delay={0.1}>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-accordion">
              <summary className="faq-summary">
                <div className="summary-title-box">
                  <HelpCircle size={18} className="text-teal" />
                  <span>{item.question}</span>
                </div>
              </summary>
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="faq-more-footer" style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link href="/faq" className="button button-whatsapp" style={{ display: 'inline-flex' }}>
            <span>View All Hardware Repair FAQs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </GsapReveal>
    </Section>
  );
}
