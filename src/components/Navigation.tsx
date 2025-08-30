import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    {
      label: "Yapay Zeka İş Alanları",
      items: [
        { href: "/yapay-zeka-is-alanlari", label: "Genel Bakış" },
        { href: "/yapay-zeka-is-alanlari/pazarlama", label: "Pazarlama" },
        { href: "/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu", label: "Satış Otomasyonu" },
      ]
    },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/services-5", label: "Hizmetlerimiz" },
    { href: "/blog", label: "Blog" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent">
              Pratik Yapay Zeka
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.items ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-popover p-2 shadow-lg ring-1 ring-border">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                              isActiveLink(subItem.href) && "bg-accent text-accent-foreground"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActiveLink(item.href!) ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="bg-gradient-to-r from-primary to-accent">
              <Link to="/danismanlik">İletişim</Link>
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
                  <div key={item.label}>
                    {item.items ? (
                      <div>
                        <div className="py-2 text-sm font-medium text-foreground">
                          {item.label}
                        </div>
                        <div className="ml-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                                isActiveLink(subItem.href) && "bg-accent text-accent-foreground"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          isActiveLink(item.href!) && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-4 bg-gradient-to-r from-primary to-accent">
                  <Link to="/danismanlik" onClick={() => setIsOpen(false)}>İletişim</Link>
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