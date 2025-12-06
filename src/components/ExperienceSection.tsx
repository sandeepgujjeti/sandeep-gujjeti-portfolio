import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Front End Developer Intern",
    organization: "Poditivity",
    period: "Nov 2023 – Feb 2024",
    description: [
      "Contributed to front-end development tasks",
      "Improved UI/UX for better user experience",
      "Collaborated with team members to deliver project components",
    ],
    icon: Briefcase,
    color: "bg-primary",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    organization: "Chaitanya Deemed to be University",
    period: "2022 – 2026",
    description: ["Pursuing undergraduate degree with focus on software development and data analysis"],
    icon: GraduationCap,
    color: "bg-secondary",
  },
];

const certifications = [
  { title: "Power BI Certification", issuer: "Office Master" },
  { title: "Python Certification", issuer: "IBM" },
  { title: "Excel Certification", issuer: "Infosys Springboard" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="floating-shape w-80 h-80 bg-accent -top-20 right-1/4" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Timeline
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-3 w-7 h-7 rounded-full ${exp.color} flex items-center justify-center`}>
                    <exp.icon className="w-4 h-4 text-foreground" />
                  </div>

                  <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h4 className="text-xl font-bold mt-2">{exp.title}</h4>
                    <p className="text-muted-foreground mt-1">{exp.organization}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-secondary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 glass-card p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5">
              <h4 className="font-bold text-xl mb-4">Always Learning</h4>
              <p className="text-muted-foreground">
                I'm constantly expanding my skill set and staying updated with the latest 
                technologies. Currently exploring advanced data visualization techniques 
                and modern web development frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
