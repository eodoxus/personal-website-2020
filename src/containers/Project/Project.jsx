import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";

import SlideInOverlay from "../SlideInOverlay/SlideInOverlay";

export default () => {
  const { project } = useRouteData();
  return (
    <SlideInOverlay>
      <Link to="/projects">{"<"} Back</Link>
      <br />
      <h3>{project.title}</h3>
      <p>{project.body}</p>
    </SlideInOverlay>
  );
};
