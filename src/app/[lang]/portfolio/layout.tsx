import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary, Locale } from '@/lib/i18n';

export default async function PortfolioLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="relative flex min-h-dvh flex-col bg-background">
      <Header lang={lang} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
