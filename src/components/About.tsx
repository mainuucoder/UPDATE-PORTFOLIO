"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, User, Heart, Cpu, Code, Brain, Target, Award, Rocket, Globe, Zap, Sparkles, BookOpen, Beaker, Atom } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me / / Education & Training</h2>
          <div className={`w-24 h-1 gradient-accent mx-auto rounded-full transition-all duration-1000 ${isVisible ? "w-24" : "w-0"}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Personal & Vision */}
          <div className="space-y-8">
            {/* Who I Am Card - Soft Blue */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 bg-gradient-to-br from-blue-50/80 to-white dark:from-blue-950/20 dark:to-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Hi! I'm <strong className="text-primary">Daniel M. Mutahi</strong>, a passionate and innovative software developer 
                  with specialized expertise in <strong className="text-primary">AI for Software Engineering</strong>. I bridge the gap 
                  between artificial intelligence and practical software development to create intelligent, efficient, and scalable solutions.
                </p>
                
                {/* Educator specialization section */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-800/50">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">High School Educator</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm also a dedicated <strong className="text-blue-600 dark:text-blue-400">high school educator</strong> specialized in 
                    <span className="font-medium text-blue-600 dark:text-blue-400"> Sciences</span>, with expertise in teaching 
                    <span className="font-medium text-purple-600 dark:text-purple-400"> Physics</span> and 
                    <span className="font-medium text-teal-600 dark:text-teal-400"> Chemistry</span>. I combine my teaching experience 
                    with technology to create innovative educational solutions.
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center">
                      <Atom className="w-4 h-4 text-purple-500 mr-1" />
                      <span className="text-sm text-muted-foreground">Physics</span>
                    </div>
                    <div className="flex items-center">
                      <Beaker className="w-4 h-4 text-teal-500 mr-1" />
                      <span className="text-sm text-muted-foreground">Chemistry</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-sm text-muted-foreground">Science Education</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Future Goals Card - Green Gradient */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-100 bg-gradient-to-br from-green-50/80 to-white dark:from-green-950/20 dark:to-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg mr-4">
                    <Rocket className="w-6 h-6 text-gradient bg-gradient-to-r from-green-500 to-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">Vision & Future Goals</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Building on my dual background in education and technology, I aim to revolutionize how AI can enhance 
                  both software development and science education, creating innovative solutions that bridge these two worlds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Target className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Develop AI-powered tools for both software engineering and science education</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Create interactive educational platforms for Physics and Chemistry</span>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Mentor the next generation of developers and scientists</span>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Build platforms that make science education more accessible through technology</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border border-green-200 dark:border-green-800/50">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-semibold text-green-700 dark:text-green-400">Mission:</span> Combine technology and education to empower future innovators
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Specialization Card - Purple Gradient */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-150 bg-gradient-to-br from-purple-50/80 to-white dark:from-purple-950/20 dark:to-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg mr-4">
                    <Brain className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">AI for Software Engineering</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Specialized in leveraging artificial intelligence to enhance software development processes, including:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm text-muted-foreground">AI-Assisted Coding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm text-muted-foreground">Code Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm text-muted-foreground">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm text-muted-foreground">Automated Testing</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I develop intelligent systems that learn from codebases to suggest improvements, detect patterns, 
                  and accelerate development workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education Journey */}
          <div className="space-y-8">
            {/* PLP Africa Specialization - Purple/Blue Gradient */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-100 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-blue-50/80 dark:from-indigo-950/20 dark:via-purple-950/15 dark:to-blue-950/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
                    <div className="relative">
                      <Globe className="w-8 h-8 text-gradient bg-gradient-to-r from-purple-500 to-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground">
                          AI for Software Engineering Specialization
                        </h4>
                        <p className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
                          Power Learn Project Africa (PLP)
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/50">
                        July - Dec 2025
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Advanced training program focused on integrating artificial intelligence into modern software development practices. 
                      This comprehensive specialization covers:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Machine Learning integration in software systems</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>AI-powered development tools and workflows</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Intelligent code analysis and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Building scalable AI-enhanced applications</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-purple-600 dark:text-purple-400">PLP</span> - Power Learn Project Africa is a pan-African 
                        digital skills training organization empowering African youth with in-demand tech skills.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* University Education - REMOVED GRADIENT */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-150 bg-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground mb-1">
                          Bachelor of Education Science with IT
                        </h4>
                        <p className="text-primary font-medium">Garissa University</p>
                      </div>
                      <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                        2021 - 2025
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive dual-focused degree combining <strong>science education</strong> with <strong>information technology</strong>. 
                      This program provided both pedagogical training for teaching Physics and Chemistry, and technical skills 
                      in software development and educational technology.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">Physics Education</span>
                      <span className="text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full">Chemistry Education</span>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Software Development</span>
                      <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">Educational Technology</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High School Education - REMOVED GRADIENT */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-200 bg-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <School className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground mb-1">
                          High School Education
                        </h4>
                        <p className="text-secondary font-medium">St. Luke Karundas Secondary School</p>
                      </div>
                      <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                        2016 - 2020
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Strong foundation in mathematics, physics, and computer studies. Achieved excellent grades 
                      in STEM subjects that sparked my passion for both science education and technology.
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-card-foreground mb-1">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">Physics</span>
                        <span className="text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full">Chemistry</span>
                        <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Mathematics</span>
                        <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">Computer Studies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* My Passion Card - Orange/Red Gradient */}
            <Card className={`shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-250 bg-gradient-to-br from-orange-50/80 via-red-50/60 to-white dark:from-orange-950/20 dark:via-red-950/15 dark:to-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg mr-4">
                    <Heart className="w-6 h-6 text-gradient bg-gradient-to-r from-orange-500 to-red-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">My Passion</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm driven by the endless possibilities of technology and how it can solve real-world problems. 
                  Every line of code I write is an opportunity to create something meaningful and impactful.
                </p>
                <div className="mt-4 p-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg border border-orange-200 dark:border-orange-800/50">
                  <p className="text-muted-foreground leading-relaxed">
                    Currently focused on integrating AI methodologies into both software development workflows and 
                    educational technology to enhance learning experiences and developer productivity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Timeline Summary - Card with Gradient */}
        <div className={`mt-16 p-6 rounded-xl shadow-sm border border-border transition-all duration-700 delay-300 bg-gradient-to-br from-card via-background to-muted/50 dark:from-card dark:via-background dark:to-muted/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">Education Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500"></div>
            
            <div className="space-y-8">
              {/* High School */}
              <div className="flex items-center justify-between relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="inline-block bg-gradient-to-r from-secondary/10 to-blue-500/10 p-4 rounded-lg border border-secondary/20 dark:border-secondary/50">
                    <h4 className="font-semibold text-card-foreground">High School</h4>
                    <p className="text-sm text-muted-foreground">St. Luke Karundas</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">2016 - 2020</p>
                    <div className="flex space-x-1 mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded border border-purple-300/50 dark:border-purple-700/50">Physics</span>
                      <span className="text-xs bg-teal-500/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded border border-teal-300/50 dark:border-teal-700/50">Chemistry</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* University */}
              <div className="flex items-center justify-between relative">
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-blue-600 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="w-5/12 text-left pl-8">
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-blue-500/10 p-4 rounded-lg border border-primary/20 dark:border-primary/50">
                    <h4 className="font-semibold text-card-foreground">University Degree</h4>
                    <p className="text-sm text-muted-foreground">Garissa University</p>
                    <p className="text-xs text-primary font-medium">2021 - 2025</p>
                    <div className="flex space-x-1 mt-1">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30 dark:border-primary/70">Ed. Science + IT</span>
                      <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded border border-blue-300/50 dark:border-blue-700/50">Physics</span>
                      <span className="text-xs bg-teal-500/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded border border-teal-300/50 dark:border-teal-700/50">Chemistry</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLP Specialization */}
              <div className="flex items-center justify-between relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="inline-block bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg border border-purple-200 dark:border-purple-800/50">
                    <h4 className="font-semibold text-card-foreground">AI Specialization</h4>
                    <p className="text-sm text-muted-foreground">Power Learn Project (PLP)</p>
                    <p className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
                      July - Dec 2025
                    </p>
                    <div className="flex space-x-1 mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded border border-purple-300/50 dark:border-purple-700/50">AI Engineering</span>
                      <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded border border-blue-300/50 dark:border-blue-700/50">Software Dev</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Forward */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center justify-center space-x-2 text-muted-foreground">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-sm font-medium text-primary">Bridging Education & Technology</span>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;