import React from "react";
import { useRouteData } from "react-static";

export default () => {
  const { projects } = useRouteData();

  return (
    <div>
      Projects
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
