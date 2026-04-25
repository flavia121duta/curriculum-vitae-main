import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "./UI/Avatar";
import classes from "./MainNavigation.module.css";
import useScreenSize from "./hooks/useScreenSize";

// create a context
import { useContext } from "react";
import { ThemeContext } from "./hooks/context/ThemeContext";
import { LanguageContext } from "./hooks/context/LanguageContext";

import bookIcon from "../assets/icons/bottom-menu/book-icon.svg";
import clipboardIcon from "../assets/icons/bottom-menu/clipboard-icon.svg";
import educationIcon from "../assets/icons/bottom-menu/education-icon.svg";
import screwdriverIcon from "../assets/icons/bottom-menu/screwdriver-icon.svg";
import workOutlineIcon from "../assets/icons/bottom-menu/work-outline-icon.svg";

import moonIcon from "../assets/icons/moon-icon.svg";
import sunIcon from "../assets/icons/sun-icon.svg";

const nav_links = [
  { to: "/", label: { en: "about", ro: "despre" }, icon: bookIcon },
  {
    to: "/education",
    label: { en: "education", ro: "educație" },
    icon: educationIcon,
  },
  {
    to: "/experience",
    label: { en: "experience", ro: "experiență" },
    icon: workOutlineIcon,
  },
  {
    to: "/side-projects",
    label: { en: "projects", ro: "proiecte" },
    icon: clipboardIcon,
  },
  {
    to: "/skills",
    label: { en: "skills", ro: "competențe" },
    icon: screwdriverIcon,
  },
];

export default function MainNavigation() {
  const navigate = useNavigate();

  // use the context to change the min theme and language
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  function avatarClickHandler() {
    navigate("/"); // navigate programatically
  }

  const screenSize = useScreenSize(true);
  const isDesktop = screenSize === "desktop";

  const desktopNav = (
    <nav className={classes["left-navigation"]}>
      <ul className={classes.list}>
        {nav_links.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end={item.to === "/"}
            >
              {item.label[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

  const toggleMenu = (
    <div className={classes["page-settings"]}>
      <button onClick={toggleLanguage} className={classes.iconBtn}>
        <span style={{ color: "white" }}>{language.toUpperCase()}</span>
        {/* <img src={languageIcon} alt="Toggle Language" /> */}
      </button>
      <button onClick={toggleTheme} className={classes.iconBtn}>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="Toggle Mode" />
      </button>
    </div>
  );

  const topMenu = (
    <nav className={classes["top-menu"]}>
      {/* Wrapperul care limitează lățimea */}
      <div className={classes.menuContent}>
        <div className={classes["hidden-list"]}>
          <h2>Duţă Flavia</h2>
        </div>
        {toggleMenu}
      </div>
    </nav>
  );

  const bottomMenu = (
    <nav className={classes["bottom-menu"]}>
      <div className={classes.menuContent}>
        <ul className={classes.list}>
          {nav_links.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? classes.activeIcon : undefined
                }
                end={item.to === "/"}
              >
                {({ isActive }) => (
                  <>
                    <img src={item.icon} alt={item.label} />
                    {isActive && (
                      <span className={classes.label}>
                        {item.label[language]}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <header className={classes.header}>
      {isDesktop ? (
        // VARIANTA DESKTOP
        <div className={classes["sticky-wrapper"]}>
          <Avatar
            alt="avatar"
            className={classes.avatar}
            onClick={avatarClickHandler}
          />
          {toggleMenu}
          {desktopNav}
        </div>
      ) : (
        // VARIANTA TABLETĂ / MOBILE
        <>
          {topMenu}
          {bottomMenu}
        </>
      )}
    </header>
  );
}
