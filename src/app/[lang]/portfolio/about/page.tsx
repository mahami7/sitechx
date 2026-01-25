import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Eye } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n-config';

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.aboutPage;
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">{t.storyTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.storyP1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
             {t.storyP2}
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
             {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center p-8 border rounded-lg bg-card">
              <div className="p-3 bg-primary rounded-full mb-4">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.visionTitle}</h3>
              <p className="text-muted-foreground">
                {t.visionText}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border rounded-lg bg-card">
              <div className="p-3 bg-primary rounded-full mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.missionTitle}</h3>
              <p className="text-muted-foreground">
                {t.missionText}
              </p>
            </div>
        </div>

         <div className="mt-24 text-center bg-secondary p-12 rounded-lg">
          <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{t.ctaSubtitle}</p>
          <Button asChild size="lg" className="mt-6">
            <Link href={`/${lang}/portfolio/contact`}>
              {t.ctaButton}
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
