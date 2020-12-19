import React from "react";
import cx from "classnames";

import styles from "./ImageGalleryThumbnail.module.scss";

export default ({ title, url }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${url}')` }}
      />
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};
