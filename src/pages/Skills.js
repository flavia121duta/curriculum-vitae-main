import classes from "./Skills.module.css";
import { useState } from "react";
import ChipSkillExperience from "../components/UI/ChipSkillExperience";
import Button from "../components/UI/Button";

const programmingLanguages = [
  { language: "C++", level: "advanced" },
  { language: "Python", level: "intermediate" },
  { language: "R", level: "intermediate" },
  { language: "Java", level: "advanced" },
  { language: "SQL", level: "advanced" },
  { language: "HTML + CSS + JavaScript", level: "advanced" },
  { language: "TypeScript", level: "intermediate" },
  { language: "Kotlin", level: "beginner" },
];

const frameworks = [
  { framework: "React", level: "advanced" },
  { framework: "Spring Boot", level: "advanced" },
];

const tools = [
  { tool: "Figma", level: "advanced" },
  { tool: "GitHub", level: "advanced" },
  { tool: "VS Code", level: "advanced" },
  { tool: "Postman", level: "intermediate" },
  { tool: "Docker", level: "intermediate" },
  { tool: "Jira", level: "intermediate" },
  { tool: "MongoDB", level: "intermediate" },
  { tool: "Microsoft Office", level: "advanced" },
  { tool: "Google Workspace", level: "advanced" },
  { tool: "Excel", level: "advanced" },
  { tool: "PowerPoint", level: "advanced" },
  { tool: "Tableau", level: "advanced" },
  { tool: "Microsoft Azure", level: "beginner" },
  { tool: "sqldeveloper", level: "advanced" },
];

export default function SkillsPage() {
  const [skillsToDisplay, setSkillsToDisplay] = useState(
    "programmingLanguages",
  );

  // Create a map to easily grab the right array
  const categoryData = {
    programmingLanguages: {
      data: programmingLanguages,
      key: "language",
    },
    frameworks: {
      data: frameworks,
      key: "framework",
    },
    tools: {
      data: tools,
      key: "tool",
    },
  };

  const currentCategory = categoryData[skillsToDisplay];

  return (
    <>
      <h1 className="title">SKILLS</h1>
      <section>
        <p>Programming languages, frameworks and tools that I worked with:</p>

        <div className={classes.filterButtons}>
          <Button
            type={
              skillsToDisplay === "programmingLanguages"
                ? "primary"
                : "secondary"
            }
            text="Languages"
            onClick={() => setSkillsToDisplay("programmingLanguages")}
          />
          <Button
            type={skillsToDisplay === "frameworks" ? "primary" : "secondary"}
            text="Frameworks"
            onClick={() => setSkillsToDisplay("frameworks")}
          />
          <Button
            type={skillsToDisplay === "tools" ? "primary" : "secondary"}
            text="Tools"
            onClick={() => setSkillsToDisplay("tools")}
          />
        </div>

        <div className={classes["skills-grid"]}>
          {currentCategory.data.map((item) => (
            <ChipSkillExperience
              key={item[currentCategory.key]}
              skill={item[currentCategory.key]}
              level={item.level}
            />
          ))}
        </div>
      </section>
    </>
  );
}
