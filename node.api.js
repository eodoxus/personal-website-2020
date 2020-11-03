import ExtractCssChunks from "extract-css-chunks-webpack-plugin";

export default () => ({
  webpack: (config, { stage }) => {
    const cssRule = config.module.rules[0].oneOf[0];
    const cssModulesRule = createCssModulesRuleFromCssRule(stage, cssRule);
    config.module.rules[0].oneOf.unshift(cssModulesRule);
    return config;
  },
});

function createCssModulesRuleFromCssRule(stage, cssRule) {
  return {
    test: /\.module\.s(a|c)ss$/,
    use: cssRule.use.map((use) => {
      return typeof use === "string"
        ? use
        : {
            loader: use.loader,
            options:
              use.loader === "css-loader"
                ? {
                    camelCase: true,
                    exportOnlyLocals: stage === "node",
                    importLoaders: 2,
                    localIdentName:
                      stage === "dev"
                        ? "[name]__[local]--[hash:base64:5]"
                        : "[hash:base64:5]",
                    modules: true,
                    sourceMap: stage === "dev",
                  }
                : use.options,
          };
    }),
  };
}
