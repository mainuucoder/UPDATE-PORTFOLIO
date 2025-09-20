import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, User, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <User className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-card-foreground">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Hi! I'm <strong className="text-primary">Daniel M. Mutahi</strong>, a passionate software developer and tech enthusiast. 
                  I love creating functional and beautiful web experiences with clean, scalable code that makes a difference.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-card-foreground">My Passion</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm driven by the endless possibilities of technology and how it can solve real-world problems. 
                  Every line of code I write is an opportunity to create something meaningful and impactful.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">Educational Background</h3>
            
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Bachelor of Education Science with IT
                    </h4>
                    <p className="text-primary font-medium mb-2">Garissa University</p>
                    <p className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full inline-block">
                      2021 - 2025
                    </p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Comprehensive education in science and information technology, combining theoretical knowledge 
                      with practical skills in software development and educational technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <School className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      High School Education
                    </h4>
                    <p className="text-secondary font-medium mb-2">St. Luke Karundas Secondary School</p>
                    <p className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full inline-block">
                      2016 - 2020
                    </p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Strong foundation in mathematics, sciences, and computer studies that sparked my passion for technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;