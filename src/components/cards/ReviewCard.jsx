import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="review-card stagger-item">
      <div className="review-top">
        <div className="review-avatar">{initials}</div>
        <div>
          <strong className="review-author">{review.name}</strong>
          <span className="review-source">{review.source}</span>
        </div>
        <div className="verified-badge" title="Verified Customer">
          <CheckCircle2 size={15} className="text-teal" />
        </div>
      </div>

      <div className="stars-row" aria-label="5 star review">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star fill="#f59e0b" color="#f59e0b" key={index} size={15} />
        ))}
      </div>

      <p className="review-text">"{review.quote}"</p>

      {review.device && (
        <div className="review-device-tag">
          <span>Repaired: <strong>{review.device}</strong></span>
        </div>
      )}
    </article>
  );
}
