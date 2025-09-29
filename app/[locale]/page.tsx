import { Metadata } from 'next'
import { getI18n } from '@/locales/server'
import { HomePage } from '@/components/HomePage'
import { JsonLd } from '@/components/JsonLd'
import { Hero, HeroLang } from '@/components/hero/Hero'

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
    tr: 'Pratik Yapay Zeka | Satış ve Pazarlama Otomasyonu',
    de: 'Praktische KI | Vertriebs- und Marketing-Automatisierung', 
    en: 'Practical AI | Sales and Marketing Automation'
  }
  
  const descriptions = {
    tr: 'Lead\'den toplantıya kadar uçtan uca AI otomasyonları. Günde 500+ kişiselleştirilmiş mesaj, SEO skorunda %85+ artış ve %40 müşteri memnuniyeti artışı garantisi.',
    de: 'End-to-End-KI-Automatisierungen von Lead bis Meeting. Garantiert 500+ personalisierte Nachrichten täglich, 85%+ SEO-Score-Steigerung und 40% höhere Kundenzufriedenheit.',
    en: 'End-to-end AI automations from lead to meeting. Guaranteed 500+ personalized messages daily, 85%+ SEO score improvement, and 40% customer satisfaction increase.'
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