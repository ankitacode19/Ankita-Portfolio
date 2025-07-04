import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer about creating digital solutions 
            that combine technical excellence with stunning visual design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a full-stack developer who believes that great software is the perfect 
              marriage of robust functionality and intuitive design. My journey began with 
              a curiosity for how things work, which led me to explore both the technical 
              and creative aspects of web development.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              When I'm not coding, you'll find me exploring the latest design trends. 
              I'm always excited about new challenges and opportunities to learn.
            </p>
            
            
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable code that follows best practices 
                  and industry standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Palette className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design Focus</h3>
                <p className="text-muted-foreground">
                  Creating beautiful, intuitive interfaces that provide exceptional 
                  user experiences across all devices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-glow/10 rounded-lg">
                <Zap className="text-primary-glow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, efficiency, and seamless 
                  performance at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;