import { getPages, getProjects } from "./services/cms-service";
import { getPhotos } from "./services/photos-service";

export default async () => {
  const [
    pageRoutesData,
    photosRoutesData,
    projectsRoutesData,
  ] = await Promise.all([
    getPageRoutesData(),
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
    ...pageRoutesData,
  ];
};

async function getPageRoutesData() {
  const pages = await getPages();
  return pages.map((page) => ({
    path: page.uid,
    getData: () => ({ page }),
    template: "src/containers/Page/Page",
  }));
}

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
