import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Let the root page (language selector) pass through
    if (pathname === '/') {
      return NextResponse.next()
    }
    
    const locale = i18n.defaultLocale
    
    // Redirect all other non-locale paths to the default locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and static files in `/public`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.png|hero-background.jpg|why-us-image.jpg).*)'],
}
