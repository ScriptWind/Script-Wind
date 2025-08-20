import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  Linkedin,  Mail, Phone, MapPin, ArrowUp, } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "./ScrollAnimation";
import { Newsletter } from "./Newsletter";
const socialLinks = [{
  name: "Facebook",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>,
  url: "https://www.facebook.com/scriptwind"
}, {
  name: "Instagram",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>,
  url: "https://www.instagram.com/scriptwind"
}, {
  name: "TikTok",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
  url: "https://www.tiktok.com/@script_wind"
}, {
  name: "Threads",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" /></svg>,
  url: "https://www.threads.com/@scriptwind"
}, {
  name: "X",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>,
  url: "https://x.com/script_wind"
}, {
  name: "LinkedIn",
  icon: Linkedin,
  url: "https://www.linkedin.com/in/jude-jayathilaka"
}, {
  name: "YouTube",
  icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  url: "https://www.youtube.com/@script_wind"
}];
const services = [{
  name: "Mobile App Development",
  id: "services"
}, {
  name: "WordPress Websites",
  id: "services"
}, {
  name: "CRM & ERP Systems",
  id: "services"
}, {
  name: "Custom Web Applications",
  id: "services"
}, {
  name: "E-commerce Solutions",
  id: "services"
}, {
  name: "UI/UX Design",
  id: "services"
}];
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
export const Footer = () => {
  return <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <ScrollAnimation animationType="fade-up" className="md:col-span-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient">SCRIPT WIND</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We build powerful digital solutions that help businesses grow. 
                From scalable mobile apps to high-performance websites, 
                we turn your vision into reality with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>developer@scriptwind.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+94 70 301 1048</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Global Digital Agency</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center sm:justify-start">
                {socialLinks.map(social => {
                const IconComponent = social.icon;
                return <a key={social.name} href={social.url} className="p-3 rounded-lg bg-primary/10 border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary hover:bg-primary/20 group" style={{
                  '--hover-color': '#ed0e64'
                } as React.CSSProperties} onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                  (e.currentTarget as HTMLElement).style.borderColor = '#ed0e64';
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }} aria-label={social.name}>
                      <IconComponent className="w-5 h-5 group-hover:animate-bounce" />
                    </a>;
              })}
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Services */}
          <ScrollAnimation animationType="fade-up" delay={200}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Our Services</h4>
              <ul className="space-y-3">
                {services.map(service => <li key={service.name}>
                    <button onClick={() => scrollToSection(service.id)} className="text-muted-foreground hover:translate-x-2 transition-all duration-200 text-left w-full" style={{
                  '--hover-color': '#ed0e64'
                } as React.CSSProperties} onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '';
                }}>
                      {service.name}
                    </button>
                  </li>)}
              </ul>
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation animationType="fade-up" delay={300}>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[{
                name: "About Us",
                id: "about"
              }, {
                name: "Portfolio",
                id: "portfolio"
              }, {
                name: "Tech Stack",
                id: "tech-stack"
              }, {
                name: "Contact",
                id: "contact"
              }].map(link => <li key={link.name}>
                    <button onClick={() => scrollToSection(link.id)} className="text-muted-foreground hover:translate-x-2 transition-all duration-200" style={{
                  '--hover-color': '#ed0e64'
                } as React.CSSProperties} onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#ed0e64';
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '';
                }}>
                      {link.name}
                    </button>
                  </li>)}
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <ScrollAnimation animationType="fade-up" delay={400}>
            <Newsletter />
          </ScrollAnimation>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <ScrollAnimation animationType="fade-up" delay={500}>
            <p className="text-muted-foreground text-center md:text-left">© 2025 Script Wind. All rights reserved. </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={600}>
            <Button onClick={scrollToTop} variant="outline" size="sm" className="mt-4 md:mt-0 border-primary/20 hover:bg-primary/10 hover:shadow-glow-primary group" style={{
            '--hover-color': '#ed0e64',
            '--hover-border-color': '#ed0e64'
          } as React.CSSProperties} onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = '#ed0e64';
            (e.currentTarget as HTMLElement).style.color = '#ed0e64';
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = '';
            (e.currentTarget as HTMLElement).style.color = '';
          }}>
              <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </footer>;
};