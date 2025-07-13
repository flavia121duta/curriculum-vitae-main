import classes from "./ExperienceSection.module.css";
import Button from "./Button";
import Card from "./Card";

export default function ExperienceSection(props) {
  return (
    <section className={classes.section}>
      <h2>{props.title}</h2>
      <Button
        text={`${props.isVisible ? "Hide" : "Show"} project details`}
        onClick={props.onToggle}
      />
      {props.isVisible && (
        <div className={classes.cards}>
          <Card title="Purpose" content={props.purpose} />
          <Card title="My contribution" content={props.contribution} />
          <Card
            title="Technologies used"
            content={props.technologies}
            link={props.link}
          />
        </div>
      )}
    </section>
  );
}