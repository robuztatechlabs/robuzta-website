import { ShieldCheck } from 'lucide-react';

export function TrustCard({ card }) {
  return (
    <article className="trust-card">
      <ShieldCheck size={22} />
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </article>
  );
}

