import { useState } from "react";
import Label from "../UI/Label";
import classes from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className={classes["project-card"]}>
      <div className={classes["carousel-container"]}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={classes["project-card-img"]}
        />
        <div className={`pagination ${classes["sliderImage"]}`}>
          <button
            onClick={prevImage}
            disabled={currentImageIndex === 0}
            className="chevron"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <span>
            {currentImageIndex + 1} / {project.images.length}
          </span>

          <button
            onClick={nextImage}
            disabled={currentImageIndex === project.images.length - 1}
            className="chevron"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={classes["project-details"]}>
        <h3>{project.title}</h3>

        <div className={classes["label-container"]}>
          {project.labels.map((label, index) => (
            <Label key={index} color="#f0f0f0" text={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
