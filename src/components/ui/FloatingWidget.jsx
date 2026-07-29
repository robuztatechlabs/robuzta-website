'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { MessageCircle, Phone, Wrench, X } from 'lucide-react';
import Link from 'next/link';

export function FloatingWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="floating-widget-wrapper" aria-label="Quick contact widget">
      {expanded && (
        <div className="floating-menu glass-card">
          <div className="floating-menu-header">
            <strong>Robuzta Live Lab Support</strong>
            <button
              type="button"
              className="floating-close-btn"
              onClick={() => setExpanded(false)}
              aria-label="Close widget menu"
            >
              <X size={16} />
            </button>
          </div>

          <p className="floating-menu-desc">
            Talk directly to senior repair engineers in South Bopal & Tragad.
          </p>

          <div className="floating-menu-actions">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-whatsapp"
              style={{ justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              WhatsApp Live Chat
            </a>

            <a
              href={siteConfig.phoneHref}
              className="button button-primary"
              style={{ justifyContent: 'center' }}
            >
              <Phone size={18} />
              Call +91 999 245 2459
            </a>

            <Link
              href="/contact"
              onClick={() => setExpanded(false)}
              className="floating-quote-link"
            >
              <Wrench size={16} />
              <span>Book Doorstep Pickup</span>
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`floating-trigger-btn ${expanded ? 'active' : ''}`}
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle live help widget"
      >
        <span className="floating-pulse-ring" />
        {expanded ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
