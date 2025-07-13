import classes from "./Label.module.css";

function Label({ color, text, className }) {
  return (
    <div
      className={`${classes.label} ${className || ""}`}
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
}

export default Label;