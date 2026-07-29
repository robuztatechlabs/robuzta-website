'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench
} from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from '@/components/layout/MegaMenu';

const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Robuzta Techlabs home">
        Robuzta<span className="brand-dot">.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/" className="nav-item-link">
          Home
        </Link>

        {/* Services Hover Dropdown */}
        <div
          className="mega-menu-trigger-wrap"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`nav-services-btn ${megaMenuOpen ? 'active' : ''}`}
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            aria-expanded={megaMenuOpen}
          >
            <span>Services</span>
            <ChevronDown size={14} className={`chevron ${megaMenuOpen ? 'rotate' : ''}`} />
          </button>

          {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
        </div>

        {/* Rest of Nav Items: Locations, About Us, Blog, Contact Us */}
        {navigationItems.slice(1).map((item) => (
          <Link href={item.href} key={item.label} className="nav-item-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="icon-link icon-link-phone"
          href={siteConfig.phoneHref}
          aria-label="Call Robuzta Techlabs"
          title="Call Robuzta"
        >
          <Phone size={18} />
        </a>
        <a
          className="icon-link icon-link-whatsapp"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Robuzta Techlabs"
          title="WhatsApp Us"
        >
          <MessageCircle size={18} />
        </a>
        <Button href="/contact" variant="primary">
          Get Free Quote
        </Button>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-links">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                Home
              </Link>

              <div className="mobile-services-section">
                <div className="mobile-section-label">OUR SERVICES</div>
                <div className="mobile-services-list">
                  {services.map((srv) => {
                    const IconComp = serviceIcons[srv.slug] || Wrench;
                    return (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-service-item"
                      >
                        <IconComp size={16} />
                        <span>{srv.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {navigationItems.slice(1).map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="mobile-drawer-cta">
                <Button
                  href="/contact"
                  variant="primary"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


