import SEO from "@/components/SEO";

const VeriAnalizi = () => {
  return (
    <>
      <SEO 
        title="Veri Analizi | Pratik Yapay Zeka"
        description="Yapay Zeka ile gerçeklere dayalı kararlar alın. Müşteri kazanımınızı geliştirin, verileri toplayın ve analiz edin."
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Veri Analizi | Pratik Yapay Zeka
            </h1>
            <h4 className="text-xl text-muted-foreground">
              Yapay Zeka: Gerçeklere Dayalı Kararlar Alın
            </h4>
          </header>

          <div className="space-y-16">
            {/* Ana Tanıtım Section */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Veri analitiği yapay zeka teknolojisiyle:
                </h2>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    Hangi hizmetlerinizin en popüler olduğunu biliyor musunuz?
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    Müşterilerinizin en çok hangi saatlerde size ulaştığını takip ediyor musunuz?
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    Satış sürecinizde hangi adımda en çok müşteri kaybettiğinizi biliyor musunuz?
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    Pazarlama bütçenizin hangi kanalda en iyi sonuç verdiğini ölçüyor musunuz?
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://static.wixstatic.com/media/754410_17bfe37d782048b1ad54b261b93778e5~mv2.png" 
                  alt="Veri analizi göstergeleri ve grafikler - yapay zeka destekli veri görselleştirme"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Verileri Toplayın Section */}
            <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Verileri Toplayın</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Müşteri kazanımınızı geliştirin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yapay zeka, müşteri davranışlarını analiz ederek hangi stratejilerin daha etkili olduğunu belirler. 
                    Bu sayede pazarlama bütçenizi en verimli kanallara yönlendirebilirsiniz.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Operasyonel verimliliği artırın
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    İş süreçlerinizdeki darboğazları tespit edin ve kaynaklarınızı en doğru şekilde dağıtın. 
                    AI destekli analiz ile zaman ve maliyet tasarrufu sağlayın.
                  </p>
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">Örnek</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Yerel bir fırın, Instagram gönderilerinin hangi saatlerde daha fazla etkileşim aldığını 
                  yapay zeka ile analiz etti. Bulgular sonucunda paylaşım zamanlarını optimize ederek 
                  satışlarında %30 artış elde etti.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Avantajlar:</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Daha hedefli pazarlama stratejileri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Müşteri memnuniyetinde artış</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Operasyonel maliyetlerde düşüş</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Veri odaklı karar alma süreci</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Rekabet avantajı elde etme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Gelecek trendlerini öngörme</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Verilerinizin Gücünü Keşfedin
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Yapay zeka ile verilerinizi anlamlı bilgilere dönüştürün ve işletmenizi data-driven hale getirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Ücretsiz Analiz Raporu
                </button>
                <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                  Demo Görüşmesi
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default VeriAnalizi;