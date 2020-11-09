import path from "path";

import getRoutes from "./src/routes";

export default {
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
