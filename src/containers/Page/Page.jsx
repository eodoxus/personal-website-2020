import React, { useEffect, useRef, useState } from "react";
import { Head, useRouteData } from "react-static";

import SliceRenderer from "../../components/slices/SliceRenderer";
import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";
import { buildPageTitle } from "../../helpers";

import styles from "./Page.module.scss";

export default () => {
  const ref = useRef();
  const { page } = useRouteData();
  const { slices, title } = page;

  const [viewportHeight, setViewportHeight] = useState(0);
  useEffect(() => {
    setViewportHeight(
      ref.current.parentNode.parentNode.getBoundingClientRect().height
    );
  }, []);

  return (
    <SlideInOverlay className={styles.viewport}>
      <Head>
        <title>{buildPageTitle(title)}</title>
      </Head>
      <div className={styles.viewport} ref={ref}>
        {slices.map((slice, idx) => (
          <div
            className={styles.slice}
            key={idx}
            style={{ height: viewportHeight }}
          >
            <SliceRenderer slice={slice} />
          </div>
        ))}
      </div>
    </SlideInOverlay>
  );
};
