import React from "react";
import { useRouteData } from "react-static";

import SliceRenderer from "../components/slices/SliceRenderer";

import styles from "./index.module.scss";

export default () => {
  const { page } = useRouteData();
  const { slices } = page;

  return (
    <div className={styles.container}>
      {slices.map((slice, idx) => (
        <SliceRenderer slice={slice} key={idx} />
      ))}
    </div>
  );
};
