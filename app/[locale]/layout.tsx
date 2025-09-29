import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { getStaticParams } from '@/lib/getStaticParams'
import { setStaticParamsLocale } from 'next-international/server'
import { ReactNode } from 'react'
import { Providers } from '@/components/Providers'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SkipLink } from '@/components/SkipLink'
import '../globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins'
})

export function generateStaticParams() {
  return getStaticParams()
}

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = params
  
  const titles = {
    tr: 'Pratik Yapay Zeka | Satış ve Pazarlama Otomasyonu',
    de: 'Praktische KI | Vertriebs- und Marketing-Automatisierung',
    en: 'Practical AI | Sales and Marketing Automation'
  }
  
  const descriptions = {
    tr: 'Lead\'den toplantıya kadar uçtan uca AI otomasyonları. Outbound & inbound satış, içerik üretimi, sosyal medya yönetimi ve 7/24 chatbot desteği ile satışlarınızı artırın.',
    de: 'End-to-End-KI-Automatisierungen von Lead bis Meeting. Steigern Sie Ihre Verkäufe durch Outbound & Inbound-Vertrieb, Content-Erstellung, Social Media Management und 24/7-Chatbot-Support.',
    en: 'End-to-end AI automations from lead to meeting. Boost your sales with outbound & inbound sales, content creation, social media management, and 24/7 chatbot support.'
  }

  const title = titles[locale as keyof typeof titles] || titles.tr
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.tr
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  return {
    title,
    description,
    keywords: 'AI, automation, sales, marketing, CRM, chatbot, künstliche intelligenz, otomasyon, yapay zeka',
    authors: [{ name: 'AI Automation Platform' }],
    creator: 'AI Automation Platform',
    publisher: 'AI Automation Platform',
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: 'AI Automation Platform',
      images: [
        {
          url: `${baseUrl}/og-image-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image-${locale}.jpg`],
      creator: '@yourtwitterhandle'
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'tr': `${baseUrl}/tr`,
        'de': `${baseUrl}/de`,
        'en': `${baseUrl}/en`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest'
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: { locale: string }
}) {
  setStaticParamsLocale(params.locale)

  return (
    <html lang={params.locale} className="dark" suppressHydrationWarning>
      <body className={poppins.variable}>
        <SkipLink />
        <Providers locale={params.locale}>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}