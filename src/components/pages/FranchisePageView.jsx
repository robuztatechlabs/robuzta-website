import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FranchiseForm } from '@/components/forms/FranchiseForm';
import { CheckCircle2, TrendingUp, ShieldCheck, Wrench, Award } from 'lucide-react';

export function FranchisePageView() {
  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">Robuzta Business Opportunity</p>
            <h1>Partner with India&apos;s Premium Repair Lab Brand</h1>
            <p className="service-direct-answer">
              Build a high-margin, transparent multi-device repair lab in your city with Robuzta Techlabs. Backed by chip-level expertise, genuine part sourcing, and strong customer trust.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div>
              <h2>Why Invest in a Robuzta Franchise?</h2>
              <p className="lead-text">
                The demand for reliable laptop, MacBook, and smartphone repair is booming. Most customers distrust local unorganized shops. Robuzta bridges this gap with a modern, transparent lab model.
              </p>

              <div className="franchise-benefit-grid">
                <div className="benefit-card">
                  <TrendingUp className="text-teal" size={28} />
                  <h3>High Profitability</h3>
                  <p>Repairs carry up to 60-70% gross margins compared to traditional retail hardware sales.</p>
                </div>

                <div className="benefit-card">
                  <ShieldCheck className="text-teal" size={28} />
                  <h3>Strong Customer Trust</h3>
                  <p>Our transparent live-view repair setup and zero OTP policy win immediate customer loyalty.</p>
                </div>

                <div className="benefit-card">
                  <Wrench className="text-teal" size={28} />
                  <h3>Chip-Level Training</h3>
                  <p>Comprehensive technical training for your staff in micro-soldering, motherboard diagnostics, and screen refurbishment.</p>
                </div>

                <div className="benefit-card">
                  <Award className="text-teal" size={28} />
                  <h3>Genuine Part Sourcing</h3>
                  <p>Direct supply chain access to high-grade screens, batteries, keyboards, and micro-chips at wholesale rates.</p>
                </div>
              </div>

              <h2 style={{ marginTop: '40px' }}>What You Get as a Franchise Partner</h2>
              <div className="check-grid">
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Turnkey Store Interior & Workbench Setup</span>
                </div>
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Diagnostic Equipment & Microscope Toolkit</span>
                </div>
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Robuzta CRM & Digital Invoice Software</span>
                </div>
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Local SEO & Google Business Optimization</span>
                </div>
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Centralized Lead Generation & WhatsApp Marketing</span>
                </div>
                <div className="check-card">
                  <CheckCircle2 size={20} />
                  <span>Pan-India Warranty Support Network</span>
                </div>
              </div>
            </div>

            <div>
              <FranchiseForm />
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <h2>Franchise FAQ</h2>
            </div>

            <div className="faq-list">
              <details open>
                <summary>What is the total investment required for a Robuzta store?</summary>
                <p>
                  Total investment typically ranges between ₹8 Lakhs to ₹15 Lakhs depending on the store footprint, location category, and diagnostic equipment options selected.
                </p>
              </details>

              <details>
                <summary>Do I need prior technical repair experience?</summary>
                <p>
                  No. Robuzta provides complete operational and technical training for your technicians, as well as hiring assistance to recruit skilled hardware engineers.
                </p>
              </details>

              <details>
                <summary>What is the expected Return on Investment (ROI) period?</summary>
                <p>
                  Most Robuzta franchise labs achieve break-even within 3 to 6 months, with full ROI targeted within 12 to 18 months based on location performance.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
