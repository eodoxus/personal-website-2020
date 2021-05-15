import { getHomePage, getPages, getPhotos, getProjects } from "./services/cms-service";

export default async () => {
  const [
    homepageRouteData,
    pageRoutesData,
    photosRoutesData,
    projectsRoutesData,
  ] = await Promise.all([
    getHomepageRouteData(),
    getPageRoutesData(),
    getPhotosRouteData(),
    getProjectsRouteData(),
  ]);

  return [
    {
      path: "/",
      ...homepageRouteData,
    },
    {
      path: "/codewarrior",
      template: "src/containers/CodewarriorGame/CodewarriorGame",
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

async function getHomepageRouteData() {
  const page = await getHomePage();
  return {
    getData: () => ({ page }),
  };
}

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
