"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { i18n, type Locale } from "@/lib/i18n-config";
import en from '@/dictionaries/en.json';

export default function Header({ lang, dictionary }: { lang?: Locale, dictionary?: any }) {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const effectiveDictionary = dictionary || en;
  const t = effectiveDictionary.header;
  const effectiveLang = lang || 'en';

  const navLinks = [
    { href: lang ? `/${lang}/portfolio` : '/portfolio', label: t.home },
    { href: lang ? `/${lang}/portfolio/about` : '/portfolio/about', label: t.about },
    { href: lang ? `/${lang}/portfolio/services` : '/portfolio/services', label: t.solutions },
    { href: lang ? `/${lang}/portfolio/contact` : '/portfolio/contact', label: t.contact },
  ];

  const languageNames: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

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

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={redirectedPathName(locale as Locale)}>{languageNames[locale as Locale]}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

    const LanguageSwitcherMobile = () => (
    <div className="flex justify-center pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Globe className="mr-2 h-5 w-5" />
              {t.changeLanguage}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {i18n.locales.map((locale) => (
              <DropdownMenuItem key={locale} asChild>
                <Link href={redirectedPathName(locale as Locale)}>{languageNames[locale as Locale]}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href={lang ? `/${lang}/portfolio` : '/portfolio'} className="mr-6 flex items-center gap-2">
          <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          {lang && <LanguageSwitcher />}
          <Button asChild className="hidden md:flex" variant="outline">
            <Link href={lang ? `/${lang}/portfolio/contact` : '/portfolio/contact'}>{t.contactUs}</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={effectiveLang === 'ar' ? 'left' : 'right'}>
              <div className="flex flex-col gap-6 p-6">
                <Link href={lang ? `/${lang}/portfolio` : '/portfolio'} className="mb-4 flex items-center gap-2">
                  <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <Button asChild className="mt-4" onClick={() => setSheetOpen(false)}>
                  <Link href={lang ? `/${lang}/portfolio/contact` : '/portfolio/contact'}>{t.contactUs}</Link>
                </Button>
                {lang && <LanguageSwitcherMobile />}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
