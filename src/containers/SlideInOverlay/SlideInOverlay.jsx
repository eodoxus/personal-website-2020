import React from "react";
import { Link } from "@reach/router";

import styles from "./SlideInOverlay.module.scss";

export default ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["close-button"]}>
        <Link to="/">
          <i className="fa fa-close" />
        </Link>
      </div>
      <div className={styles.viewport}>
        <div className={styles["slide-in"]}>{children}</div>
      </div>
    </div>
  );
};
