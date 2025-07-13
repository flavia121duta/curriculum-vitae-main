import classes from "./ImageModal.module.css";
import React from "react";

export default function ImageModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.modal}>
        <img src={props.src} alt={props.alt} className={`${classes["modal-img"]}`} />
      </div>
    </div>
  );
}
