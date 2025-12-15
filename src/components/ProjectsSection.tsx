import { ExternalLink, Github, BarChart3, Cloud, FileText, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ITC Sales Dashboard",
    description:
      "A data analysis project where monthly and yearly ITC product sales were analyzed to identify trends, performance metrics, and insights for business decisions.",
    technologies: ["Python", "Power BI", "SQL", "Data Analysis"],
    icon: BarChart3,
    color: "from-primary to-accent",
  },
  {
    title: "Cloud Cost Explorer",
    description:
      "A dashboard that visualizes cloud usage and cost metrics. The system displays service-wise consumption using interactive graphs and charts, helping users understand and optimize their cloud spending.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Recharts"],
    icon: Cloud,
    color: "from-secondary to-primary",
  },
  {
    title: "AI Resume Builder & Mock Interview",
    description:
      "An AI-powered application that helps users create professional resumes and practice mock interviews. Uses advanced AI APIs to provide personalized feedback and suggestions.",
    technologies: ["React.js", "Node.js", "AI API", "Tailwind CSS"],
    icon: FileText,
    color: "from-accent to-secondary",
  },
  {
    title: "Zomato Clone",
    description:
      "A full-stack clone of the popular food delivery platform Zomato. Features restaurant listings, search functionality, user authentication, and a responsive design.",
    technologies: ["MongoDB", "HTML", "CSS", "JavaScript", "React.js"],
    icon: UtensilsCrossed,
    color: "from-primary to-secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore my recent projects showcasing data analysis and web development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-foreground/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 border border-foreground/20 rounded-xl rotate-12" />
                </div>
                <project.icon className="w-20 h-20 text-foreground relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="glow" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
