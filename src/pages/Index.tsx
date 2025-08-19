import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Script Wind - Where Ideas Catch Wind | Digital Solutions & Development"
        description="Script Wind builds powerful digital solutions including mobile apps, WordPress websites, CRM systems, and custom web applications. Transform your business with cutting-edge technology."
        keywords="Script Wind, digital solutions, mobile apps, web development, WordPress, CRM systems, custom software, business technology, app development, website design"
        url="https://scriptwind.com"
        type="website"
      />
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
        {/* <div id="portfolio">
          <PortfolioSection />
        </div> */}
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
