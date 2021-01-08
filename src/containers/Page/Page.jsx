import React, { useRef, useState } from "react";
import { Head, useRouteData } from "react-static";

import SliceRenderer from "../../components/slices/SliceRenderer";
import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";
import { buildPageTitle } from "../../helpers";

import styles from "./Page.module.scss";

export default () => {
  const viewportRef = useRef();
  const { page } = useRouteData();
  const { slices, title } = page;
  const [viewportScrollOffset, setViewportScrollOffset] = useState(0);

  let isAutoScrolling = false;
  let lastCall;
  let lastPosition = 0;
  let sliceIdx = 0;

  function calculateScrollOffset(curPosition) {
    const viewportRect = viewportRef.current.parentNode.parentNode.getBoundingClientRect();
    const sliceHeight = viewportRect.height;
    const scrollDistance = curPosition - lastPosition;
    const magnitude = Math.abs(Math.floor(scrollDistance / sliceHeight)) + 1;
    const scrollDir = scrollDistance > 0 ? 1 : -1;

    if (Math.abs(scrollDistance) > 100) {
      sliceIdx += magnitude * scrollDir;
    }

    if (sliceIdx > slices.length - 1) {
      sliceIdx = slices.length - 1;
    }

    if (sliceIdx < 0) {
      sliceIdx = 0;
    }
    return sliceIdx * sliceHeight;
  }

  function handleScroll(e) {
    if (lastCall) {
      clearTimeout(lastCall);
    }

    lastCall = setTimeout(() => {
      if (isAutoScrolling) {
        lastPosition = e.srcElement.scrollTop;
        isAutoScrolling = false;
        return;
      }

      setViewportScrollOffset(calculateScrollOffset(e.srcElement.scrollTop));
      isAutoScrolling = true;
      lastPosition = e.srcElement.scrollTop;

      setTimeout(() => {
        isAutoScrolling = false;
      }, 1500);
    }, 200);
  }

  return (
    <SlideInOverlay
      className={styles.viewport}
      onScroll={handleScroll}
      scrollTop={viewportScrollOffset}
    >
      <Head>
        <title>{buildPageTitle(title)}</title>
      </Head>
      <div ref={viewportRef} className={styles.viewport}>
        {slices.map((slice, idx) => (
          <div className={styles.slice} key={idx}>
            <SliceRenderer slice={slice} />
          </div>
        ))}
      </div>
    </SlideInOverlay>
  );
};
