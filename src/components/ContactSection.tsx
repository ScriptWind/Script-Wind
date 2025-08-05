import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "./ScrollAnimation";
import { AnimatedText } from "./AnimatedText";

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
}

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "🎉 Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      className: "border-primary/20 bg-primary/5",
    });

    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full tech-gradient-subtle opacity-30" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-tech-cyan/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-tech-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimation animationType="fade-up" className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
            Let's Build Together
          </h1>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into powerful digital solutions? 
              Get in touch and let's discuss how we can help bring your vision to life.
            </p>
          </ScrollAnimation>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimation animationType="fade-right">
              <Card className="glass-card hover:shadow-glow-primary/50 transition-all duration-500 border border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">developer@scriptwind.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+94 70 301 1048</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Global Digital Agency</p>
                  </div>
                </div>
              </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Why Choose Us */}
            <ScrollAnimation animationType="fade-right" delay={200}>
              <Card className="glass-card hover:shadow-glow-primary/50 transition-all duration-500 border border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-gradient">Why Choose Script Wind?</h3>
                <ul className="space-y-4">
                  {[
                    "Fast turnaround times",
                    "Transparent communication",
                    "Cutting-edge technology",
                    "24/7 support & maintenance",
                    "Scalable solutions"
                  ].map((item, index) => (
                    <li key={item} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <ScrollAnimation animationType="fade-left">
            <Card className="glass-card hover:shadow-glow-primary/50 transition-all duration-500 border border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gradient">Start Your Project</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-bounce-letters">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold mb-2 text-gradient">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-muted-foreground/30 focus:border-primary focus:shadow-glow-primary transition-all duration-300 dark:border-muted-foreground/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-muted-foreground/30 focus:border-primary focus:shadow-glow-primary transition-all duration-300 dark:border-muted-foreground/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-muted-foreground/30 focus:border-primary focus:shadow-glow-primary transition-all duration-300 dark:border-muted-foreground/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <Input
                        id="project"
                        name="project"
                        placeholder="Mobile App, Website, CRM..."
                        value={formData.project}
                        onChange={handleInputChange}
                        className="border-muted-foreground/30 focus:border-primary focus:shadow-glow-primary transition-all duration-300 dark:border-muted-foreground/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-muted-foreground/30 focus:border-primary focus:shadow-glow-primary transition-all duration-300 dark:border-muted-foreground/30"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};