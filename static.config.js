import React from "react";
import path from "path";

import getRoutes from "./src/routes";
import { buildPageTitle } from "./src/helpers";

const description = "Personal website of Jason Gordon, Web Software Architect";
const title = "Jason Gordon - One Line at a Time";

export default {
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <title>{buildPageTitle("One Line at a Time")}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Twitter Card data */}
        <meta name="twitter:card" value={description} />

        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jaygordo.com/" />
        <meta
          property="og:image"
          content="https://jaygordo.com/img/avatar_2019.jpg"
        />
        <meta property="og:description" content={description} />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  entry: path.join(__dirname, "src", "index.jsx"),
  inlineCss: true,
  getRoutes,
  getSiteData: () => ({
    codewarrior: {
      url: "https://codewarrior.jaygordo.com/",
    },
  }),
  plugins: [
    [
      "react-static-plugin-sass",
      {
        includePaths: ["..."], // always includes `src/`
      },
    ],
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
