import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench
};

const serviceBadges = {
  'laptop-repair': '2-4H EXPRESS',
  'mobile-repair': 'SAME DAY',
  'macbook-repair': 'CHIP-LEVEL',
  'surface-repair': 'SPECIALIST',
  'gaming-pc-repair': 'BENCHMARK LAB',
  'desktop-repair': 'UPGRADE READY'
};

export function ServiceCard({ service }) {
  const IconComponent = serviceIcons[service.slug] || Wrench;
  const badgeText = serviceBadges[service.slug] || 'EXPRESS';

  return (
    <article className="service-card stagger-item" id={service.slug}>
      <div className="card-top-bar">
        <div className="card-service-icon">
          <IconComponent size={24} />
        </div>
        <span className="card-badge">{badgeText}</span>
      </div>

      <h3 className="card-title">{service.title}</h3>
      <p className="card-summary">{service.summary}</p>
      
      <div className="card-symptoms">
        {service.symptoms?.slice(0, 3).map((symptom, idx) => (
          <span key={idx} className="card-symptom-tag">
            <CheckCircle2 size={12} className="text-teal" />
            {symptom}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <span className="card-proof-text">{service.proof}</span>
        <Link href={`/services/${service.slug}`} className="card-link-btn">
          <span>View Details</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
