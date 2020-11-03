import React from "react";
import { useRouteData } from "react-static";

import ProjectList from "../components/ProjectList";

export default () => {
  const { projects } = useRouteData();

  return (
    <div>
      Projects
      <ProjectList projects={projects} />
    </div>
  );
};
