import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LanguageSelectionPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="absolute top-8">
          <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
      </div>
      <div className="w-full max-w-md text-center space-y-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Choose Your Language
            </h1>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-2" dir="rtl">
            اختر لغتك
            </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/portfolio">English</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link href="/portfolio">Français</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" dir="rtl" className="w-full sm:w-auto">
            <Link href="/portfolio">العربية</Link>
          </Button>
        </div>
         <p className="text-muted-foreground">You will be able to change this later.</p>
      </div>
      <div className="absolute bottom-8 text-center text-xs text-muted-foreground">
         <p>&copy; {new Date().getFullYear()} Sitechx Technology Solutions. All Rights Reserved.</p>
      </div>
    </div>
  );
}
