'use client';

import Link from 'next/link';

export function BrandLogo({ className = '' }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Robuzta Techlabs Home">
      <img
        src="/robuzta-logo-scaled.webp"
        alt="Robuzta Techlabs"
        width={180}
        height={44}
        fetchPriority="high"
        className="h-9 sm:h-11 w-auto aspect-[180/44] shrink-0 object-contain dark:hidden"
      />
      <img
        src="/robuzta_logo_white.png"
        alt="Robuzta Techlabs"
        width={180}
        height={44}
        fetchPriority="high"
        className="h-9 sm:h-11 w-auto aspect-[180/44] shrink-0 object-contain hidden dark:block"
      />
    </Link>
  );
}
