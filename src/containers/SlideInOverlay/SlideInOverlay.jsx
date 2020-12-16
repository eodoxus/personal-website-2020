import React from "react";

import styles from "./SlideInOverlay.module.scss";

export default ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport}>
        <div className={styles["slide-in"]}>{children}</div>
      </div>
    </div>
  );
};
