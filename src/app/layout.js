import './globals.css';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { FloatingWidget } from '@/components/ui/FloatingWidget';
import { FranchiseEdgeTab } from '@/components/ui/FranchiseEdgeTab';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BookingModalProvider } from '@/context/BookingModalContext';
import { BookRepairModal } from '@/components/ui/BookRepairModal';
import { getOrganizationSchema, getLocalBusinessSchema, getWebSiteSchema } from '@/lib/jsonLd';

export const metadata = {
  metadataBase: new URL('https://robuzta.com'),
  title: {
    default: 'Robuzta Techlabs | Precision Laptop, MacBook & Mobile Repair in Ahmedabad',
    template: '%s | Robuzta Techlabs'
  },
  description:
    'Ahmedabad premier multi-device repair lab. Live diagnostic stream, zero OTP privacy, BGA micro-soldering, original parts, and doorstep pickup across Ahmedabad.',
  keywords: [
    'laptop repair ahmedabad',
    'macbook repair ahmedabad',
    'mobile repair ahmedabad',
    'surface repair ahmedabad',
    'gaming pc repair ahmedabad',
    'robuzta techlabs',
    'motherboard chip level repair ahmedabad',
    'live stream repair ahmedabad'
  ],
  authors: [{ name: 'Robuzta Techlabs', url: 'https://robuzta.com' }],
  creator: 'Robuzta Techlabs',
  publisher: 'Robuzta Techlabs',
  formatDetection: {
    email: false,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: 'https://robuzta.com'
  },
  openGraph: {
    title: 'Robuzta Techlabs | Precision Multi-Device Electronics Repair Lab',
    description: 'Ahmedabad premier laptop, mobile, MacBook, Surface, and gaming PC repair lab. Transparent live diagnostics & zero OTP data policy.',
    url: 'https://robuzta.com',
    siteName: 'Robuzta Techlabs',
    images: [
      {
        url: '/robuzta-logo-scaled.webp',
        width: 1200,
        height: 630,
        alt: 'Robuzta Techlabs Logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robuzta Techlabs | Precision Electronics Repair Lab',
    description: 'Premier laptop, mobile, MacBook, and Surface repair lab in Ahmedabad.',
    images: ['/robuzta-logo-scaled.webp']
  },
  icons: {
    icon: '/favicon.webp',
    shortcut: '/favicon.webp',
    apple: '/favicon.webp'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }) {
  const orgSchema = getOrganizationSchema();
  const localBizSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          id="org-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          id="localbiz-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <BookingModalProvider>
            {children}
            <BookRepairModal />
            <FranchiseEdgeTab />
            <FloatingWidget />
            <StickyMobileBar />
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
