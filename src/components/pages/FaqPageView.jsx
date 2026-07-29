import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqs } from '@/data/faqs';
import { Button } from '@/components/ui/Button';
import { HelpCircle, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function FaqPageView() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">Robuzta Help Center</p>
            <h1>Frequently Asked Questions</h1>
            <p className="service-direct-answer">
              Clear, transparent answers regarding device security, repair turnarounds, warranty terms, and free doorstep pickup in Ahmedabad.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="faq-page-grid">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index < 3}>
                    <summary>
                      <HelpCircle size={18} className="text-teal" style={{ marginRight: '8px' }} />
                      {faq.question}
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              <aside className="faq-sidebar">
                <div className="sidebar-card">
                  <ShieldCheck size={32} className="text-teal" />
                  <h3>Still Have Questions?</h3>
                  <p>
                    Talk directly to our Senior Hardware Lab Technicians for instant diagnosis.
                  </p>
                  <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-whatsapp"
                      style={{ justifyContent: 'center' }}
                    >
                      <MessageCircle size={18} />
                      Ask on WhatsApp
                    </a>
                    <a
                      href={siteConfig.phoneHref}
                      className="button button-primary"
                      style={{ justifyContent: 'center' }}
                    >
                      <Phone size={18} />
                      Call +91 999 245 2459
                    </a>
                  </div>
                </div>

                <div className="sidebar-card sidebar-card-dark">
                  <h3>Book Free Pickup</h3>
                  <p>
                    Free doorstep pickup & delivery in South Bopal, Tragad, Satellite, Vastrapur, and across Ahmedabad.
                  </p>
                  <Button href="/contact" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Book Pickup Now
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
