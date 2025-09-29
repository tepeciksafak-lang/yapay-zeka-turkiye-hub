import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-bg-2">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-card border border-border flex items-center justify-center">
                <div className="w-4 h-4 bg-lime-400 rounded-sm"></div>
              </div>
            </Link>
            <p className="text-sm text-text-muted">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.home')}
                </Link>
              </li>
              <li>
                <Link to="/cozumler" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/vaka-calismalari" className="text-text-muted hover:text-lime-400 transition-colors lime-underline">
                  {t('footer.menu.cases')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-hi">{t('footer.contact.title')}</h3>
            <div className="space-y-4">
              <p className="text-sm text-text-muted">
                {t('footer.contact.text')}
              </p>
              <Button variant="lime" asChild className="w-full hover-glow">
                <Link to="/danismanlik">{t('footer.cta.button')}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-muted">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4">
              <Link to="/gizlilik" className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                {t('footer.privacy')}
              </Link>
              <Link to="/kullanim-kosullari" className="text-sm text-text-muted hover:text-lime-400 transition-colors lime-underline">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;