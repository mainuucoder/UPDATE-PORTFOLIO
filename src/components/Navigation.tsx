import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Heart, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Interests", href: "#interests", icon: Heart },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    
    if (element) {
      // If element exists, scroll to it
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      // If element doesn't exist, log error and scroll to top
      console.warn(`Element with selector "${href}" not found`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Home link */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DM</span>
            </div>
            <span className="text-xl font-bold text-foreground">Daniel Mutahi</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;