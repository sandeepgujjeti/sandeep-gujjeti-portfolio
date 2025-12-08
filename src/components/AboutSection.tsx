import { MapPin, GraduationCap, Code2, BarChart3, User } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: "Full Stack Dev", color: "text-primary" },
    { icon: BarChart3, label: "Data Analyst", color: "text-secondary" },
    { icon: GraduationCap, label: "B.Tech CSE", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration area */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="relative z-10">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <User className="w-32 h-32 text-primary/50" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">2026 Graduate</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">Warangal, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Sandeep Gujjeti</span>, 
              a highly enthusiastic B.Tech Computer Science and Engineering student from 
              Chaitanya Deemed to be University, graduating in 2026. Originally from Warangal, 
              I'm passionate about exploring new technologies, analyzing data, building 
              dashboards, and developing impactful projects.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in environments where I can solve problems, think analytically, 
              and create clean, user-friendly digital experiences. My journey combines 
              technical expertise with a creative mindset to deliver solutions that matter.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
