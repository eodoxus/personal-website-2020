import React from "react";
import { useSiteData } from "react-static";

import styles from "./CodewarriorGame.module.scss";

export default () => {
  const { phasewarrior } = useSiteData();

  return (
    <iframe
      src={phasewarrior.url}
      className={styles.gameFrame}
      title="Codewarrior Game"
    />
  );
};
