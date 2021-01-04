import React from "react";
import { useRouteData } from "react-static";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import ProjectTile from "../components/tiles/ProjectTile/ProjectTile";
import TileList from "../components/tiles/TileList/TileList";

export default () => {
  const { projects } = useRouteData();

  return (
    <SlideInOverlay>
      <TileList>
        {projects.map((project) => (
          <ProjectTile project={project} key={project.uid} />
        ))}
      </TileList>
    </SlideInOverlay>
  );
};
