'use client';

import { siteConfig } from '@/data/site';
import { Phone, MessageCircle, Wrench } from 'lucide-react';
import Link from 'next/link';

export function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar" aria-label="Mobile quick action bar">
      <a className="mobile-action-btn mobile-call" href={siteConfig.phoneHref}>
        <Phone size={18} />
        <span>Call Now</span>
      </a>

      <a
        className="mobile-action-btn mobile-whatsapp"
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <Link className="mobile-action-btn mobile-quote" href="/contact">
        <Wrench size={18} />
        <span>Book Pickup</span>
      </Link>
    </div>
  );
}
