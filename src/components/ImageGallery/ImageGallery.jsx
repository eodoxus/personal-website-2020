/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

import ImageGalleryThumbnail from "./ImageGalleryThumbnail/ImageGalleryThumbnail";
import ImageLightbox from "../ImageLightbox/ImageLightbox";
import TileList from "../tiles/TileList/TileList";

export default ({ className, images, onPaginate }) => {
  const observer = useRef(null);
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(false);

  async function handleThumbnailClick(image) {
    setLightboxImage(image);
    setIsModalOpen(true);
  }

  async function handleViewportIntersection(entry) {
    if (entry.isIntersecting) {
      await onPaginate();
      connectPaginationObserver();
    }
  }

  function connectPaginationObserver() {
    if (observer.current) observer.current.disconnect();

    if (!onPaginate) {
      return;
    }

    observer.current = new IntersectionObserver(
      ([entry]) => handleViewportIntersection(entry),
      {
        root: null,
        rootMargin: "1% 50% 1% 50%",
      }
    );
    if (ref.current) {
      const lastImage =
        ref.current.firstChild.children[
          ref.current.firstChild.children.length - 1
        ];
      observer.current.observe(lastImage);
      return () => observer.current.disconnect();
    }
  }

  useEffect(() => {
    connectPaginationObserver();
  }, [onPaginate]);

  return (
    <div className={cx(className)}>
      {isModalOpen && (
        <ImageLightbox
          image={lightboxImage}
          images={images}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div ref={ref}>
        <TileList>
          {images.map((image, idx) => (
            <ImageGalleryThumbnail
              key={`${image.caption}-${idx}`}
              caption={image.caption}
              url={image.url}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </TileList>
      </div>
    </div>
  );
};
