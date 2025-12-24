import { Code2, Database, LineChart, Users } from "lucide-react";

const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "Power BI", level: 75 },
  { name: "HTML/CSS", level: 88 },
  { name: "JavaScript", level: 70 },
  { name: "React.js", level: 75 },
  { name: "Node.js", level: 65 },
  { name: "Excel", level: 85 },
  { name: "Data Analysis", level: 80 },
];

const softSkills = [
  { name: "Problem Solving", icon: Code2 },
  { name: "Communication", icon: Users },
  { name: "Analytical Thinking", icon: LineChart },
  { name: "Teamwork", icon: Users },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="floating-shape w-72 h-72 bg-primary top-0 right-0" />
      <div className="floating-shape w-64 h-64 bg-secondary bottom-0 left-0" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/20">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300 group"
                  >
                    <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Git", "GitHub", "Power BI", "Figma", "Postman", "MongoDB", "SQL"].map(
                  (tool, index) => (
                    <span
                      key={index}
                      className="skill-badge hover:border-primary"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
