/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import cx from "classnames";

import ImageGalleryThumbnail from "./ImageGalleryThumbnail/ImageGalleryThumbnail";
import ImageLightbox from "../ImageLightbox/ImageLightbox";
import TileList from "../tiles/TileList/TileList";

export default ({ className, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(false);

  async function handleThumbnailClick(image) {
    setLightboxImage(image);
    setIsModalOpen(true);
  }

  return (
    <div className={cx(className)}>
      {isModalOpen && (
        <ImageLightbox
          image={lightboxImage}
          images={images}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div>
        <TileList>
          {images.map((image, idx) => (
            <ImageGalleryThumbnail
              key={`${image.title}-${idx}`}
              title={image.title}
              url={image.url}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </TileList>
      </div>
    </div>
  );
};
