import Solutions from '@/src/pages/Solutions';
import { JsonLd } from '@/components/JsonLd';

export default function Page() {
  return (
    <main id="main">
      <JsonLd locale="tr" />
      <Solutions />
    </main>
  );
}

export const metadata = {
  title: 'Çözümler – Yapay zekâ ve otomasyonla uçtan uca büyüme',
  description: 'Lead üretiminden müşteri ilişkilerine kadar tüm hattınızı yapay zekâ ve otomasyonla kuruyoruz. Daha fazla müşteri, daha düşük maliyet, sürdürülebilir büyüme.',
};