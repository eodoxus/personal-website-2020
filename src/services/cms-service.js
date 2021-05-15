import * as CmsAdapter from "./cms-adapters/prismic-adapter";

export async function getHomePage() {
  return CmsAdapter.getHomePage();
}

export async function getPages() {
  return CmsAdapter.getPages();
}

export async function getPhotos(page = 1) {
  return CmsAdapter.getPhotos(page);
}

export async function getProjects() {
  return CmsAdapter.getProjects();
}
