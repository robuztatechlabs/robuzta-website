export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Bytespider', 'Google-Extended'],
        allow: '/'
      }
    ],
    sitemap: 'https://robuzta.com/sitemap.xml',
    host: 'https://robuzta.com'
  };
}
