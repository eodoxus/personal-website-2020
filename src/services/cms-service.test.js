import { getHomePage, getPages, getProjects } from "./cms-service";

describe("Service: CmsService", () => {
  describe("Function: getHomePage()", () => {
    it("should fetch homepage doc from CMS", async () => {
      const page = await getHomePage();
      expect(page.slices.length).toBe(2);
      expect(page.slices[0].slice_type).toBe("rich_text");
      expect(page.title).toBeUndefined();
    });
  });

  describe("Function: getPages()", () => {
    it("should fetch list of pages from CMS", async () => {
      const pages = await getPages();
      expect(pages.length).toBe(2);
      const page = pages[1];
      expect(page.slices.length).toBe(1);
      expect(page.slices[0].slice_type).toBe("rich_text");
      expect(page.slices[0].backgroundImage).toBe("mock-image-2");
      expect(page.title).toBe("Mock Page Title");
    });
  });

  describe("Function: getProjects()", () => {
    it("should fetch list of projects from CMS", async () => {
      const projects = await getProjects();
      expect(projects.length).toBe(2);
      const project = projects[1];
      expect(project.content.length).toBe(6);
      expect(project.endDate).toBeDefined();
      expect(project.id).toBe("X9aGahIAACIApwU5");
      expect(project.uid).toBe("mock-uid-02");
      expect(project.startDate).toBeDefined();
      expect(project.title).toBe("Mock Project 02");
      expect(project.images.length).toBe(3);
      const image = project.images[1];
      expect(image.tags).toEqual(["project: nextjs"]);
      expect(image.caption).toBe("Mock Image 04");
      expect(image.url).toBe("/mock-image");
    });
  });
});
