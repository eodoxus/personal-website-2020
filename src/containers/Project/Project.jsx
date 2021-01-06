import React from "react";
import { Date as ParseDate, RichText } from "prismic-reactjs";
import { useRouteData } from "react-static";

import ImageGallery from "../../components/ImageGallery/ImageGallery";
import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";

import styles from "./Project.module.scss";

function formatDate(dateStr) {
  const date = ParseDate(dateStr);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${month} ${day}, ${year}`;
}

function getDateRange(startStr, endStr) {
  return formatDate(startStr) + (endStr ? ` - ${formatDate(endStr)}` : "");
}

export default () => {
  const { project } = useRouteData();
  const { title, content, images, startDate, endDate } = project;

  return (
    <SlideInOverlay className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p>{getDateRange(startDate, endDate)}</p>
      <RichText render={content} />
      <ImageGallery className={styles.gallery} images={images} />
    </SlideInOverlay>
  );
};
