import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locations } from '@/data/locations';
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LocationsPageView() {
  return (
    <>
      <Header />
      <main>
        <section className="service-hero">
          <div className="container">
            <p className="eyebrow">Robuzta Service Network</p>
            <h1>Robuzta Repair Lab Locations</h1>
            <p className="service-direct-answer">
              Visit our transparent tech repair labs in Ahmedabad or request free doorstep pickup across South Bopal, Tragad, Satellite, Vastrapur, and surrounding areas.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="location-grid">
              {locations.map((loc) => (
                <article className="location-card" key={loc.slug}>
                  <div className="location-card-header">
                    <MapPin className="text-teal" size={24} />
                    <h2>{loc.title}</h2>
                  </div>

                  <p className="location-address">{loc.address}</p>

                  <div className="location-details">
                    <div className="location-detail-item">
                      <Clock size={16} />
                      <span>{loc.timing}</span>
                    </div>
                    <div className="location-detail-item">
                      <Phone size={16} />
                      <span>{loc.phone}</span>
                    </div>
                  </div>

                  <div className="location-areas">
                    <strong>Areas Served Nearby:</strong>
                    <div className="area-tags">
                      {loc.nearbyAreas.map((area) => (
                        <span key={area} className="area-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="location-actions">
                    <Link href={`/locations/${loc.slug}`} className="button button-primary">
                      View Branch Details <ArrowRight size={16} />
                    </Link>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Open in Google Maps"
                    >
                      <MapPin size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="courier-band" style={{ marginTop: '48px' }}>
              <div>
                <ShieldCheck size={36} />
              </div>
              <div>
                <h2>Not Near a Physical Store?</h2>
                <p>
                  We offer free doorstep device pickup & delivery across all Ahmedabad localities, as well as insured pan-India courier repair service.
                </p>
              </div>
              <div>
                <Button href="/contact" variant="primary">
                  Book Doorstep Pickup
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
