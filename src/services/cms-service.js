import * as CmsAdapter from "./cms-adapters/prismic-adapter";

export async function getPages() {
  return CmsAdapter.getPages();
}

export async function getProjects() {
  return CmsAdapter.getProjects();
}
