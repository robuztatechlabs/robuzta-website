/**
 * Automated Verification Script for Legacy Blog Routes & Unrelated Routes
 * 
 * Usage:
 *   node scripts/test-legacy-routes.mjs [baseUrl]
 * 
 * Examples:
 *   node scripts/test-legacy-routes.mjs
 *   node scripts/test-legacy-routes.mjs http://localhost:3000
 *   node scripts/test-legacy-routes.mjs https://robuzta.com
 */

const base = process.argv[2] || process.env.TEST_BASE_URL || 'http://localhost:3000';

console.log(`\n==============================================`);
console.log(`Running Route Verification against: ${base}`);
console.log(`==============================================\n`);

const testCases = [
  // 1. Exact legacy route (no trailing slash)
  {
    name: 'GET /2020/07 (Exact legacy path, no trailing slash)',
    url: '/2020/07',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 2. Exact legacy route with trailing slash
  {
    name: 'GET /2020/07/ (Exact legacy path, with trailing slash)',
    url: '/2020/07/',
    followRedirects: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 3. Nested legacy post path (no trailing slash)
  {
    name: 'GET /2020/07/sample-legacy-post (Nested post path)',
    url: '/2020/07/sample-legacy-post',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 4. Nested legacy post path with trailing slash
  {
    name: 'GET /2020/07/sample-legacy-post/ (Nested post path with slash)',
    url: '/2020/07/sample-legacy-post/',
    followRedirects: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 5. Deeply nested legacy path
  {
    name: 'GET /2020/07/category/archive/deep-post (Deeply nested descendant)',
    url: '/2020/07/category/archive/deep-post',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 6. Query string variants
  {
    name: 'GET /2020/07?utm_source=bing (Query string variant)',
    url: '/2020/07?utm_source=bing',
    manualRedirect: true,
    expectedStatus: 410
  },
  {
    name: 'GET /2020/07/?utm_source=bing&p=1 (Query string with trailing slash)',
    url: '/2020/07/?utm_source=bing&p=1',
    followRedirects: true,
    expectedStatus: 410
  },
  // 7. HEAD request method
  {
    name: 'HEAD /2020/07 (HEAD request method)',
    url: '/2020/07',
    method: 'HEAD',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 8. Valid application routes (must return 200)
  {
    name: 'GET / (Homepage - must remain 200 OK)',
    url: '/',
    expectedStatus: 200
  },
  {
    name: 'GET /services (Services page - must remain 200 OK)',
    url: '/services',
    expectedStatus: 200
  },
  {
    name: 'GET /laptop-repair (Laptop Repair Hub - must remain 200 OK)',
    url: '/laptop-repair',
    expectedStatus: 200
  },
  {
    name: 'GET /contact (Contact page - must remain 200 OK)',
    url: '/contact',
    expectedStatus: 200
  },
  {
    name: 'GET /blog (Blog Hub - must remain 200 OK)',
    url: '/blog',
    expectedStatus: 200
  },
  {
    name: 'GET /robots.txt (Robots.txt - must remain 200 OK)',
    url: '/robots.txt',
    expectedStatus: 200
  },
  {
    name: 'GET /sitemap.xml (Sitemap - must remain 200 OK)',
    url: '/sitemap.xml',
    expectedStatus: 200
  },
  // 9. Unrelated non-existent route (must return standard 404, not 410)
  {
    name: 'GET /unrelated-nonexistent-path (Missing route - must return 404)',
    url: '/unrelated-nonexistent-path',
    expectedStatus: 404
  }
];

async function run() {
  let passed = 0;
  let failed = 0;

  for (const t of testCases) {
    const fullUrl = `${base}${t.url}`;
    const opts = { method: t.method || 'GET' };
    if (t.manualRedirect) {
      opts.redirect = 'manual';
    }

    try {
      let res = await fetch(fullUrl, opts);

      if (t.followRedirects && (res.status === 301 || res.status === 302 || res.status === 307 || res.status === 308)) {
        const redirectUrl = res.headers.get('location');
        const nextUrl = redirectUrl.startsWith('http') ? redirectUrl : `${base}${redirectUrl}`;
        res = await fetch(nextUrl);
      }

      const status = res.status;
      const isExpected = status === t.expectedStatus;

      let headersOk = true;
      if (t.checkHeaders && isExpected) {
        const robotsTag = res.headers.get('x-robots-tag');
        const cacheControl = res.headers.get('cache-control');
        if (!robotsTag || !robotsTag.includes('noindex')) {
          headersOk = false;
          console.warn(`  [WARN] Missing or unexpected X-Robots-Tag: "${robotsTag}"`);
        }
        if (!cacheControl || !cacheControl.includes('max-age')) {
          headersOk = false;
          console.warn(`  [WARN] Missing or unexpected Cache-Control: "${cacheControl}"`);
        }
      }

      if (isExpected && headersOk) {
        console.log(`[PASS] ${t.name} -> HTTP ${status}`);
        passed++;
      } else {
        console.error(`[FAIL] ${t.name} -> Expected HTTP ${t.expectedStatus}, received HTTP ${status}`);
        failed++;
      }
    } catch (err) {
      console.error(`[ERR]  ${t.name} -> Network error: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nSummary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

run();
