'use client';

import Link from 'next/link';

export function BrandLogo({ className = '' }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Robuzta Techlabs Home">
      <img
        src="/robuzta-logo-scaled.webp"
        alt="Robuzta Techlabs"
        className="h-9 sm:h-11 w-auto object-contain dark:hidden"
      />
      <img
        src="/robuzta_logo_white.png"
        alt="Robuzta Techlabs"
        className="h-9 sm:h-11 w-auto object-contain hidden dark:block"
      />
    </Link>
  );
}
