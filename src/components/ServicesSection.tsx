import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Database, Code } from "lucide-react";
import mobileAppsIcon from "@/assets/mobile-apps-icon.jpg";
import wordpressIcon from "@/assets/wordpress-icon.jpg";
import crmIcon from "@/assets/crm-icon.jpg";
import webAppsIcon from "@/assets/web-apps-icon.jpg";

const services = [
  {
    icon: Smartphone,
    image: mobileAppsIcon,
    title: "Mobile App Development",
    description: "High-performance mobile applications using Flutter and React Native — built for both iOS and Android with clean architecture and smooth user experience.",
    features: ["Cross-platform development", "Native performance", "Custom UI/UX design", "App store optimization"]
  },
  {
    icon: Globe,
    image: wordpressIcon,
    title: "WordPress Websites",
    description: "Fast, secure, and SEO-ready WordPress websites. From landing pages to advanced business sites with eCommerce and multilingual features.",
    features: ["Custom themes", "SEO optimization", "E-commerce integration", "Responsive design"]
  },
  {
    icon: Database,
    image: crmIcon,
    title: "CRM, ERP & HR Systems",
    description: "Smart internal systems for customer relationship management, enterprise resource planning, and HR solutions that automate workflows and grow with your business.",
    features: ["Process automation", "Data analytics", "Custom workflows", "Integration capabilities"]
  },
  {
    icon: Code,
    image: webAppsIcon,
    title: "Custom Web Applications",
    description: "Dynamic web applications tailored to your specific needs. Built with modern technologies for scalability, performance, and user experience.",
    features: ["Custom development", "API integrations", "Real-time features", "Cloud deployment"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-gradient-subtle opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in building digital solutions that transform businesses. 
            Our expertise spans mobile development, web applications, and enterprise systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className={`group hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="relative">
                {/* Service Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                
                {/* Service Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center shadow-glow-primary">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-tech-gradient rounded-2xl p-12 shadow-glow-primary">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into powerful digital solutions. 
              Our team is ready to bring your vision to life.
            </p>
            <Button variant="glass" size="xl" className="text-white border-white/30 hover:bg-white/20">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};