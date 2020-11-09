export default async () => {
  return [
    {
      path: "/",
    },
    {
      path: "/projects",
      ...(await getProjectsRouteData()),
    },
  ];
};

async function getProjectsRouteData() {
  const projects = await getProjects();
  return {
    getData: () => ({ projects }),
    children: projects.map((project) => ({
      path: `/projects/${project.id}`,
      template: "src/containers/Project",
      getData: () => project,
    })),
  };
}

async function getProjects() {
  return [];
}
