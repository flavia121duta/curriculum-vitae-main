import classes from "./About.module.css";
import Resume from "../assets/resume.pdf";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../components/hooks/useScreenSize";

import linkedinLogo from "../assets/social-logos/linkedin.svg";
import githubLogo from "../assets/social-logos/github.svg";
import tableauLogo from "../assets/social-logos/tableau.svg";
import SocialCircle from "../components/UI/SocialCircle";

import Avatar from "../components/UI/Avatar";

import { useContext } from "react";
import { LanguageContext } from "../components/hooks/context/LanguageContext";

const content = {
  en: {
    resumeBtn: "View Resume",
    projectsBtn: "View Side Projects",
    description: (
      <>
        <p>
          Hi! My name is Flavia, and I’m a recent graduate with a Master’s
          degree in
          <span className={classes["key-word"]}> Software Engineering </span>
          from the University of Bucharest. Currently, I work as a{" "}
          <span className={classes["key-word"]}>Data Analyst</span> at a company
          focused on retail market data.
        </p>

        <p>
          Beside my job as a data analyst, I have a strong passion for
          continuous learning and enjoy exploring new technologies or refining
          the ones I already know. Most of my projects so far have been
          developed either for university or as personal initiatives for myself
          and friends. I design the user interfaces of my applications myself. I
          have a solid foundation in{" "}
          <span className={classes["key-word"]}>
            UI/UX, supported by a 3-month course
          </span>{" "}
          in the field. Even my master’s thesis placed a strong emphasis on
          interface design, which was one of the key elements that helped me
          achieve a high final grade.
        </p>

        <p>
          My professional interests lie at the intersection of three key areas:{" "}
          <span className={classes["key-word"]}>data analysis</span>,{" "}
          <span className={classes["key-word"]}>programming</span>, and{" "}
          <span className={classes["key-word"]}>UI/UX design</span>. I’m always
          open to collaboration and eager to grow in all these fields.{" "}
        </p>

        <p>
          I'm currently open to new opportunities, whether it's in data
          analytics, software development, or UI/UX design. I’m especially
          interested in roles that allow me to combine these skills and
          contribute to meaningful, user-focused projects.
        </p>
      </>
    ),
  },
  ro: {
    resumeBtn: "Vezi CV-ul",
    projectsBtn: "Vezi Proiecte Personale",
    description: (
      <>
        <p>
          Bună! Numele meu este Flavia și sunt proaspăt absolventă a unui
          program de Master în
          <span className={classes["key-word"]}> Inginerie Software </span>
          la Universitatea din București. În prezent lucrez ca{" "}
          <span className={classes["key-word"]}>Data Analyst</span> în cadrul
          unei companii axate pe date din piața de retail.
        </p>
        <p>
          Pe lângă meseria mea de analist, am o pasiune puternică pentru
          învățarea continuă și îmi place să explorez noi tehnologii sau să
          perfecționez cele pe care le cunosc deja. Majoritatea proiectelor mele
          de până acum au fost dezvoltate fie pentru universitate, fie ca
          inițiative personale pentru mine și prietenii mei. Proiectez singur
          interfețele de utilizator ale aplicațiilor mele. Am o bază solidă în{" "}
          <span className={classes["key-word"]}>
            UI/UX, susținută de un curs de 3 luni
          </span>{" "}
          în acest domeniu. Chiar și lucrarea mea de disertație a pus un accent
          puternic pe proiectarea interfețelor, ceea ce a fost unul dintre
          elementele cheie care m-au ajutat să obțin o notă finală foarte bună.
        </p>

        <p>
          Interesele mele profesionale se află la intersecția a trei domenii
          cheie: <span className={classes["key-word"]}>data analysis</span>,{" "}
          <span className={classes["key-word"]}>programming</span>, and{" "}
          <span className={classes["key-word"]}>UI/UX design</span>. Sunt
          deschisă la colaborare și dornică să mă dezvolt în toate aceste
          domenii.{" "}
        </p>

        <p>
          În prezent sunt deschisă la noi oportunități, fie că este vorba de
          lucrul cu date, ingineria software sau UI/UX design. Sunt interesată
          în mod deosebit de roluri care îmi permit să combin aceste competențe
          și să contribui la proiecte mari, centrate pe utilizator.
        </p>
      </>
    ),
  },
};

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const activeContent = content[language];

  const navigate = useNavigate();

  const screenSize = useScreenSize(true);
  const isDesktop = screenSize === "desktop";

  const mobileLayout = (
    <div className={classes["mobile-layout"]}>
      <div className={classes["top-container"]}>
        <Avatar alt="avatar" className={classes.avatar} />
        <div className={classes["socials-mobile-layout"]}>
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

      <div className={classes.description}>{activeContent.description}</div>

      <div className={classes["action-buttons-on-mobile"]}>
        <Button
          type="primary"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          text={activeContent.resumeBtn}
        />

        <Button
          type="secondary"
          text={activeContent.projectsBtn}
          onClick={() => navigate("/side-projects")}
        />
      </div>
    </div>
  );

  const desktopLayout = (
    <div className={classes["desktop-layout"]}>
      <div className={classes["title-and-description"]}>
        <h1 className="title">
          <span className={classes["key-word"]}>DUŢĂ</span> FLAVIA
        </h1>

        <div className={classes.description}>{activeContent.description}</div>

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
          text={activeContent.resumeBtn}
        />

        <Button
          type="secondary"
          text={activeContent.projectsBtn}
          onClick={() => navigate("/side-projects")}
        />
      </div>
    </div>
  );

  return <>{isDesktop ? desktopLayout : mobileLayout}</>;
}
