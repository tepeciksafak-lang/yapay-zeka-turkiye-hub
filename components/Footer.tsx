'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'

export function Footer() {
  const pathname = usePathname()
  const t = useI18n()
  const currentLocale = pathname.split('/')[1] || 'tr'

  const getLocalizedPath = (path: string = '') => {
    return `/${currentLocale}${path}`
  }

  const companyLinks = [
    { href: getLocalizedPath('/hakkimda'), label: 'Hakkımızda' },
    { href: getLocalizedPath('/vaka-calismalari'), label: t('nav.cases') },
    { href: getLocalizedPath('/blog'), label: t('nav.blog') }
  ]

  const solutionLinks = [
    { href: getLocalizedPath('/yapay-zeka-is-alanlari'), label: 'AI İş Alanları' },
    { href: getLocalizedPath('/otomasyon'), label: 'Otomasyon Çözümleri' },
    { href: getLocalizedPath('/veri-analizi'), label: 'Veri Analizi' }
  ]

  const aiTopicLinks = [
    { href: getLocalizedPath('/yapay-zeka-is-alanlari/pazarlama'), label: 'Pazarlama AI' },
    { href: getLocalizedPath('/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu'), label: 'Satış Otomasyonu' },
    { href: getLocalizedPath('/satis-otomasyonu-demo'), label: 'Demo' }
  ]

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-background font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg gradient-text">AutoPlatform</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {currentLocale === 'tr' && 'Yapay zeka ve otomasyon ile işletmelerin büyümesini sağlıyoruz.'}
              {currentLocale === 'de' && 'Wir ermöglichen Unternehmenswachstum durch KI und Automatisierung.'}
              {currentLocale === 'en' && 'We enable business growth through AI and automation.'}
            </p>
            <MotionButton 
              asChild
              className="hover-glow-purple bg-gradient-to-r from-secondary to-accent text-secondary-foreground"
            >
              <Link href={getLocalizedPath('/contact')}>
                {t('footer.cta.button')}
              </Link>
            </MotionButton>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {currentLocale === 'tr' && 'Şirket'}
              {currentLocale === 'de' && 'Unternehmen'}
              {currentLocale === 'en' && 'Company'}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {currentLocale === 'tr' && 'Çözümler'}
              {currentLocale === 'de' && 'Lösungen'}
              {currentLocale === 'en' && 'Solutions'}
            </h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Topics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {currentLocale === 'tr' && 'AI Konuları'}
              {currentLocale === 'de' && 'KI-Themen'}
              {currentLocale === 'en' && 'AI Topics'}
            </h3>
            <ul className="space-y-2">
              {aiTopicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 AI AutoPlatform. 
            {currentLocale === 'tr' && ' Tüm hakları saklıdır.'}
            {currentLocale === 'de' && ' Alle Rechte vorbehalten.'}
            {currentLocale === 'en' && ' All rights reserved.'}
          </p>
          <div className="flex space-x-6">
            <Link
              href={getLocalizedPath('/privacy')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
            >
              {currentLocale === 'tr' && 'Gizlilik Politikası'}
              {currentLocale === 'de' && 'Datenschutz'}
              {currentLocale === 'en' && 'Privacy Policy'}
            </Link>
            <Link
              href={getLocalizedPath('/terms')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
            >
              {currentLocale === 'tr' && 'Kullanım Şartları'}
              {currentLocale === 'de' && 'Nutzungsbedingungen'}
              {currentLocale === 'en' && 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}