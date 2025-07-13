import classes from "./Skills.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillProgressBar from "../components/UI/SkilProgressBar";

export default function SkillsPage() {
  return (
    <>
      <h1 className="title">SKILLS</h1>
      <section>
        <h4>Programming languages, frameworks and tools that I worked with:</h4>

        <ul className={`${classes.parent} ${classes["horizontal-list"]}`}>

          <SkillProgressBar text="React" percent={80} />
          <SkillProgressBar text="TypeScript" percent={65} />
          <SkillProgressBar text="Tailwind" percent={60} />
          <SkillProgressBar text="HTML" percent={90} />
          <SkillProgressBar text="CSS" percent={70} />
          <SkillProgressBar text="JavaScript" percent={80} />
          <SkillProgressBar text="SpringBoot" percent={90} />
          <SkillProgressBar text="Java" percent={90} />
          <SkillProgressBar text="Python" percent={70} />
          <SkillProgressBar text="Oracle" percent={95} />
          <SkillProgressBar text="Mongo" percent={80} />
          <SkillProgressBar text="Figma" percent={85} />
          <SkillProgressBar text="GitHub" percent={85} />

        </ul>
      </section>

      <section>
        <h2 style={{paddingTop: "3rem"}}>FOREIGN LANGUAGES</h2>

        <ul>
          <li>English - B2</li>
          <li>French - A2</li>
        </ul>
      </section>
    </>
  );
}
