import { useState } from "react";
import Label from "../UI/Label";
import classes from "./ProjectCard.module.css";
import chevron_left from "../../assets/icons/chevron-left.svg";
import chevron_right from "../../assets/icons/chevron-right.svg";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={classes["project-card"]}>
      
      {project.images.length > 1 ? (
        <div className={classes["carousel-container"]}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={classes["project-card-img"]}
        />
        <button onClick={prevImage} className={classes["carousel-button-left"]}>
          <img src={chevron_left} alt="Previous" />
        </button>
        <button onClick={nextImage} className={classes["carousel-button-right"]}>
          <img src={chevron_right} alt="Next" />
        </button>
        </div>
      ) : (
        <div className={classes["carousel-container"]}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={classes["project-card-img"]}
        />
        </div>
      )}

      <h3>{project.title}</h3>

      <div className={classes["label-container"]}>
        {project.labels.map((label, index) => (
          <Label key={index} color="#f0f0f0" text={label} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
