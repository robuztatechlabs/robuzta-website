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

const base = (process.argv[2] || process.env.TEST_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');

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
  // 8. WordPress legacy patterns
  {
    name: 'GET /category/news (Legacy WordPress category)',
    url: '/category/news',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /tag/screen-replacement (Legacy WordPress tag)',
    url: '/tag/screen-replacement',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /feed (Legacy RSS feed)',
    url: '/feed',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /wp-login.php (WordPress login probe)',
    url: '/wp-login.php',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /wp-content/uploads/2020/test.jpg (WordPress upload path)',
    url: '/wp-content/uploads/2020/test.jpg',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /page/2 (Legacy pagination)',
    url: '/page/2',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /xmlrpc.php (WordPress XMLRPC probe)',
    url: '/xmlrpc.php',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /author/admin (Legacy author archive)',
    url: '/author/admin',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /archives/2019 (Legacy archives)',
    url: '/archives/2019',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 9. Valid application routes (must return 200)
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
    name: 'GET /estimate (Estimate page - must return 200 OK)',
    url: '/estimate',
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
  // 10. Junk slugs on dynamic routes (must return 404 directly via dynamicParams = false)
  {
    name: 'GET /blog/non-existent-blog-slug-9999 (Blog dynamicParams=false -> 404)',
    url: '/blog/non-existent-blog-slug-9999',
    expectedStatus: 404
  },
  {
    name: 'GET /services/non-existent-service-slug (Services dynamicParams=false -> 404)',
    url: '/services/non-existent-service-slug',
    expectedStatus: 404
  },
  {
    name: 'GET /gaming-desktop/build (Ghost sitemap route removed -> 404)',
    url: '/gaming-desktop/build',
    expectedStatus: 404
  },
  // 11. Boundary verification for real paths vs legacy prefixes (must return 404, NOT 410)
  {
    name: 'GET /feedback (Prefix boundary test -> 404, not 410)',
    url: '/feedback',
    expectedStatus: 404
  },
  {
    name: 'GET /tagline (Prefix boundary test -> 404, not 410)',
    url: '/tagline',
    expectedStatus: 404
  },
  {
    name: 'GET /pagespeed (Prefix boundary test -> 404, not 410)',
    url: '/pagespeed',
    expectedStatus: 404
  },
  // 12. Legacy boundary cases (must return 410)
  {
    name: 'GET /feed (Exact feed legacy -> 410)',
    url: '/feed',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /feed/ (Trailing slash feed legacy -> 410)',
    url: '/feed/',
    followRedirects: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /tag/x (Tag subpath legacy -> 410)',
    url: '/tag/x',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /category/x (Category subpath legacy -> 410)',
    url: '/category/x',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  {
    name: 'GET /2020/07/x (Year/month legacy -> 410)',
    url: '/2020/07/x',
    manualRedirect: true,
    expectedStatus: 410,
    checkHeaders: true
  },
  // 13. Unrelated non-existent route (must return standard 404, not 410)
  {
    name: 'GET /unrelated-nonexistent-path (Missing route - must return 404)',
    url: '/unrelated-nonexistent-path',
    expectedStatus: 404
  }
];

async function run() {
  // Pre-flight connectivity check
  try {
    const ping = await fetch(base + '/', { method: 'GET' });
    if (!ping) throw new Error('No response');
  } catch (err) {
    console.error(`[ERROR] Unable to connect to server at ${base}.`);
    console.error(`Ensure your development server is running ('npm run dev') or specify a valid URL: node scripts/test-legacy-routes.mjs http://localhost:3000\n`);
    process.exit(1);
  }

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

  // Verify robots.txt content rules
  try {
    const robotsRes = await fetch(`${base}/robots.txt`);
    const robotsText = await robotsRes.text();
    let robotsOk = true;

    if (!robotsText.includes('Disallow: /feed/')) {
      console.error('[FAIL] robots.txt is missing "Disallow: /feed/"');
      robotsOk = false;
    }
    if (!robotsText.includes('Disallow: /feed$')) {
      console.error('[FAIL] robots.txt is missing "Disallow: /feed$"');
      robotsOk = false;
    }
    if (/(^|\n)Disallow:\s*\/feed(\r?\n|$)/.test(robotsText)) {
      console.error('[FAIL] robots.txt contains bare "Disallow: /feed" without trailing slash or $');
      robotsOk = false;
    }
    if (robotsText.includes('GPTBot') || robotsText.includes('ClaudeBot')) {
      console.error('[FAIL] robots.txt contains AI crawlers despite BLOCK_AI_CRAWLERS=false');
      robotsOk = false;
    }

    if (robotsOk) {
      console.log('[PASS] robots.txt format verification (exact /feed/ and /feed$, no bare /feed, no AI bot lines)');
      passed++;
    } else {
      failed++;
    }
  } catch (err) {
    console.error(`[ERR]  robots.txt check failed: ${err.message}`);
    failed++;
  }

  console.log(`\nSummary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

run();
