import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg-2">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold text-text-hi">
                Pratik Yapay Zeka
              </div>
            </Link>
            <p className="text-sm text-text-muted">
              Yapay zeka danışmanlığı ve otomasyon çözümleri ile işletmenizi geleceğe hazırlıyoruz.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/otomasyon" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Otomasyon
                </Link>
              </li>
              <li>
                <Link to="/veri-analizi" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Veri Analizi
                </Link>
              </li>
              <li>
                <Link to="/musteri-iletisimi-cozumleri" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Müşteri İletişimi
                </Link>
              </li>
              <li>
                <Link to="/danismanlik-ve-egitim" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Danışmanlık ve Eğitim
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">Yapay Zeka</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/yapay-zeka-is-alanlari" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  İş Alanları
                </Link>
              </li>
              <li>
                <Link to="/yapay-zeka-is-alanlari/pazarlama" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Pazarlama Otomasyonu
                </Link>
              </li>
              <li>
                <Link to="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Satış Otomasyonu
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">İletişim</h3>
            <div className="space-y-4">
              <p className="text-sm text-text-muted">
                Yapay zeka çözümleriniz için hemen iletişime geçin.
              </p>
              <Button variant="lime" asChild className="w-full hover-glow">
                <Link to="/danismanlik">Ücretsiz Danışmanlık</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-muted">
              © 2024 Pratik Yapay Zeka. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <Link to="/gizlilik" className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;