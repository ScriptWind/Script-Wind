import { useState, useEffect } from "react";

const technologies = [
  { name: "React", logo: "⚛️" },
  { name: "React Native", logo: "📱" },
  { name: "Flutter", logo: "🔷" },
  { name: "JavaScript", logo: "🟨" },
  { name: "TypeScript", logo: "🔵" },
  { name: "Node.js", logo: "🟢" },
  { name: "WordPress", logo: "📘" },
  { name: "Supabase", logo: "🟣" },
  { name: "Firebase", logo: "🔥" },
  { name: "MongoDB", logo: "🍃" },
  { name: "PostgreSQL", logo: "🐘" },
  { name: "Docker", logo: "🐳" },
  { name: "AWS", logo: "☁️" },
  { name: "Vercel", logo: "▲" },
  { name: "Figma", logo: "🎨" },
  { name: "Git", logo: "🔄" }
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
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
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
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-card rounded-xl border shadow-elevated hover:shadow-glow-primary transition-smooth hover:scale-105 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{tech.logo}</div>
                  <div className="text-sm font-medium text-center group-hover:text-gradient transition-smooth">
                    {tech.name}
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {technologies.map((tech, index) => (
                <div
                  key={`second-${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-card rounded-xl border shadow-elevated hover:shadow-glow-primary transition-smooth hover:scale-105 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{tech.logo}</div>
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
          <div className="glass-card text-center p-8 rounded-xl hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center group-hover:animate-pulse">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-colors">Frontend Excellence</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Modern frameworks and libraries for creating stunning, responsive user interfaces.
            </p>
          </div>

          <div className="glass-card text-center p-8 rounded-xl hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center group-hover:animate-pulse">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-colors">Backend Power</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Robust server-side technologies and databases for scalable, secure applications.
            </p>
          </div>

          <div className="glass-card text-center p-8 rounded-xl hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-tech-gradient flex items-center justify-center group-hover:animate-pulse">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-colors">Cloud & DevOps</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Modern deployment and infrastructure tools for reliable, scalable solutions.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};