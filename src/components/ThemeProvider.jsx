'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{
        id: 'next-theme-script',
        suppressHydrationWarning: true,
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
