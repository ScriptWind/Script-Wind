import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVideoBackground from "@/assets/hero-video-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVideoBackground}
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 tech-gradient-subtle" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-tech-cyan rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-tech-blue rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-tech-purple rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
            Script Wind
          </h1>
          <div className="h-1 w-32 tech-gradient mx-auto rounded-full shadow-glow-primary" />
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl font-light mb-8 text-foreground/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Where ideas catch wind
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
          We build powerful digital solutions that help businesses grow. From scalable mobile apps to high-performance websites, 
          we turn your vision into reality with cutting-edge technology and creative excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glass" size="xl" className="group">
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            Watch Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};