import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { i18n } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Sitechx | Technology Solutions',
  description:
    'Sitechx delivers end-to-end smart ecosystem solutions that integrate automation, security, energy, digital platforms, and infrastructure.',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
}>) {
  return (
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          params.lang === 'ar' && 'font-sans' // A more appropriate Arabic font can be configured here
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
