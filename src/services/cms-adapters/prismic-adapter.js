import Prismic from "prismic-javascript";
import get from "lodash/get";

const API_ENDPOINT = "https://jaygordocom.cdn.prismic.io/api/v2";
const IMAGE_PLACEHOLDER = "/img/avatar_2019.jpg";
const DOC_TYPES = {
  homepage: "homepage",
  image: "image",
  page: "page",
  project: "project",
  video: "video",
};
const SLICE_TYPES = {
  imageGallery: "image_gallery",
  images: "images",
  richText: "rich_text",
  tiles: "tiles",
};
const SLICE_TRANSFORMS = {
  [SLICE_TYPES.imageGallery]: transformImageGallerySlice,
  [SLICE_TYPES.images]: transformImagesSlice,
  [SLICE_TYPES.richText]: transformRichTextSlice,
  [SLICE_TYPES.tiles]: transformTilesSlice,
};

export async function getHomePage() {
  const resp = await fetchDocumentsByType(DOC_TYPES.homepage);
  if (!resp.results) {
    console.error("Prismic Adapter > getPages > found 0 documents");
    return [];
  }
  const docs = await transformAndFormatDocuments(resp.results, (doc) => ({
    slices: get(doc, "data.body", []),
  }));
  return docs[0];
}

export async function getPages() {
  const resp = await fetchDocumentsByType(DOC_TYPES.page);
  if (!resp.results) {
    console.error("Prismic Adapter > getPages > found 0 documents");
    return [];
  }
  return transformAndFormatDocuments(resp.results, (doc) => ({
    slices: get(doc, "data.body", []),
    id: doc.id,
    title: get(doc, "data.title[0].text", []),
    uid: doc.uid,
  }));
}

export async function getPhotos(page = 1) {
  const options = {
    page,
    pageSize: 5,
    orderings: "[my.image.date desc, my.video.date desc, document.first_publication_date desc]",
  };

  const resp = await fetchDocumentsByTypeAndTags(
    [DOC_TYPES.image, DOC_TYPES.video],
    ["photos"],
    options
  );

  if (!resp.results) {
    console.error("Prismic Adapter > getPhotos > found 0 documents");
    return {
      images: [],
      next: undefined,
    };
  }

  return {
    images: extractImages(resp.results, "").map((image) => ({
      caption: image.title,
      url: image.url,
      tags: image.tags,
      video: image.video,
      date: image.date,
    })),
    next: resp.next_page ? resp.page + 1 : undefined,
  };
}

export async function getProjects() {
  const resp = await fetchDocumentsByType(DOC_TYPES.project);
  if (!resp.results) {
    console.error("Prismic Adapter > getProjects > found 0 documents");
    return [];
  }
  return transformAndFormatDocuments(resp.results, (doc) => ({
    content: get(doc, "data.content", []),
    endDate: get(doc, "data.end_date"),
    id: doc.id,
    images: get(doc, "data.body[0].images", []).map((image) => ({
      caption: image.title,
      url: image.url,
      tags: image.tags,
    })),
    startDate: get(doc, "data.start_date"),
    title: get(doc, "data.title[0].text", []),
    uid: doc.uid,
  }));
}

function extractImages(docs, defaultTitle = "Untitled") {
  return docs
    .filter((doc) => !!doc)
    .map((doc) =>
      doc.type === DOC_TYPES.image
        ? {
            tags: doc.tags,
            title: get(doc, "data.title[0].text", defaultTitle),
            url: get(doc, "data.image.url", IMAGE_PLACEHOLDER),
            date: get(doc, "data.date"),
          }
        : {
            tags: doc.tags,
            title: get(doc, "data.title[0].text", defaultTitle),
            url: get(doc, "data.poster.url", IMAGE_PLACEHOLDER),
            video: get(doc, "data.video.url"),
            date: get(doc, "data.date"),
          }
    );
}

async function fetchDocumentsByType(type, sortField, sortDirection = "asc") {
  const options = {};
  if (sortField) {
    options.orderings = `[my.${type}.${sortField} ${sortDirection}]`;
  }

  const api = await getApi();
  return api.query(Prismic.Predicates.at("document.type", type), options);
}

async function fetchDocumentsByTypeAndTags(type, tags, options) {
  const api = await getApi();
  return api.query(
    [
      Prismic.Predicates.any(
        "document.type",
        Array.isArray(type) ? type : [type]
      ),
      Prismic.Predicates.at("document.tags", tags),
    ],
    options
  );
}

async function fetchDocumentById(id) {
  const api = await getApi();
  return api.getByID(id);
}

async function getApi() {
  return Prismic.getApi(API_ENDPOINT);
}

async function transformAndFormatDocuments(documents, formatter) {
  return (
    await Promise.all(
      documents
        .filter((document) => !!get(document, "data.body"))
        .map((document) => transformSlices(document))
    )
  ).map((doc) => formatter(doc));
}

async function transformSlices(document) {
  document.data.body = await Promise.all(
    document.data.body.map(async (slice) => {
      let transformedSlice = slice;
      if (SLICE_TRANSFORMS[slice.slice_type]) {
        transformedSlice = await SLICE_TRANSFORMS[slice.slice_type](slice);
      }
      return transformedSlice;
    })
  );
  return document;
}

async function transformImagesSlice(slice, imageIdField = "image_ref.id") {
  const imageDocs = await Promise.all(
    slice.items.map((item) => fetchDocumentById(get(item, imageIdField)))
  );
  return {
    images: extractImages(imageDocs),
    ...slice,
  };
}

async function transformImageGallerySlice(slice) {
  return transformImagesSlice(slice, "image.id");
}

async function transformRichTextSlice(slice) {
  const {
    background_color: backgroundColor,
    background_image: backgroundImage,
    content,
    font_color: color,
  } = slice.primary;
  return {
    backgroundColor,
    backgroundImage: backgroundImage.url,
    content,
    color,
    ...slice,
  };
}

function transformTilesSlice(slice) {
  return {
    tiles: slice.items.map((item) => ({
      image: item.image.url,
      url: item.link,
      caption: item.title,
    })),
    ...slice,
  };
}
