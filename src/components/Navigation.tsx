import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import scriptWindLogo from "@/assets/script-wind-logo.webp";
import coloredLogo from "@/assets/Script Wind Logo Color and Black -  Transparent Background.png";
import whiteLogo from "@/assets/Script Wind Logo Only White -  Transparent Background.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // Conditional logo rendering based on theme
  const renderLogo = () => {
    const logoSrc = theme === "dark" ? whiteLogo : coloredLogo;
    return (
      <img 
        src={logoSrc} 
        alt="Script Wind" 
        className="h-16 w-auto"
      />
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:scale-105 transition-transform p-2 rounded-lg"
            >
              {renderLogo()}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 text-sm font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
                </button>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 ml-4"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-50 animate-slide-in-right">
          <div className={`absolute inset-0 backdrop-blur-2xl border-r border-primary/30 shadow-2xl ${
            theme === "dark" 
              ? 'bg-slate-900/95' 
              : 'bg-white/95'
          }`}>
            <div className="h-full flex flex-col justify-start items-center pt-20 space-y-6 px-8">
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary"
                >
                  <X size={24} />
                </Button>
              </div>
              
              {/* Logo */}
             
              
              {/* Menu Items */}
              <div className={`w-full rounded-lg p-6 al ${
                theme === "dark" 
                  ? 'bg-slate-800' 
                  : 'bg-gray-100'
              }`}>
               <div className="animate-fade-in mb-4 flex justify-center items-center">
                {renderLogo()}
              </div>
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 animate-fade-in relative group py-3 w-full text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};