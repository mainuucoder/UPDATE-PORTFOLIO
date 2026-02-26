import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Globe } from "lucide-react";
import solarSystemImage from "@/assets/solar-system-project.jpg";
import smart_waste from "@/assets/smart_waste.png";
import AIforSDG3rd from "@/assets/AIforSDG3rd.png";
import Safeguard_Africa from "@/assets/Safeguard_Africa.png";
import alihsan from "@/assets/alihsan.png";
// import ecovision from "@/assets/ecovision.jpg";
// import devcollab from "@/assets/devcollab.jpg";
// import finwise from "@/assets/finwise.jpg";

const projects = [
  {
    title: "AI-Powered Soil Health Analysis",
    description: "Revolutionizing soil management with satellite imagery, IoT sensors, and machine learning for sustainable agriculture",
    image: solarSystemImage,
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    githubUrl: "https://github.com/mainuucoder/SOLAR-SYSTEM-PROJECT-1.git",
    liveUrl: "#",
    category: "Web Animation",
    date: "2025",
  },
  {
    title: "Smart Waste Management System",
    description: "Join us in building sustainable cities and communities. Report waste issues, track collection schedules, and contribute to a cleaner environment.",
    image: smart_waste,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "DOM Manipulation"],
    githubUrl: "https://github.com/mainuucoder/Smart-waste-management-system.git",
    liveUrl: "https://smart-waste-management-system-six.vercel.app/",
    category: "MERN Stack",
    date: "2025",
  },
  {
    title: "Safeguard Africa - End Digital Violence Against Women & Girls",
    description: "A comprehensive ecosystem powered by AI to prevent, detect, and respond to digital violence targeting women and girls across Africa.",
    image: Safeguard_Africa,
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/mainuucoder/GBV-HACKTHON.git",
    liveUrl: "https://gbv-hackthon.vercel.app/",
    category: "Full Stack",
    date: "2025",
  },
  {
    title: "Al-Ihsan Schools Township",
    description: "A comprehensive digital platform for Al-Ihsan Schools to streamline student management, academic tracking, parent communication, and administrative workflows with real-time synchronization.",
    image: alihsan,
    technologies: ["React Native", "Node.js","TypeScript"],
    githubUrl: "https://github.com/mainuucoder/al-ihsan-schools.git",
    liveUrl: "https://al-ihsan-schools.vercel.app/",
    category: "Full Stack Mobile",
    date: "2026",
  },
  {
    title: "EcoVision - Carbon Footprint Tracker",
    description: "Track and analyze your carbon footprint with personalized recommendations to reduce environmental impact through daily activities and choices.",
    image: ecovision,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/mainuucoder/ecovision.git",
    liveUrl: "https://ecovision-app.vercel.app",
    category: "Climate Tech",
    date: "2024",
  },
  {
    title: "DevCollab - Remote Developer Collaboration Hub",
    description: "A virtual workspace for developers to pair program, share code in real-time, and conduct technical interviews with integrated video chat.",
    image: devcollab,
    technologies: ["WebRTC", "React", "Express", "Redis", "Docker"],
    githubUrl: "https://github.com/mainuucoder/devcollab.git",
    liveUrl: "https://devcollab.vercel.app",
    category: "Real-time Application",
    date: "2024",
  },
  {
    title: "FinWise - Personal Finance Advisor",
    description: "AI-powered financial planning tool that analyzes spending patterns, provides investment insights, and helps users achieve their financial goals.",
    image: finwise,
    technologies: ["Python", "Django", "React", "TensorFlow.js", "Chart.js"],
    githubUrl: "https://github.com/mainuucoder/finwise.git",
    liveUrl: "https://finwise-demo.vercel.app",
    category: "FinTech AI",
    date: "2023",
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
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
                  }}
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
                  <Globe className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
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
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
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