/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Hammer from "react-hammerjs";

import { formatDate } from "../../helpers";

import styles from "./ImageLightbox.module.scss";

const DURATION_ANIMATION = 250;
const SWIPE_LEFT = 2;
const SWIPE_RIGHT = 4;

export default ({ className, image, images, onClose }) => {
  const modalRef = useRef();
  const imgRef = useRef();
  const [curIdx, setCurIdx] = useState(images.findIndex((i) => i === image));
  const [modalImage, setModalImage] = useState(image);

  function animateTransition(direction) {
    return new Promise((resolve) => {
      const className =
        direction === SWIPE_LEFT
          ? styles["transition-left"]
          : styles["transition-right"];
      imgRef.current.classList.add(styles.transition);
      imgRef.current.classList.add(className);

      setTimeout(() => {
        imgRef.current.classList.remove(className);
        imgRef.current.classList.remove(styles.transition);
        resolve();
      }, DURATION_ANIMATION);
    });
  }

  async function changeModalImage(image, direction) {
    await Promise.all([fetchModalImage(image), animateTransition(direction)]);
    setModalImage(image);
  }

  function closeModal() {
    onClose();
  }

  function fetchModalImage(image) {
    return new Promise((resolve) => {
      const imageLoader = new Image();
      imageLoader.onload = () => resolve();
      imageLoader.src = image.url;
    });
  }

  function handleCarouselButtonClick(idx, direction) {
    if (idx < 0) {
      idx = images.length - 1;
    }
    if (idx >= images.length) {
      idx = 0;
    }
    setCurIdx(idx);
    changeModalImage(images[idx], direction);
  }

  function handleCarouselButtonClickNext() {
    handleCarouselButtonClick(curIdx + 1, SWIPE_LEFT);
  }

  function handleCarouselButtonClickPrev() {
    handleCarouselButtonClick(curIdx - 1, SWIPE_RIGHT);
  }

  function handleKeyboard(e) {
    switch (e.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowRight":
        handleCarouselButtonClickNext();
        break;
      case "ArrowLeft":
        handleCarouselButtonClickPrev();
        break;
      default:
        break;
    }
  }

  function handleImageSwipe(e) {
    return e.direction === SWIPE_LEFT
      ? handleCarouselButtonClickNext()
      : handleCarouselButtonClickPrev();
  }

  function maybeCloseModal(e) {
    if (!modalRef.current) {
      return;
    }

    if (e.target === modalRef.current) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyboard);
    return () => {
      document.removeEventListener("keyup", handleKeyboard);
    };
  }, [curIdx]);

  return (
    <div className={cx(className, styles.modal)} onClick={maybeCloseModal}>
      <div className={styles["close-button"]} onClick={closeModal}>
        <i className="fa fa-close" />
      </div>
      <div ref={modalRef} className={styles["image-viewport"]}>
        {modalImage && (
          <Hammer onSwipe={handleImageSwipe}>
            <a href={modalImage.url} target="_blank" rel="noreferrer">
              <img
                src={modalImage.url}
                alt={modalImage.caption}
                ref={imgRef}
                className={styles["image"]}
              />
            </a>
          </Hammer>
        )}
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
      <div className={styles.caption}>
        {modalImage.caption && <p>{modalImage.caption}</p>}
        {formatDate(modalImage.date) && <p>{formatDate(modalImage.date)}</p>}
      </div>
    </div>
  );
};
