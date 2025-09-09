"use client";

import { GlowCard } from "./ui/spotlight-card";
import { Award, Globe, Cpu, Handshake } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-text-hi mb-6">
            Doğru yol nedir?
          </h2>
          <p className="body-text text-text-muted max-w-3xl mx-auto">
            Üç yaygın yolun sonunda hep aynı çıkmaz var. Peki başarılı şirketler ne yapıyor? İşte sizin için doğru çözümün 4 nedeni:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Award 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                Satışta ölçülebilir sonuçlar
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Biz süslü sözlerle değil, rakamlarla konuşuyoruz: 100 e-postada %3 toplantı oranı. 
                Daha önce ulaşamadığınız potansiyel müşteriler, artık düzenli olarak görüşmeye dönüşüyor.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Cpu 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                Operasyonda radikal verimlilik
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Daha önce 30 dakika süren bir süreç, artık otomasyonla 1 dakikada tamamlanıyor. 
                Daha az tıklama, daha az zaman kaybı – ekibinizin odağı tekrar asıl işe dönüyor.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Globe 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                Uluslararası deneyim
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Türkiye'den Avrupa'ya, Amerika'dan Avustralya'ya kadar farklı pazarlarda projeler yürüttük. 
                Çok dilli (Türkçe, Almanca, İngilizce) ve çok kültürlü deneyimimiz sayesinde, siz de yeni pazarlara sorunsuz açılabilirsiniz.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="lime" size="lg" className="carbon-card">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-8">
              <Handshake 
                className="w-12 h-12" 
                style={{ color: '#A3E635', strokeWidth: 2 }}
              />
              <h3 className="text-xl font-bold text-text-hi">
                Garantili proje başarısı
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Sonuçlarımızın arkasındayız. Eğer projenizi başarıyla hayata geçiremezsek, 
                ödediğiniz ücretin %50'sini size iade ediyoruz. Riski biz alıyoruz, siz değil.
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}