import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Smartphone, Globe, Database, Code, X } from "lucide-react";
import mobileAppsIcon from "@/assets/mobile-apps-icon.jpg";
import wordpressIcon from "@/assets/wordpress-icon.jpg";
import crmIcon from "@/assets/crm-icon.jpg";
import webAppsIcon from "@/assets/web-apps-icon.jpg";
const services = [{
  icon: Smartphone,
  image: mobileAppsIcon,
  title: "Mobile App Development",
  description: "High-performance mobile applications using Flutter and React Native — built for both iOS and Android.",
  fullDescription: "We craft high-performance mobile applications using Flutter and React Native — built for both iOS and Android. Our apps are fast, scalable, and tailored to your business needs with clean architecture and a smooth user experience. From concept to deployment, we ensure your mobile app delivers exceptional performance and user satisfaction.",
  features: ["Cross-platform development", "Native performance", "Custom UI/UX design", "App store optimization", "Real-time features", "Offline capabilities"]
}, {
  icon: Globe,
  image: wordpressIcon,
  title: "WordPress Websites",
  description: "Fast, secure, and SEO-ready WordPress websites. From landing pages to advanced business sites.",
  fullDescription: "From landing pages to advanced business sites, we build fast, secure, and SEO-ready WordPress websites. Powered by Elementor and custom themes, we integrate eCommerce, booking, and multilingual features to deliver complete web solutions that drive results for your business.",
  features: ["Custom themes", "SEO optimization", "E-commerce integration", "Responsive design", "Multilingual support", "Performance optimization"]
}, {
  icon: Database,
  image: crmIcon,
  title: "CRM, ERP & HR Systems",
  description: "Smart internal systems that automate workflows and grow with your business.",
  fullDescription: "We develop smart internal systems — from customer relationship management (CRM) to enterprise resource planning (ERP) and HR solutions. Our platforms are built to automate your workflows, centralize operations, and grow with your business, providing real-time insights and streamlined processes.",
  features: ["Process automation", "Data analytics", "Custom workflows", "Integration capabilities", "Real-time reporting", "Scalable architecture"]
}, {
  icon: Code,
  image: webAppsIcon,
  title: "Custom Web Applications",
  description: "Dynamic web applications tailored to your specific needs with modern technologies.",
  fullDescription: "We build dynamic web applications tailored to your specific business needs using modern technologies like React, Vue.js, and robust backend solutions. Our applications are designed for scalability, performance, and exceptional user experience, with features like real-time collaboration, advanced data visualization, and seamless integrations.",
  features: ["Custom development", "API integrations", "Real-time features", "Cloud deployment", "Advanced analytics", "Modern frameworks"]
}];
export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-gradient-subtle opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in building digital solutions that transform businesses. 
            Our expertise spans mobile development, web applications, and enterprise systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:scale-105 hover:shadow-glow-primary transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                {/* Service Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map(feature => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground border-primary/50"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8">Let's discuss your vision and turn it into reality</p>
          <Button size="lg" className="group">
            Get Started Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-gradient mb-4">
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              
              {/* Modal Content */}
              <div className="space-y-6">
                {/* Service Image with Overlay */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <selectedService.icon className="w-16 h-16 text-primary" />
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Service Overview</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map(feature => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1">
                      Start Your Project
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};