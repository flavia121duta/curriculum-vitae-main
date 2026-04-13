import classes from "./SocialCircle.module.css";

export default function SocialCircle({ href, i, alt, ...props }) {
  return (
    <a
      href={href}
      className={classes["social-circle"]}
      {...props}
      aria-label={alt}
    >
      <i className={i}>
        <img src={props.logo} alt={alt} className={classes["logo"]} />
      </i>
    </a>
  );
}
