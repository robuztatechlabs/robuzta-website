import './globals.css';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { FloatingWidget } from '@/components/ui/FloatingWidget';
import { FranchiseEdgeTab } from '@/components/ui/FranchiseEdgeTab';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Robuzta Techlabs | Premium Multi-Device Repair Lab in Ahmedabad',
  description:
    'Ahmedabad’s premier laptop, mobile, MacBook, Surface, and gaming PC repair lab. Experience transparent live repairs, genuine spare parts, zero OTP privacy, and free doorstep pickup.',
  icons: {
    icon: '/favicon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <FranchiseEdgeTab />
          <FloatingWidget />
          <StickyMobileBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
