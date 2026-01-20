import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { ArrowRight, CheckCircle2, Building, Home as HomeIcon, Hospital, Factory, School } from 'lucide-react';
import WhatsappButton from '@/components/whatsapp-button';

const whyChooseUs = [
    'One-stop smart ecosystem provider',
    'Fully integrated systems under a single platform',
    'Scalable solutions for residential, commercial, and industrial projects',
    'Focus on security, efficiency, and sustainability',
    'Professional design, installation, and ongoing support',
];

const industries = [
  { name: 'Residential (Smart Homes & Villas)', icon: HomeIcon },
  { name: 'Commercial Offices & Retail', icon: Building },
  { name: 'Hospitality & Healthcare', icon: Hospital },
  { name: 'Industrial Facilities & Data Centers', icon: Factory },
  { name: 'Educational Institutions', icon: School },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const whyUsImage = PlaceHolderImages.find((img) => img.id === 'why-us');

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
            A Seamless, Secure, and Future-Ready Experience
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl">
            We design, build, and maintain intelligent environments for homes, offices, and commercial sites—focused on comfort, efficiency, safety, and sustainability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <WhatsappButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us?</h2>
                <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                  We provide end-to-end solutions to create truly smart ecosystems.
                </p>
              </div>
              <ul className="space-y-6">
                {whyChooseUs.map((reason, index) => (
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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Core Solutions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into how we can elevate your environment.
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
            <Link href="/services">
              Explore All Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <section id="industries" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Industries We Serve</h2>
           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Delivering tailored smart solutions across a wide range of sectors.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-3">
                <div className="p-4 bg-primary rounded-full">
                  <industry.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="font-medium text-center text-muted-foreground">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Sitechx delivers end-to-end smart ecosystem solutions that integrate automation, security, energy, digital platforms, and infrastructure. We design, build, and maintain intelligent environments focused on comfort, efficiency, safety, and sustainability.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
