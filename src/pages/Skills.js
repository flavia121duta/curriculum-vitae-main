import classes from "./Skills.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

export default function SkillsPage() {
  return (
    <>
      <h1 className="title">SKILLS</h1>
      <section>
        <h2>PROGRAMMING LANGUAGES</h2>

        <ul className={`${classes.parent} ${classes["horizontal-list"]}`}>
          <li>
            <i className="fa-brands fa-html5"></i>
            <ProgressBar now={100} />
          </li>
          <li>
            <i className="fa-brands fa-css3-alt"></i>
            <ProgressBar now={90} animated />
          </li>
          <li>
            <i className="fa-brands fa-python"></i>
            <ProgressBar now={85} animated />
          </li>
          <li>
            <i className="fa-brands fa-react"></i>
            <ProgressBar now={80} animated />
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
            <ProgressBar now={65} animated />
          </li>
        </ul>
      </section>

      <section>
        <h2>FOREIGN LANGUAGES</h2>

        <ul>
          <li>English - B2</li>
          <li>French - A2</li>
        </ul>
      </section>
    </>
  );
}
