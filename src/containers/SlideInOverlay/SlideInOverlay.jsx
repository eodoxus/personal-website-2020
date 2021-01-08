import React, { useEffect, useRef } from "react";
import cx from "classnames";

import styles from "./SlideInOverlay.module.scss";

export default ({ children, className, onScroll, scrollTop }) => {
  const viewportRef = useRef();

  if (onScroll) {
    useEffect(() => {
      viewportRef.current.addEventListener("scroll", onScroll);
      return () => viewportRef.current.removeEventListener("scroll", onScroll);
    }, []);
  }

  if (typeof scrollTop !== "undefined") {
    useEffect(() => {
      viewportRef.current.scrollTop = scrollTop;
    });
  }

  return (
    <div className={cx(styles.wrapper, className)}>
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles["slide-in"]}>{children}</div>
      </div>
    </div>
  );
};
