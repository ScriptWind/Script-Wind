import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "bounce-in";
  delay?: number;
  threshold?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = "", 
  animationType = "fade-up", 
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (inView) {
      switch (animationType) {
        case "fade-up":
          return `${baseClasses} opacity-100 translate-y-0`;
        case "fade-down":
          return `${baseClasses} opacity-100 -translate-y-0`;
        case "fade-left":
          return `${baseClasses} opacity-100 translate-x-0`;
        case "fade-right":
          return `${baseClasses} opacity-100 -translate-x-0`;
        case "scale-in":
          return `${baseClasses} opacity-100 scale-100`;
        case "bounce-in":
          return `${baseClasses} opacity-100 scale-100 animate-bounce`;
        default:
          return `${baseClasses} opacity-100 translate-y-0`;
      }
    } else {
      switch (animationType) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fade-down":
          return `${baseClasses} opacity-0 -translate-y-8`;
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "scale-in":
          return `${baseClasses} opacity-0 scale-95`;
        case "bounce-in":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};