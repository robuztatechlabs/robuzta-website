import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/ui/GsapAnimations';
import { siteConfig } from '@/data/site';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function FinalCta() {
  return (
    <Section id="contact" className="final-cta-section">
      <GsapReveal direction="up" delay={0.1}>
        <div className="cta-band">
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>FREE DIAGNOSTIC ESTIMATE</span>
            </div>
            <h2>Get Your Hardware Fixed Fast with Zero Data Risk</h2>
            <p>
              Speak directly with a Robuzta hardware technician now for an instant diagnosis estimate or free doorstep pickup across Ahmedabad.
            </p>
            <div className="cta-features">
              <span><ShieldCheck size={14} className="text-teal" /> Zero Password Required</span>
              <span><ShieldCheck size={14} className="text-teal" /> Instant Quote Approval</span>
              <span><ShieldCheck size={14} className="text-teal" /> Warranty Included</span>
            </div>
          </div>
          <div className="cta-actions">
            <Button href={siteConfig.whatsappHref} variant="whatsapp" className="btn-cta-whatsapp">
              <MessageCircle size={18} />
              <span>WhatsApp Instant Estimate</span>
            </Button>
            <Button href={siteConfig.phoneHref} variant="primary" className="btn-cta-phone">
              <Phone size={18} />
              <span>Call Direct Tech Hotline</span>
            </Button>
          </div>
        </div>
      </GsapReveal>
    </Section>
  );
}
