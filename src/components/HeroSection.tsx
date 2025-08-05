import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/Compress background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        <div className="absolute inset-0 tech-gradient-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4 uppercase tracking-wide">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>WHERE</span>{' '}
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>IDEAS</span>{' '}
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.5s' }}>CATCH</span>{' '}
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>WIND</span>
          </h1>
          <div className="h-1 w-32 tech-gradient mx-auto rounded-full shadow-glow-primary" />
        </div>

        {/* Tagline */}
        

        {/* Description */}
        <p className="text-lg md:text-xl  max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{
        animationDelay: '0.6s', 
      }}>
          We build powerful digital solutions that help businesses grow. From scalable mobile apps to high-performance websites, 
          we turn your vision into reality with cutting-edge technology and creative excellence.
        </p>

        {/* CTA Buttons */}
        

        {/* Stats */}
        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};