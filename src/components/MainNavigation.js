import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "./UI/Avatar";
import classes from "./MainNavigation.module.css";
import profile_picture from "../assets/recent-profile-picture.jpg";
import useScreenSize from "./hooks/useScreenSize";
import { useState } from "react";

import bookIcon from "../assets/icons/bottom-menu/book-icon.svg";
import clipboardIcon from "../assets/icons/bottom-menu/clipboard-icon.svg";
import educationIcon from "../assets/icons/bottom-menu/education-icon.svg";
import screwdriverIcon from "../assets/icons/bottom-menu/screwdriver-icon.svg";
import workOutlineIcon from "../assets/icons/bottom-menu/work-outline-icon.svg";

import languageIcon from "../assets/icons/language-icon.svg";
import moonIcon from "../assets/icons/moon-icon.svg";
import sunIcon from "../assets/icons/sun-icon.svg";

const nav_links = [
  { to: "/", label: "about", icon: bookIcon },
  { to: "/education", label: "education", icon: educationIcon },
  { to: "/experience", label: "experience", icon: workOutlineIcon },
  { to: "/side-projects", label: "projects", icon: clipboardIcon },
  { to: "/skills", label: "skills", icon: screwdriverIcon },
];

export default function MainNavigation() {
  const navigate = useNavigate();

  const [luminosity, setLuminosity] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleLuminosity = () => {
    setLuminosity((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ro" : "en"));
  };

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
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

  const topMenu = (
    <nav className={classes["top-menu"]}>
      {/* Wrapperul care limitează lățimea */}
      <div className={classes.menuContent}>
        <div className={classes["hidden-list"]}>
          <h2>Duţă Flavia</h2>
        </div>
        <div className={classes["top-menu-right"]}>
          <button onClick={toggleLanguage} className={classes.iconBtn}>
            <img src={languageIcon} alt="Toggle Language" />
          </button>
          <button onClick={toggleLuminosity} className={classes.iconBtn}>
            <img
              src={luminosity === "light" ? moonIcon : sunIcon}
              alt="Toggle Mode"
            />
          </button>
        </div>
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
                      <span className={classes.label}>{item.label}</span>
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
            src={profile_picture}
            alt="avatar"
            className={classes.avatar}
            onClick={avatarClickHandler}
          />
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
