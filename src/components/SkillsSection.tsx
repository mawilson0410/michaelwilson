import { useState } from "react";
import { cn } from "../lib/utils";

type Skill = {
  name: string;
  category: string;
  experienceLevel: number; // 1 to 5
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", experienceLevel: 4 },
  { name: "JavaScript", category: "frontend", experienceLevel: 4 },
  { name: "React", category: "frontend", experienceLevel: 4 },
  { name: "TypeScript", category: "frontend", experienceLevel: 4 },
  { name: "Tailwind CSS", category: "frontend", experienceLevel: 3 },
  { name: "React Native", category: "frontend", experienceLevel: 2 },
  { name: "Next.js", category: "frontend", experienceLevel: 2 },
  { name: "DaisyUI", category: "frontend", experienceLevel: 3 },

  // Backend
  { name: "Java", category: "backend", experienceLevel: 4 },
  { name: "C++", category: "backend", experienceLevel: 4 },
  { name: "Python", category: "backend", experienceLevel: 4 },
  { name: "API Dev", category: "backend", experienceLevel: 3 },
  { name: "Django", category: "backend", experienceLevel: 4 },
  { name: "Java Spring", category: "backend", experienceLevel: 2 },
  { name: "Node.js", category: "backend", experienceLevel: 4 },
  { name: "Express", category: "backend", experienceLevel: 3 },
  { name: "MongoDB", category: "backend", experienceLevel: 4 },
  { name: "TanStack", category: "backend", experienceLevel: 1 },
  { name: "PostgreSQL", category: "backend", experienceLevel: 2 },
  { name: "GraphQL", category: "backend", experienceLevel: 2 },

  // Tools
  { name: "Git/GitHub", category: "tools", experienceLevel: 5 },
  { name: "AWS, General", category: "tools", experienceLevel: 3 },
  { name: "AWS, EC2", category: "tools", experienceLevel: 3 },
  { name: "AWS, Lambda", category: "tools", experienceLevel: 3 },
  { name: "AWS, Route 53", category: "tools", experienceLevel: 3 },
  { name: "MS Azure", category: "tools", experienceLevel: 1 },
  { name: "Docker", category: "tools", experienceLevel: 2 },
  { name: "Figma", category: "tools", experienceLevel: 1 },
  { name: "VS Code", category: "tools", experienceLevel: 5 },
  { name: "Android Studio", category: "tools", experienceLevel: 4 },
  { name: "MS Word", category: "tools", experienceLevel: 4 },
  { name: "MS Excel", category: "tools", experienceLevel: 4 },
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Experience Level Label */}
              <div className="text-center mb-2 h-5">
                <span className="text-sm font-medium text-primary">
                  {getExperienceLabel(skill.experienceLevel)}
                </span>
              </div>

              {/* Dots with labels */}
              <div className="flex justify-between items-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const isActive = skill.experienceLevel === i + 1;
                  return (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border border-primary mb-1 transition-all duration-300",
                          isActive ? "bg-primary animate-pingOnce" : "bg-transparent"
                        )}
                      />
                      <span className="text-xs text-muted-foreground">
                        {i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};