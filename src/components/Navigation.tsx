import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, t } = useLanguage();

  const navItems = [
    { href: `/${currentLanguage}/cozumler`, label: t('nav.solutions') },
    { href: `/${currentLanguage}/vaka-calismalari`, label: t('nav.cases') },
    { href: `/${currentLanguage}/fiyatlandirma`, label: t('nav.pricing') },
    { href: `/${currentLanguage}/blog`, label: t('nav.blog') },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 data-[scrolled=true]:bg-bg-2 data-[scrolled=true]:border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to={`/${currentLanguage}`} className="flex items-center space-x-3 group">
            <div className="h-8 w-8 rounded-lg bg-card border border-border group-hover:border-lime-400/50 transition-all duration-300 flex items-center justify-center">
              <div className="w-4 h-4 bg-lime-400 rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              Pratik Yapay Zeka
            </span>
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
            <Button 
              variant="lime" 
              size="sm"
              asChild
              className="hover-glow focus-lime"
            >
              <Link to={`/${currentLanguage}/contact`}>{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Language Switcher & Mobile Navigation */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="focus-lime">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
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
                <Button 
                  variant="lime" 
                  asChild 
                  className="mt-4 hover-glow"
                >
                  <Link to={`/${currentLanguage}/contact`} onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
                </Button>
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