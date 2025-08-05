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
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  { name: "Mobile App Development", id: "mobile" },
  { name: "WordPress Websites", id: "wordpress" }, 
  { name: "CRM & ERP Systems", id: "crm" },
  { name: "Custom Web Applications", id: "web-apps" },
  { name: "E-commerce Solutions", id: "ecommerce" },
  { name: "UI/UX Design", id: "design" }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    // Scroll to services section and highlight specific service
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Successfully Subscribed!",
      description: "Welcome to Script Wind! You'll receive our latest updates and insights.",
      className: "border-primary/20 bg-primary/5",
    });
    
    setEmail("");
    setIsSubscribing(false);
  };

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
                  <li key={service.id}>
                    <button 
                      onClick={() => handleServiceClick(service.id)}
                      className="text-muted-foreground hover:text-gradient hover:underline transition-smooth text-left w-full"
                    >
                      {service.name}
                    </button>
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
                    className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-glow-primary hover:scale-110 hover:rotate-12 transition-all duration-300 group hover:shadow-glow-primary/80"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
              
              {/* Newsletter */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Stay updated with our latest projects and tech insights.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm focus:shadow-glow-primary/50 focus:border-primary/50"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="sm" 
                    className="w-full group"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
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