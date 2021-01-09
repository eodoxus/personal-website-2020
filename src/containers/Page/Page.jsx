import React from "react";
import { Head, useRouteData } from "react-static";

import SliceRenderer from "../../components/slices/SliceRenderer";
import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";
import { buildPageTitle } from "../../helpers";

import styles from "./Page.module.scss";

export default () => {
  const { page } = useRouteData();
  const { slices, title } = page;

  return (
    <SlideInOverlay className={styles.viewport}>
      <Head>
        <title>{buildPageTitle(title)}</title>
      </Head>
      <div className={styles.viewport}>
        {slices.map((slice, idx) => (
          <div className={styles.slice} key={idx}>
            <SliceRenderer slice={slice} />
          </div>
        ))}
      </div>
    </SlideInOverlay>
  );
};
