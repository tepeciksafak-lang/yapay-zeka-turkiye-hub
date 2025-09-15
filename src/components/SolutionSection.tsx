"use client";

import { GlowCard } from "./ui/spotlight-card";
import { Award, Globe, Cpu, Handshake } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="headline text-3xl md:text-4xl tracking-tight text-text-hi mb-6">
            Sizinle beraber koşacak bir maratoncu arıyorsanız… neden bizi seçin?
          </h2>
          <p className="body-text text-text-muted max-w-3xl mx-auto">
            
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
                Tecrübe ve Kültür
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                10 yıllık satış tecrübem ile Türk şirketlerindeki masadaki çayı da gördüm, Avrupa şirketlerinin toplantı odalarının soğuk camlarını da.
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
                Yapay Zeka Uygulamaları
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Son 1,5 senedir kesintisiz olarak yapay zeka danışmanlık şirketimle tıkır tıkır işleyen makineler gibi, yorulmadan çalışan sistemler kuruyorum.
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
                Kanıtı şimdiden paylaşıyorum
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Türkiye'nin en büyük 2.000 şirketini araştırdım ve sizinle paylaşıyorum.
                Yapay zeka ile reklam üretmek için hazırladığım prompt kütüphanem de elinizin altında.
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
                Riski ben alıyorum
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Projeden sonuç çıkmazsa ödediğiniz ücretin %50'sini geri alıyorsunuz.
                Risk sizin omzunuzda değil ben taşıyorum.
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}