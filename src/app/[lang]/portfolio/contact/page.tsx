import ContactForm from '@/components/contact-form';
import WhatsappButton from '@/components/whatsapp-button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n-config';

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.contactPage;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-card border rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-bold">{t.infoTitle}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.email}</h3>
                  <a href="mailto:sitechx.dj@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sitechx.dj@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.phone}</h3>
                  <a href="tel:+25377871225" className="text-muted-foreground hover:text-primary transition-colors">
                    +253 77 87 12 25
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.office}</h3>
                  <p className="text-muted-foreground">{t.officeText}</p>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <WhatsappButton dictionary={dictionary.whatsappButton} />
            </div>
          </div>
          <div className="p-8 md:p-12 bg-secondary/50">
            <h2 className="text-3xl font-bold mb-6">{t.formTitle}</h2>
            <ContactForm dictionary={dictionary.contactForm} />
          </div>
        </div>
      </div>
    </div>
  );
}
