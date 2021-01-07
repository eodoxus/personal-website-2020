import React from "react";
import { Head, useRouteData } from "react-static";

import ImageGallery from "../components/ImageGallery/ImageGallery";
import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import { buildPageTitle } from "../helpers";

export default () => {
  const { photos } = useRouteData();

  return (
    <SlideInOverlay>
      <Head>
        <title>{buildPageTitle("Photos")}</title>
      </Head>
      <ImageGallery images={photos} />
    </SlideInOverlay>
  );
};
