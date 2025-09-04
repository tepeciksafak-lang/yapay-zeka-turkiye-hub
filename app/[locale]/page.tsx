import { Metadata } from 'next'
import { getI18n } from '@/locales/server'
import { HomePage } from '@/components/HomePage'
import { JsonLd } from '@/components/JsonLd'

export const revalidate = 60

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getI18n()
  const { locale } = params
  
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
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
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
    <>
      <JsonLd locale={params.locale} />
      <HomePage />
    </>
  )
}