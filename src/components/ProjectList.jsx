import React from "react";
import { Link } from "@reach/router";

export default ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <Link to={`/projects/${project.id}/`}>{project.title}</Link>
        </li>
      ))}
    </ul>
  );
};
