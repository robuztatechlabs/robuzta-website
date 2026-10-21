/**
 * Custom robots.txt route handler.
 * Uses a route handler instead of the metadata API to support Crawl-delay for bingbot.
 */

// Switch to explicitly block AI/LLM crawlers; if false, they fall under default User-agent: * rules.
const BLOCK_AI_CRAWLERS = false;

const LEGACY_DISALLOWS = [
  '/2010/', '/2011/', '/2012/', '/2013/', '/2014/', '/2015/', '/2016/', '/2017/', '/2018/',
  '/2019/', '/2020/', '/2021/', '/2022/', '/2023/', '/2024/', '/2025/', '/2026/',
  '/category/',
  '/tag/',
  '/feed/',
  '/feed$',
  '/wp-',
  '/wp-content/',
  '/wp-admin/',
  '/wp-includes/',
  '/wp-json/',
  '/wp-login.php',
  '/wp-cron.php',
  '/xmlrpc.php',
  '/page/',
  '/author/',
  '/archives/',
].map((p) => `Disallow: ${p}`).join('\n');

const aiBotsBlock = BLOCK_AI_CRAWLERS
  ? `User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Google-Extended
Disallow: /
`
  : '';

const body = `# robuzta.com robots.txt
User-agent: *
Allow: /
Disallow: /api/
${LEGACY_DISALLOWS}

User-agent: bingbot
Allow: /
Disallow: /api/
${LEGACY_DISALLOWS}
Crawl-delay: 10
${aiBotsBlock ? `\n${aiBotsBlock}` : ''}
Sitemap: https://robuzta.com/sitemap.xml
Host: https://robuzta.com
`;

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
