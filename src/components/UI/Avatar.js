import { useState } from "react";
import classes from "./Avatar.module.css";
import profilePicture from "../../assets/recent-profile-picture.webp";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function Avatar(props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={classes.avatarContainer}>
      {isLoading && <LoadingSpinner />}

      <img
        src={props.src || profilePicture}
        alt={props.alt}
        className={`${classes["avatar-img"]} ${props.className}`}
        style={isLoading ? { display: "none" } : {}}
        onLoad={() => setIsLoading(false)}
        onClick={props.onClick || null}
      />
    </div>
  );
}
