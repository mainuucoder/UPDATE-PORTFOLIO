import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero image.jpg";
import TypingAnimation from "./TypingAnimation";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
     <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>

        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Daniel M. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light">Mutahi</span>
          </h1>
          <div className="text-xl md:text-2xl mb-4 text-gray-200">
            <TypingAnimation 
              texts={[
                "Software Developer & Tech Enthusiast",
                "Full Stack Web Developer",
                "AI & Machine Learning Explorer",
                "Data Analysis Specialist"
              ]}
              speed={100}
              delay={2000}
            />
          </div>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Passionate about creating functional and beautiful web experiences with clean, scalable code
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 shadow-hero animate-pulse-glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a
                href="https://github.com/mainuucoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mainuucoder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-mutahi-5952ba298"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <div className="p-3 rounded-full bg-white/10">
              <MapPin className="w-6 h-6" />
            </div>
          </div>
          
          <p className="mt-4 text-gray-300">Garissa, Kenya</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;