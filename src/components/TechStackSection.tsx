import { useState, useEffect } from "react";
import { Zap, Wrench, Cloud } from "lucide-react";

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2" fill="none"><ellipse rx="13" ry="5.5" transform="matrix(.866 .5 -.866 .5 16 16)"/><ellipse rx="13" ry="5.5" transform="matrix(-.866 .5 .866 .5 16 16)"/><ellipse rx="13" ry="5.5" transform="matrix(0 1 1 0 16 16)"/></g></svg>
);
const JSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="8" y="23" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg>
);
const TSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg>
);
const ReactNativeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#61dafb"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#222">RN</text></svg>
);
const FlutterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><polygon points="6,26 26,6 20,6 6,20" fill="#42A5F5"/><polygon points="14,20 20,26 26,26 20,20" fill="#1976D2"/></svg>
);
const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#3C873A"/><text x="6" y="23" fontSize="16" fontWeight="bold" fill="#fff">Node</text></svg>
);
const WordPressIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#21759B"/><text x="5" y="23" fontSize="16" fontWeight="bold" fill="#fff">WP</text></svg>
);
const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3ECF8E"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#222">SB</text></svg>
);
const FirebaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#FFCA28"/><polygon points="8,24 16,8 24,24" fill="#FFA000"/></svg>
);
const MongoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="16" fill="#47A248"/><rect x="14" y="8" width="4" height="16" rx="2" fill="#fff"/></svg>
);
const PostgresIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#336791"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">PG</text></svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#2496ED"/><rect x="8" y="18" width="16" height="6" rx="2" fill="#fff"/><rect x="12" y="14" width="8" height="4" rx="1" fill="#fff"/></svg>
);
const AWSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#FF9900"/><text x="4" y="23" fontSize="16" fontWeight="bold" fill="#222">AWS</text></svg>
);
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#000"/><polygon points="16,8 28,26 4,26" fill="#fff"/></svg>
);
const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F05032"/><circle cx="16" cy="16" r="6" fill="#fff"/><text x="10" y="21" fontSize="10" fontWeight="bold" fill="#F05032">git</text></svg>
);

const technologies = [
  { name: "React", logo: <ReactIcon className="w-10 h-10" /> },
  { name: "React Native", logo: <ReactNativeIcon className="w-10 h-10" /> },
  { name: "Flutter", logo: <FlutterIcon className="w-10 h-10" /> },
  { name: "JavaScript", logo: <JSIcon className="w-10 h-10" /> },
  { name: "TypeScript", logo: <TSIcon className="w-10 h-10" /> },
  { name: "Node.js", logo: <NodeIcon className="w-10 h-10" /> },
  { name: "WordPress", logo: <WordPressIcon className="w-10 h-10" /> },
  { name: "Supabase", logo: <SupabaseIcon className="w-10 h-10" /> },
  { name: "Firebase", logo: <FirebaseIcon className="w-10 h-10" /> },
  { name: "MongoDB", logo: <MongoIcon className="w-10 h-10" /> },
  { name: "PostgreSQL", logo: <PostgresIcon className="w-10 h-10" /> },
  { name: "Docker", logo: <DockerIcon className="w-10 h-10" /> },
  { name: "AWS", logo: <AWSIcon className="w-10 h-10" /> },
  { name: "Vercel", logo: <VercelIcon className="w-10 h-10" /> },
  { name: "Git", logo: <GitIcon className="w-10 h-10" /> }
];

export const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('tech-stack');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" className="py-24 px-4 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--tech-blue)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, hsl(var(--tech-purple)) 0%, transparent 50%),
                           radial-gradient(circle at 40% 60%, hsl(var(--tech-cyan)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 pb-4">
              Technology Stack
            </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build robust, scalable, and modern solutions. 
            Our tech stack is carefully chosen to deliver the best performance and user experience.
          </p>
        </div>

        {/* Scrolling Technology Logos */}
        <div className="relative">
          <div className="flex overflow-hidden" style={{
            mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
            WebkitMask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)'
          }}>
            <div className={`flex space-x-8 ${isVisible ? 'animate-scroll-horizontal' : ''}`}>
              {/* First set */}
              {technologies.map((tech, index) => (
                <div
                  key={`first-${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 glass-card border border-primary/20 hover:shadow-glow-primary hover:scale-110 transition-all duration-500 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{typeof tech.logo === 'string' ? tech.logo : tech.logo}</div>
                  <div className="text-sm font-medium text-center group-hover:text-gradient transition-smooth">
                    {tech.name}
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {technologies.map((tech, index) => (
                <div
                  key={`second-${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 glass-card border border-primary/20 hover:shadow-glow-primary hover:scale-110 transition-all duration-500 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{typeof tech.logo === 'string' ? tech.logo : tech.logo}</div>
                  <div className="text-sm font-medium text-center group-hover:text-gradient transition-smooth">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card text-center p-8 rounded-xl hover-lift group hover:shadow-glow-primary/50 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-primary/80 group-hover:scale-110 transition-all duration-300">
              <Zap className="w-8 h-8 text-white group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-all duration-300">Frontend Excellence</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-all duration-300">
              Modern frameworks and libraries for creating stunning, responsive user interfaces.
            </p>
          </div>

          <div className="glass-card text-center p-8 rounded-xl hover-lift group hover:shadow-glow-primary/50 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-primary/80 group-hover:scale-110 transition-all duration-300">
              <Wrench className="w-8 h-8 text-white group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-all duration-300">Backend Power</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-all duration-300">
              Robust server-side technologies and databases for scalable, secure applications.
            </p>
          </div>

          <div className="glass-card text-center p-8 rounded-xl hover-lift group hover:shadow-glow-primary/50 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-primary/80 group-hover:scale-110 transition-all duration-300">
              <Cloud className="w-8 h-8 text-white group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-all duration-300">Cloud & DevOps</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-all duration-300">
              Modern deployment and infrastructure tools for reliable, scalable solutions.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};