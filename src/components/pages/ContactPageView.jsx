import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/data/site';
import { locations } from '@/data/locations';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export function ContactPageView() {
  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">Robuzta Contact & Booking</p>
            <h1>Get in Touch with Our Lab Technicians</h1>
            <p className="service-direct-answer">
              Need an instant repair quote, doorstep pickup, or hardware diagnostic help? Reach us directly via WhatsApp, Phone, or drop by our South Bopal & Tragad labs.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div>
              <h2>Direct Contact Channels</h2>
              <div className="contact-methods">
                <a href={siteConfig.phoneHref} className="contact-card">
                  <Phone size={28} className="text-teal" />
                  <div>
                    <strong>Call Senior Technician</strong>
                    <p>{siteConfig.phone}</p>
                    <span className="text-sm">Instant Phone Support</span>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-whatsapp"
                >
                  <MessageCircle size={28} style={{ color: 'var(--color-whatsapp)' }} />
                  <div>
                    <strong>WhatsApp Live Chat</strong>
                    <p>+91 999 245 2459</p>
                    <span className="text-sm">Get Photos, Quotes & Live Updates</span>
                  </div>
                </a>

                <div className="contact-card">
                  <Mail size={28} className="text-teal" />
                  <div>
                    <strong>Email Support</strong>
                    <p>{siteConfig.email}</p>
                    <span className="text-sm">Official & Corporate Inquiries</span>
                  </div>
                </div>

                <div className="contact-card">
                  <Clock size={28} className="text-teal" />
                  <div>
                    <strong>Lab Hours</strong>
                    <p>11:00 AM – 7:00 PM (Monday to Saturday)</p>
                    <span className="text-sm">Sunday: By Appointment Only</span>
                  </div>
                </div>
              </div>

              <h2 style={{ marginTop: '40px' }}>Robuzta Lab Locations</h2>
              <div className="location-list-compact">
                {locations.map((loc) => (
                  <div className="compact-loc-box" key={loc.slug}>
                    <MapPin className="text-teal" size={20} />
                    <div>
                      <strong>{loc.title}</strong>
                      <p>{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm title="Request Free Repair Quote & Pickup" />
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="courier-band">
              <div>
                <ShieldCheck size={36} />
              </div>
              <div>
                <h2>Pan-India Courier Repair Option</h2>
                <p>
                  Outside Ahmedabad? Ship your MacBook, Laptop, or Gaming PC to Robuzta. Get video unboxing, digital diagnostics, transparent approval, and insured return dispatch.
                </p>
              </div>
              <div>
                <a
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent('Hi Robuzta! I want to inquire about Courier Repair for my device.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp"
                >
                  Inquire Courier Repair
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
