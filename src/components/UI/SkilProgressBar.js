import { ProgressBar } from "react-bootstrap";
import "./SkillProgressBar.css";

function SkillProgressBar({text, percent}) {
    return (
        <li className="skill-item">
            <p>{text}</p>
            <div className="progress-container">
                <ProgressBar now={percent} animated />
                <span className="progress-label">{percent}%</span>
            </div>
        </li>
    );
}

export default SkillProgressBar;