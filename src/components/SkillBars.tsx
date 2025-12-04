import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon?: string;
  description?: string;
}

const skills: Skill[] = [
  { 
    name: "HTML/CSS", 
    level: 90, 
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    icon: "🎨",
    description: "Semantic HTML, CSS3, Flexbox, Grid, Responsive Design"
  },
  { 
    name: "JavaScript", 
    level: 85, 
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    icon: "⚡",
    description: "ES6+, DOM Manipulation, Async Programming, APIs"
  },
  { 
    name: "Python", 
    level: 80, 
    color: "bg-gradient-to-r from-blue-500 to-green-500",
    icon: "🐍",
    description: "Data Analysis, Automation, Scripting, Flask"
  },
  { 
    name: "React", 
    level: 75, 
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
    icon: "⚛️",
    description: "Hooks, Context API, State Management, Components"
  },
  { 
    name: "Data Analysis", 
    level: 70, 
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: "📊",
    description: "Pandas, NumPy, Data Visualization, Statistical Analysis"
  },
  { 
    name: "Git/GitHub", 
    level: 85, 
    color: "bg-gradient-to-r from-gray-700 to-gray-900",
    icon: "📚",
    description: "Version Control, Collaboration, CI/CD, Workflows"
  },
  { 
    name: "TypeScript", 
    level: 75, 
    color: "bg-gradient-to-r from-blue-600 to-blue-800",
    icon: "📝",
    description: "Type Safety, Interfaces, Generics, Advanced Types"
  },
  { 
    name: "Node.js", 
    level: 70, 
    color: "bg-gradient-to-r from-green-600 to-green-800",
    icon: "🟢",
    description: "Express.js, REST APIs, Middleware, Authentication"
  },
];

const SkillBars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0));
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        const duration = 1800;
        const startTime = Date.now();
        const startLevel = 0;
        const endLevel = skill.level;

        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth easing function
          const easeOutExpo = 1 - Math.pow(2, -10 * progress);
          const currentLevel = startLevel + (endLevel - startLevel) * easeOutExpo;

          setAnimatedLevels(prev => {
            const newLevels = [...prev];
            newLevels[index] = currentLevel;
            return newLevels;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        // Stagger the animations with different delays
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, index * 150);
      });
    }
  }, [isVisible]);

  // Function to get skill level label
  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `hsl(${i * 30}, 70%, 50%, 0.1)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
            My proficiency levels in various technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "transform transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Card className={cn(
                  "h-full shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden",
                  "bg-card hover:bg-card/95",
                  hoveredSkill === index && "ring-2 ring-primary/50 ring-offset-2"
                )}>
                  <CardContent className="p-6">
                    {/* Skill Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground">{skill.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                              {getLevelLabel(skill.level)}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              • {skill.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                          {Math.round(animatedLevels[index])}%
                        </span>
                        <div className="text-xs text-muted-foreground">Proficiency</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      {/* Background track */}
                      <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        {/* Animated progress */}
                        <div
                          className={cn(
                            "h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out",
                            skill.color
                          )}
                          style={{ width: `${animatedLevels[index]}%` }}
                        >
                          {/* Shimmer effect */}
                          <div 
                            className={cn(
                              "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                              "transform -skew-x-12 transition-all duration-1000",
                              hoveredSkill === index ? "opacity-100" : "opacity-30"
                            )}
                            style={{ 
                              animation: hoveredSkill === index ? 'shimmer 2s infinite' : 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div
                        className={cn(
                          "absolute top-0 left-0 h-full rounded-full opacity-30 blur-sm transition-all duration-1000",
                          skill.color
                        )}
                        style={{ width: `${animatedLevels[index]}%` }}
                      />

                      {/* Progress dots */}
                      <div className="flex justify-between mt-2">
                        {[0, 25, 50, 75, 100].map((mark) => (
                          <div
                            key={mark}
                            className={cn(
                              "w-1 h-1 rounded-full transition-all duration-300",
                              animatedLevels[index] >= mark 
                                ? "bg-primary scale-125" 
                                : "bg-muted-foreground/30"
                            )}
                          />
                        ))}
                      </div>

                      {/* Animated particles on progress */}
                      {hoveredSkill === index && (
                        <div className="absolute -top-2 left-0 w-full overflow-hidden">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-primary animate-bounce"
                              style={{
                                left: `${Math.random() * animatedLevels[index]}%`,
                                animationDelay: `${i * 0.3}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Experience indicator */}
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Currently using</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-1 h-4 rounded-full transition-all duration-300",
                              i < Math.floor(skill.level / 33) 
                                ? "bg-primary" 
                                : "bg-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Currently Using</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-muted-foreground">Proficiency Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-4 rounded-full bg-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">Experience Depth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default SkillBars;