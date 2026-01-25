import { cn } from '@/lib/utils';
import { i18n } from '@/lib/i18n';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function LanguageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
}>) {
  return (
    <div
      dir={params.lang === 'ar' ? 'rtl' : 'ltr'}
      className={cn(params.lang === 'ar' && 'font-sans')}
    >
      {children}
    </div>
  );
}
