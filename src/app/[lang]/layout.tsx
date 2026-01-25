import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
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
  // This is a nested layout. It must not render <html> or <body>.
  // To fix the hydration error, we wrap the children in a div and apply
  // language-specific direction and classes.
  return (
    <div
      dir={params.lang === 'ar' ? 'rtl' : 'ltr'}
      className={cn(params.lang === 'ar' && 'font-sans')}
    >
      {children}
    </div>
  );
}
