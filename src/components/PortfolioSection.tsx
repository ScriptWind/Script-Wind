import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "A comprehensive financial management app with real-time analytics, secure transactions, and beautiful UI built with React Native.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Healthcare CRM",
    category: "Enterprise Software",
    description: "Patient management system with appointment scheduling, medical records, and telehealth integration for healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tags: ["React", "Supabase", "TypeScript", "Tailwind"],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Restaurant Management",
    category: "Custom Application",
    description: "Complete restaurant management solution with POS system, inventory tracking, and customer loyalty program.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Dart", "Stripe"],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Educational Platform",
    category: "Web Application",
    description: "Interactive learning platform with video streaming, progress tracking, and real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "AWS"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Real Estate App",
    category: "Mobile Development",
    description: "Property search and management app with AR visualization, mortgage calculator, and agent communication.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React Native", "Google Maps", "AR Kit", "Firebase"],
    color: "from-cyan-500 to-blue-600"
  }
];

export const PortfolioSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the innovative solutions we've built for businesses across various industries. 
            Each project showcases our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title} 
              className={`group hover-lift cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 transition-smooth flex items-center justify-center`}>
                    <div className="flex space-x-4">
                      <Button variant="glass" size="sm" className="text-white border-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="sm" className="text-white border-white/30">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-tech-gradient text-white text-xs font-medium rounded-full shadow-glow-primary">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <div className="flex items-center text-sm text-primary group-hover:text-accent transition-smooth">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold mb-6">Want to See More?</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              These are just a few examples of our work. We've completed 50+ successful projects across 
              various industries. Let's discuss how we can create something amazing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                View Full Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule a Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};