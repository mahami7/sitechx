"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Locale } from "@/lib/i18n";

export default function Header({ lang, dictionary }: { lang: Locale, dictionary: any }) {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const t = dictionary.header;

  const navLinks = [
    { href: `/${lang}/portfolio`, label: t.home },
    { href: `/${lang}/portfolio/about`, label: t.about },
    { href: `/${lang}/portfolio/services`, label: t.solutions },
    { href: `/${lang}/portfolio/contact`, label: t.contact },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href={`/${lang}/portfolio`} className="mr-6 flex items-center gap-2">
          <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden md:flex" variant="outline">
            <Link href={`/${lang}/portfolio/contact`}>{t.contactUs}</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === 'ar' ? 'left' : 'right'}>
              <div className="flex flex-col gap-6 p-6">
                <Link href={`/${lang}/portfolio`} className="mb-4 flex items-center gap-2">
                  <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <Button asChild className="mt-4" onClick={() => setSheetOpen(false)}>
                  <Link href={`/${lang}/portfolio/contact`}>{t.contactUs}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
