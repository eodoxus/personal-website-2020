import React, { useState } from "react";
import { Head, useRouteData } from "react-static";

import ImageGallery from "../components/ImageGallery/ImageGallery";
import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import { buildPageTitle } from "../helpers";
import { getPhotos } from "../services/cms-service";

import styles from "./photos.module.scss";

export default () => {
  const { photos } = useRouteData();
  const [images, setImages] = useState(photos.images);
  const [next, setNext] = useState(photos.next);

  async function handlePagination() {
    const newPhotos = await getPhotos(next);
    setImages(images.concat(newPhotos.images));
    setNext(newPhotos.next);
  }

  return (
    <SlideInOverlay>
      <Head>
        <title>{buildPageTitle("Photos")}</title>
      </Head>
      <ImageGallery
        images={images}
        className={styles.gallery}
        onPaginate={!!next && handlePagination}
      />
    </SlideInOverlay>
  );
};
