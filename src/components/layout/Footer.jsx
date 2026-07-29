import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col-main">
          <strong className="footer-brand">Robuzta Techlabs</strong>
          <p className="footer-desc">
            Ahmedabad&apos;s premier multi-device repair lab. Specialized in chip-level laptop, MacBook, smartphone, and gaming PC diagnostics with transparent pricing and live workbench repairs.
          </p>
          <div className="footer-trust-badge">
            <ShieldCheck size={18} className="text-teal" />
            <span>No Password Required • Genuine Spare Parts</span>
          </div>
        </div>

        <div>
          <h3>Repair Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/locations">Lab Locations</Link></li>
            <li><Link href="/franchise">Franchise Opportunity</Link></li>
            <li><Link href="/blog">Repair Blog & Guides</Link></li>
            <li><Link href="/faq">Frequently Asked Questions</Link></li>
            <li><Link href="/about">About Robuzta Lab</Link></li>
            <li><Link href="/contact">Book Doorstep Pickup</Link></li>
          </ul>
        </div>

        <div>
          <h3>Lab Locations & Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <Phone size={16} />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Clock size={16} />
              <span>11:00 AM – 7:00 PM (Mon – Sat)</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>
                <strong>Head Office:</strong> {locations[0]?.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Robuzta Techlabs. All rights reserved.</p>
        <p className="footer-subtext">
          Designed for maximum transparency, speed, and hardware data safety.
        </p>
      </div>
    </footer>
  );
}
