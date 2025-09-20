import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Globe } from "lucide-react";
import solarSystemImage from "@/assets/solar-system-project.jpg";
import analogClockImage from "@/assets/analog-clock-project.jpg";

const projects = [
  {
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my development skills through creative and functional web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
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
                <div className="flex items-center mb-3">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/mainuucoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;