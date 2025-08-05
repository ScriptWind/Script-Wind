import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Rocket } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "Founded",
    description: "Script Wind was born with a vision to help businesses harness the power of digital transformation."
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Delivered our first enterprise-level CRM system, setting the foundation for our expertise in business solutions."
  },
  {
    year: "2023",
    title: "Mobile Focus",
    description: "Expanded into mobile app development, specializing in React Native and Flutter applications."
  },
  {
    year: "2024",
    title: "Growth & Innovation",
    description: "Reached 50+ successful projects and established ourselves as a trusted digital solutions partner."
  }
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code is crafted with purpose and attention to detail."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to understand their vision and goals."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions."
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "We build solutions that scale and grow with your business needs."
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            About Script Wind
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're more than just a development team — we're your digital transformation partners. 
            At Script Wind, we combine technical expertise with creative vision to build solutions that make a real impact.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-20">
          <Card className="max-w-4xl mx-auto bg-tech-gradient p-12 border-0 shadow-glow-primary">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed opacity-90">
                To turn your vision into a reliable, scalable, and beautifully built product — fast and professionally. 
                We combine <strong>clean code</strong>, <strong>bold ideas</strong>, and a <strong>user-first mindset</strong> to deliver results that truly make an impact.
              </p>
            </div>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className={`text-center hover-lift animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tech-gradient flex items-center justify-center shadow-glow-primary">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tech-gradient rounded-full shadow-glow-primary" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tech-gradient rounded-full shadow-glow-primary z-10 border-4 border-background" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="hover-lift">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl">{milestone.title}</CardTitle>
                          <span className="text-sm font-mono bg-tech-gradient text-white px-3 py-1 rounded-full">
                            {milestone.year}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold mb-6">Ready to Work With Us?</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the growing list of businesses that trust Script Wind to deliver exceptional digital solutions. 
              Let's build something amazing together.
            </p>
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};