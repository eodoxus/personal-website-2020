import { getPages, getProjects } from "./prismic-adapter";

describe("Service: CmsAdapters > PrismicAdapter", () => {
  describe("Function: getPages()", () => {
    it("should fetch list of page documents from CMS", async () => {
      const pages = await getPages();
      expect(pages.length).toBe(2);
      const page = pages[0];
      expect(page.title).toBe("Mock");
      expect(page.slices.length).toBe(1);
      expect(page.slices[0].primary.content[0].text).toBe("some mock text");
    });
  });

  describe("Function: getProjects()", () => {
    it("should fetch list of projects from CMS", async () => {
      const projects = await getProjects();
      expect(projects.length).toBe(2);
      const project = projects[0];
      expect(project.content.length).toBe(6);
      expect(project.endDate).toBeDefined();
      expect(project.id).toBe("X9aBvxIAACQApvBw");
      expect(project.uid).toBe("mock-uid-01");
      expect(project.startDate).toBeDefined();
      expect(project.title).toBe("Mock Project 01");
      expect(project.images.length).toBe(2);
      expect(project.images[0].title).toBe("Mock Image 01");
    });
  });
});
