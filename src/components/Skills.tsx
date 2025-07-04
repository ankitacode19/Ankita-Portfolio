import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Cpu,
  Cloud,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "TypeScript", "HTML", "Tailwind CSS", "SCSS"],
      color: "text-primary"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "MySQL", "Django", "REST APIs"],
      color: "text-accent"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Java", "Android"],
      color: "text-primary-glow"
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["AWS", "CI/CD", "Linux"],
      color: "text-primary"
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "UI/UX", "AutoCAD"],
      color: "text-accent"
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "VS Code", "Replit",],
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color.split('-')[1]}/10`}>
                  <category.icon className={category.color} size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-foreground/90">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-primary' : 'bg-muted'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[
              "React", "Django", "TypeScript", "Node.js", "Python", "Bootstrap", 
              "MySQL", "HTML", "Git", "Figma"
            ].map((tech) => (
              <div 
                key={tech}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;