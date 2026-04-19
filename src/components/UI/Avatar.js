import classes from "./Avatar.module.css";
import profilePicture from "../../assets/recent-profile-picture.jpg";

export default function Avatar(props) {
  return (
    <img
      src={props.src || profilePicture}
      alt={props.alt}
      className={`${classes["avatar-img"]} ${props.className}`}
      onClick={props.onClick || null}
    />
  );
}
