import { getProjects } from "./services/cms-service";
import { getPhotos } from "./services/photos-service";

export default async () => {
  const [photosRoutesData, projectsRoutesData] = await Promise.all([
    getPhotosRouteData(),
    getProjectsRouteData(),
  ]);

  return [
    {
      path: "/",
    },
    {
      path: "/photos",
      ...photosRoutesData,
    },
    {
      path: "/projects",
      ...projectsRoutesData,
    },
  ];
};

async function getPhotosRouteData() {
  const photos = await getPhotos();
  return {
    getData: () => ({ photos }),
  };
}

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
