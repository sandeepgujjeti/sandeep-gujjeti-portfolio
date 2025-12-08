import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              Sandeep
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Developer & Data Analyst
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Sandeep Gujjeti. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
