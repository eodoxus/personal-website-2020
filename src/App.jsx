import React, { useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "@reach/router";

import LayoutHeader from "./components/layout/LayoutHeader";
import LayoutFooter from "./components/layout/LayoutFooter";
import { base64Decode } from "./helpers";

import "./styles/global.scss";
import styles from "./App.module.scss";

export default () => {
  const [hideChrome] = useState(false);
  const year = new Date().getFullYear();

  return (
    <Root>
      <div className={styles.root}>
        <LayoutHeader
          email={base64Decode("amFzb24ubS5nb3Jkb25AZ21haWwuY29t")}
          name="Jason Gordon"
          phone={base64Decode("KzEgNzE0LTYxNC04MTQ0")}
          portrait="/img/avatar_2019.jpg"
          slogan="One line at a time"
          url="/"
          hide={hideChrome}
        />
        <div className={styles.content}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <LayoutFooter copy={`© ${year} by Jason Gordon`} hide={hideChrome} />
      </div>
    </Root>
  );
};
