import { homepages, pages, projects, images } from "./prismic-datastore";

export default {
  getApi: async () => ({
    query: jest.fn(async (type) => {
      switch (type) {
        case "homepage":
          return homepages;
        case "page":
          return pages;
        case "project":
          return projects;
        default:
          return [];
      }
    }),
    getByID: async (id) => images.find((image) => image.id === id),
  }),
  Predicates: {
    at: jest.fn((type, query) => query),
  },
};
