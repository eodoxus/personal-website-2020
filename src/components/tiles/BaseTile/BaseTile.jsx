import React from "react";
import cx from "classnames";

import styles from "./BaseTile.module.scss";

export default ({ className, image, caption, video }) => {
  return (
    <div
      className={cx(styles.container, className)}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={styles["background-overlay"]} />
      {video && <div className={styles["play-button-overlay"]} />}
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
};
