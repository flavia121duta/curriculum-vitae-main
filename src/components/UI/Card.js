import classes from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <h6>{props.title}</h6>
      </header>
      <main className={`${classes["card-content"]}`}>
        <p>{props.content}</p>
        {props.title === "Technologies used" && <Link to={props.link} class="link">See it on GitHub</Link>}
      </main>
    </div>
  );
}
