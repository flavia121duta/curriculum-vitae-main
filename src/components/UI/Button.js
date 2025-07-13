import classes from "./Button.module.css";

export default function Button(props) {
    return <button className={`${classes["main-button"]}`} {...props}>
        <i className={props.i}></i>
        {props.text}
    </button>
}