import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Floating background shapes */}
      <div className="floating-shape w-96 h-96 bg-primary -top-20 -left-20" />
      <div className="floating-shape w-80 h-80 bg-secondary top-1/2 -right-20" style={{ animationDelay: "2s" }} />
      <div className="floating-shape w-64 h-64 bg-accent bottom-20 left-1/3" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
            Hello, I'm{" "}
            <span className="gradient-text">Sandeep Gujjeti</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            Full Stack Developer & Data Analyst
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
            B.Tech CSE Student passionate about building impactful digital solutions,
            analyzing data, and creating user-friendly experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-500" style={{ animationFillMode: "forwards" }}>
            <a
              href="https://www.linkedin.com/in/sandeep-gujjeti/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/sandeepgujjeti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </a>
            <a
              href="mailto:sandeepgujjeti7@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
