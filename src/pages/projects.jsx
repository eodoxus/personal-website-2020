import React from "react";
import { Head, useRouteData } from "react-static";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import ProjectTile from "../components/tiles/ProjectTile/ProjectTile";
import TileList from "../components/tiles/TileList/TileList";
import { buildPageTitle } from "../helpers";

export default () => {
  const { projects } = useRouteData();

  return (
    <SlideInOverlay>
      <Head>
        <title>{buildPageTitle("Projects")}</title>
      </Head>
      <TileList>
        {projects.map((project) => (
          <ProjectTile project={project} key={project.uid} />
        ))}
      </TileList>
    </SlideInOverlay>
  );
};
