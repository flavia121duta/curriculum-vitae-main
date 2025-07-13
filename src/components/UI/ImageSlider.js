import { imageData as images } from "../../assets/DUMMY_IMAGES";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import classes from "./ImageSlider.module.css";

const renderSlides = images.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className={classes.carousel}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        className={`${classes["carousel-container"]}`}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}
