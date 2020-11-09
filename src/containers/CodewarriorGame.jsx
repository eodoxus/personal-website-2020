import React from "react";
import { useSiteData } from "react-static";

import styles from "./CodewarriorGame.module.scss";

export default () => {
  const { codewarrior } = useSiteData();

  return <iframe src={codewarrior.url} className={styles.gameFrame}></iframe>;
};
