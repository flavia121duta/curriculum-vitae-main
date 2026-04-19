import { useState, useEffect, useCallback } from "react";
import Label from "../components/UI/Label";
import classes from "./ModalProject.module.css";

export default function ModalProject({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Folosim useCallback pentru a ne asigura că funcțiile sunt memorate
  // și nu recreează listener-ul inutil la fiecare render
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
    );
  }, [project.images.length]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [project.images.length]);

  // Hook-ul pentru tastatură
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    // Adăugăm event listener-ul când componenta se montează
    window.addEventListener("keydown", handleKeyDown);

    // FOARTE IMPORTANT: Curățăm listener-ul când componenta se închide
    // pentru a evita scurgerile de memorie (memory leaks)
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevImage, nextImage]); // Listener-ul se actualizează dacă funcțiile se schimbă

  return (
    <div className={classes["project-card"]}>
      <div className={classes["project-details"]}>
        <h3>{project.title}</h3>

        <div className={classes["label-container"]}>
          {project.labels.map((label, index) => (
            <Label key={index} color="#f0f0f0" text={label} />
          ))}
        </div>
      </div>

      <div className={classes["carousel-container"]}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={classes["project-card-img"]}
        />
        <div className={`sliderContainer ${classes["sliderImage"]}`}>
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

      <p className={classes["project-description"]}>
        {project.description}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
