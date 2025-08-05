import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "./ScrollAnimation";
import { Newsletter } from "./Newsletter";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "TikTok", icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/></svg>, url: "#" },
  { name: "Threads", icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01 1.5 4.718 5.486.734 12.014.734c6.524 0 10.486 3.984 10.486 11.276 0 3.576-.851 6.43-2.496 8.481-1.85 2.304-4.603 3.485-8.184 3.509z"/></svg>, url: "#" },
  { name: "Twitter/X", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
];

const services = [
  { name: "Mobile App Development", id: "services" },
  { name: "WordPress Websites", id: "services" }, 
  { name: "CRM & ERP Systems", id: "services" },
  { name: "Custom Web Applications", id: "services" },
  { name: "E-commerce Solutions", id: "services" },
  { name: "UI/UX Design", id: "services" }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <ScrollAnimation animationType="fade-up" className="md:col-span-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient">Script Wind</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We build powerful digital solutions that help businesses grow. 
                From scalable mobile apps to high-performance websites, 
                we turn your vision into reality with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@scriptwind.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-WIND</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Global Digital Agency</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="p-3 rounded-lg bg-primary/10 border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary hover:bg-primary/20 group"
                      style={{ '--hover-color': '#ed0e64' } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                        (e.currentTarget as HTMLElement).style.borderColor = '#ed0e64';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '';
                        (e.currentTarget as HTMLElement).style.borderColor = '';
                      }}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 group-hover:animate-bounce" />
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Services */}
          <ScrollAnimation animationType="fade-up" delay={200}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button 
                      onClick={() => scrollToSection(service.id)}
                      className="text-muted-foreground hover:translate-x-2 transition-all duration-200 text-left w-full"
                      style={{ '--hover-color': '#ed0e64' } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '';
                      }}
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation animationType="fade-up" delay={300}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", id: "about" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Tech Stack", id: "tech-stack" },
                  { name: "Contact", id: "contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:translate-x-2 transition-all duration-200"
                      style={{ '--hover-color': '#ed0e64' } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '';
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <ScrollAnimation animationType="fade-up" delay={400}>
            <Newsletter />
          </ScrollAnimation>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <ScrollAnimation animationType="fade-up" delay={500}>
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Script Wind. All rights reserved. Built with ❤️ and cutting-edge technology.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={600}>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-4 md:mt-0 border-primary/20 hover:bg-primary/10 hover:shadow-glow-primary group"
              style={{ '--hover-color': '#ed0e64', '--hover-border-color': '#ed0e64' } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#ed0e64';
                (e.currentTarget as HTMLElement).style.color = '#ed0e64';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '';
                (e.currentTarget as HTMLElement).style.color = '';
              }}
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  );
};