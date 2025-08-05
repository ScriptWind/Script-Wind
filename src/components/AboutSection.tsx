import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Rocket } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { AnimatedText } from "./AnimatedText";
const milestones = [{
  year: "2021",
  title: "Founded",
  description: "Script Wind was born with a vision to help businesses harness the power of digital transformation."
}, {
  year: "2022",
  title: "First Major Project",
  description: "Delivered our first enterprise-level CRM system, setting the foundation for our expertise in business solutions."
}, {
  year: "2023",
  title: "Mobile Focus",
  description: "Expanded into mobile app development, specializing in React Native and Flutter applications."
}, {
  year: "2024",
  title: "Growth & Innovation",
  description: "Reached 50+ successful projects and established ourselves as a trusted digital solutions partner."
}];
const values = [{
  icon: Target,
  title: "Precision",
  description: "Every line of code is crafted with purpose and attention to detail."
}, {
  icon: Users,
  title: "Collaboration",
  description: "We work closely with our clients to understand their vision and goals."
}, {
  icon: Lightbulb,
  title: "Innovation",
  description: "We stay ahead of technology trends to deliver cutting-edge solutions."
}, {
  icon: Rocket,
  title: "Growth",
  description: "We build solutions that scale and grow with your business needs."
}];
export const AboutSection = () => {
  return <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimation animationType="fade-up" className="text-center mb-16">
          <AnimatedText animationType="glow-pulse" className="text-5xl md:text-6xl font-bold mb-6">
            About Script Wind
          </AnimatedText>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're more than just a development team — we're your digital transformation partners. 
              At Script Wind, we combine technical expertise with creative vision to build solutions that make a real impact.
            </p>
          </ScrollAnimation>
        </ScrollAnimation>

        {/* Mission Statement */}
        <ScrollAnimation animationType="scale-in" className="text-center mb-20">
          <Card className="max-w-4xl mx-auto bg-tech-gradient p-12 border-0 shadow-glow-primary hover:shadow-glow-primary/80 transition-all duration-500 hover:scale-105">
            <div className="text-white">
              <AnimatedText animationType="slide-up-words" className="text-3xl font-bold mb-6">
                Our Mission
              </AnimatedText>
              <p className="text-xl leading-relaxed opacity-90 text-slate-800">
                To turn your vision into a reliable, scalable, and beautifully built product — fast and professionally. 
                We combine <strong>clean code</strong>, <strong>bold ideas</strong>, and a <strong>user-first mindset</strong> to deliver results that truly make an impact.
              </p>
            </div>
          </Card>
        </ScrollAnimation>

        {/* Company Values */}
        <div className="mb-20">
          <ScrollAnimation animationType="fade-up">
            <AnimatedText animationType="bounce-letters" className="text-3xl font-bold text-center mb-12">
              Our Values
            </AnimatedText>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <ScrollAnimation key={value.title} animationType="fade-up" delay={index * 150}>
                <Card className="text-center hover-lift group hover:shadow-glow-primary/50 transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tech-gradient flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-primary/80 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-foreground transition-all duration-300">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>)}
          </div>
        </div>

        {/* Company Timeline */}
        

        {/* Team CTA */}
        <div className="text-center">
          
        </div>
      </div>
    </section>;
};