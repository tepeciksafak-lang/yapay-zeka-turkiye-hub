import { Features } from './ui/features';
import { BrainCog, UsersRound, Building2 } from 'lucide-react';
import agitateAutomation from '../assets/agitate-diy.jpg';
import agitateAnalytics from '../assets/agitate-inhouse.jpg';
import agitateSales from '../assets/agitate-agency.jpg';

const features = [
  {
    id: 1,
    icon: BrainCog,
    title: 'Kurucu/Yönetim olarak "kendiniz yapın"',
    description: 'Hızlı ve ucuz görünür; gerçekte yönetim odağınız bölünür.',
    bullets: [
      'Günlük yoğunlukta odak bölünür; satış ve operasyon aksar.',
      'Parça parça (patchwork) otomasyonlar sürdürülemez.',
      'Kritik bilgi kişiye bağımlı kalır, risk artar.'
    ],
    image: agitateAutomation,
    imageAlt: 'Kurucunun tek başına yapay zeka kurmaya çalışması'
  },
  {
    id: 2,
    icon: UsersRound,
    title: 'İçeriden ekip kurmak / yeni eleman almak',
    description: 'İyi fikir gibi — fakat yapay zeka hâlâ yeni; ramp-up aylar sürebilir.',
    bullets: [
      'Yetkinlik kıtlığı; işe alım + eğitim maliyeti yüksektir.',
      '"Ek iş" olarak verildiğinde etki düşük kalır, öncelik olmaz.',
      'Kıdemli uzman bulmak zor ve pahalı; hız yavaş.'
    ],
    image: agitateAnalytics,
    imageAlt: 'İç ekip kurma ve yeni çalışan işe alımı'
  },
  {
    id: 3,
    icon: Building2,
    title: 'Büyük danışmanlık / ajans',
    description: 'Retainer yüksektir; süreçler ağır ve teslimatlar yavaş olur.',
    bullets: [
      'Yüksek maliyet; kapsam şişer, zaman uzar.',
      'Bütçe sınırlıysa iş kıdemsiz ekibe devrolur.',
      'Maliyet/çıktı dengesi çoğu zaman zayıf.'
    ],
    image: agitateSales,
    imageAlt: 'Büyük danışmanlık yaklaşımı'
  }
];

export default function AgitateDemo() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Yapay zeka ile şirketinizin otomatik çalışmasını nasıl sağlarsınız?
          </h2>
        </div>

        <div className="mt-16">
          <Features
            primaryColor="sky-500"
            progressGradientLight="bg-gradient-to-r from-sky-400 to-sky-500"
            progressGradientDark="bg-gradient-to-r from-sky-300 to-sky-400"
            features={features}
          />
        </div>
      </div>
    </section>
  );
}