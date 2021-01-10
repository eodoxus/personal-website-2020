export const homepages = {
  page: 1,
  results_per_page: 20,
  results_size: 1,
  total_results_size: 1,
  total_pages: 1,
  next_page: null,
  prev_page: null,
  results: [
    {
      id: "X_o82hAAACUAylqT",
      uid: null,
      type: "homepage",
      href:
        "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X_p6GhAAALsyy2hb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X_o82hAAACUAylqT%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2021-01-09T23:31:42+0000",
      last_publication_date: "2021-01-10T03:52:58+0000",
      slugs: ["homepage", "play-codewarrior"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: [{ type: "heading1", text: "Mock Homepage", spans: [] }],
        body: [
          {
            slice_type: "rich_text",
            slice_label: null,
            items: [{}],
            primary: {
              background_color: null,
              font_color: null,
              background_image: {},
              content: [
                {
                  type: "heading3",
                  text: "Mock content",
                  spans: [],
                },
                {
                  type: "paragraph",
                  text: "Or check out my projects :)",
                  spans: [],
                },
              ],
            },
          },
          {
            slice_type: "tiles",
            slice_label: null,
            items: [
              {
                image: {
                  dimensions: { width: 1440, height: 1370 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/jaygordocom/f33eb38e-0961-4fee-b90a-ded515a9476f_codewarrior.png?auto=compress,format",
                },
                title: "Mock Tile",
                link: "/codewarrior",
              },
              {
                image: {
                  dimensions: { width: 1200, height: 575 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/jaygordocom/8f08efdb-73bc-47f8-8fa6-10b736b4e23a_nextjs_03.png?auto=compress,format",
                },
                title: "Projects",
                link: "/projects",
              },
              {
                image: {
                  dimensions: { width: 1330, height: 1056 },
                  alt: null,
                  copyright: null,
                  url:
                    "https://images.prismic.io/jaygordocom/eca731f3-52b9-410e-953b-eaf21d5c7ac4_photos.png?auto=compress,format",
                },
                title: "Photos",
                link: "photos",
              },
            ],
            primary: {},
          },
        ],
      },
    },
  ],
  version: "6c549e9",
  license: "All Rights Reserved",
};

export const projects = {
  page: 1,
  results_per_page: 20,
  results_size: 2,
  total_results_size: 2,
  total_pages: 1,
  next_page: null,
  prev_page: null,
  results: [
    {
      id: "X9aBvxIAACQApvBw",
      uid: "mock-uid-01",
      type: "project",
      href:
        "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aBvxIAACQApvBw%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2020-12-13T21:08:45+0000",
      last_publication_date: "2020-12-13T21:08:45+0000",
      slugs: ["zwift.com-redesign"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: [
          {
            type: "heading1",
            text: "Mock Project 01",
            spans: [],
          },
        ],
        start_date: "2020-04-01",
        end_date: "2020-12-01",
        content: [
          {
            type: "paragraph",
            text: "This project:",
            spans: [],
          },
          {
            type: "list-item",
            text: "Visual design by Instrument",
            spans: [],
          },
          {
            type: "list-item",
            text: "Content management system used is Prismic",
            spans: [],
          },
          {
            type: "list-item",
            text: "Front end built using React",
            spans: [],
          },
          {
            type: "list-item",
            text: "Server side rendering using NextJS",
            spans: [],
          },
          {
            type: "list-item",
            text: "Web serving using NodeJS and Express",
            spans: [],
          },
        ],
        body: [
          {
            slice_type: "images",
            slice_label: null,
            items: [
              {
                image_ref: {
                  id: "X9aCQRIAACMApvKy",
                  type: "image",
                  tags: ["project: zwift home", "promoted"],
                  slug: "zwift-home-01",
                  lang: "en-us",
                  link_type: "Document",
                  isBroken: false,
                },
              },
              {
                image_ref: {
                  id: "X9aCwxIAACQApvT6",
                  type: "image",
                  tags: ["project: zwift home"],
                  slug: "zwift-home-02",
                  lang: "en-us",
                  link_type: "Document",
                  isBroken: false,
                },
              },
            ],
            primary: {},
          },
        ],
      },
    },
    {
      id: "X9aGahIAACIApwU5",
      uid: "mock-uid-02",
      type: "project",
      href:
        "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aGahIAACIApwU5%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2020-12-13T21:23:58+0000",
      last_publication_date: "2020-12-13T21:23:58+0000",
      slugs: ["react-static-to-nextjs-port"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: [
          {
            type: "heading1",
            text: "Mock Project 02",
            spans: [],
          },
        ],
        start_date: "2020-01-01",
        end_date: "2020-03-31",
        content: [
          {
            type: "paragraph",
            text: "This project:",
            spans: [],
          },
          {
            type: "list-item",
            text: "Started with a statically generated site using React Static",
            spans: [],
          },
          {
            type: "list-item",
            text: "Consolidated 3 codebases into 1 monorepo",
            spans: [],
          },
          {
            type: "list-item",
            text:
              "Brought other teams into the monrepo with their own package where other packages could be versioned independently across teams, based on their requirements",
            spans: [],
          },
          {
            type: "list-item",
            text:
              "Introduced NextJS to do server side rendering so we could support webhooks from various systems, like Prismic",
            spans: [],
          },
          {
            type: "list-item",
            text:
              "Introduced a page caching system using Redis (AWS ElasticCache)",
            spans: [],
          },
        ],
        body: [
          {
            slice_type: "images",
            slice_label: null,
            items: [
              {
                image_ref: {
                  id: "X9aFQBIAACEApwAG",
                  type: "image",
                  tags: ["project: nextjs"],
                  slug: "nextjs-01",
                  lang: "en-us",
                  link_type: "Document",
                  isBroken: false,
                },
              },
              {
                image_ref: {
                  id: "X9aFWxIAACIApwCD",
                  type: "image",
                  tags: ["project: nextjs"],
                  slug: "nextjs-02",
                  lang: "en-us",
                  link_type: "Document",
                  isBroken: false,
                },
              },
              {
                image_ref: {
                  id: "X9aFcxIAACIApwDy",
                  type: "image",
                  tags: ["project: nextjs", "promoted"],
                  slug: "nextjs-03",
                  lang: "en-us",
                  link_type: "Document",
                  isBroken: false,
                },
              },
            ],
            primary: {},
          },
        ],
      },
    },
  ],
  version: "6c549e9",
  license: "All Rights Reserved",
};

export const images = [
  {
    id: "X9aCQRIAACMApvKy",
    uid: null,
    type: "image",
    href:
      "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aCQRIAACMApvKy%22%29+%5D%5D",
    tags: ["project: zwift home", "promoted"],
    first_publication_date: "2020-12-13T21:06:40+0000",
    last_publication_date: "2020-12-13T21:09:40+0000",
    slugs: ["zwift-home-01"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      title: [
        {
          type: "heading1",
          text: "Mock Image 01",
          spans: [],
        },
      ],
      image: {
        dimensions: {
          width: 2168,
          height: 2022,
        },
        alt: null,
        copyright: null,
        url:
          "https://images.prismic.io/jaygordocom/0f779189-bdce-44f9-bd03-2f532470fae6_zwift_home_01.png?auto=compress,format",
      },
    },
  },
  {
    id: "X9aCwxIAACQApvT6",
    uid: null,
    type: "image",
    href:
      "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aCwxIAACQApvT6%22%29+%5D%5D",
    tags: ["project: zwift home"],
    first_publication_date: "2020-12-13T21:08:27+0000",
    last_publication_date: "2020-12-13T21:08:27+0000",
    slugs: ["zwift-home-02"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      title: [
        {
          type: "heading1",
          text: "Mock Image 02",
          spans: [],
        },
      ],
      image: {
        dimensions: {
          width: 2184,
          height: 2014,
        },
        alt: null,
        copyright: null,
        url:
          "https://images.prismic.io/jaygordocom/55b8fa83-bdd9-43de-8200-105a48ab378a_zwift_home_02.png?auto=compress,format",
      },
    },
  },
  {
    id: "X9aFQBIAACEApwAG",
    uid: null,
    type: "image",
    href:
      "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aFQBIAACEApwAG%22%29+%5D%5D",
    tags: ["project: nextjs"],
    first_publication_date: "2020-12-13T21:19:00+0000",
    last_publication_date: "2020-12-13T21:19:00+0000",
    slugs: ["nextjs-01"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      title: [{ type: "heading1", text: "Mock Image 03", spans: [] }],
      image: {
        dimensions: { width: 2174, height: 2020 },
        alt: null,
        copyright: null,
        url:
          "https://images.prismic.io/jaygordocom/4165a288-9bd1-41b5-a807-31cc72c8e819_nextjs_01.png?auto=compress,format",
      },
    },
  },
  {
    id: "X9aFWxIAACIApwCD",
    uid: null,
    type: "image",
    href:
      "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aFWxIAACIApwCD%22%29+%5D%5D",
    tags: ["project: nextjs"],
    first_publication_date: "2020-12-13T21:19:27+0000",
    last_publication_date: "2020-12-13T21:19:27+0000",
    slugs: ["nextjs-02"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      title: [{ type: "heading1", text: "Mock Image 04", spans: [] }],
      image: {
        dimensions: { width: 2176, height: 1606 },
        alt: null,
        copyright: null,
        url: "/mock-image",
      },
    },
  },
  {
    id: "X9aFcxIAACIApwDy",
    uid: null,
    type: "image",
    href:
      "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X9aGbhIAACQApwVR&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9aFcxIAACIApwDy%22%29+%5D%5D",
    tags: ["project: nextjs", "promoted"],
    first_publication_date: "2020-12-13T21:19:50+0000",
    last_publication_date: "2020-12-13T21:19:50+0000",
    slugs: ["nextjs-03"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      title: [{ type: "heading1", text: "Mock Image 05", spans: [] }],
      image: {
        dimensions: { width: 1200, height: 575 },
        alt: null,
        copyright: null,
        url:
          "https://images.prismic.io/jaygordocom/8f08efdb-73bc-47f8-8fa6-10b736b4e23a_nextjs_03.png?auto=compress,format",
      },
    },
  },
];

export const pages = {
  page: 1,
  results_per_page: 20,
  results_size: 1,
  total_results_size: 1,
  total_pages: 1,
  next_page: null,
  prev_page: null,
  results: [
    {
      id: "mock-id",
      uid: "about",
      type: "page",
      href:
        "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X_aaZBAAACMAujvZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X_aaYBAAAIBCujvK%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2021-01-07T05:21:40+0000",
      last_publication_date: "2021-01-07T05:21:40+0000",
      slugs: ["mock-slug"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: [{ type: "heading1", text: "Mock", spans: [] }],
        body: [
          {
            slice_type: "rich_text",
            slice_label: null,
            items: [{}],
            primary: {
              content: [
                {
                  type: "paragraph",
                  text: "some mock text",
                  spans: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "X_aaYBAAAIBCujvK",
      uid: "about",
      type: "page",
      href:
        "https://jaygordocom.cdn.prismic.io/api/v2/documents/search?ref=X_aaZBAAACMAujvZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X_aaYBAAAIBCujvK%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2021-01-07T05:21:40+0000",
      last_publication_date: "2021-01-07T05:21:40+0000",
      slugs: ["about"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: [{ type: "heading1", text: "Mock Page Title", spans: [] }],
        body: [
          {
            slice_type: "rich_text",
            slice_label: null,
            items: [{}],
            primary: {
              content: [
                {
                  type: "paragraph",
                  text:
                    "Hi, I'm Jason Gordon, a web software architect working for the best company in Southern California, Zwift. I live in magical Carroll Park and am the proud dad of 2 old dogs. Life is good.",
                  spans: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  version: "6c549e9",
  license: "All Rights Reserved",
};
