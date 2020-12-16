import React, { useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Loader from "./components/Loader";
import Nav from "./components/layout/Nav/Nav";
import { base64Decode } from "./helpers";

import "./styles/global.scss";
import styles from "./App.module.scss";

export default () => {
  const [hideChrome] = useState(false);
  const name = "Jason Gordon";
  const year = new Date().getFullYear();

  return (
    <Root>
      <div className={styles.root}>
        <Header
          email={base64Decode("amFzb24ubS5nb3Jkb25AZ21haWwuY29t")}
          name={name}
          phone={base64Decode("KzEgNzE0LTYxNC04MTQ0")}
          portrait="/img/avatar_2019.jpg"
          slogan="One line at a time"
          url="/"
          hide={hideChrome}
        />
        <Nav />
        <div className={styles.content}>
          <React.Suspense fallback={<Loader />}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer copy={`© ${year} by ${name}`} hide={hideChrome} />
      </div>
    </Root>
  );
};
