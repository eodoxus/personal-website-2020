import React from "react";
import { RichText } from "prismic-reactjs";

import styles from "./RichTextSlice.module.scss";

export default ({ backgroundColor, backgroundImage, color, content }) => {
  const style = {
    backgroundColor,
    color,
  };

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
  }

  return (
    <div className={styles.container} style={style}>
      <RichText render={content} />
    </div>
  );
};
