import React from "react";
import { Head, useRouteData } from "react-static";

import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";
import { buildPageTitle, renderSlices } from "../../helpers";

export default () => {
  const { page } = useRouteData();
  const { data } = page;
  const { body, title } = data;

  return (
    <SlideInOverlay>
      <Head>
        <title>{buildPageTitle(title[0]?.text)}</title>
      </Head>
      <h1>{title[0]?.text}</h1>
      {renderSlices(body)}
    </SlideInOverlay>
  );
};
