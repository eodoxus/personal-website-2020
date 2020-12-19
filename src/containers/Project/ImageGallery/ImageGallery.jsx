/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from "react";
import cx from "classnames";

import ImageGalleryThumbnail from "../ImageGalleryThumbnail/ImageGalleryThumbnail";
import TileList from "../../../components/tiles/TileList/TileList";

import styles from "./ImageGallery.module.scss";

export default ({ className, images }) => {
  const modalRef = useRef();
  const [curIdx, setCurIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState();

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleCarouselButtonClick(idx) {
    if (idx < 0) {
      idx = images.length - 1;
    }
    if (idx >= images.length) {
      idx = 0;
    }
    setCurIdx(idx);
    loadModalImage(images[idx]);
  }

  function handleCarouselButtonClickNext() {
    handleCarouselButtonClick(curIdx + 1);
  }

  function handleCarouselButtonClickPrev() {
    handleCarouselButtonClick(curIdx - 1);
  }

  function handleImageClick(image) {
    loadModalImage(image);
    setCurIdx(images.findIndex((i) => i === image));
    setIsModalOpen(true);
  }

  function loadModalImage(image) {
    setModalImage(null);
    const imageLoader = new Image();
    imageLoader.onload = () => setModalImage(image);
    imageLoader.src = image.url;
  }

  function maybeCloseModal(e) {
    if (!modalRef.current) {
      return;
    }

    if (e.target === modalRef.current) {
      closeModal();
    }
  }

  return (
    <div className={cx(className)}>
      <div
        className={cx(styles.modal, { [styles.open]: isModalOpen })}
        onClick={maybeCloseModal}
      >
        <div className={styles["close-button"]} onClick={closeModal}>
          <i className="fa fa-close" />
        </div>
        <div ref={modalRef} className={styles["image-frame"]}>
          {modalImage && <img src={modalImage.url} alt={modalImage.title} />}
        </div>
        <div
          className={cx(styles.arrow, styles["arrow-prev"])}
          onClick={handleCarouselButtonClickPrev}
        >
          <i className="fa fa-step-backward" />
        </div>
        <div
          className={cx(styles.arrow, styles["arrow-next"])}
          onClick={handleCarouselButtonClickNext}
        >
          <i className="fa fa-step-forward" />
        </div>
      </div>
      <TileList>
        {images.map((image) => (
          <ImageGalleryThumbnail
            key={image.title}
            title={image.title}
            url={image.url}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </TileList>
    </div>
  );
};
