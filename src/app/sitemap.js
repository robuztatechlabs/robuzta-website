import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { blogs } from '@/data/blogs';
import { getAllSlugs } from '@/data/laptopRepairData';
import { getAllMobileSlugs } from '@/data/mobileRepairData';

export default function sitemap() {
  const baseUrl = 'https://robuzta.com';

  const staticRoutes = [
    '',
    '/services',
    '/laptop-repair',
    '/mobile-repair',
    '/gaming-desktop/repair',
    '/gaming-desktop/build',
    '/data-recovery',
    '/software-services',
    '/cleaning-tune-up',
    '/locations',
    '/franchise',
    '/contact',
    '/faq',
    '/blog',
    '/about',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.9
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  const laptopRepairSubRoutes = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/laptop-repair/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const mobileRepairSubRoutes = getAllMobileSlugs().map((slug) => ({
    url: `${baseUrl}/mobile-repair/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...laptopRepairSubRoutes,
    ...mobileRepairSubRoutes,
    ...locationRoutes,
    ...blogRoutes
  ];
}
