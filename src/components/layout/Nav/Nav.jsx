import React from "react";
import cx from "classnames";
import { Link, useLocation } from "@reach/router";

import styles from "./Nav.module.scss";

export default () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter((segment) => !!segment);
  const showControls = segments.length > 0;
  segments.pop();
  const backLink = segments.join("/");

  const NavLink = ({ children, to }) => {
    const isActive = pathname.startsWith(to);
    return (
      <Link to={to} className={isActive ? styles.active : ""}>
        {children}
      </Link>
    );
  };

  return (
    <nav
      className={cx(styles.nav, {
        [styles["with-controls"]]: showControls,
      })}
    >
      <div className={styles["controls-wrapper"]}>
        {showControls && (
          <div className={styles.controls}>
            <div className={styles["close-button"]}>
              <Link to={backLink}>
                <i className="fa fa-arrow-left" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div />
      <div className={styles.links}>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className={styles["nav-right"]} />
    </nav>
  );
};
