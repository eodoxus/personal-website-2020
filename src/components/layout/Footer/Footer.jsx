import React from "react";
import cx from "classnames";

import styles from "./Footer.module.scss";

export default ({ copy }) => {
  return <footer className={cx(styles.footer, "footer")}>{copy}</footer>;
};
