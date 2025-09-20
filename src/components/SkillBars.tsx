import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, color: "bg-gradient-to-r from-orange-500 to-red-500" },
  { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
  { name: "Python", level: 80, color: "bg-gradient-to-r from-blue-500 to-green-500" },
  { name: "React", level: 75, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
  { name: "Data Analysis", level: 70, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Git/GitHub", level: 85, color: "bg-gradient-to-r from-gray-700 to-gray-900" },
];

const SkillBars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        const duration = 2000;
        const startTime = Date.now();
        const startLevel = 0;
        const endLevel = skill.level;

        const animate = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentLevel = startLevel + (endLevel - startLevel) * easeOutCubic;

          setAnimatedLevels(prev => {
            const newLevels = [...prev];
            newLevels[index] = currentLevel;
            return newLevels;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        // Stagger the animations
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My proficiency levels in various technologies and tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-card-foreground">{skill.name}</h3>
                    <span className="text-2xl font-bold text-primary">
                      {Math.round(animatedLevels[index])}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${animatedLevels[index]}%` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div
                      className={`absolute top-0 left-0 h-full ${skill.color} rounded-full opacity-30 blur-sm transition-all duration-1000 ease-out`}
                      style={{ width: `${animatedLevels[index]}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBars;