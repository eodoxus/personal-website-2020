import { projects, images } from "./prismic-datastore";

export default {
  getApi: async () => {
    return {
      query: jest.fn(async (query, options) => projects),
      getByID: async (id) => images.find((image) => image.id === id),
    };
  },
  Predicates: {
    at: jest.fn(),
  },
};
