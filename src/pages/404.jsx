import React from "react";
import { Link } from "@reach/router";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";

export default () => (
  <SlideInOverlay>
    <h1>Ruh Roh!</h1>
    <p>We couldn't find that page :(</p>
    <p>Try one of these instead:</p>
    <ul>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
    </ul>
  </SlideInOverlay>
);
