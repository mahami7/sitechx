import ContactForm from '@/components/contact-form';
import WhatsappButton from '@/components/whatsapp-button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-card border rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
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
                  <h3 className="font-semibold">Phone</h3>
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
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">Service-based company serving clients across Djibouti (On-site & Remote)</p>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <WhatsappButton />
            </div>
          </div>
          <div className="p-8 md:p-12 bg-secondary/50">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
