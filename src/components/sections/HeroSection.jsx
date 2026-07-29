'use client';

import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Wrench,
  Zap,
  Clock,
  Star,
  CheckCircle2,
  Sparkles,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Hero3DScene } from '@/components/ui/Hero3DScene';
import { GsapReveal } from '@/components/ui/GsapAnimations';
import { trustBadges } from '@/data/trust';
import { siteConfig } from '@/data/site';

export function HeroSection() {
  return (
    <section className="hero-section">
      <Hero3DScene />

      <Container className="hero-grid">
        <div className="hero-copy">
          <GsapReveal direction="up" delay={0.1}>
            <div className="hero-badge-pill">
              <span className="pill-dot"></span>
              <span>PREMIUM HARDWARE LAB • AHMEDABAD</span>
            </div>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.2}>
            <h1 className="hero-title">
              Broken tech slowing you down? <br />
              <span className="title-gradient">We fix it fast, in plain sight.</span>
            </h1>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.3}>
            <p className="hero-text">
              Precision hardware repair for Laptops, Mobiles, MacBooks, Surface devices,
              Gaming PCs, and Desktops with transparent diagnosis, ESD-safe workstations, and zero password data safety.
            </p>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.4}>
            <div className="hero-actions">
              <Button href="/contact" variant="primary" className="hero-btn-primary">
                <span>Book Free Diagnosis</span>
                <ArrowRight size={18} />
              </Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp" className="hero-btn-whatsapp">
                <span>WhatsApp Instant Quote</span>
              </Button>
            </div>
          </GsapReveal>

          {/* Metric Stats Banner */}
          <GsapReveal direction="up" delay={0.5}>
            <div className="hero-stats-row">
              <div className="stat-card">
                <div className="stat-number">12,500+</div>
                <div className="stat-label">Devices Repaired</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-number flex-star">
                  <span>4.9</span>
                  <Star size={16} className="star-icon" />
                </div>
                <div className="stat-label">Customer Rating</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-number">&lt; 24h</div>
                <div className="stat-label">Avg Turnaround</div>
              </div>
            </div>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.6}>
            <div className="trust-row" aria-label="Robuzta trust highlights">
              {trustBadges.map((item) => (
                <span key={item} className="trust-pill">
                  <ShieldCheck size={15} className="text-teal" />
                  {item}
                </span>
              ))}
            </div>
          </GsapReveal>
        </div>

        {/* Right side interactive Lab Panel */}
        <GsapReveal direction="left" delay={0.3} className="hero-panel-wrapper">
          <div className="hero-panel" aria-label="Repair lab highlights">
            <div className="lab-panel-header">
              <div className="panel-status">
                <span className="pulse-green"></span>
                <span>LAB DIAGNOSTIC STATION ACTIVE</span>
              </div>
              <Sparkles size={18} className="text-teal" />
            </div>

            <div className="repair-card repair-card-main">
              <div className="card-icon-box">
                <Wrench size={28} />
              </div>
              <div className="card-content">
                <strong>Transparent Inspection</strong>
                <p>Inspection &rarr; Instant Quote &rarr; Your Approval &rarr; Micro Repair &rarr; Quality Testing</p>
              </div>
            </div>

            <div className="repair-card repair-card-floating">
              <div className="card-icon-box orange">
                <BadgeCheck size={26} />
              </div>
              <div className="card-content">
                <strong>Zero Password & OTP Protocol</strong>
                <p>We test devices using external hardware boot drives. Your personal data stays 100% private.</p>
              </div>
            </div>

            <div className="panel-check-list">
              <div className="panel-check-item">
                <CheckCircle2 size={15} className="text-teal" />
                <span>Genuine Brand Parts Only</span>
              </div>
              <div className="panel-check-item">
                <CheckCircle2 size={15} className="text-teal" />
                <span>ESD Anti-Static Bench</span>
              </div>
              <div className="panel-check-item">
                <CheckCircle2 size={15} className="text-teal" />
                <span>Warranty-Backed Service</span>
              </div>
            </div>
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
