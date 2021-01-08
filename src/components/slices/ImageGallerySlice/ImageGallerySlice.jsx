import React from "react";

import ImageGallery from "../../ImageGallery/ImageGallery";

import styles from "./ImageGallerySlice.module.scss";

export default ({ images }) => {
  if (!images) {
    return null;
  }
  return (
    <div className={styles.container}>
      <ImageGallery images={images} />
    </div>
  );
};
