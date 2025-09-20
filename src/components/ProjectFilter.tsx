import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Filter } from "lucide-react";
import solarSystemImage from "@/assets/solar-system-project.jpg";
import analogClockImage from "@/assets/analog-clock-project.jpg";

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
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Solar System Project",
    description: "An animated model of the solar system showcasing orbital mechanics with smooth CSS animations and interactive JavaScript features. Features realistic planet movements, information panels, and educational content.",
    image: solarSystemImage,
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mainuucoder/SOLAR-SYSTEM-PROJECT-1.git",
    liveUrl: "#",
    category: "Web Animation",
    date: "2024",
  },
  {
    id: 2,
    title: "Analogue Clock",
    description: "A beautifully crafted working analog clock built with pure web technologies. Features real-time updates, smooth second hand movement, and elegant design with customizable themes.",
    image: analogClockImage,
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    githubUrl: "https://github.com/mainuucoder/ANALOGUE_CLOCK-PROJECT-2.git",
    liveUrl: "#",
    category: "Web Component",
    date: "2024",
  },
];

const categories = ["All", "Web Animation", "Web Component", "React Apps", "Python Projects"];

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isAnimating, setIsAnimating] = useState(false);

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
    }, 150);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Interactive Projects</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Filter through my projects by category to explore different types of work
          </p>
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
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground shadow-lg transform scale-105" 
                  : "hover:bg-primary hover:text-primary-foreground hover:scale-105"
              }`}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-2 text-xs">({filteredProjects.length})</span>
              )}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-300 ${
          isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
        }`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 border-0"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)"
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/90 text-black hover:bg-white backdrop-blur-sm"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="bg-black/20 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/30 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {project.date}
                  </span>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected category. Try selecting "All" to see all projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilter;