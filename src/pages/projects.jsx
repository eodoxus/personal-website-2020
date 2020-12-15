import React from "react";
import { Link } from "@reach/router";
import { useRouteData } from "react-static";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";

export default () => {
  const { projects } = useRouteData();

  return (
    <SlideInOverlay>
      Projects
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </SlideInOverlay>
  );
};
