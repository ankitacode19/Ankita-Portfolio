import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection",
      description: "A full-stack machine learning–powered web application built with Flask,and Scikit-learn. Features include real-time news article analysis, confidence scoring using NLP models, and a clean, mobile-responsive UI. Integrates with external news APIs and provides insightful visualizations of prediction results.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Flask", "Scikit-learn"],
      github: "https://github.com/ankitacode19/fake-news-detection",
      featured: false
    },
    {
      title: "snakeNsnack",
      description: "A clean and responsive Android remake of the classic Snake game, built using Java and managed with Gradle (Kotlin DSL). Features include smooth touch controls, score tracking, and a minimalist UI designed for modern devices. Optimized for performance, the app delivers an engaging gameplay experience with a nostalgic vibe.",
      tech: ["Android", "Java", "Gradle"],
      github: "https://github.com/ankitacode19/snakeNsnack",
      featured: false
    },
    {
      title: "Bing Auto Search",
      description: "A lightweight browser extension designed to automate Bing searches and help users effortlessly earn Microsoft Rewards. Built with JavaScript, HTML, and Manifest v3, the extension runs scheduled queries in the background, mimicking natural user behavior.",
      tech: ["Javascript", "HTML", "CSS", "Manifest V3"],
      github: "https://github.com/ankitacode19/Bing-Auto-Search",
      featured: false
    },
    {
      title: "E-Commerce Platform",
      description: "A dynamic e-commerce site built with Django, featuring secure user authentication, real-time cart management, and responsive design. The platform supports product listings and order handling with a clean UI styled using CSS and enhanced by JavaScript for smooth user experience.",
      tech: ["Django", "HTML", "CSS", "Javascript"],
      github: "https://github.com/ankitacode19/E-Commerce-and-Blog-Website-DJANGO",
      featured: false
    },
    {
      title: "Discord ModMail",
      description: "A custom Discord moderation bot built with Node.js and discord.js, hosted on Replit. Designed to handle user DMs and forward them to a staff channel as modmail tickets, this bot supports full intent handling, message parsing, and reply routing. Built with Express to keep it running and integrated smart handling of mentions, caching, and reactions to streamline moderation.",
      tech: ["Node.js", "Discord.js", "JSON"],
      github: "https://replit.com/@ankitacode19/Modmail-Bot",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work that demonstrates my passion for creating 
            innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative overflow-hidden max-w-xl w-full  rounded-xl border border-border/50 bg-card shadow-card hover:shadow-glow transition-all duration-500 ${
                project.featured 
                  ? 'sm:grid lg:grid-cols-1 lg:gap-8' 
                  : 'max-w-2xl mx-auto'
              }`}
            >
            
              {/* Project Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-primary-glow/10 text-primary text-sm font-medium rounded-full mb-3">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-sm rounded-full text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-primary-foreground"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
        <a href="https://github.com/ankitacode19?tab=repositories" target="_blank" rel="noopener noreferrer">  
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;