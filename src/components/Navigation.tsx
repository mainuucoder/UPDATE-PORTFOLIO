import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Heart, Briefcase, Mail, Images } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Add this

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", icon: Home, isScroll: true },
    { label: "About", href: "#about", icon: User, isScroll: true },
    { label: "Interests", href: "#interests", icon: Heart, isScroll: true },
    { label: "Projects", href: "#projects", icon: Briefcase, isScroll: true },
    { label: "Gallery", href: "/gallery", icon: Images, isScroll: false }, // Changed to route
    { label: "Contact", href: "#contact", icon: Mail, isScroll: true },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (item.isScroll) {
      // Scroll to section on home page
      if (window.location.pathname !== "/") {
        // If not on home page, navigate to home first then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn(`Element with selector "${item.href}" not found`);
        }
      }
    } else {
      // Navigate to different page
      navigate(item.href);
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
            onClick={() => handleNavigation({ label: "Home", href: "#home", icon: Home, isScroll: true })}
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
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigation({ label: "Contact", href: "#contact", icon: Mail, isScroll: true })}
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
                    onClick={() => handleNavigation(item)}
                    className="w-full flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
              <Button
                onClick={() => handleNavigation({ label: "Contact", href: "#contact", icon: Mail, isScroll: true })}
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