import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { ArrowRight, CheckCircle2, Building, Home as HomeIcon, Hospital, Factory, School } from 'lucide-react';
import WhatsappButton from '@/components/whatsapp-button';
import { getDictionary, Locale } from '@/lib/i18n';

const industries = [
  { nameKey: 'residential', icon: HomeIcon },
  { nameKey: 'commercial', icon: Building },
  { nameKey: 'hospitality', icon: Hospital },
  { nameKey: 'industrial', icon: Factory },
  { nameKey: 'educational', icon: School },
]

export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.homePage;

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const whyUsImage = PlaceHolderImages.find((img) => img.id === 'why-us');
  
  const services = servicesData.map(service => ({
    ...dictionary.services[service.key],
    icon: service.icon
  }));

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full bg-primary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl">
            {t.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={`/${lang}/portfolio/contact`}>{t.getConsultation}</Link>
            </Button>
            <WhatsappButton lang={lang} size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.whyChooseUsTitle}</h2>
                <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                  {t.whyChooseUsSubtitle}
                </p>
              </div>
              <ul className="space-y-6">
                {t.whyChooseUsList.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              {whyUsImage && (
                <Image
                  src={whyUsImage.imageUrl}
                  alt={whyUsImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={whyUsImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.coreSolutionsTitle}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {t.coreSolutionsSubtitle}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0,6).map((service) => (
              <Card key={service.title} className="text-left transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="h-10 w-10 text-accent" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-12 text-lg">
            <Link href={`/${lang}/portfolio/services`}>
              {t.exploreAllSolutions} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <section id="industries" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.industriesTitle}</h2>
           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {t.industriesSubtitle}
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {industries.map((industry) => (
              <div key={industry.nameKey} className="flex flex-col items-center gap-3">
                <div className="p-4 bg-primary rounded-full">
                  <industry.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="font-medium text-center text-muted-foreground">{t.industriesList[industry.nameKey]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.whoWeAreTitle}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              {t.whoWeAreDescription}
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href={`/${lang}/portfolio/about`}>{t.learnMore}</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
