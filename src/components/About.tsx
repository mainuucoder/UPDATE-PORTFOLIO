"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, User, Heart, Cpu, Code, Brain, Target, Award, Rocket, Globe, Zap, Sparkles, BookOpen, Beaker, Atom, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create refs for each card
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [cardProgress, setCardProgress] = useState<number[]>([]);

  // Initialize card progress states
  useEffect(() => {
    setCardProgress(Array(8).fill(0)); // We have 8 cards total (7 + timeline)
  }, []);

  // Observer for the entire section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
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

  // Dynamic observer for smooth scroll-based animations
  useEffect(() => {
    const cardObservers: IntersectionObserver[] = [];
    
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Calculate progress based on intersection ratio
          const progress = Math.min(1, Math.max(0, entry.intersectionRatio * 2));
          setCardProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = progress;
            return newProgress;
          });
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0.00 to 1.00 in 0.01 increments
          rootMargin: "0px 0px -100px 0px"
        }
      );
      
      observer.observe(card);
      cardObservers.push(observer);
    });

    return () => {
      cardObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Function to add ref to array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  // Calculate dynamic transform based on scroll progress
  const getDynamicTransform = (index: number, progress: number) => {
    const isLeftColumn = index < 3;
    const isTimeline = index === 7;
    
    if (isTimeline) {
      // Timeline: Scale from center based on progress
      const scale = 0.95 + (progress * 0.05); // 0.95 to 1.00
      const opacity = progress;
      return {
        transform: `scale(${scale})`,
        opacity: opacity,
      };
    }
    
    if (isLeftColumn) {
      // Left column: Slide from left based on progress
      const translateX = -20 + (progress * 20); // -20px to 0px
      const opacity = progress;
      return {
        transform: `translateX(${translateX}px)`,
        opacity: opacity,
      };
    } else {
      // Right column: Slide from right based on progress
      const translateX = 20 - (progress * 20); // 20px to 0px
      const opacity = progress;
      return {
        transform: `translateX(${translateX}px)`,
        opacity: opacity,
      };
    }
  };

  // Calculate dynamic styles for each card
  const getCardStyle = (index: number) => {
    const progress = cardProgress[index] || 0;
    const dynamicStyle = getDynamicTransform(index, progress);
    
    return {
      ...dynamicStyle,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth cubic-bezier
    };
  };

  // Calculate section header progress
  const getHeaderStyle = () => {
    const sectionProgress = isVisible ? 1 : 0;
    return {
      transform: `translateY(${-8 + (sectionProgress * 8)}px)`,
      opacity: sectionProgress,
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  // Calculate divider progress
  const getDividerStyle = () => {
    const sectionProgress = isVisible ? 1 : 0;
    return {
      width: `${sectionProgress * 96}px`,
      transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section 
      id="about" 
      className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header with dynamic animation */}
        <div 
          className="text-center mb-12 md:mb-16"
          style={getHeaderStyle()}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me / / Education & Training</h2>
          <div 
            className="h-1 gradient-accent mx-auto rounded-full"
            style={getDividerStyle()}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left Column - Personal & Vision */}
          <div className="space-y-6 md:space-y-8">
            {/* Who I Am Card - Soft Blue */}
            <div 
              ref={(el) => addToRefs(el, 0)}
              style={getCardStyle(0)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50/80 to-white dark:from-blue-950/20 dark:to-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
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
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      I'm also a dedicated <strong className="text-blue-600 dark:text-blue-400">high school educator</strong> specialized in 
                      <span className="font-medium text-blue-600 dark:text-blue-400"> Sciences</span>, with expertise in teaching 
                      <span className="font-medium text-purple-600 dark:text-purple-400"> Physics</span> and 
                      <span className="font-medium text-teal-600 dark:text-teal-400"> Chemistry</span>. I combine my teaching experience 
                      with technology to create innovative educational solutions.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3">
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
            </div>

            {/* Vision & Future Goals Card - Green Gradient */}
            <div 
              ref={(el) => addToRefs(el, 1)}
              style={getCardStyle(1)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50/80 to-white dark:from-green-950/20 dark:to-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg mr-4">
                      <Rocket className="w-6 h-6 text-gradient bg-gradient-to-r from-green-500 to-blue-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">Vision & Future Goals</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                    Building on my dual background in education and technology, I aim to revolutionize how AI can enhance 
                    both software development and science education, creating innovative solutions that bridge these two worlds.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">Develop AI-powered tools for both software engineering and science education</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">Create interactive educational platforms for Physics and Chemistry</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">Mentor the next generation of developers and scientists</span>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">Build platforms that make science education more accessible through technology</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border border-green-200 dark:border-green-800/50">
                    <p className="text-sm text-muted-foreground text-center">
                      <span className="font-semibold text-green-700 dark:text-green-400">Mission:</span> Combine technology and education to empower future innovators
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Specialization Card - Purple Gradient */}
            <div 
              ref={(el) => addToRefs(el, 2)}
              style={getCardStyle(2)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50/80 to-white dark:from-purple-950/20 dark:to-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg mr-4">
                      <Brain className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">AI for Software Engineering</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-lg mb-4">
                    Specialized in leveraging artificial intelligence to enhance software development processes, including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
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
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    I develop intelligent systems that learn from codebases to suggest improvements, detect patterns, 
                    and accelerate development workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Education Journey */}
          <div className="space-y-6 md:space-y-8">
            {/* PLP Africa Specialization - Purple/Blue Gradient */}
            <div 
              ref={(el) => addToRefs(el, 3)}
              style={getCardStyle(3)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-blue-50/80 dark:from-indigo-950/20 dark:via-purple-950/15 dark:to-blue-950/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg mb-4 sm:mb-0">
                      <div className="relative">
                        <Globe className="w-8 h-8 text-gradient bg-gradient-to-r from-purple-500 to-blue-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="text-lg md:text-xl font-semibold text-card-foreground">
                            AI for Software Engineering Specialization
                          </h4>
                          <p className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium text-sm md:text-base">
                            Power Learn Project Africa (PLP)
                          </p>
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/50 w-fit">
                          July - Dec 2025
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                        Advanced training program focused on integrating artificial intelligence into modern software development practices. 
                        This comprehensive specialization covers:
                      </p>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li className="flex items-start">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">Machine Learning integration in software systems</span>
                        </li>
                        <li className="flex items-start">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">AI-powered development tools and workflows</span>
                        </li>
                        <li className="flex items-start">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">Intelligent code analysis and optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base">Building scalable AI-enhanced applications</span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800/50">
                        <p className="text-xs md:text-sm text-muted-foreground">
                          <span className="font-semibold text-purple-600 dark:text-purple-400">PLP</span> - Power Learn Project Africa is a pan-African 
                          digital skills training organization empowering African youth with in-demand tech skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* University Education */}
            <div 
              ref={(el) => addToRefs(el, 4)}
              style={getCardStyle(4)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg mb-4 sm:mb-0">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="text-lg md:text-xl font-semibold text-card-foreground mb-1">
                            Bachelor of Education Science with IT
                          </h4>
                          <p className="text-primary font-medium text-sm md:text-base">Garissa University</p>
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm bg-muted px-3 py-1 rounded-full w-fit">
                          2021 - 2025
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        Comprehensive dual-focused degree combining <strong>science education</strong> with <strong>information technology</strong>. 
                        This program provided both pedagogical training for teaching Physics and Chemistry, and technical skills 
                        in software development and educational technology.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">Physics Education</span>
                        <span className="text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full">Chemistry Education</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Software Development</span>
                        <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">Educational Technology</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* High School Education */}
            <div 
              ref={(el) => addToRefs(el, 5)}
              style={getCardStyle(5)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg mb-4 sm:mb-0">
                      <School className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="text-lg md:text-xl font-semibold text-card-foreground mb-1">
                            High School Education
                          </h4>
                          <p className="text-secondary font-medium text-sm md:text-base">St. Luke Karundas Secondary School</p>
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm bg-muted px-3 py-1 rounded-full w-fit">
                          2016 - 2020
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        Strong foundation in mathematics, physics, and computer studies. Achieved excellent grades 
                        in STEM subjects that sparked my passion for both science education and technology.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-card-foreground mb-1">Key Subjects:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">Physics</span>
                          <span className="text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full">Chemistry</span>
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Mathematics</span>
                          <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">Computer Studies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Passion Card - Orange/Red Gradient */}
            <div 
              ref={(el) => addToRefs(el, 6)}
              style={getCardStyle(6)}
            >
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50/80 via-red-50/60 to-white dark:from-orange-950/20 dark:via-red-950/15 dark:to-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg mr-4">
                      <Heart className="w-6 h-6 text-gradient bg-gradient-to-r from-orange-500 to-red-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">My Passion</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
                    I'm driven by the endless possibilities of technology and how it can solve real-world problems. 
                    Every line of code I write is an opportunity to create something meaningful and impactful.
                  </p>
                  <div className="mt-4 p-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg border border-orange-200 dark:border-orange-800/50">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      Currently focused on integrating AI methodologies into both software development workflows and 
                      educational technology to enhance learning experiences and developer productivity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Responsive Education Timeline - Mobile Friendly */}
        <div 
          ref={(el) => addToRefs(el, 7)}
          style={getCardStyle(7)}
          className="mt-12 md:mt-16 p-4 md:p-6 rounded-xl shadow-sm border border-border bg-gradient-to-br from-card via-background to-muted/50 dark:from-card dark:via-background dark:to-muted/30"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-6">Education Timeline</h3>
          
          {/* Mobile Timeline (for screens < 768px) */}
          <div className="block md:hidden">
            <div className="space-y-6">
              {/* High School - Mobile */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="border-l-2 border-gradient-to-b from-purple-500 to-transparent h-full absolute left-[5px] top-3 bottom-0"></div>
                <div className="bg-gradient-to-r from-secondary/10 to-blue-500/10 p-4 rounded-lg border border-secondary/20 dark:border-secondary/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-card-foreground text-lg">High School</h4>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded">2016-2020</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>St. Luke Karundas</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strong foundation in STEM subjects with focus on Physics, Chemistry, and Computer Studies.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded">Physics</span>
                    <span className="text-xs bg-teal-500/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">Chemistry</span>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded">Mathematics</span>
                  </div>
                </div>
              </div>

              {/* University - Mobile */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-blue-600 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="border-l-2 border-gradient-to-b from-blue-500 to-transparent h-full absolute left-[5px] top-3 bottom-0"></div>
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-4 rounded-lg border border-primary/20 dark:border-primary/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-card-foreground text-lg">University Degree</h4>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">2021-2025</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>Garissa University</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bachelor of Education Science with IT - Combining science education with information technology.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">Ed. Science + IT</span>
                    <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">Physics</span>
                    <span className="text-xs bg-teal-500/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">Chemistry</span>
                  </div>
                </div>
              </div>

              {/* PLP Specialization - Mobile */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div className="border-l-2 border-gradient-to-b from-purple-500 to-transparent h-full absolute left-[5px] top-3 bottom-0"></div>
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg border border-purple-200 dark:border-purple-800/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-card-foreground text-lg">AI Specialization</h4>
                    <span className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded">2025</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>Power Learn Project (PLP)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advanced AI for Software Engineering specialization focusing on integrating AI into modern development.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded">AI Engineering</span>
                    <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">Software Dev</span>
                    <span className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded">ML Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Timeline (for screens >= 768px) */}
          <div className="hidden md:block">
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
        </div>

        {/* Journey Forward */}
        <div className={`mt-8 md:mt-12 text-center transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
          <div className="inline-flex items-center justify-center space-x-2 text-muted-foreground">
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-sm font-medium text-primary">Bridging Education & Technology</span>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;