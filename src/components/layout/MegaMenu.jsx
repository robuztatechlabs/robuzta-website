'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import {
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench,
  ArrowRight
} from 'lucide-react';

const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench
};

export function MegaMenu({ onClose }) {
  return (
    <div className="services-dropdown-menu" role="menu">
      <div className="services-dropdown-header">
        <span>HARDWARE REPAIR SERVICES</span>
      </div>
      <div className="services-dropdown-list">
        {services.map((srv) => {
          const IconComponent = serviceIcons[srv.slug] || Wrench;
          return (
            <Link
              key={srv.slug}
              href={`/services/${srv.slug}`}
              onClick={onClose}
              className="service-dropdown-item"
            >
              <div className="service-item-icon">
                <IconComponent size={18} />
              </div>
              <span className="service-item-title">{srv.title}</span>
            </Link>
          );
        })}
      </div>
      <div className="services-dropdown-footer">
        <Link href="/#services" onClick={onClose} className="all-services-link">
          <span>View All Repairs & Pricing</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}


