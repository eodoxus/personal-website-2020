import React from "react";
import cx from "classnames";

import BaseTile from "../../tiles/BaseTile/BaseTile";

import styles from "./ImageGalleryThumbnail.module.scss";

const IMAGE_WIDTH = 600;

export default ({ className, title, url, onClick }) => {
  return (
    <div onClick={onClick} className={cx(className, styles.container)}>
      <BaseTile
        className={styles["show-title-on-hover"]}
        title={title}
        image={`${url}&w=${IMAGE_WIDTH}`}
      />
    </div>
  );
};
