import { useState } from "react";
import classes from "./About.module.css";
import Resume from "../assets/resume.pdf";
import Button from "../components/UI/Button";

export default function AboutPage() {
  const [isHidden, setIsHidden] = useState(false);
  const [typeOfChevron, setShowContactInfo] = useState(
    "fa-solid fa-chevron-down"
  );

  const hidePannelHandler = () => {
    setIsHidden(!isHidden);

    if (isHidden === true) {
      setShowContactInfo("fa-solid fa-chevron-down");
    } else {
      setShowContactInfo("fa-solid fa-chevron-up");
    }
  };

  return (
    <>
      <h1 className="title">
        <span className={`${classes["first-name"]}`}>DUŢĂ</span> FLAVIA
      </h1>

      <p>
        Hi! My name is Flavia, and I’m a recent graduate with a Master’s degree in
        <span className={classes["key-word"]}> Software Engineering </span>
        from the University of Bucharest. Currently, I work as a <span className={classes["key-word"]}>Data Analyst</span> at a company focused on retail market data.
      </p>

      <p>
        Beside my job as a data analyst, I have a strong passion for continuous learning and enjoy exploring new technologies or refining the ones I already know. 
        Most of my projects so far have been developed either for university or as personal initiatives for myself and friends. 
        I design the user interfaces of my applications myself. I have a solid foundation in UI/UX, supported by a 3-month course in the field. 
        Even my master’s thesis placed a strong emphasis on interface design, which was one of the key elements that helped me achieve a high final grade.
      </p>

      <p>
       My professional interests lie at the intersection of three key areas: <span className={classes["key-word"]}>data analysis</span>, <span className={classes["key-word"]}>programming</span>, and <span className={classes["key-word"]}>UI/UX design</span>. 
       I’m always open to collaboration and eager to grow in all these fields...{" "}
      </p>

      <p>
        I'm currently open to new opportunities — whether it's in data analytics, software development, or UI/UX design. 
        I’m especially interested in roles that allow me to combine these skills and contribute to meaningful, user-focused projects.
      </p>

      <ul>
        <li>Forename: Flavia</li>
        <li>Surname: Duţă</li>
        <li>Date of birth: 1st February 2002</li>
        <li>Place of birth: Oneşti, Romania</li>
        <li>Nationality: Romanian</li>
      </ul>

      <p>
        {" "}
        You can see my full CV{" "}
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          class="link"
        >
          here
        </a>{" "}
        or you can download it.
      </p>

      <a href={Resume} download="Duta_Flavia resume">
        <Button text="  Download my resume" i="fa-solid fa-download"></Button>
      </a>

      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/flavia-duta-223903245/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/flavia121duta"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className={classes.contact}>
        <div
          className={`${classes["hide-option"]}`}
          onClick={hidePannelHandler}
        >
          <h3>Contact Me</h3>
          <i className={typeOfChevron}></i>
        </div>
        {isHidden && (
          <ul className={`${classes["contacts-list"]}`}>
            <li>Phone: +40 733 519 182</li>
            <li>
              Email:{" "}
              <span className={classes.email}>flaviaduta302@gmail.com</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
