import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const YapayZekaIsAlanlari = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground sm:text-5xl">
              Yapay Zeka İş Alanları | Satış ve Pazarlama Otomasyonu
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dijital Dönüşüm ile Süreçlerinizi Otomatikleştirin
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://static.wixstatic.com/media/754410_55c8964c1d854926ba6681a929fa122e~mv2.jpg"
              alt="Yapay Zeka İş Alanları - Dijital Dönüşüm"
              className="w-full rounded-xl shadow-lg mb-12"
              loading="lazy"
            />
            
            {/* Satış Otomasyonu Section */}
            <div className="bg-card rounded-xl p-8 shadow-md mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Satış Otomasyonu – Yapay Zeka ile Satış Süreçlerinizi Otomatikleştirin
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Outbound satış e-postalarınızı yapay zeka ile otomatikleştirin:
                  </h3>
                  <p className="text-muted-foreground">
                    AI destekli sistemler, hedef müşteri listelerini analiz ederek kişiselleştirilmiş e-postalar oluşturur ve takip süreçlerini yönetir.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Müşteri ve rakip şirketleri otomatik analiz edin:
                  </h3>
                  <p className="text-muted-foreground">
                    Yapay zeka, LinkedIn profilleri, web siteleri ve haber kaynaklarından müşteri ve rakip analizleri yaparak en uygun satış stratejilerini önerir.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Takip süreçlerini akıllı otomasyon ile yönetin:
                  </h3>
                  <p className="text-muted-foreground">
                    Yanıt alınmayan e-postalar için belirlenen aralıklarda otomatik hatırlatıcılar ve kişiselleştirilmiş yanıtlar gönderilir.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link to="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu">
                  Daha fazla bilgi için tıklayın
                </Link>
              </Button>
            </div>

            <img 
              src="https://static.wixstatic.com/media/754410_032b6035730549d7a14eb9baf8c330c6~mv2.jpg"
              alt="Pazarlama Otomasyonu"
              className="w-full rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Pazarlama Otomasyonu Section */}
            <div className="bg-card rounded-xl p-8 shadow-md mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Pazarlama Otomasyonu – Yapay Zeka ile Pazarlama Süreçlerinizi Optimize Edin
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    İçerik üretiminizi ve SEO optimizasyonunuzu AI ile hızlandırın:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Yapay zeka destekli araçlar, hedef kitleniz için blog yazıları, ürün açıklamaları ve sosyal medya gönderileri oluşturur.</li>
                    <li>AI tabanlı SEO analizi, trend olan anahtar kelimeleri belirleyerek içeriklerinizi arama motorlarında üst sıralara taşır.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Sosyal medya ve reklam kampanyalarınızı AI ile yönetin:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Yapay zeka, en iyi paylaşım zamanlarını ve içerik türlerini belirleyerek sosyal medya stratejinizi optimize eder.</li>
                    <li>AI destekli reklam yönetimi, bütçenizi en verimli şekilde dağıtarak dönüşüm oranlarını artırır.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Kişiselleştirilmiş pazarlama kampanyaları oluşturun:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>AI, kullanıcı davranışlarını analiz ederek otomatik e-posta kampanyaları ve kişiselleştirilmiş mesajlar oluşturur.</li>
                    <li>Dinamik içerik ve bireysel müşteri profillerine özel teklifler, etkileşim oranlarını artırır.</li>
                  </ul>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link to="/yapay-zeka-is-alanlari/pazarlama">
                  Daha fazla bilgi için tıklayın
                </Link>
              </Button>
            </div>

            <img 
              src="https://static.wixstatic.com/media/754410_92125b9defe6460fb8fc220d5f88b244~mv2.jpg"
              alt="Yapay Zeka Çözümleri"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default YapayZekaIsAlanlari;