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
    children: projects.map((project) => ({
      path: project.uid,
      template: "src/containers/Project/Project",
      getData: () => ({ project }),
    })),
  };
}
