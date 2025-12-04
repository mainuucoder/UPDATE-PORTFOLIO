import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile_Image.jpg";
import TypingAnimation from "./TypingAnimation";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-white/15 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-white px-6 max-w-screen-2xl mx-auto w-full mt-8 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left lg:w-3/4 xl:w-4/5 animate-fade-in-up mt-4 w-full">
            <div className="mb-8 lg:mb-10 w-full lg:max-w-none">
              {/* Main Heading - Serif font style */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 lg:mb-6 leading-tight tracking-wide">
                Daniel M. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300 font-light">Mutahi</span>
              </h1>
              
              <div className="mb-6 lg:mb-8">
                {/* Typing Animation - Sans-serif font */}
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 text-gray-100 font-sans font-medium min-h-[70px] flex items-center justify-center lg:justify-start tracking-wide">
                  <TypingAnimation 
                    texts={[
                      "Software Developer & Tech Enthusiast",
                      "Full Stack Web Developer",
                      "AI & Machine Learning Explorer",
                      "AI for Software Engineering Specialist",
                      "Python, JavaScript, TypeScript, React, Next.js, Node.js Developer",
                    ]}
                    speed={100}
                    delay={2000}
                  />
                </div>
                
                {/* Main Text - Different font styles */}
                <div className="relative space-y-4">
                  {/* First paragraph - Modern sans-serif */}
                  <p className="max-w-none text-xl lg:text-2xl xl:text-3xl text-white font-sans font-light leading-relaxed tracking-wide">
                    Passionate about crafting exceptional digital experiences through meticulously clean, 
                    scalable, and maintainable code that stands the test of time and technological evolution.
                  </p>
                  
                  {/* Separator */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-50"></div>
                  
                  {/* Second paragraph - Monospace/technical font */}
                  <p className="max-w-none text-lg lg:text-xl xl:text-2xl text-gray-100 font-mono font-normal leading-relaxed tracking-wide italic">
                    I bridge the gap between complex technical requirements and seamless user experiences.
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Floating Circular Photo */}
          <div className="lg:w-1/4 xl:w-1/5 flex justify-center lg:justify-end w-full">
            <div className="relative -mt-8 lg:mt-0 animate-float-slow">
              <div className="relative w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl animate-float">
                <img
                  src={profileImage}
                  alt="Daniel Mutahi Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-white/20"></div>
              </div>

              <div className="absolute -top-3 -left-3 w-14 h-14 border-3 border-white/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-3 border-white/20 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -inset-4 border-2 border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_80px_30px_rgba(255,255,255,0.2)] animate-pulse-soft"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 lg:mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-10">
            <Button 
              size="lg" 
              className="bg-white text-gray-800 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all px-14 py-8 text-xl min-w-[280px] font-sans font-semibold tracking-wide"
            >
              <Mail className="w-7 h-7 mr-3" />
              Get In Touch
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 backdrop-blur-lg px-14 py-8 text-xl min-w-[280px] font-sans font-semibold tracking-wide"
            >
              <a
                href="https://smart-waste-management-system-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="w-7 h-7 mr-3" />
                View Projects
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://github.com/mainuucoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-lg shadow-lg"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-mutahi-5952ba298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-lg shadow-lg"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-lg shadow-lg"
              >
                <Mail className="w-7 h-7" />
              </a>
              <div className="flex items-center gap-3 p-4 rounded-full bg-white/20 backdrop-blur-lg shadow-lg font-sans">
                <MapPin className="w-7 h-7" />
                <span className="text-lg font-medium tracking-wide">Garissa, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center backdrop-blur-lg shadow-lg">
          <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;