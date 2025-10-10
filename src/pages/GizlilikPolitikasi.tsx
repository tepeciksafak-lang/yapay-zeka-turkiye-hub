import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GizlilikPolitikasi = () => {
  return (
    <>
      <SEO 
        title="Gizlilik Politikası | Pratik Yapay Zeka"
        description="Pratik Yapay Zeka gizlilik politikası ve kişisel verilerin korunması hakkında bilgi edinin."
      />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Gizlilik Politikası</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Son Güncelleme:</strong> 10.10.2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Veri Sorumlusu ve İletişim Bilgileri</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu web sitesinin veri sorumlusu Pratik Yapay Zeka olarak belirlenmiştir. İletişim için e-posta adresi üzerinden bize ulaşabilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Toplanan Veriler ve Toplanma Yöntemleri</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sitemizi ziyaret ettiğinizde veya formlar aracılığıyla bilgi gönderdiğinizde aşağıdaki veriler toplanabilir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>İsim, soyisim, e-posta adresi, iletişim bilgileri (sağlandığında)</li>
              <li>IP adresi, tarayıcı türü, cihaz bilgileri, sayfa erişim logları</li>
              <li>Çerez (cookie) verileri</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Bu veriler, otomatik sistemlerle veya manuel yöntemlerle toplanabilir ve kaydedilebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Verilerin Kullanım Amaçları</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toplanan veriler şunlar için kullanılabilir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Hizmet sağlamak, iletişim kurmak</li>
              <li>Form taleplerine yanıt vermek</li>
              <li>Site performansını analiz etmek, kullanım istatistikleri çıkarmak</li>
              <li>Güvenlik, teknik bakım ve iyileştirmeler</li>
              <li>Yasal yükümlülüklere uymak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Çerezler / Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Site, kullanıcı deneyimini artırmak ve analiz yapmak için çerezler kullanabilir. Bazı çerezler zorunludur (örneğin oturum yönetimi), bazıları ise tercihli (analitik, reklam amaçlı).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kullanıcılar tarayıcı ayarlarından çerezleri reddedebilir veya silebilir; ancak bu durum sitenin bazı fonksiyonlarının düzgün çalışmasını engelleyebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Verilerin Paylaşılması ve Aktarılması</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kullanıcının açık rızası olmadıkça, kişisel veriler üçüncü taraflarla paylaşılmaz.
              Ancak, aşağıdaki durumlar için veri aktarımı yapılabilir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Hizmet sağlayıcılar (örneğin altyapı, hosting)</li>
              <li>Yasal merciler, devlet kurumları</li>
              <li>İş ortakları (mevcut ve potansiyel)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Veriler, Türkiye içinde veya Türkiye dışında bulunan sunucularda saklanabilir, ancak KVKK hükümlerine uygun olarak korunur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Verilerin Saklama Süresi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel veriler, toplama amacına uygun olarak gerektiği kadar saklanır.
              Form verileri veya abonelik verileri için saklama süresi işlem tamamlandıktan sonra makul bir süreyle sınırlıdır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Veri Sahibi Hakları</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KVKK Madde 11 uyarınca, kullanıcılar aşağıdaki haklara sahiptir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Verilerinin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>İşlenme amacı ve kullanıldığı yerleri öğrenme</li>
              <li>Eksik veya yanlış verilerin düzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlemenin durdurulmasını / verilerin anonim hale getirilmesini isteme</li>
              <li>Verilerin yurt dışına aktarılıp aktarılmadığını öğrenme</li>
              <li>İtiraz hakkı</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Bu talepler ücretsiz işlenir; ancak maliyet gerektiren işlemler için makul ücret talep edilebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Politika Değişiklikleri</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu gizlilik politikası gerektiğinde güncellenebilir. Güncellenmiş politika siteye yüklendiği anda yürürlüğe girer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. İlgili Yasal Mevzuat</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu politika Türkiye'de yürürlükte olan Kişisel Verilerin Korunması Kanunu (KVKK, 6698 sayılı kanun) ve ilgili ikincil düzenlemelere uygun olarak hazırlanmıştır.
              Ayrıca, Avrupa Birliği'ndeki kullanıcılar için GDPR benzeri kurallara da riayet edilmeye çalışılır.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GizlilikPolitikasi;
