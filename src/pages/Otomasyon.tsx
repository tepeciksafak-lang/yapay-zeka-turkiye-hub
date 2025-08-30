import { SEO } from "@/components/SEO";

const Otomasyon = () => {
  return (
    <>
      <SEO 
        title="Otomasyon | Pratik Yapay Zeka"
        description="İş hayatınızda değerli zamanınızı rutin görevlere mi harcıyorsunuz? Yapay zeka ile sosyal medya yönetimi ve rutin işleri otomatikleştirin."
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Otomasyon | Pratik Yapay Zeka
            </h1>
            <h4 className="text-xl text-muted-foreground">
              İş hayatınızda değerli zamanınızı rutin görevlere mi harcıyorsunuz?
            </h4>
          </header>

          <div className="space-y-16">
            {/* Sosyal Medya Yönetimi Section */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Yapay Zeka ile Sosyal Medya Yönetimi ve İçerik Üretimi
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Yapay zeka teknolojisi ile sosyal medya içerikleriniz otomatik oluşturulur ve zamanlanır.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hedef kitlenize uygun görseller ve metinler AI tarafından üretilir.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Etkileşim analizi ile en iyi paylaşım zamanları belirlenir.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tüm sosyal medya platformlarında tutarlı marka kimliği sağlanır.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://static.wixstatic.com/media/754410_850c0f88de9d48fa90a1d5309f60100a~mv2.png" 
                  alt="Sosyal medya platformlarının ikonları - Facebook, Instagram, Twitter, LinkedIn otomasyonu"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Rutin İşler Section */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img 
                  src="https://static.wixstatic.com/media/754410_876ce2e25908487ea2b8f54ac2767af1~mv2.png" 
                  alt="Yapay zeka destekli iş otomasyonu - fatura, rapor ve veri işleme süreçleri"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Yapay Zeka ile Rutin İşlerinizi Otomatikleştirin
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Yapay zeka destekli otomasyon ile fatura oluşturma, gönderme ve takip süreçleri otomatikleşir.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Müşteri verileri analiz edilerek kişiselleştirilmiş raporlar otomatik olarak hazırlanır.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    E-posta yanıtları, randevu planlaması ve takip mesajları AI tarafından yönetilir.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Veri girişi, belge taraması ve arşivleme işlemleri otomatik hale gelir.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-card rounded-lg p-12 shadow-sm border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Şimdi Otomasyonun Gücünü Keşfedin
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Yapay zeka ile iş süreçlerinizi otomatikleştirin, zaman kazanın ve değer yaratan işlere odaklanın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Ücretsiz Danışmanlık
                </button>
                <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                  Demo Talep Et
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Otomasyon;