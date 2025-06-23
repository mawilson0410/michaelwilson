import { useState } from "react";
import { cn } from "../lib/utils";

type Skill = {
  name: string;
  level: number;
  category: string;
  experienceLevel: number;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", experienceLevel: 4 },
  { name: "JavaScript", level: 90, category: "frontend", experienceLevel: 4 },
  { name: "React", level: 90, category: "frontend", experienceLevel: 4 },
  { name: "TypeScript", level: 90, category: "frontend", experienceLevel: 4 },
  { name: "Tailwind CSS", level: 75, category: "frontend", experienceLevel: 3 },
  { name: "React Native", level: 50, category: "frontend", experienceLevel: 2 },
  { name: "Next.js", level: 60, category: "frontend", experienceLevel: 2 },
  { name: "DaisyUI", level: 70, category: "frontend", experienceLevel: 3 },

  // Backend
  { name: "Java", level: 90, category: "backend", experienceLevel: 4 },
  { name: "C++", level: 85, category: "backend", experienceLevel: 4 },
  { name: "Python", level: 85, category: "backend", experienceLevel: 4 },
  { name: "API Dev", level: 70, category: "backend", experienceLevel: 3 },
  { name: "Django", level: 85, category: "backend", experienceLevel: 4 },
  { name: "Java Spring", level: 55, category: "backend", experienceLevel: 2 },
  { name: "Node.js", level: 85, category: "backend", experienceLevel: 4 },
  { name: "Express", level: 75, category: "backend", experienceLevel: 3 },
  { name: "MongoDB", level: 85, category: "backend", experienceLevel: 4 },
  { name: "TanStack", level: 40, category: "backend", experienceLevel: 1 },
  { name: "PostgreSQL", level: 50, category: "backend", experienceLevel: 2 },
  { name: "GraphQL", level: 50, category: "backend", experienceLevel: 2 },

  // Tools
  { name: "Git/GitHub", level: 95, category: "tools", experienceLevel: 4 },
  { name: "AWS, General", level: 75, category: "tools", experienceLevel: 3 },
  { name: "AWS, EC2", level: 70, category: "tools", experienceLevel: 3 },
  { name: "AWS, Lambda", level: 40, category: "tools", experienceLevel: 2 },
  { name: "AWS, Route 53", level: 65, category: "tools", experienceLevel: 3 },
  { name: "MS Azure", level: 40, category: "tools", experienceLevel: 1 },
  { name: "Docker", level: 45, category: "tools", experienceLevel: 2 },
  { name: "Figma", level: 40, category: "tools", experienceLevel: 1 },
  { name: "VS Code", level: 95, category: "tools", experienceLevel: 4 },
  { name: "Android Studio", level: 85, category: "tools", experienceLevel: 4 },
  { name: "MS Word", level: 85, category: "tools", experienceLevel: 4 },
  { name: "MS Excel", level: 90, category: "tools", experienceLevel: 4 },
];

const categories = ["all", "frontend", "backend", "tools"];

const getExperienceLabel = (level: number): string => {
  switch (level) {
    case 1:
      return "Beginner";
    case 2:
      return "Learning";
    case 3:
      return "Intermediate";
    case 4:
      return "Advanced";
    case 5:
      return "Expert";
    default:
      return "";
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Legend */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 flex-wrap text-sm text-muted-foreground">
            <span>1 - Beginner</span>
            <span>2 - Learning</span>
            <span>3 - Intermediate</span>
            <span>4 - Advanced</span>
            <span>5 - Expert</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1 text-sm text-muted-foreground">
                <span>
                  {skill.level}% | {skill.experienceLevel}/5 —{" "}
                  {getExperienceLabel(skill.experienceLevel)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
