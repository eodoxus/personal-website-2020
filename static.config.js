import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.jsx"),
  getRoutes: async () => {
    const projects = [];
    return [
      {
        path: "/",
        getData: () => ({
          projects,
        }),
      },
      {
        path: "/projects",
        getData: () => ({
          projects,
        }),
        children: projects.map((project) => ({
          path: `/projects/${project.id}`,
          template: "src/containers/Project",
          getData: () => ({
            post,
          }),
        })),
      },
    ];
  },
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
