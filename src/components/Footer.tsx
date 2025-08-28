import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent">
                Pratik Yapay Zeka
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Yapay zeka danışmanlığı ve otomasyon çözümleri ile işletmenizi geleceğe hazırlıyoruz.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/otomasyon" className="text-muted-foreground hover:text-primary transition-colors">
                  Otomasyon
                </Link>
              </li>
              <li>
                <Link to="/veri-analizi" className="text-muted-foreground hover:text-primary transition-colors">
                  Veri Analizi
                </Link>
              </li>
              <li>
                <Link to="/musteri-iletisimi-cozumleri" className="text-muted-foreground hover:text-primary transition-colors">
                  Müşteri İletişimi
                </Link>
              </li>
              <li>
                <Link to="/danismanlik-ve-egitim" className="text-muted-foreground hover:text-primary transition-colors">
                  Danışmanlık ve Eğitim
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Yapay Zeka</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/yapay-zeka-is-alanlari" className="text-muted-foreground hover:text-primary transition-colors">
                  İş Alanları
                </Link>
              </li>
              <li>
                <Link to="/yapay-zeka-is-alanlari/pazarlama" className="text-muted-foreground hover:text-primary transition-colors">
                  Pazarlama Otomasyonu
                </Link>
              </li>
              <li>
                <Link to="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" className="text-muted-foreground hover:text-primary transition-colors">
                  Satış Otomasyonu
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">İletişim</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Yapay zeka çözümleriniz için hemen iletişime geçin.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-primary to-accent">
                <Link to="/danismanlik">Ücretsiz Danışmanlık</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Pratik Yapay Zeka. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <Link to="/gizlilik" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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