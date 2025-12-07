import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Filter, Sparkles, Brain, Database } from "lucide-react";
import { cn } from "@/lib/utils";

// Import your existing images
import profileImage from "@/assets/profileImage.jpg";
import smart_waste from "@/assets/smart_waste.png";
import AIPoweredSoil from "@/assets/AIPoweredSoil.png";
import AIforSDG3rd from "@/assets/AIforSDG3rd.png";
import Safeguard  from "@/assets/Safeguard.png";
import NexusSolutions from "@/assets/NexusSolutions.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  date: string;
  featured?: boolean;
  icon?: React.ReactNode;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Soil Health Analysis",
    description: "Revolutionizing soil management with satellite imagery, IoT sensors, and machine learning for sustainable agriculture",
    image: AIPoweredSoil,
    technologies: ["Python", "Machine Learning", "TensorFlow", "IoT", "Satellite Imagery"],
    githubUrl: "https://github.com/mainuucoder/LAND_DEGRADATION_PROJECT.git",
    liveUrl: "https://land-degradation-project.vercel.app/",
    category: "AI/ML",
    date: "2025",
    featured: true,
    icon: <Brain className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Smart Waste Management System",
    description: "Join us in building sustainable cities and communities. Report waste issues, track collection schedules, and contribute to a cleaner environment.",
    image: smart_waste,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "IoT Sensors"],
    githubUrl: "https://github.com/mainuucoder/Smart-waste-management-system.git",
    liveUrl: "https://smart-waste-management-system-six.vercel.app",
    category: "Full Stack",
    date: "2025",
    featured: false,
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Safeguard Africa.End GBV",
    description: "A comprehensive ecosystem powered by AI to prevent, detect, and respond to digital violence targeting women and girls across Africa.",
    image: Safeguard,
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/mainuucoder/GBV-HACKTHON.git",
    liveUrl: "https://gbv-hackthon.vercel.app/",
    category: "Full Stack & AI",
    date: "2025",
    icon: <Sparkles className="w-4 h-4" />,
    featured: true
  },
  {
    id: 4,
    title: "AI for SDG 3: Predicting Disease Outbreak Risk",
    description: "Using Unsupervised Learning (K-Means & DBSCAN) to identify high-risk disease outbreak regions. Using Machine Learning and Real-Time Data",
    image: AIforSDG3rd,
    technologies: ["Python", "OpenAI API", "React", "Firebase", "WebRTC"],
    githubUrl: "https://github.com/mainuucoder/machine-learning-model-.git",
    liveUrl: "https://machine-driven-model.streamlit.app/",
    category: "AI/ML",
    date: "2024",
    featured: true
  },
  {
    id: 5,
    title: "Nexus-Solutions",
    description: "Transform Your Business with Innovative Solutions,helping businesses grow with cutting-edge technology, strategic planning, and creative solutions tailored to your specific needs",
    image: NexusSolutions,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/mainuucoder/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git",
    liveUrl: "https://nexus-nine-alpha.vercel.app/",
    category: "Full Stack",
    date: "2024"
  },
  {
    id: 6,
    title: "Climate Change Data Visualization",
    description: "Transform Your Business with Innovative Solutions",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    technologies: ["D3.js", "Python", "Flask", "Pandas", "Mapbox"],
    githubUrl: "https://github.com/mainuucoder/climate-visualization",
    liveUrl: "https://climate-change-visualization.vercel.app",
    category: "Full Stack",
    date: "2025"
  }
];

const categories = ["All", "AI/ML", "Full Stack", "Data Visualization"];

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const [flashType, setFlashType] = useState<"horizontal" | "vertical" | "diagonal" | "circle" | "wave">("horizontal");
  const [flashColor, setFlashColor] = useState<"primary" | "accent" | "cyan" | "purple" | "rainbow" | "gold">("primary");
  const [flashPosition, setFlashPosition] = useState({ x: 0, y: 0 });
  
  const flashIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize flash effect
  useEffect(() => {
    // Start the flash interval
    flashIntervalRef.current = setInterval(() => {
      triggerFlash();
    }, 3500); // Increased to 3.5 seconds for smoother timing

    // Cleanup interval on unmount
    return () => {
      if (flashIntervalRef.current) {
        clearInterval(flashIntervalRef.current);
      }
    };
  }, []);

  const triggerFlash = () => {
    // Randomize flash properties
    const types: Array<"horizontal" | "vertical" | "diagonal" | "circle" | "wave"> = [
      "horizontal", "vertical", "diagonal", "circle", "wave"
    ];
    const colors: Array<"primary" | "accent" | "cyan" | "purple" | "rainbow" | "gold"> = [
      "primary", "accent", "cyan", "purple", "rainbow", "gold"
    ];
    
    // Generate random position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setFlashPosition({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height
      });
    }
    
    setFlashType(types[Math.floor(Math.random() * types.length)]);
    setFlashColor(colors[Math.floor(Math.random() * colors.length)]);
    
    // Smooth activation
    setFlashActive(true);
    
    // Longer duration for smoother effect
    setTimeout(() => {
      setFlashActive(false);
    }, 2500); // Increased duration
  };

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;

    setIsAnimating(true);
    setSelectedCategory(category);

    setTimeout(() => {
      const filtered = category === "All" 
        ? allProjects 
        : allProjects.filter(project => project.category === category);
      
      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 300);
  };

  // Function to get gradient based on color
  const getFlashGradient = (color: string, type: string) => {
    const isVertical = type === "vertical";
    
    switch(color) {
      case "primary":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #3b82f615 10%, 
          #3b82f660 30%, 
          #8b5cf6 50%, 
          #3b82f660 70%, 
          #3b82f615 90%, 
          transparent 100%)`;
      case "accent":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #ec489915 10%, 
          #ec489960 30%, 
          #f97316 50%, 
          #ec489960 70%, 
          #ec489915 90%, 
          transparent 100%)`;
      case "cyan":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #06b6d415 10%, 
          #06b6d460 30%, 
          #22d3ee 50%, 
          #06b6d460 70%, 
          #06b6d415 90%, 
          transparent 100%)`;
      case "purple":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #a855f715 10%, 
          #a855f760 30%, 
          #d946ef 50%, 
          #a855f760 70%, 
          #a855f715 90%, 
          transparent 100%)`;
      case "rainbow":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #ff000015 5%, 
          #ff990030 20%, 
          #ffff0040 35%, 
          #00ff0050 50%, 
          #0099ff40 65%, 
          #6600ff30 80%, 
          transparent 100%)`;
      case "gold":
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #FFD70015 10%, 
          #FFD70060 30%, 
          #FFA500 50%, 
          #FFD70060 70%, 
          #FFD70015 90%, 
          transparent 100%)`;
      default:
        return `linear-gradient(${isVertical ? 0 : 90}deg, 
          transparent 0%, 
          #3b82f615 10%, 
          #3b82f660 30%, 
          #8b5cf6 50%, 
          #3b82f660 70%, 
          #3b82f615 90%, 
          transparent 100%)`;
    }
  };

  const getColorValue = (color: string) => {
    switch(color) {
      case "primary": return "#3b82f6";
      case "accent": return "#ec4899";
      case "cyan": return "#06b6d4";
      case "purple": return "#a855f7";
      case "gold": return "#FFD700";
      default: return "#3b82f6";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden relative" ref={containerRef}>
      {/* SMOOTH FLASH LIGHT EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Horizontal Flash - Smooth */}
        <div 
          className={cn(
            "absolute w-full",
            "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive && flashType === "horizontal" ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: getFlashGradient(flashColor, "horizontal"),
            height: '10px',
            top: `${flashPosition.y}px`,
            left: '0',
            boxShadow: `
              0 0 60px 25px ${getColorValue(flashColor)}40,
              0 0 120px 50px ${getColorValue(flashColor)}20
            `,
            animation: flashActive && flashType === "horizontal" ? 
              "ultraSmoothHorizontal 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            filter: 'blur(2px)',
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Vertical Flash - Smooth */}
        <div 
          className={cn(
            "absolute h-full",
            "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive && flashType === "vertical" ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: getFlashGradient(flashColor, "vertical"),
            width: '10px',
            left: `${flashPosition.x}px`,
            top: '0',
            boxShadow: `
              0 0 60px 25px ${getColorValue(flashColor)}40,
              0 0 120px 50px ${getColorValue(flashColor)}20
            `,
            animation: flashActive && flashType === "vertical" ? 
              "ultraSmoothVertical 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            filter: 'blur(2px)',
            transform: 'translateX(-50%)'
          }}
        />
        
        {/* Diagonal Flash - Smooth */}
        <div 
          className={cn(
            "absolute",
            "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive && flashType === "diagonal" ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: getFlashGradient(flashColor, "horizontal"),
            width: '300vw',
            height: '12px',
            left: '-100vw',
            top: `${flashPosition.y}px`,
            transform: 'rotate(45deg)',
            boxShadow: `
              0 0 80px 30px ${getColorValue(flashColor)}40,
              0 0 160px 60px ${getColorValue(flashColor)}20
            `,
            animation: flashActive && flashType === "diagonal" ? 
              "ultraSmoothDiagonal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            filter: 'blur(3px)',
            transformOrigin: 'center'
          }}
        />
        
        {/* Circle Flash - Ultra Smooth */}
        <div 
          className={cn(
            "absolute rounded-full",
            "transition-all duration-1500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive && flashType === "circle" ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(circle, 
              ${getColorValue(flashColor)}80 0%, 
              ${getColorValue(flashColor)}40 30%, 
              transparent 70%)`,
            left: `${flashPosition.x}px`,
            top: `${flashPosition.y}px`,
            boxShadow: `
              0 0 100px 50px ${getColorValue(flashColor)}40,
              0 0 200px 100px ${getColorValue(flashColor)}20
            `,
            animation: flashActive && flashType === "circle" ? 
              "ultraSmoothCircle 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            filter: 'blur(10px)',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Wave Flash - New Smooth Effect */}
        <div 
          className={cn(
            "absolute",
            "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive && flashType === "wave" ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: getFlashGradient(flashColor, "horizontal"),
            width: '200vw',
            height: '15px',
            left: '-50vw',
            top: `${flashPosition.y}px`,
            borderRadius: '100%',
            boxShadow: `
              0 0 70px 35px ${getColorValue(flashColor)}40,
              0 0 140px 70px ${getColorValue(flashColor)}20
            `,
            animation: flashActive && flashType === "wave" ? 
              "ultraSmoothWave 3s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
            filter: 'blur(4px)',
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Smooth Ambient Glow Overlay */}
        <div 
          className={cn(
            "absolute inset-0",
            "transition-all duration-2000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            flashActive ? "opacity-30" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(circle at ${flashPosition.x}px ${flashPosition.y}px, 
              ${getColorValue(flashColor)}30 0%, 
              transparent 60%)`,
            animation: flashActive ? "gentlePulse 2.5s ease-in-out" : "none"
          }}
        />
        
        {/* Subtle Particle Effect */}
        <div className={cn(
          "absolute inset-0",
          flashActive ? "opacity-100" : "opacity-0",
          "transition-opacity duration-1000"
        )}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                background: getColorValue(flashColor),
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${flashPosition.x + (Math.random() - 0.5) * 200}px`,
                top: `${flashPosition.y + (Math.random() - 0.5) * 200}px`,
                opacity: Math.random() * 0.6 + 0.2,
                animation: flashActive ? `floatParticle ${Math.random() * 2 + 1}s ease-out forwards` : 'none',
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
            A curated selection of my best work across different technologies and domains
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm text-muted-foreground bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              Smooth dynamic light effect • Every 3.5 seconds
            </span>
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center mr-4 text-muted-foreground">
            <Filter className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "transition-all duration-300 relative group/button",
                selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg" 
                  : "hover:bg-primary/10 hover:border-primary/50"
              )}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  ({filteredProjects.length})
                </span>
              )}
              {/* Glow effect on hover */}
              <div className={cn(
                "absolute -inset-0.5 rounded-lg blur opacity-0 group-hover/button:opacity-70 transition duration-500",
                "bg-gradient-to-r from-primary/50 to-accent/50"
              )} />
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500",
          isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
        )}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={cn(
                "group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500",
                "border-0 bg-card hover:bg-card/95",
                "transform hover:-translate-y-2 hover:scale-[1.02]",
                "relative"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)"
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/90 text-black hover:bg-white backdrop-blur-sm shadow-lg"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 backdrop-blur-sm shadow-lg"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 text-white text-sm font-medium rounded-full backdrop-blur-sm flex items-center gap-1.5">
                    {project.icon}
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2 min-h-[3rem]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="text-center py-16">
            <div className="inline-flex p-6 bg-muted rounded-full mb-6">
              <Filter className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              No projects match the selected category. Try selecting "All" to see all {allProjects.length} projects.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {allProjects.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                {allProjects.filter(p => p.category === "AI/ML").length}
              </div>
              <div className="text-sm text-muted-foreground">AI/ML Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                {allProjects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                2024-2025
              </div>
              <div className="text-sm text-muted-foreground">Timeline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for ultra smooth animations */}
      <style jsx>{`
        @keyframes ultraSmoothHorizontal {
          0% {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          50% {
            transform: translateX(0%) translateY(-50%);
            opacity: 0.9;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) translateY(-50%);
            opacity: 0;
          }
        }

        @keyframes ultraSmoothVertical {
          0% {
            transform: translateY(-100%) translateX(-50%);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(0%) translateX(-50%);
            opacity: 0.9;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100%) translateX(-50%);
            opacity: 0;
          }
        }

        @keyframes ultraSmoothDiagonal {
          0% {
            transform: rotate(45deg) translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          50% {
            transform: rotate(45deg) translateX(0%);
            opacity: 0.9;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: rotate(45deg) translateX(100%);
            opacity: 0;
          }
        }

        @keyframes ultraSmoothCircle {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          20% {
            opacity: 0.7;
          }
          50% {
            width: 300px;
            height: 300px;
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          80% {
            opacity: 0.7;
          }
          100% {
            width: 600px;
            height: 600px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        @keyframes ultraSmoothWave {
          0% {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
            transform: translateX(-50%) translateY(-50%);
          }
          50% {
            opacity: 0.9;
            transform: translateX(0%) translateY(-50%);
          }
          85% {
            opacity: 0.7;
            transform: translateX(50%) translateY(-50%);
          }
          100% {
            transform: translateX(100%) translateY(-50%);
            opacity: 0;
          }
        }

        @keyframes gentlePulse {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 0.3;
          }
          70% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectFilter;