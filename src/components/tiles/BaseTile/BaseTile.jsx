import React from "react";

import styles from "./BaseTile.module.scss";

export default ({ title, image }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={styles.background}></div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
