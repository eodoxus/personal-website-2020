import React from "react";
import { Date as ParseDate } from "prismic-reactjs";
import { Head, useRouteData } from "react-static";

import SlideInOverlay from "../containers/SlideInOverlay/SlideInOverlay";
import ProjectTile from "../components/tiles/ProjectTile/ProjectTile";
import TileList from "../components/tiles/TileList/TileList";
import { buildPageTitle } from "../helpers";

function sort(a, b) {
  const aDate = ParseDate(a.endDate);
  const bDate = ParseDate(b.endDate);
  return bDate.getTime() - aDate.getTime();
}

export default () => {
  const { projects } = useRouteData();

  return (
    <SlideInOverlay>
      <Head>
        <title>{buildPageTitle("Projects")}</title>
      </Head>
      <TileList>
        {projects.sort(sort).map((project) => (
          <ProjectTile project={project} key={project.uid} />
        ))}
      </TileList>
    </SlideInOverlay>
  );
};
