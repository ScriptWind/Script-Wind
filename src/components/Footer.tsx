import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "Twitter/X", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
];

const services = [
  "Mobile App Development",
  "WordPress Websites", 
  "CRM & ERP Systems",
  "Custom Web Applications",
  "E-commerce Solutions",
  "UI/UX Design"
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-gradient-subtle opacity-20" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-2">Script Wind</h3>
                <p className="text-lg text-muted-foreground">Where ideas catch wind</p>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                We build powerful digital solutions that help businesses grow. From scalable mobile apps to high-performance websites, 
                we turn your vision into reality with cutting-edge technology and creative excellence.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-tech-cyan" />
                  <span>hello@scriptwind.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-tech-cyan" />
                  <span>+1 (555) 123-WIND</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-tech-cyan" />
                  <span>Global Digital Agency</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-gradient hover:underline transition-smooth"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Connect With Us</h4>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary hover:scale-110 transition-smooth group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:animate-bounce" />
                  </a>
                ))}
              </div>
              
              {/* Newsletter */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Stay updated with our latest projects and tech insights.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 Script Wind. All rights reserved. Made with ❤️ and cutting-edge tech.
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Terms of Service
                </a>
                
                {/* Back to Top */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="group"
                >
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};