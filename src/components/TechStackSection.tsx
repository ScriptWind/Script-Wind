import { useState, useEffect } from "react";
import { Zap, Wrench, Cloud } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

// Import official SVG icons
import ReactIcon from "@/assets/Tech SVGs/React.svg";
import JavaScriptIcon from "@/assets/Tech SVGs/JavaScript.svg";
import TypeScriptIcon from "@/assets/Tech SVGs/TypeScript.svg";
import NodejsIcon from "@/assets/Tech SVGs/Nodejs.svg";
import WordpressIcon from "@/assets/Tech SVGs/Wordpress.svg";
import SupabaseIcon from "@/assets/Tech SVGs/Supabase.svg";
import FirebaseIcon from "@/assets/Tech SVGs/Firebase.svg";
import DockerIcon from "@/assets/Tech SVGs/Docker.svg";
import AwsIcon from "@/assets/Tech SVGs/aws.svg";
import VercelIcon from "@/assets/Tech SVGs/vercel.svg";
import GithubIcon from "@/assets/Tech SVGs/Github.svg";
import FlutterIcon from "@/assets/Tech SVGs/Flutter.svg";
import NextJSIcon from "@/assets/Tech SVGs/NextJS.svg";
import VueIcon from "@/assets/Tech SVGs/Vue.svg";
import LaravelIcon from "@/assets/Tech SVGs/Laravel.svg";
import ExpressJsIcon from "@/assets/Tech SVGs/ExpressJs.svg";
import TailwindIcon from "@/assets/Tech SVGs/Tailwind.svg";
import ViteIcon from "@/assets/Tech SVGs/Vite.svg";
import VsCodeIcon from "@/assets/Tech SVGs/VsCode.svg";
import ExpoIcon from "@/assets/Tech SVGs/Expo.svg";
import HtmlIcon from "@/assets/Tech SVGs/HTML.svg";
import CssIcon from "@/assets/Tech SVGs/CSS.svg";
import PhpIcon from "@/assets/Tech SVGs/php.svg";
import MySqlIcon from "@/assets/Tech SVGs/MySql.svg";
import PostgresqlIcon from "@/assets/Tech SVGs/postgresql.svg";
import WooCommerceIcon from "@/assets/Tech SVGs/woocommerce.svg";
import OvhIcon from "@/assets/Tech SVGs/OVH.svg";
import HostingerIcon from "@/assets/Tech SVGs/hostinger.svg";
import DeepseekIcon from "@/assets/Tech SVGs/Deepseek.svg";
import ClaudeIcon from "@/assets/Tech SVGs/Claude.svg";
import CursorIcon from "@/assets/Tech SVGs/Cursor.svg";
import OpenaiIcon from "@/assets/Tech SVGs/openai.svg";
import PythonIcon from "@/assets/Tech SVGs/python.svg";
import ReactNativeIcon from "@/assets/Tech SVGs/React Native.svg";

const techCategories = [
  {
    name: "Frontend Frameworks",
    technologies: [
      { name: "React", logo: ReactIcon },
      { name: "Next.js", logo: NextJSIcon },
      { name: "Vue.js", logo: VueIcon },
      { name: "React Native", logo: ReactNativeIcon }
    ]
  },
  {
    name: "Languages",
    technologies: [
      { name: "JavaScript", logo: JavaScriptIcon },
      { name: "TypeScript", logo: TypeScriptIcon },
      { name: "HTML5", logo: HtmlIcon },
      { name: "CSS3", logo: CssIcon },
      { name: "PHP", logo: PhpIcon },
      { name: "Python", logo: PythonIcon }
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", logo: NodejsIcon },
      { name: "Express.js", logo: ExpressJsIcon },
      { name: "Laravel", logo: LaravelIcon }
    ]
  },
  {
    name: "CMS & E-commerce",
    technologies: [
      { name: "WordPress", logo: WordpressIcon },
      { name: "WooCommerce", logo: WooCommerceIcon }
    ]
  },
  {
    name: "Databases",
    technologies: [
      { name: "MySQL", logo: MySqlIcon },
      { name: "PostgreSQL", logo: PostgresqlIcon },
      { name: "Supabase", logo: SupabaseIcon },
      { name: "Firebase", logo: FirebaseIcon }
    ]
  },
  {
    name: "Cloud & Hosting",
    technologies: [
      { name: "AWS", logo: AwsIcon },
      { name: "Vercel", logo: VercelIcon },
      { name: "OVH", logo: OvhIcon },
      { name: "Hostinger", logo: HostingerIcon }
    ]
  },
  {
    name: "Development Tools",
    technologies: [
      { name: "Docker", logo: DockerIcon },
      { name: "GitHub", logo: GithubIcon },
      { name: "VS Code", logo: VsCodeIcon },
      { name: "Cursor", logo: CursorIcon },
      { name: "Vite", logo: ViteIcon }
    ]
  },
  {
    name: "Mobile",
    technologies: [
      { name: "Flutter", logo: FlutterIcon },
      { name: "Expo", logo: ExpoIcon }
    ]
  },
  {
    name: "Styling",
    technologies: [
      { name: "Tailwind CSS", logo: TailwindIcon }
    ]
  },
  {
    name: "AI Tools",
    technologies: [
      { name: "OpenAI", logo: OpenaiIcon },
      { name: "Claude", logo: ClaudeIcon },
      { name: "Deepseek", logo: DeepseekIcon }
    ]
  }
];

// Flatten all technologies for the scrolling showcase
const allTechnologies = techCategories.flatMap(category => category.technologies);

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
              {allTechnologies.map((tech, index) => (
                <div
                  key={`first-${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 glass-card border border-primary/20 hover:shadow-glow-primary hover:scale-110 transition-all duration-500 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <div className="text-sm font-medium text-center group-hover:text-gradient transition-smooth">
                    {tech.name}
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {allTechnologies.map((tech, index) => (
                <div
                  key={`second-${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 glass-card border border-primary/20 hover:shadow-glow-primary hover:scale-110 transition-all duration-500 group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                  </div>
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