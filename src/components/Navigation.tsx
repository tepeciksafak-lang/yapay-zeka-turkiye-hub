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
    { href: `/${currentLanguage}/yapay-zeka-is-alanlari`, label: t('nav.solutions') },
    { href: `/${currentLanguage}/vaka-calismalari`, label: t('nav.cases') },
    { href: `/${currentLanguage}/fiyatlandirma`, label: t('nav.pricing') },
    { href: `/${currentLanguage}/blog`, label: t('nav.blog') },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to={`/${currentLanguage}`} className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent">
              Pratik Yapay Zeka
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActiveLink(item.href!) ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-primary to-accent">
              <Link to={`/${currentLanguage}/contact`}>{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Language Switcher & Mobile Navigation */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                      isActiveLink(item.href!) && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-gradient-to-r from-primary to-accent">
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