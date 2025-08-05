import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="tech-stack">
        <TechStackSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
