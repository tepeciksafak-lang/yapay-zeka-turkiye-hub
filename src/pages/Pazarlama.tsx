import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const Pazarlama = () => {
  return (
    <>
      <SEO 
        title="Yapay Zeka Pazarlama Otomasyonu | Pratik Yapay Zeka"
        description="Yapay zeka destekli içerik pazarlaması ve sosyal medya otomasyonu. SEO uyumlu blog yazıları, kişiselleştirilmiş e-posta kampanyaları ve otomatik reklam optimizasyonu."
      />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: "https://pratikyz.com/tr" },
        { name: "Pazarlama", url: "https://pratikyz.com/tr/pazarlama" }
      ]} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground sm:text-5xl">
              Yapay Zeka Pazarlama Otomasyonu | Dijital Stratejilerinizi Güçlendirin
            </h1>
            <p className="text-xl text-muted-foreground">
              Yapay Zeka Destekli Otomasyon ile Akıllı Pazarlama
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* İçerik Pazarlaması Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <img 
                src="https://static.wixstatic.com/media/754410_bdd50da98efe4c978325f723e54760d5~mv2.jpg"
                alt="Veri noktalarının birleştiği, havada süzülen fütüristik bir dijital ağ. Bağlantı çizgileri, SEO uyumlu blog yazılarının, sosyal medya gönderilerinin ve yapay zeka destekli içerik üretiminin otomasyonunu temsil eder."
                className="w-full rounded-xl shadow-lg mb-8"
                loading="lazy"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Yapay Zeka Destekli İçerik Pazarlaması Otomasyonu
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kaliteli içerikler, kişiselleştirilmiş ve otomatikleştirilmiş. Maksimum erişim ve etkileşim için.
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Otomatik içerik oluşturma:</strong>
                    <span className="text-muted-foreground"> Yapay zeka, trendleri ve anahtar kelimeleri analiz ederek blog yazıları, ürün açıklamaları ve sosyal medya gönderileri oluşturur.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">SEO uyumlu metinler –</strong>
                    <span className="text-muted-foreground"> Yapay zeka, arama trendlerini analiz ederek içerikleri optimize eder ve organik erişimi artırır.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Kişiselleştirilmiş e-posta pazarlama kampanyaları –</strong>
                    <span className="text-muted-foreground"> Kullanıcı davranışına dayalı, hedeflenmiş ve otomatik e-posta içerikleri oluşturulur.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Otomatik reklam metinleri ve A/B testleri –</strong>
                    <span className="text-muted-foreground"> Daha iyi performans için başlıklar ve çağrılar optimize edilir.</span>
                  </div>
                </li>
              </ul>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <strong className="text-foreground">Sonuç:</strong>
                <span className="text-muted-foreground"> İçerik üretiminde maksimum ölçeklenebilirlik – manuel süreç olmadan, gecikmesiz, ölçülebilir şekilde daha iyi sonuçlar.</span>
              </div>
            </div>

            {/* Sosyal Medya Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <img 
                src="https://static.wixstatic.com/media/754410_288bb55293ee4f6cb097a2fe3d2e7863~mv2.jpg"
                alt="Yapay Zeka destekli sosyal medya otomasyonunu temsil eden, parlayan veri akışlarıyla birleşmiş fütüristik bir dünya haritası. Instagram, LinkedIn, YouTube ve TikTok gibi platformlara entegre edilmiş otomatik sosyal medya planlamasını ve trend analizini gösteriyor."
                className="w-full rounded-xl shadow-lg mb-8"
                loading="lazy"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Yapay Zeka Destekli Sosyal Medya Pazarlama Otomasyonu
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Maksimum erişim, hedefe yönelik etkileşim ve otomatik içerikler – tüm platformlarda yapay zeka ile verimli bir şekilde.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Instagram için yapay zeka destekli içerik oluşturma</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">B2B için LinkedIn otomasyonu</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">YouTube pazarlaması ve SEO optimizasyonu</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Facebook ve TikTok reklamlarını yapay zeka ile optimize etme</span>
                </li>
              </ul>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <strong className="text-foreground">Sonuç:</strong>
                <span className="text-muted-foreground"> Yapay zeka ile sosyal medya pazarlaması daha hedefli, hızlı ve etkili hale gelir. Markalar, zaman tasarrufu sağlarken tüm platformlardaki etkileşimi artırabilir.</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 py-12">
              <h3 className="text-2xl font-bold text-foreground">
                Şimdi Pazarlama Süreçlerinizi Yapay Zeka ile Otomatikleştirin
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Link to="/danismanlik">Bizimle İletişime Geçin</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu">
                    Satış Otomasyonu Hakkında Daha Fazla Bilgi Edinin
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Pazarlama;