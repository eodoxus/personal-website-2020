import Prismic from "prismic-javascript";
import get from "lodash/get";

const API_ENDPOINT = "https://jaygordocom.cdn.prismic.io/api/v2";
const IMAGE_PLACEHOLDER = "/img/avatar_2019.jpg";
const DOC_TYPES = {
  project: "project",
};
const SLICE_TYPES = {
  images: "images",
};

export async function getProjects() {
  const resp = await fetchDocumentsByType(DOC_TYPES.project);
  if (!resp.results) {
    console.error("Prismic Adapter > getProjects > found 0 documents");
    return [];
  }
  return (
    await Promise.all(
      resp.results
        .filter((document) => !!get(document, "data.body"))
        .map((document) => attachImages(document))
    )
  ).map((projectDoc) => ({
    content: get(projectDoc, "data.content", []),
    endDate: get(projectDoc, "data.end_date"),
    id: projectDoc.id,
    images: get(projectDoc, "images", []),
    startDate: get(projectDoc, "data.start_date"),
    title: get(projectDoc, "data.title[0].text", []),
  }));
}

async function attachImages(document) {
  const slices = get(document, "data.body", []);
  const imagesSlice = slices.find(
    (slice) => slice.slice_type === SLICE_TYPES.images
  );
  if (!imagesSlice) {
    console.error(
      "Prismic Adapter > attachImages > no images found to attach to document"
    );
  } else {
    const imageDocs = await Promise.all(
      imagesSlice.items.map((imageItem) =>
        fetchDocumentById(get(imageItem, "image_ref.id"))
      )
    );
    document.images = imageDocs
      .filter((imageDoc) => !!imageDoc)
      .map((imageDoc) => ({
        tags: imageDoc.tags,
        title: get(imageDoc, "data.title[0].text", "Untitled"),
        url: get(imageDoc, "data.image.url", IMAGE_PLACEHOLDER),
      }));
  }
  return document;
}

async function fetchDocumentsByType(type, sortField, sortDirection = "asc") {
  const options = {};
  if (sortField) {
    options.orderings = `my.${type}.${sortField} ${sortDirection}`;
  }

  const api = await getApi();
  return api.query(Prismic.Predicates.at("document.type", type), options);
}

async function fetchDocumentById(id) {
  const api = await getApi();
  return api.getByID(id);
}

async function getApi() {
  return Prismic.getApi(API_ENDPOINT);
}
