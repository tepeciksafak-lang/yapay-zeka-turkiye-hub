"use client";

import { GlowCard } from "./ui/spotlight-card";
import { Award, Globe, Cpu, Handshake } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Doğru yol nedir?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Üç yaygın yolun sonunda hep aynı çıkmaz var. Peki başarılı şirketler ne yapıyor? İşte sizin için doğru çözümün 4 nedeni:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <GlowCard glowColor="green" size="lg">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <Award className="w-12 h-12 text-emerald-500" />
              <h3 className="text-xl font-bold text-foreground">
                Satışta ölçülebilir sonuçlar
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Biz süslü sözlerle değil, rakamlarla konuşuyoruz: 100 e-postada %3 toplantı oranı. 
                Daha önce ulaşamadığınız potansiyel müşteriler, artık düzenli olarak görüşmeye dönüşüyor.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="blue" size="lg">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <Cpu className="w-12 h-12 text-sky-500" />
              <h3 className="text-xl font-bold text-foreground">
                Operasyonda radikal verimlilik
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Daha önce 30 dakika süren bir süreç, artık otomasyonla 1 dakikada tamamlanıyor. 
                Daha az tıklama, daha az zaman kaybı – ekibinizin odağı tekrar asıl işe dönüyor.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="purple" size="lg">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <Globe className="w-12 h-12 text-purple-500" />
              <h3 className="text-xl font-bold text-foreground">
                Uluslararası deneyim
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Türkiye'den Avrupa'ya, Amerika'dan Avustralya'ya kadar farklı pazarlarda projeler yürüttük. 
                Çok dilli (Türkçe, Almanca, İngilizce) ve çok kültürlü deneyimimiz sayesinde, siz de yeni pazarlara sorunsuz açılabilirsiniz.
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="red" size="lg">
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <Handshake className="w-12 h-12 text-red-500" />
              <h3 className="text-xl font-bold text-foreground">
                Garantili proje başarısı
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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