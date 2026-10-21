import { NextResponse } from 'next/server';

/**
 * Proxy (formerly Middleware in Next.js 16+):
 * Returns 410 Gone for all legacy WordPress URL patterns.
 * Scoped via config.matcher so it only runs on legacy paths — zero cost for real pages.
 * The 1-year s-maxage means Vercel's CDN caches the 410, so repeat bot hits are free.
 */

const LEGACY_RE = [
  /^\/\d{4}(\/|$)/,     // /2020/, /2019/01/slug, /2020
  /^\/category(\/|$)/,   // /category, /category/*
  /^\/tag(\/|$)/,        // /tag, /tag/*
  /^\/feed(\/|$)/,       // /feed, /feed/atom, /feed/rss2
  /^\/wp-/,              // /wp-content/*, /wp-admin/*, /wp-login.php, /wp-*.php, etc.
  /^\/page(\/|$)/,       // /page/2, /page/3, /page
  /^\/author(\/|$)/,     // /author, /author/*
  /^\/archives(\/|$)/,   // /archives, /archives/*
  /^\/xmlrpc\.php/,      // xmlrpc.php
];

const GONE_HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
  'X-Robots-Tag': 'noindex, nofollow',
};

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (LEGACY_RE.some((re) => re.test(pathname))) {
    return new NextResponse('410 Gone — This page has been permanently removed.', {
      status: 410,
      headers: GONE_HEADERS,
    });
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: [
    '/:year(\\d{4})',
    '/:year(\\d{4})/:path*',
    '/category',
    '/category/:path*',
    '/tag',
    '/tag/:path*',
    '/feed',
    '/feed/:path*',
    '/:wp(wp-.*)',
    '/:wp(wp-.*)/:path*',
    '/page',
    '/page/:path*',
    '/author',
    '/author/:path*',
    '/archives',
    '/archives/:path*',
    '/xmlrpc.php',
  ],
};
