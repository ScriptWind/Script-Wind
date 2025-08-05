import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "A comprehensive financial management app with real-time analytics, secure transactions, and beautiful UI built with React Native.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-purple-600",
    status: "Completed"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    color: "from-purple-500 to-pink-600",
    status: "Completed"
  },
  {
    title: "Healthcare CRM",
    category: "Enterprise Software",
    description: "Patient management system with appointment scheduling, medical records, and telehealth integration for healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tags: ["React", "Supabase", "TypeScript", "Tailwind"],
    color: "from-green-500 to-teal-600",
    status: "In Progress"
  },
  {
    title: "Restaurant Management",
    category: "Custom Application",
    description: "Complete restaurant management solution with POS system, inventory tracking, and customer loyalty program.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Dart", "Stripe"],
    color: "from-orange-500 to-red-600",
    status: "Completed"
  },
  {
    title: "Educational Platform",
    category: "Web Application",
    description: "Interactive learning platform with video streaming, progress tracking, and real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "AWS"],
    color: "from-indigo-500 to-blue-600",
    status: "Completed"
  },
  {
    title: "Real Estate App",
    category: "Mobile Development",
    description: "Property search and management app with AR visualization, mortgage calculator, and agent communication.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React Native", "Google Maps", "AR Kit", "Firebase"],
    color: "from-cyan-500 to-blue-600",
    status: "Completed"
  },
  {
    title: "Social Media Dashboard",
    category: "Web Application",
    description: "Comprehensive social media management tool with analytics, scheduling, and multi-platform integration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    color: "from-pink-500 to-rose-600",
    status: "Completed"
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Personal fitness companion with workout tracking, nutrition logging, and progress visualization.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    tags: ["React Native", "HealthKit", "Firebase", "ML Kit"],
    color: "from-emerald-500 to-green-600",
    status: "In Progress"
  }
];

const categories = [
  "All Projects",
  "Mobile Development",
  "Web Development",
  "Enterprise Software",
  "Custom Application",
  "Web Application"
];

export const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our complete collection of successful projects. From innovative mobile apps to 
            enterprise-grade web solutions, discover how we turn ideas into digital reality.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-2">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter by Category:</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover-lift cursor-pointer animate-fade-in"
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
                    <Badge variant="secondary" className="bg-primary/90 text-white">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={item.status === "Completed" ? "default" : "secondary"}
                      className={item.status === "Completed" ? "bg-green-500" : "bg-orange-500"}
                    >
                      {item.status}
                    </Badge>
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
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};