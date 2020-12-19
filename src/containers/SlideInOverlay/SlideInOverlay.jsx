import React from "react";
import cx from "classnames";

import styles from "./SlideInOverlay.module.scss";

export default ({ children, className }) => (
  <div className={cx(styles.wrapper, className)}>
    <div className={styles.viewport}>
      <div className={styles["slide-in"]}>{children}</div>
    </div>
  </div>
);
