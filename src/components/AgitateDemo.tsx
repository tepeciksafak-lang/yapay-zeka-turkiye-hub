import { Features } from './ui/features';
import { Settings, Users, Calendar } from 'lucide-react';
import agitateAutomation from '../assets/agitate-diy.jpg';
import agitateAnalytics from '../assets/agitate-inhouse.jpg';
import agitateSales from '../assets/agitate-agency.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AgitateDemo() {
  const { currentLanguage, t } = useLanguage();

  const features = [
    {
      id: 1,
      icon: Settings,
      title: t('agitate.option1.title'),
      bullets: [
        t('agitate.option1.description')
      ],
      image: agitateAutomation,
      imageAlt: currentLanguage === 'de' 
        ? 'DIY KI-Integration - Eigenständige Implementierung von künstlicher Intelligenz im Unternehmen'
        : 'DIY Yapay Zeka Otomasyonu - Kendi başınıza AI kurulum ve entegrasyon süreci'
    },
    {
      id: 2,
      icon: Users,
      title: t('agitate.option2.title'),
      bullets: [
        t('agitate.option2.description1'),
        t('agitate.option2.description2'),
        t('agitate.option2.description3')
      ],
      image: agitateAnalytics,
      imageAlt: currentLanguage === 'de'
        ? 'Internes KI-Team aufbauen - Mitarbeiter für künstliche Intelligenz Projekte rekrutieren'
        : 'İç Ekip ile AI Entegrasyonu - Yapay zeka uzmanı işe alım ve takım kurma süreci'
    },
    {
      id: 3,
      icon: Calendar,
      title: t('agitate.option3.title'),
      bullets: [
        t('agitate.option3.description1'),
        t('agitate.option3.description2'),
        t('agitate.option3.description3')
      ],
      image: agitateSales,
      imageAlt: currentLanguage === 'de'
        ? 'KI-Implementierung aufschieben - Risiken des Abwartens bei künstlicher Intelligenz'
        : 'Yapay Zeka Erteleme Riski - AI dönüşümünü geciktirmenin iş maliyeti'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-bg-2/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-text-hi mb-4">
            {t('agitate.title')}
          </h2>
          <p className="text-lg md:text-xl text-text-med leading-relaxed">
            {t('agitate.subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <Features
            primaryColor="lime-400"
            progressGradientLight="bg-gradient-to-r from-lime-400 to-emerald-400"
            progressGradientDark="bg-gradient-to-r from-lime-300 to-emerald-300"
            features={features}
          />
        </div>
      </div>
    </section>
  );
}