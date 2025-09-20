import { Card, CardContent } from "@/components/ui/card";
import { Globe, Bot, Shield, Cloud, BarChart3 } from "lucide-react";

const interests = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, modern web applications with cutting-edge technologies",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Exploring machine learning, automation, and intelligent systems",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Writing secure, clean code and implementing best security practices",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Leveraging cloud services for scalability and modern infrastructure",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Using Python, R & SPSS for smart insights and data-driven decisions",
    color: "text-secondary-light",
    bgColor: "bg-secondary/10",
  },
];

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Interests</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Areas of technology that fuel my passion and drive my continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="group shadow-card hover:shadow-lg transition-all duration-500 transform hover:-translate-y-4 cursor-pointer border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full ${interest.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon className={`w-8 h-8 ${interest.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {interest.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML", "CSS", "JavaScript", "Python", "R", "SPSS",
              "React", "Node.js", "Git", "Linux", "AWS", "MongoDB"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;