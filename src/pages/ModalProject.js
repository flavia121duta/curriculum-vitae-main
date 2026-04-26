import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { LanguageContext } from "../components/hooks/context/LanguageContext";
import Label from "../components/UI/Label";
import classes from "./ModalProject.module.css";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function ModalProject({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIsLoading, setCurrentImageIsLoading] = useState(true);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setCurrentImageIsLoading(true);
  }, [currentImageIndex]);

  // Folosim useRef pentru a stoca coordonatele fără a declanșa re-randări inutile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Distanța minimă pentru a fi considerat un swipe (în pixeli)
  const minSwipeDistance = 50;

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

  // --- Hook-ul pentru Touchscreen ---
  useEffect(() => {
    const onTouchStart = (e) => {
      touchEndX.current = null; // Resetăm la fiecare atingere nouă
      touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
      touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;

      const distance = touchStartX.current - touchEndX.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        // Swipe spre stânga -> Mergem la imaginea URMĂTOARE
        nextImage();
      } else if (isRightSwipe) {
        // Swipe spre dreapta -> Mergem la imaginea ANTERIOARĂ
        prevImage();
      }
    };

    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [nextImage, prevImage]); // Re-legăm listener-ul dacă funcțiile se schimbă

  // --- Hook-ul pentru Tastatura ---
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

      <p className={classes["project-description"]}>
        {project.description[language]}
      </p>

      <div className={classes["carousel-container"]}>
        {/* 2. SPINNER-ul: apare doar dacă starea este true */}
        {currentImageIsLoading && (
          <div className={classes["spinner-wrapper"]}>
            <LoadingSpinner />
          </div>
        )}

        {/* 3. IMAGINEA: este mereu în DOM, dar ascunsă prin CSS cât timp se încarcă */}
        <img
          key={project.images[currentImageIndex]} // 'key' forțează React să trateze imaginea ca pe un element nou
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={`${classes["project-card-img"]} ${currentImageIsLoading ? classes.hidden : ""}`}
          onLoad={() => setCurrentImageIsLoading(false)}
          onError={() => setCurrentImageIsLoading(false)} // Oprim spinner-ul și dacă e eroare
        />

        <div className={`${classes["sliderImage"]}`}>
          <button onClick={prevImage} className={classes.chevron}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 19L8 12L15 5" />
            </svg>
          </button>

          <span>
            {currentImageIndex + 1} / {project.images.length}
          </span>

          <button onClick={nextImage} className={classes.chevron}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5L16 12L9 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
