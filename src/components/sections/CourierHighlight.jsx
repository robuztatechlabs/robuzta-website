import { PackageCheck, MapPin, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/ui/GsapAnimations';
import { siteConfig } from '@/data/site';

const doorstepZones = [
  'South Bopal',
  'Science City',
  'Prahlad Nagar',
  'Vastrapur',
  'Satellite',
  'Bodakdev',
  'Gota',
  'Tragad',
  'Motera',
  'Chandkheda',
  'Navrangpura',
  'Maninagar'
];

export function CourierHighlight() {
  return (
    <Section className="courier-section">
      <GsapReveal direction="up" delay={0.1}>
        <div className="courier-band">
          <div className="courier-icon-box">
            <Truck size={36} />
          </div>
          <div className="courier-content">
            <div className="courier-badge">
              <span className="pulse-dot"></span>
              <span>EXPRESS DOORSTEP PICKUP & SHIP-IN REPAIR</span>
            </div>
            <h2>Free Doorstep Pickup Across Ahmedabad & Insured Ship-In</h2>
            <p>
              We pick up broken devices directly from your home or office across all major Ahmedabad zones, or accept insured ship-in repairs pan-India with video unboxing diagnostics.
            </p>

            <div className="doorstep-zones-list">
              <span className="zones-label">Doorstep Pickup Zones:</span>
              <div className="zones-chips">
                {doorstepZones.map((zone) => (
                  <span key={zone} className="zone-chip">
                    <MapPin size={11} className="text-teal" />
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="courier-cta">
            <Button href={siteConfig.whatsappHref} variant="whatsapp" className="btn-courier-action">
              <span>Book Doorstep Pickup</span>
              <ArrowRight size={16} />
            </Button>
            <div className="courier-trust-tag">
              <ShieldCheck size={14} className="text-teal" />
              <span>Insured Transit & Data Safety</span>
            </div>
          </div>
        </div>
      </GsapReveal>
    </Section>
  );
}
