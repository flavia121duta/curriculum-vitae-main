import classes from "./About.module.css";
import Resume from "../assets/resume.pdf";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

import linkedinLogo from "../assets/social-logos/linkedin.svg";
import githubLogo from "../assets/social-logos/github.svg";
import tableauLogo from "../assets/social-logos/tableau.svg";
import SocialCircle from "../components/UI/SocialCircle";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className={classes["about-page"]}>
      <div className={classes["title-and-description"]}>
        <h1 className="title">
          <span className={classes["key-word"]}>DUŢĂ</span> FLAVIA
        </h1>

        <div className={classes.description}>
          <p>
            Hi! My name is Flavia, and I’m a recent graduate with a Master’s
            degree in
            <span className={classes["key-word"]}> Software Engineering </span>
            from the University of Bucharest. Currently, I work as a{" "}
            <span className={classes["key-word"]}>Data Analyst</span> at a
            company focused on retail market data.
          </p>

          <p>
            Beside my job as a data analyst, I have a strong passion for
            continuous learning and enjoy exploring new technologies or refining
            the ones I already know. Most of my projects so far have been
            developed either for university or as personal initiatives for
            myself and friends. I design the user interfaces of my applications
            myself. I have a solid foundation in{" "}
            <span className={classes["key-word"]}>
              UI/UX, supported by a 3-month course
            </span>{" "}
            in the field. Even my master’s thesis placed a strong emphasis on
            interface design, which was one of the key elements that helped me
            achieve a high final grade.
          </p>

          <p>
            My professional interests lie at the intersection of three key
            areas: <span className={classes["key-word"]}>data analysis</span>,{" "}
            <span className={classes["key-word"]}>programming</span>, and{" "}
            <span className={classes["key-word"]}>UI/UX design</span>. I’m
            always open to collaboration and eager to grow in all these
            fields.{" "}
          </p>

          <p>
            I'm currently open to new opportunities, whether it's in data
            analytics, software development, or UI/UX design. I’m especially
            interested in roles that allow me to combine these skills and
            contribute to meaningful, user-focused projects.
          </p>
        </div>

        <div className={classes["social-container"]}>
          <SocialCircle
            href="https://www.linkedin.com/in/flavia-duta-223903245/"
            target="_blank"
            alt="LinkedIn"
            logo={linkedinLogo}
          />
          <SocialCircle
            href="https://github.com/flavia121duta"
            target="_blank"
            alt="GitHub"
            logo={githubLogo}
          />
          <SocialCircle
            href="https://public.tableau.com/app/profile/flavia.duta/vizzes"
            target="_blank"
            alt="Tableau"
            logo={tableauLogo}
          />
        </div>
      </div>

      <div className={classes["button-container"]}>
        <Button
          type="primary"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          text="View Resume"
        />

        <Button
          type="secondary"
          text="View Side Projects"
          onClick={() => navigate("/side-projects")}
        />
      </div>
    </div>
  );
}
