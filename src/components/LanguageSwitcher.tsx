import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "tr", name: "Türkçe" },
    { code: "de", name: "Deutsch" },
    // { code: "en", name: "English" }, // Temporarily disabled
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as 'de' | 'tr' | 'en');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm min-h-[48px] min-w-[48px]"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="absolute right-0 top-full z-20 mt-2 w-40 rounded-md bg-popover p-1 shadow-lg ring-1 ring-border"
            role="menu"
            aria-label="Language options"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground min-h-[48px]"
                role="menuitem"
                aria-label={`Switch to ${language.name}`}
              >
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;