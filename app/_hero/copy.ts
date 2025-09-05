export type HeroLang = 'tr'|'de'|'en';

export const heroCopy: Record<HeroLang, {
  title1: string; title2: string; subtitle: string;
  ctaPrimary: string; ctaSecondary: string;
}> = {
  tr: {
    title1: 'Siz şirketinizi yönetin.',
    title2: 'Biz yapay zekayı kurarız.',
    subtitle: 'Yapay zekâ + otomasyonla büyüyün: daha fazla müşteri, daha az operasyon yükü — ekstra çaba gerektirmeden.',
    ctaPrimary: 'Şimdi ücretsiz başlayın',
    ctaSecondary: 'Demoları Gör',
  },
  de: {
    title1: 'Sie führen das Unternehmen.',
    title2: 'Wir bauen die KI.',
    subtitle: 'Wachsen mit KI + Automatisierung: mehr Kunden, weniger Operativ-Aufwand — ohne Mehraufwand.',
    ctaPrimary: 'Jetzt kostenlos starten',
    ctaSecondary: 'Demos ansehen',
  },
  en: {
    title1: 'You run the business.',
    title2: 'We set up the AI.',
    subtitle: 'Grow with AI + automation: more customers, less ops load — with zero extra effort.',
    ctaPrimary: 'Start free now',
    ctaSecondary: 'See demos',
  },
};