import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  animationType?: "typewriter" | "gradient-wave" | "glow-pulse" | "bounce-letters" | "slide-up-words";
  delay?: number;
}

export const AnimatedText = ({ 
  children, 
  className = "", 
  animationType = "gradient-wave", 
  delay = 0 
}: AnimatedTextProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    if (!inView) return "opacity-0";

    switch (animationType) {
      case "typewriter":
        return "animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-primary";
      case "gradient-wave":
        return "animate-gradient-wave bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent";
      case "glow-pulse":
        return "animate-glow-pulse text-primary drop-shadow-[0_0_10px_rgba(237,14,100,0.5)]";
      case "bounce-letters":
        return "animate-bounce-letters";
      case "slide-up-words":
        return "animate-slide-up-words";
      default:
        return "animate-gradient-wave bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent";
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className} leading-tight`}
      style={{ animationDelay: `${delay}ms`, lineHeight: '2' }}
    >
      {children}
    </div>
  );
};