import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { MapPin, Phone, Clock, Mail, CheckCircle2, ChevronRight } from 'lucide-react';

export function LocationDetailPageView({ location }) {
  if (!location) {
    notFound();
  }

  // Schema.org LocalBusiness structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Robuzta Techlabs - ${location.title}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      postalCode: location.pincode,
      addressCountry: 'IN'
    },
    telephone: location.phone,
    email: location.email,
    url: `https://robuzta.com/locations/${location.slug}`,
    openingHours: 'Mo-Sa 11:00-19:00'
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
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <ChevronRight size={14} />
              <Link href="/locations">Locations</Link> <ChevronRight size={14} />
              <span>{location.title}</span>
            </nav>
            <p className="eyebrow">Robuzta Lab Branch</p>
            <h1>{location.title}</h1>
            <p className="service-direct-answer">
              Your trusted local electronics repair lab. Experience chip-level precision repairs, serial number verification, and zero OTP privacy for your devices.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div>
              <h2>Branch Details & Contact Information</h2>
              <div className="location-info-card">
                <div className="info-row">
                  <MapPin className="text-teal" size={20} />
                  <div>
                    <strong>Address:</strong>
                    <p>{location.address}</p>
                  </div>
                </div>

                <div className="info-row">
                  <Clock className="text-teal" size={20} />
                  <div>
                    <strong>Working Hours:</strong>
                    <p>{location.timing}</p>
                  </div>
                </div>

                <div className="info-row">
                  <Phone className="text-teal" size={20} />
                  <div>
                    <strong>Direct Hotline:</strong>
                    <p>
                      <a href={`tel:${location.phone}`}>{location.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="info-row">
                  <Mail className="text-teal" size={20} />
                  <div>
                    <strong>Email Inquiry:</strong>
                    <p>{location.email}</p>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>

              <h2 style={{ marginTop: '40px' }}>Services Provided at This Branch</h2>
              <div className="check-grid">
                {location.servicesAvailable.map((srv) => (
                  <div key={srv} className="check-card">
                    <CheckCircle2 size={20} />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '40px' }}>Areas Covered with Free Pickup</h2>
              <div className="area-tags" style={{ marginTop: '14px' }}>
                {location.nearbyAreas.map((area) => (
                  <span key={area} className="area-tag area-tag-lg">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm title={`Book Service at ${location.title}`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
