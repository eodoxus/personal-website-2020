import React from "react";

import styles from "./TileList.module.scss";

export default ({ children }) => {
  return (
    <ul className={styles["tile-list"]}>
      {children.map((child, idx) => (
        <li key={`${child.type}-${idx}`}>{child}</li>
      ))}
    </ul>
  );
};
