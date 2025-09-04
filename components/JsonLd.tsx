import { getI18n } from '@/locales/server'

interface JsonLdProps {
  locale: string
}

export async function JsonLd({ locale }: JsonLdProps) {
  const t = await getI18n()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Automation Platform",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": locale === 'tr' 
      ? "Yapay zeka ve otomasyon çözümleri ile işletmelerin büyümesini sağlayan teknoloji platformu"
      : locale === 'de'
      ? "Technologieplattform, die Unternehmenswachstum durch KI- und Automatisierungslösungen ermöglicht"
      : "Technology platform enabling business growth through AI and automation solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "German", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/yourcompany",
      "https://twitter.com/yourcompany"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Automation Platform",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": locale === 'tr' ? "Yapay Zeka Otomasyon Hizmetleri" : locale === 'de' ? "KI-Automatisierungsdienste" : "AI Automation Services",
    "description": locale === 'tr' 
      ? "Satış otomasyonu, pazarlama otomasyonu ve müşteri iletişimi için yapay zeka çözümleri"
      : locale === 'de'
      ? "KI-Lösungen für Vertriebsautomatisierung, Marketing-Automatisierung und Kundenkommunikation"
      : "AI solutions for sales automation, marketing automation, and customer communication",
    "provider": {
      "@type": "Organization",
      "name": "AI Automation Platform"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}