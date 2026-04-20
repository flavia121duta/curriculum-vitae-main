import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner(props) {
  return <div className={`${classes.spinner} ${props.className}`}></div>;
}
