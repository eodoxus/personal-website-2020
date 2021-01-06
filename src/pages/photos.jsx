import React from "react";
import { useRouteData } from "react-static";

import ImageGallery from "../components/ImageGallery/ImageGallery";
import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";

export default () => {
  const { photos } = useRouteData();

  return (
    <SlideInOverlay>
      <ImageGallery images={photos} />
    </SlideInOverlay>
  );
};
