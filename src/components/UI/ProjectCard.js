import classes from "./ProjectCard.module.css";

function ProjectCard({ project, onSelect }) {
  return (
    <div className={classes["project-card"]} onClick={onSelect}>
      <div>
        <img
          src={project.images[0]}
          alt={project.title}
          className={classes["main-image"]}
        />
        <p className={classes["project-title"]}>{project.title}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
