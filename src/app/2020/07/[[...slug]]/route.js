export async function GET() {
  return new Response('410 Gone', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=604800, s-maxage=2592000, stale-while-revalidate=86400'
    }
  });
}

export async function HEAD() {
  return GET();
}
