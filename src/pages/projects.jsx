import React from "react";
import { useRouteData } from "react-static";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import ProjectTile from "../components/tiles/ProjectTile/ProjectTile";

export default () => {
  const { projects } = useRouteData();

  return (
    <SlideInOverlay>
      <ul className="tile-list">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectTile project={project} />
          </li>
        ))}
      </ul>
    </SlideInOverlay>
  );
};
