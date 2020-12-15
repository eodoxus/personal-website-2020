import { getProjects } from "./cms-service";

describe("Service: CmsService", () => {
  describe("Function: getProjects()", () => {
    it("should fetch list of projects from CMS", async () => {
      const projects = await getProjects();
      expect(projects.length).toBe(2);
      const project = projects[1];
      expect(project.content.length).toBe(6);
      expect(project.endDate).toBeDefined();
      expect(project.id).toBe("X9aGahIAACIApwU5");
      expect(project.startDate).toBeDefined();
      expect(project.title).toBe("Mock Project 02");
      expect(project.images.length).toBe(3);
      const image = project.images[1];
      expect(image.tags).toEqual(["project: nextjs"]);
      expect(image.title).toBe("Mock Image 04");
      expect(image.url).toBe("/mock-image");
    });
  });
});
