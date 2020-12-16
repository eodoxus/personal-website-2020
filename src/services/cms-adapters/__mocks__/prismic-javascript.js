import { projects, images } from "./prismic-datastore";

export default {
  getApi: async () => ({
    query: jest.fn(async () => projects),
    getByID: async (id) => images.find((image) => image.id === id),
  }),
  Predicates: {
    at: jest.fn(),
  },
};
