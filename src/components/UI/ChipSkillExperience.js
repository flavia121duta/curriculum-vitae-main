import classes from "./ChipSkillExperience.module.css";

export default function ChipSkillExperience({ level, skill }) {
  return (
    <div className={classes.container}>
      <p className={classes.skillName}>{skill}</p>
      <div className={classes.chipsContainer}>
        {/* Fixed the typo from "Beginer" to "Beginner" */}
        <div
          className={`${classes.chip} ${level === "beginner" ? classes.active : ""}`}
        >
          Beginner
        </div>
        <div
          className={`${classes.chip} ${level === "intermediate" ? classes.active : ""}`}
        >
          Intermediate
        </div>
        <div
          className={`${classes.chip} ${level === "advanced" ? classes.active : ""}`}
        >
          Advanced
        </div>
      </div>
    </div>
  );
}
