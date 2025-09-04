import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['tr', 'de', 'en'],
  defaultLocale: 'tr',
  urlMappingStrategy: 'rewrite'
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|_next|_vercel|favicon.ico|robots.txt|sitemap.xml).*)']
}