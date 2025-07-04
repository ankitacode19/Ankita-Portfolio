import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects 
            and opportunities. Let's create something amazing together.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-16"> */}
          {/* Contact Information */}
          <div className="space-y-8">
            
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind 
                or just want to say hello, I'd love to hear from you. I typically 
                respond within 24 hours.
              </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">ankitayadav019012@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">8691850406</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <MapPin className="text-primary-glow" size={24} />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Mumbai, India</div>
                </div>
              </div>
            {/* </div> */}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ankitacode19"
                  className="p-3 bg-card rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ankita-vikas-yadav/"
                  className="p-3 bg-card rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;