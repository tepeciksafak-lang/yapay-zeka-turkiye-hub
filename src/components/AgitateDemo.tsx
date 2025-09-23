import { Features } from './ui/features';
import { Settings, Users, Calendar } from 'lucide-react';
import agitateAutomation from '../assets/agitate-diy.jpg';
import agitateAnalytics from '../assets/agitate-inhouse.jpg';
import agitateSales from '../assets/agitate-agency.jpg';

const features = [
  {
    id: 1,
    icon: Settings,
    title: 'Kendiniz yapın',
    bullets: [
      'Bu, insanlığın şimdiye kadar geliştirdiği en büyük teknoloji. Onu şirketinize doğru şekilde entegre etmek için aylarca odak ve ciddi zaman gerekir. Kendi yoğunluğunuz içinde buna vakit ayırabilir misiniz?'
    ],
    image: agitateAutomation,
    imageAlt: 'Kendiniz yapın seçeneği'
  },
  {
    id: 2,
    icon: Users,
    title: 'İçeriden ekip kurun veya yeni eleman alın',
    bullets: [
      'İçeriden birini görevlendirmek: Zaten dolu masasına bir dosya daha. Şirketinizi dönüştürecek teknolojiyi yan iş olarak mı önem vermek istiyorsunuz?',
      'Yeni eleman almak: Bu teknoloji çok yeni, çoğu kişi daha yolun başında. Tecrübeli uzmanlar çok pahalı.',
      'İşe alım süreci bitmeyen kuyruk gibi: Hep beklersiniz, bir türlü ilerlemez.'
    ],
    image: agitateAnalytics,
    imageAlt: 'İç ekip kurma seçeneği'
  },
  {
    id: 3,
    icon: Calendar,
    title: 'Gelecek ayda, gelecek dönemde, gelecek yılda başlayın',
    bullets: [
      'Seneye bütçe ayarlanır, o zaman yaparız. Ama her geçen ay kaybolan fırsatlar ve kaçan müşteriler demek.',
      'Gerçek şu: 3 yıl önce dev yazılım şirketi DocuSign, bugün yapay zeka ile 2 günde kopyalanabiliyor.',
      'Peki sizin iş modelinizin kopyalanması ne kadar sürer?'
    ],
    image: agitateSales,
    imageAlt: 'Erteleme seçeneği'
  }
];

export default function AgitateDemo() {
  return (
    <section className="relative py-16 md:py-24 bg-bg-2/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-text-hi mb-4">
            Yapay zekayı doğru şekilde şirketinize nasıl entegre edebilirsiniz?
          </h2>
          <p className="text-lg md:text-xl text-text-med leading-relaxed">
            Farklı yöntemler var… ama çoğu ayakkabınızın içindeki taş gibi: her adımda rahatsız eder.
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