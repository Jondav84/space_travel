/** @format */

import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const routes = [
    { to: "/", page: "Home" },
    { to: "/spacecrafts", page: "Spacecrafts" },
    { to: "/planets", page: "Planets" },
  ];
  return (
    <nav className={styles["navbar"]}>
      {routes.map((route, idx) => (
        <NavLink
          key={idx}
          className={({ isActive, isPending }) =>
            `${styles["navbar__link"]} ${
              isActive ? styles["navbar__link-active"] : ""
            }`
          }
          to={route.to}
        >
          {route.page}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationBar;
