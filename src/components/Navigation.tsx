import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, t } = useLanguage();

  const navItems = [
    { href: getLocalizedRoute(currentLanguage, 'home'), label: t('nav.home') },
    { href: getLocalizedRoute(currentLanguage, 'solutions'), label: t('nav.solutions') },
    { href: getLocalizedRoute(currentLanguage, 'cases'), label: t('nav.cases') },
    { href: getLocalizedRoute(currentLanguage, 'blog'), label: t('nav.blog') },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 data-[scrolled=true]:bg-bg-2 data-[scrolled=true]:border-border"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to={getLocalizedRoute(currentLanguage, 'home')} className="flex items-center space-x-3 group" aria-label="Homepage">
            {currentLanguage === 'de' ? (
              <img 
                src="/logos/de-logo.avif" 
                alt="Pratik Yapay Zeka DE Logo" 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-card border border-border group-hover:border-lime-400/50 transition-all duration-300 flex items-center justify-center" aria-hidden="true">
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "text-sm font-medium transition-colors lime-underline focus-lime relative",
                  isActiveLink(item.href!) ? "text-lime-400" : "text-text-hi hover:text-lime-400"
                )}
              >
                {item.label}
                {isActiveLink(item.href!) && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 lime-dot"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Navigation */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="focus-lime min-h-[48px] min-w-[48px]" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
              <div className="mb-6 pt-2">
                <Link to={getLocalizedRoute(currentLanguage, 'home')} onClick={() => setIsOpen(false)}>
              {currentLanguage === 'de' ? (
                <img 
                  src="/logos/de-logo.avif" 
                  alt="Pratik Yapay Zeka DE Logo" 
                  className="h-10 w-auto"
                />
              ) : (
                <div className="h-8 w-8 rounded-lg bg-card border border-border flex items-center justify-center" aria-hidden="true">
                </div>
              )}
                </Link>
              </div>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-border/30",
                      isActiveLink(item.href!) ? "bg-border/50 text-lime-400 border-l-2 border-lime-400" : "text-text-hi"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;