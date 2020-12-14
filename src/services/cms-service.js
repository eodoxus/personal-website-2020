import * as CmsAdapter from "./cms-adapters/prismic-adapter";

export async function getProjects() {
  const project = await CmsAdapter.getProjects();
  return project;
}
