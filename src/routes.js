import { getProjects } from "./services/cms-service";

export default async () => {
  const projectRoutesData = await getProjectsRouteData();

  return [
    {
      path: "/",
    },
    {
      path: "/projects",
      ...projectRoutesData,
    },
  ];
};

async function getProjectsRouteData() {
  const projects = await getProjects();
  return {
    getData: () => ({ projects }),
    children: projects.map((project) => {
      console.log("route project", `${project.id}`);
      return {
        path: project.id,
        template: "src/containers/Project/Project",
        getData: () => ({ project }),
      };
    }),
  };
}
