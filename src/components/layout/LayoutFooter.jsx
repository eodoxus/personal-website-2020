import React from "react";
import cx from "classnames";

import styles from "./LayoutFooter.module.scss";

const LayoutFooter = ({ copy, ...props }) => {
  return <footer className={cx(styles.footer, "footer")}>{copy}</footer>;
};

export default LayoutFooter;
