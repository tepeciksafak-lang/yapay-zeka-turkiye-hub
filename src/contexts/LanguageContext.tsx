import { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Language = 'de' | 'tr' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  initializeLanguage: (lang: string | undefined) => void;
}

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.cases': 'Erfolgsgeschichten', 
    'nav.freeContent': 'Kostenlose Inhalte',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.headline': 'Sie führen Ihr Unternehmen.',
    'hero.headline.highlight': 'Wir stellen Ihnen KI-Mitarbeiter zur Seite, die 24/7 für Sie arbeiten.',
    'hero.subheadline': '',
    'hero.cta.primary': 'Jetzt kostenlos starten',
    
    'hero.social.proof': '100+ B2B Teams vertrauen auf unsere praktischen Automatisierungen.',

    // Agitate Demo Section
    'agitate.title': 'Wie integrieren Sie KI richtig in Ihr Unternehmen?',
    'agitate.subtitle': 'Es gibt verschiedene Wege, aber die meisten sind wie ein Stein im Schuh. Sie stören bei jedem Schritt.',
    'agitate.option1.title': 'Selber machen',
    'agitate.option1.description': 'Klar, das wirkt erst schnell und günstig. Doch KI ist die größte Technologie, die die Menschheit je entwickelt hat. Um sie wirklich sauber in Ihr Unternehmen einzubinden, brauchen Sie Monate voller Fokus und Zeit. Haben Sie als Geschäftsführer dafür wirklich Kapazität?',
    'agitate.option2.title': 'Internes Team oder neue Mitarbeiter',
    'agitate.option2.description1': 'Intern jemanden abstellen: eine weitere Aufgabe auf einem ohnehin überfüllten Schreibtisch.',
    'agitate.option2.description2': 'Neue Mitarbeiter einstellen: schwierig, weil es kaum Experten gibt. Wer wirklich Erfahrung hat, ist teuer.',
    'agitate.option2.description3': 'Der Bewerbungsprozess zieht sich wie eine endlose Warteschlange, die einfach nicht vorankommt.',
    'agitate.option3.title': 'Aufschieben (nächstes Quartal, nächstes Jahr)',
    'agitate.option3.description1': '„Nächstes Jahr haben wir Budget, dann machen wir das." Aber jeder Monat, den Sie warten, bedeutet verlorene Chancen und Kunden.',
    'agitate.option3.description2': 'Vor drei Jahren war DocuSign ein Gigant. Heute kann seine Software mit KI in zwei Tagen kopiert werden.',
    'agitate.option3.description3': 'Wie lange dauert es wohl, bis auch Ihr Geschäftsmodell kopiert ist?',

    // Solution Section
    'solution.title': 'Wenn Sie einen Marathonläufer suchen, der an Ihrer Seite läuft, warum uns?',
    'solution.card1.title': 'Erfahrung & Kultur',
    'solution.card1.description': '10 Jahre B2B-Vertrieb: Ich habe den Tee auf dem Tisch türkischer Unternehmen genauso gesehen wie die kühlen Glasfronten europäischer Meetingräume.',
    'solution.card2.title': 'KI-Systeme, die funktionieren',
    'solution.card2.description': 'Seit 1,5 Jahren baue ich mit meinem Beratungsunternehmen ununterbrochen Systeme, die laufen wie Uhrwerke, automatisiert, präzise, unermüdlich.',
    'solution.card3.title': 'Beweis jetzt schon',
    'solution.card3.description': 'Ich teile Wissen, bevor wir zusammenarbeiten. Zum Beispiel die Liste der 2.000 größten Unternehmen der Türkei oder meine KI-Prompt-Bibliothek.',
    'solution.card4.title': 'Risikofrei',
    'solution.card4.description': 'Wenn ein Projekt keinen Erfolg bringt, übernehme ich das Risiko. Sie bekommen 50 % Ihrer Investition zurück.',

    // Timeline Section
    'timeline.title': 'Von Neukundengewinnung bis Stammkunden, Automatisierung auf jedem Schritt',
    'timeline.step1.title': 'Neukundengewinnung',
    'timeline.step1.description': 'Automatisierte Systeme, die Ihren Kalender füllen.\n\n• KI-gestützte Cold Calls\n• Personalisierte E-Mail-Kampagnen\n• Social-Media-DMs an Ihre Wunschkunden\n• Mehrsprachige Kommunikation für internationale Expansion',
    'timeline.step2.title': 'Marketing',
    'timeline.step2.description': 'Kampagnen und Inhalte, die auf Systemen basieren, nicht auf Zufall.\n\n• Schnelle Content-Produktion\n• Webdesign und Funnel-Automatisierung\n• Kampagnen-Management',
    'timeline.step3.title': 'Sales & CRM',
    'timeline.step3.description': 'Ihre Verkäufer verkaufen. Die Dokumentation übernimmt das System.\n\n• Automatisierte CRM-Dokumentation\n• Angebote in Sekunden erstellen\n• Intelligente Unterstützung im Verkaufsprozess',
    'timeline.step4.title': 'Customer Success',
    'timeline.step4.description': 'Bestehende Kunden binden, Upselling-Potenziale ausschöpfen.\n\n• KI-Support über Telefon und Mail\n• Upselling- und Cross-Selling-Systeme\n• Kundenbindung mit automatisierten Prozessen',
    'timeline.step5.title': 'Conversion-Optimierung',
    'timeline.step5.description': 'Mehr Anfragen von Ihrer Website.\n\n• Speed-to-Lead: Antwort in 2 Minuten, auch am Wochenende\n• Chatbots wie virtuelle Verkäufer auf Instagram',

    // Success Stories
    'success.title': 'Echte Ergebnisse. Marken, die mit KI und Automatisierung wachsen.',
    'success.acilsatis': 'AcilSatis: +45 % Sichtbarkeit durch ständigen Traffic',
    'success.carstudio': 'Carstudio AI: 3x mehr Märkte erschlossen, ohne das Team zu vergrößern',
    'success.salevium': 'Salevium: Content-Erstellung von Stunden auf Minuten reduziert, 80 % Zeitersparnis',

    // Solutions Page
    'solutions.hero.title1': 'In welcher Phase brauchen Sie Unterstützung,',
    'solutions.hero.title2': 'um Ihr Unternehmen zu skalieren?',
    'solutions.hero.subtitle': 'Lead-Generierung bis Kundenbindung – wir automatisieren jeden Schritt Ihres Wachstums.',
    'solutions.hero.cta': 'Kostenlose Beratung',
    'solutions.hero.contact': 'Kontakt aufnehmen',
    'solutions.hero.social': '100+ B2B Teams vertrauen unseren praktischen Lösungen',

    // Footer
    'footer.cta': 'Bereit, Ihr Unternehmen zu transformieren?',
    'footer.cta.button': 'Kostenlose Beratung',
    'footer.menu.home': 'Startseite',
    'footer.menu.solutions': 'Lösungen', 
    'footer.menu.cases': 'Erfolgsgeschichten',
    'footer.menu.free': 'Kostenlose Inhalte',
    'footer.menu.blog': 'Blog',
    'footer.services.automation': 'Automatisierung',
    'footer.services.analytics': 'Datenanalyse',
    'footer.services.ai': 'KI-Anwendungen',
    'footer.services.consulting': 'Beratung und Training',
    'footer.contact.text': 'Sprechen Sie uns an für Ihre KI-Lösung',
    'footer.copyright': '© 2024 Pratik Yapay Zeka. Alle Rechte vorbehalten.',

    // Free Content
    'freeContent.title': 'Kostenlose Inhalte. Echter, sofort nutzbarer Mehrwert.',
    'freeContent.list.title': 'Liste der 2.000 größten Unternehmen in der Türkei',
    'freeContent.prompts.title': 'KI-Prompt-Bibliothek für Marketing und Content',
    'freeContent.resources': 'Neue Ressourcen wöchentlich',

    // Blog
    'blog.article.title': 'Automatischer Outreach mit KI: 5 Schritte zu Ihren ersten Meetings',
    'blog.article.description': 'Mit KI-gestützter Personalisierung und dem richtigen Timing wöchentlich planbare Meetings generieren.',
  },
  tr: {
    // Navigation  
    'nav.home': 'Anasayfa',
    'nav.solutions': 'Çözümler',
    'nav.cases': 'Vaka Çalışmaları',
    'nav.freeContent': 'Ücretsiz İçerikler', 
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.headline': 'Siz şirketi yönetin.',
    'hero.headline.highlight': 'Biz şirketiniz için 7/24 çalışan yapay zeka işçileri kuruyoruz.',
    'hero.subheadline': '',
    'hero.cta.primary': 'Şimdi ücretsiz başlayın',
     
    'hero.social.proof': '100+ B2B ekip için pratik otomasyon kurguladık.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.cases': 'Case Studies',
    'nav.freeContent': 'Free Content',
    'nav.blog': 'Blog', 
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'You run the business.',
    'hero.headline.highlight': 'We build the Artificial Intelligence.',
    'hero.subheadline': 'AI + Automation that scales your company — without you doing more.',
    'hero.cta.primary': 'Start free now',
    
    'hero.social.proof': '100+ B2B teams trust our practical automation solutions.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('tr');
  const navigate = useNavigate();
  
  const initializeLanguage = (lang: string | undefined) => {
    const validLang = (lang as Language);
    if (validLang && ['de', 'tr', 'en'].includes(validLang)) {
      setCurrentLanguage(validLang);
    } else {
      setCurrentLanguage('tr'); // Default to Turkish
    }
  };
  
  const setLanguage = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(de|tr|en)/, '') || '/';
    navigate(`/${newLang}${pathWithoutLang}`);
    setCurrentLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, initializeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};