import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Cpu, Lock, Eye, Award, CheckCircle2 } from 'lucide-react';

export function AboutPageView() {
  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">The Robuzta Difference</p>
            <h1>Not Your Typical Local Repair Shop</h1>
            <p className="service-direct-answer">
              Robuzta Techlabs was founded to eliminate opacity in tech repairs. We operate a modern, high-precision repair lab where hardware diagnostics and repairs take place in plain sight.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-values-grid">
              <div className="value-card">
                <Lock size={32} className="text-teal" />
                <h3>Zero OTP & No Password Protocol</h3>
                <p>
                  We test your hardware using specialized diagnostic boot drives. We NEVER ask for your device screen password, iCloud/Google credentials, or phone OTPs.
                </p>
              </div>

              <div className="value-card">
                <Eye size={32} className="text-teal" />
                <h3>Live Workbench Repairs</h3>
                <p>
                  Watch your laptop or mobile being diagnosed right in front of you. Complete transparency ensures total peace of mind for your valuable hardware.
                </p>
              </div>

              <div className="value-card">
                <Cpu size={32} className="text-teal" />
                <h3>Chip-Level Micro-Soldering</h3>
                <p>
                  Our technicians operate stereoscopic microscopes and BGA rework stations to fix motherboards, logic boards, and power ICs down to component level.
                </p>
              </div>

              <div className="value-card">
                <Award size={32} className="text-teal" />
                <h3>Serial-Number Verified Parts</h3>
                <p>
                  Every replacement display, battery, keyboard, or SSD comes with serial number logging and old part return policy to guarantee genuine quality.
                </p>
              </div>
            </div>

            <div className="split-section" style={{ marginTop: '64px' }}>
              <div>
                <h2>Our Mission & Quality Guarantee</h2>
                <p className="lead-text">
                  In a market filled with unauthorized part swapping and inflated repair costs, Robuzta Techlabs stands as a beacon of trust, technical excellence, and rapid service.
                </p>
                <div className="check-grid" style={{ marginTop: '24px' }}>
                  <div className="check-card">
                    <CheckCircle2 size={20} />
                    <span>Free Comprehensive Hardware Inspection</span>
                  </div>
                  <div className="check-card">
                    <CheckCircle2 size={20} />
                    <span>Same-Day Express Repairs Available</span>
                  </div>
                  <div className="check-card">
                    <CheckCircle2 size={20} />
                    <span>Digital Invoices & Clear Warranty Terms</span>
                  </div>
                  <div className="check-card">
                    <CheckCircle2 size={20} />
                    <span>Free Doorstep Pickup Across Ahmedabad</span>
                  </div>
                </div>
              </div>

              <div className="cta-band">
                <div>
                  <h2>Need Device Diagnostic Help Today?</h2>
                  <p>Book a free pickup or consult with our hardware engineers.</p>
                </div>
                <div>
                  <Button href="/contact" variant="primary">
                    Book Free Inspection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
