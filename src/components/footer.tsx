import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/portfolio', label: 'Home' },
  { href: '/portfolio/about', label: 'About' },
  { href: '/portfolio/services', label: 'Services' },
  { href: '/portfolio/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/portfolio" className="flex items-center gap-2">
              <Image src="/logo.png?v=6" alt="Sitechx" width={180} height={45} />
            </Link>
            <p className="text-muted-foreground text-sm">
              A seamless, secure, and future-ready living and working experience.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Navigate</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:sitechx.dj@gmail.com" className="hover:text-primary">sitechx.dj@gmail.com</a></li>
                <li><a href="tel:+25377871225" className="hover:text-primary">+253 77 87 12 25</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sitechx Technology Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
