import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FinalCta } from '@/components/sections/FinalCta';
import { getServiceBySlug, services } from '@/data/services';
import { repairProcess } from '@/data/process';
import { siteConfig } from '@/data/site';

export function ServiceDetailPageView({ slug }) {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <Container>
            <Breadcrumb
              items={[
                { label: 'Services', href: '/#services' },
                { label: service.title }
              ]}
            />
            <div className="service-hero-grid">
              <div>
                <p className="eyebrow">Robuzta Precision Service</p>
                <h1>{service.title} in Ahmedabad</h1>
                <p className="service-direct-answer">{service.directAnswer}</p>
                <div className="hero-actions">
                  <Button href="/contact">Get Free Quote</Button>
                  <Button href={siteConfig.whatsappHref} variant="whatsapp">
                    <MessageCircle size={18} />
                    WhatsApp Estimate
                  </Button>
                </div>
              </div>

              <aside className="service-proof-panel">
                <ShieldCheck size={30} />
                <h2>Robuzta Lab Guarantee</h2>
                <p>{service.proof}</p>
                <ul>
                  <li>Zero password or PIN required</li>
                  <li>Customer approval before repair</li>
                  <li>Digital invoice with warranty</li>
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        <section className="section" id="symptoms">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Common Symptoms</p>
              <h2>Common Hardware Issues We Fix</h2>
            </div>
            <div className="check-grid">
              {service.symptoms.map((item) => (
                <div className="check-card" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section-muted" id="process">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Simple Workflow</p>
              <h2>Our Transparent 6-Step Repair Process</h2>
            </div>
            <div className="process-grid">
              {repairProcess.map((step, index) => (
                <article className="process-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section" id="included">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Comprehensive Scope</p>
              <h2>Services Included in {service.title}</h2>
            </div>
            <div className="included-grid">
              {service.included.map((item) => (
                <article className="included-card" key={item}>
                  <h3>{item}</h3>
                  <p>
                    Diagnosis-first support with transparent quote, customer approval, and
                    certified lab handling.
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section-muted" id="faq">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Service FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="section" id="related">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Related Hardware</p>
              <h2>Other Repair Services Available</h2>
            </div>
            <div className="service-grid">
              {relatedServices.map((item) => (
                <article className="service-card" key={item.slug}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href={`/services/${item.slug}`}>View service</Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
