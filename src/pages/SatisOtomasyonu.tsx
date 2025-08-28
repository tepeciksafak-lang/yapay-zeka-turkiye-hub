import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SatisOtomasyonu = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground sm:text-5xl">
              Yapay Zeka Satış Otomasyonu | Satış Süreçlerinizi Hızlandırın
            </h1>
            <p className="text-xl text-muted-foreground">
              Satışta Yapay Zeka ile Outbound Süreçlerini Otomatikleştirin
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Outbound Satış Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Outbound Satış Otomasyonu
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Potansiyel müşterilere ulaşın, kişiselleştirilmiş e-postalar gönderin ve takip süreçlerini yapay zeka ile otomatikleştirin.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Otomatikleştirilmiş müşteri listeleri –</strong>
                    <span className="text-muted-foreground"> Yapay zeka, mevcut verileri analiz ederek veya alıcı personaya dayalı yeni hedef listeler oluşturarak en uygun adayları belirler.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Yapay zeka destekli araştırma –</strong>
                    <span className="text-muted-foreground"> LinkedIn profilleri, şirket web siteleri ve haber makaleleri gibi kaynaklardan veri toplayarak her müşteri için özel analiz yapar.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Kişiselleştirilmiş e-postalar –</strong>
                    <span className="text-muted-foreground"> Yapay zeka, müşterinin ilgi alanlarına ve şirket bilgilerine göre özel olarak hazırlanmış e-postalar oluşturur.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Akıllı takip süreçleri –</strong>
                    <span className="text-muted-foreground"> Yanıtsız kalan e-postalar için otomatik hatırlatıcılar gönderilir.</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <strong className="text-foreground">Sonuç:</strong>
                <span className="text-muted-foreground"> Satış ekibiniz zamandan tasarruf eder, manuel iş yükünü azaltır ve daha fazla anlaşma kapatma şansı elde eder.</span>
              </div>
            </div>

            {/* Inbound Satış Section */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Satışta Yapay Zeka ile Inbound Süreçlerini Otomatikleştirin
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Inbound Satış Otomasyonu</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Gelen müşteri taleplerine anında, veri odaklı ve kişiselleştirilmiş yanıtlar verin.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Otomatik müşteri analizi –</strong>
                    <span className="text-muted-foreground"> Yapay zeka, müşteri ve şirket bilgilerini anında araştırarak satış ekibinin anlık bilgiye sahip olmasını sağlar.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Şirket verilerinin akıllı analizi –</strong>
                    <span className="text-muted-foreground"> Yapay zeka, sektör, şirket büyüklüğü ve iş faaliyetleri gibi bilgileri analiz ederek en uygun satış stratejisini oluşturur.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Otomatikleştirilmiş ve kişiselleştirilmiş yanıt e-postaları –</strong>
                    <span className="text-muted-foreground"> Potansiyel müşteriye, onun ihtiyacına uygun bir çözüm sunan özel bir e-posta anında gönderilir ve otomatik toplantı planlama sağlanır.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 py-12">
              <h3 className="text-2xl font-bold text-foreground">
                Şimdi bizimle iletişime geçin ve satış süreçlerinizi yapay zeka ile otomatikleştirin.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Link to="/danismanlik">İletişime Geçin</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/satis-otomasyonu-demo">
                    Satış Otomasyonu Hakkında Daha Fazla Bilgi Edinin
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default SatisOtomasyonu;