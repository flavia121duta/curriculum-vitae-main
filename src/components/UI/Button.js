import classes from "./Button.module.css";

export default function Button({ type, text, i, href, children, ...props }) {
  const buttonClasses = `${classes["main-button"]} ${
    type === "primary" ? classes["primary-button"] : classes["secondary-button"]
  }`;

  const content = (
    <>
      {i && <i className={i}></i>}
      {text}
      {children}
    </>
  );

  // If href exists, render an <a> tag (for Resume/External links)
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {content}
      </a>
    );
  }

  // Otherwise, render a standard <button>
  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
}
