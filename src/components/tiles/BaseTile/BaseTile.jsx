import React from "react";
import cx from "classnames";

import styles from "./BaseTile.module.scss";

export default ({ className, image, title }) => {
  return (
    <div
      className={cx(styles.container, className)}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={styles["background-overlay"]} />
      {title && <div className={styles.title}>{title}</div>}
    </div>
  );
};
