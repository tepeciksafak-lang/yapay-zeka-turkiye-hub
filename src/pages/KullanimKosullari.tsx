import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const KullanimKosullari = () => {
  return (
    <>
      <SEO 
        title="Kullanım Koşulları | Pratik Yapay Zeka"
        description="Pratik Yapay Zeka web sitesi kullanım koşulları ve yasal uyarılar hakkında bilgi edinin."
      />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Kullanım Koşulları</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Yürürlük Tarihi:</strong> 10.10.2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Kabul</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu siteyi kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Eğer bu şartları kabul etmiyorsanız, siteyi kullanmayı bırakmalısınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Hizmet Tanımı</h2>
            <p className="text-muted-foreground leading-relaxed">
              Site sadece bilgi amaçlıdır. Herhangi bir ürün, hizmet veya sonuç garanti edilmez.
              Siteyi kullanımınızdan doğan risk tamamen size aittir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Fikri Mülkiyet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu sitedeki tüm içerikler (metin, görsel, logo, yazılım vs.) Pratik Yapay Zeka'ya ait veya lisanslı malıdır. İzin olmadan çoğaltılamaz, değiştirilemez, dağıtılamaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Kullanıcı Yükümlülükleri</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kullanıcı olarak, siteyi yasalara, etik kurallara ve bu koşullara uygun şekilde kullanmayı taahhüt edersiniz.
              Aşağıdakileri yapmamalısınız:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>İçeriği değiştirmek, kopyalamak veya dağıtmak</li>
              <li>Virüs, kötü amaçlı yazılım yaymak</li>
              <li>Siteyi izinsiz taramak, scraping yapmak</li>
              <li>Başkalarının haklarını ihlal eden içerik paylaşmak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Sorumluluğun Sınırlandırılması</h2>
            <p className="text-muted-foreground leading-relaxed">
              Site yöneticisi, site kullanımıyla ilgili hiçbir durumda doğrudan veya dolaylı zararlar için sorumlu tutulamaz.
              Bilgi eksikliği, kesinti, veri kaybı gibi durumlar için tazminat yükümlülüğü kabul edilmez.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Bağlantılar ve Üçüncü Taraf İçerikleri</h2>
            <p className="text-muted-foreground leading-relaxed">
              Site içinde bulunan bağlantılar (linkler), üçüncü taraf sitelere yönlendirebilir.
              Bu sitelerin içeriği, güvenliği veya politikalarından site yönetimi sorumlu değildir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Mücbir Sebep</h2>
            <p className="text-muted-foreground leading-relaxed">
              Doğal afet, grev, yangın, savaş gibi öngörülemeyen durumlarda, yükümlülüklerin yerine getirilmemesi sorumluluk doğurmaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Uygulanacak Hukuk ve Yetki</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu koşullardan doğacak uyuşmazlıklarda Türk Hukuku uygulanır.
              Yetkili mahkemeler Türkiye Cumhuriyeti mahkemeleridir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Değişiklik Hakkı</h2>
            <p className="text-muted-foreground leading-relaxed">
              Site yönetimi bu koşulları dilediği zaman güncelleme hakkına sahiptir.
              Değişiklikler siteye yüklendiği anda geçerli olur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default KullanimKosullari;
