import React from "react";
import { RichText } from "prismic-reactjs";
import { Head, useRouteData } from "react-static";

import ImageGallery from "../../components/ImageGallery/ImageGallery";
import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";
import { buildPageTitle, getDateRange } from "../../helpers";

import styles from "./Project.module.scss";

export default () => {
  const { project } = useRouteData();
  const { title, content, images, startDate, endDate } = project;

  console.log("images", images);

  return (
    <SlideInOverlay className={styles.container}>
      <Head>
        <title>{`${buildPageTitle(title)} Project`}</title>
      </Head>
      <h1 className={styles.title}>{title}</h1>
      <p>{getDateRange(startDate, endDate)}</p>
      <RichText render={content} />
      <ImageGallery className={styles.gallery} images={images} />
    </SlideInOverlay>
  );
};
