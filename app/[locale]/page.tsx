import { Metadata } from 'next'
import { getI18n } from '@/locales/server'
import { HomePage } from '@/components/HomePage'
import { JsonLd } from '@/components/JsonLd'
import Hero from './_hero/Hero'
import { HeroLang } from './_hero/copy'

export const revalidate = 60

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getI18n()
  const { locale } = params
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  const titles = {
    tr: 'AI Otomasyon Platformu | Yapay Zeka ile İşletmenizi Büyütün',
    de: 'KI-Automatisierungsplattform | Skalieren Sie Ihr Unternehmen mit KI',
    en: 'AI Automation Platform | Scale Your Business with Artificial Intelligence'
  }
  
  const descriptions = {
    tr: 'Yapay zeka destekli satış otomasyonu, pazarlama otomasyonu ve müşteri iletişimi çözümleri ile işletmenizi büyütün. 100+ B2B ekibinin tercihi.',
    de: 'Skalieren Sie Ihr Unternehmen mit KI-gestützten Vertriebsautomatisierungen, Marketing-Automatisierung und Kundenkommunikationslösungen. Vertrauen von 100+ B2B-Teams.',
    en: 'Scale your business with AI-powered sales automation, marketing automation, and customer communication solutions. Trusted by 100+ B2B teams.'
  }

  const title = titles[locale as keyof typeof titles] || titles.tr
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.tr

  return {
    title,
    description,
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
    }
  }
}

export default async function Page({
  params
}: {
  params: { locale: string }
}) {
  const t = await getI18n()
  
  return (
    <main id="main">
      <JsonLd locale={params.locale} />
      <Hero locale={params.locale as HeroLang} />
      <HomePage />
    </main>
  )
}