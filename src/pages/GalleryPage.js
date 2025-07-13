import ImageModal from "../components/UI/ImageModal";
import { useState } from "react";
import classes from "./GalleryPage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import p1_h from "../assets/images/high_quality_images/coding.png";
import p1_l from "../assets/images/low_quality_images/coding.jpg";
import p2_h from "../assets/images/high_quality_images/grafic_design.png";
import p2_l from "../assets/images/low_quality_images/grafic_design.jpg";
import p3_h from "../assets/images/high_quality_images/grading.png";
import p3_l from "../assets/images/low_quality_images/grading.jpg";
import p4_h from "../assets/images/high_quality_images/ravesnburger.png";
import p4_l from "../assets/images/low_quality_images/ravesnburger.jpg";
import p5_h from "../assets/images/high_quality_images/puzzling.png";
import p5_l from "../assets/images/low_quality_images/puzzling.jpg";
import p6_h from "../assets/images/high_quality_images/paint.png";
import p6_l from "../assets/images/low_quality_images/paint.jpg";
import p7_h from "../assets/images/high_quality_images/teaching.png";
import p7_l from "../assets/images/low_quality_images/teaching.jpg";

const images = [
  {
    label: "Coding",
    alt: "coding",
    src: p1_h,
    low_quality: p1_l,
    id: 5728,
    class: "img0"
  },
  {
    label: "Grafic Design",
    alt: "grafic tablet",
    src: p2_h,
    low_quality: p2_l,
    id: 9899,
    class: "img1"
  },
  {
    label: "Grading students",
    alt: "grading",
    src: p3_h,
    low_quality: p3_l,
    id: 7632,
    class: "img2"
  },
  {
    label: "Ravensburger Puzzle",
    alt: "Ravensburger Puzzle",
    src: p4_h,
    low_quality: p4_l,
    id: 1076,
    class: "img3"
  },
  {
    label: "Puzzling",
    alt: "puzzling",
    src: p5_h,
    low_quality: p5_l,
    id: 2917,
    class: "img4"
  },
  {
    label: "Painting",
    alt: "painting",
    src: p6_h,
    low_quality: p6_l,
    id: 7612,
    class: "img5"
  },
  {
    label: "Teaching",
    alt: "teaching",
    src: p7_h,
    low_quality: p7_l,
    id: 6322,
    class: "img6"
  },
];

function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [srcImage, setSrcImage] = useState();

  function showImageHandler(event) {
    setSrcImage(event.target.getAttribute("src"));
    setIsVisible(true);
  }

  function galleryHandler() {
    setIsVisible(false);
  }

  return (
    <>
      <h1 class="title">GALLERY</h1>

      <p>Click any image to see it on full screen!</p>

      {isVisible && (
        <ImageModal
          src={srcImage}
          alt="piece of the gallery"
          onConfirm={galleryHandler}
        />
      )}

      <div className={classes.gallery}>
        {images.map((image) => (
          <div className={classes[image.class]}>
            <LazyLoadImage
              className={classes.img}
              key={image.id}
              src={image.src}
              placeholderSrc={image.low_quality}
              effect="blur"
              alt={image.alt}
              loading="lazy"
              onClick={showImageHandler}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
