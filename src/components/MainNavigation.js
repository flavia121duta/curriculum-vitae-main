import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "./UI/Avatar";
import classes from "./MainNavigation.module.css";
import profile_picture from "../assets/recent-profile-picture.jpg";
import useScreenSize from "./hooks/useScreenSize";
import { useState } from "react";

export default function MainNavigation() {
  const navigate = useNavigate();

  function avatarClickHandler() {
    navigate("/"); // navigate programatically
  }

  const screenSize = useScreenSize(true);

  const navigation = (
    <nav className={`${classes["left-navigation"]}`}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            EDUCATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            EXPERIENCE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/side-projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SIDE PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SKILLS
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const hamburgerMenu = (
    <nav className={`${classes["mobile-menu"]}`}>
      <div className={`${classes["hidden-list"]}`}>
        <h1>Duţă Flavia</h1>
        {showMobileMenu && navigation}
      </div>
      <i className="fa-solid fa-bars" onClick={mobileMenuHandler}></i>
    </nav>
  );

  return (
    <header className={classes.header}>
      {screenSize !== "mobile" ? (
        <div className={classes["sticky-wrapper"]}>
          <Avatar
            src={profile_picture}
            alt="avatar"
            className={classes.avatar}
            onClick={avatarClickHandler}
          />
          {navigation}
        </div>
      ) : (
        hamburgerMenu
      )}
    </header>
  );
}
