import { Card, CardContent } from "@/components/ui/card";
import { Globe, Bot, Shield, Cloud, BarChart3, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

const interests = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, modern web applications with cutting-edge technologies",
    color: "text-blue-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Exploring machine learning, automation, and intelligent systems",
    color: "text-purple-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Writing secure, clean code and implementing best security practices",
    color: "text-green-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20",
    shadowColor: "shadow-green-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Leveraging cloud services for scalability and modern infrastructure",
    color: "text-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Using Python, R & SPSS for smart insights and data-driven decisions",
    color: "text-orange-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/20",
    shadowColor: "shadow-orange-500/20",
  },
  {
    icon: Zap,
    title: "API Testing",
    description: "Testing APIs with Postman, REST clients, and automated testing frameworks",
    color: "text-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/20",
    shadowColor: "shadow-yellow-500/20",
  },
];

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleInterests, setVisibleInterests] = useState<number[]>([]);
  const [activeInterest, setActiveInterest] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    interests.forEach((_, index) => {
      setTimeout(() => {
        setVisibleInterests(prev => [...prev, index]);
      }, index * 150);
    });
  }, [isVisible]);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const progress = visibleHeight / windowHeight;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInterestClick = (index: number) => {
    if (activeInterest === index) return;
    
    setActiveInterest(index);
    setVisibleInterests(prev => prev.filter(i => i !== index));
    
    setTimeout(() => {
      setVisibleInterests(prev => [...prev, index].sort((a, b) => a - b));
      setActiveInterest(null);
    }, 800);
  };

  // Get animation style based on visibility and scroll
  const getAnimationStyle = (index: number, column: number) => {
    const isVisibleCard = visibleInterests.includes(index);
    const baseDelay = index * 100;
    
    if (!isVisibleCard) {
      switch(column) {
        case 0: return { transform: 'translateX(-30px)', opacity: 0, transitionDelay: `${baseDelay}ms` };
        case 1: return { transform: 'translateY(20px)', opacity: 0, transitionDelay: `${baseDelay}ms` };
        case 2: return { transform: 'translateX(30px)', opacity: 0, transitionDelay: `${baseDelay}ms` };
        default: return { opacity: 0 };
      }
    }
    
    // Add subtle floating effect based on scroll
    const floatOffset = Math.sin(scrollProgress * Math.PI * 2 + index * 0.5) * 5;
    
    return {
      transform: `translateY(${floatOffset}px)`,
      opacity: 1,
      transitionDelay: `${baseDelay}ms`,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section ref={sectionRef} id="interests" className="py-20 bg-background overflow-hidden relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `hsl(${i * 24}, 70%, 60%, 0.15)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transform transition-all duration-1000",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-10 opacity-0"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
            Areas of technology that fuel my passion and drive my continuous learning journey
          </p>
        </div>

        {/* Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const column = index % 3;
            const animationStyle = getAnimationStyle(index, column);

            return (
              <button
                key={index}
                onClick={() => handleInterestClick(index)}
                className="group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-4 focus:ring-offset-background"
                style={animationStyle}
              >
                {/* Glow effect */}
                <div className={cn(
                  "absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500",
                  interest.shadowColor
                )} />

                <Card className={cn(
                  "relative w-full h-full transition-all duration-500 border overflow-hidden",
                  "bg-card hover:bg-card/95",
                  "shadow-lg hover:shadow-2xl",
                  "border-border/50 hover:border-primary/30",
                  activeInterest === index && "ring-2 ring-primary ring-offset-2"
                )}>
                  {/* Card background gradient on hover */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    interest.bgColor
                  )} />

                  <CardContent className="relative p-6 sm:p-8 text-center z-10">
                    {/* Icon with gradient background */}
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl mb-6 relative overflow-hidden",
                      "bg-card group-hover:bg-transparent",
                      "border border-border/30",
                      "group-hover:scale-110 transition-all duration-300",
                      activeInterest === index && "animate-pulse"
                    )}>
                      {/* Icon gradient background on hover */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        interest.bgColor
                      )} />
                      
                      <Icon className={cn(
                        "w-10 h-10 relative z-10",
                        interest.color,
                        "drop-shadow-lg"
                      )} />
                    </div>
                    
                    {/* Title with gradient text on hover */}
                    <h3 className={cn(
                      "text-xl font-bold mb-4 transition-all duration-300",
                      "text-card-foreground",
                      "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r",
                      "group-hover:from-primary group-hover:to-accent"
                    )}>
                      {interest.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                      {interest.description}
                    </p>

                    {/* Hover effect line */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>

                  {/* Click animation effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl bg-primary/5",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    activeInterest === index && "animate-ping opacity-0"
                  )} />
                </Card>
              </button>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-card backdrop-blur-sm border border-border/50 mb-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">
              Technologies & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Tools</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Python", "R", "SPSS", "Postman", "Git",
              "Linux", "AWS", "MongoDB", "Docker", "REST APIs", "GraphQL"
            ].map((skill, index) => (
              <span
                key={index}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  "bg-card hover:bg-card/80",
                  "border border-border/50 hover:border-primary/50",
                  "shadow-sm hover:shadow-lg hover:scale-105",
                  "text-foreground/90 hover:text-foreground",
                  "cursor-default select-none"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-3xl -z-10" />
      </div>

      {/* Add CSS animations using style tag without jsx/global attributes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(5px); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          * {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </section>
  );
};

export default Interests;