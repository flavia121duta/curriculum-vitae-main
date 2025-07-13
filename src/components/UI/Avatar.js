import classes from "./Avatar.module.css";

export default function Avatar(props) {
    return <img
    src={props.src}
    alt={props.alt}
    className={`${classes["avatar-img"]} ${props.className}`}
    onClick={props.onClick}
  />
}