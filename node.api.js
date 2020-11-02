export default () => ({
  webpack: (config, { stage }) => {
    const cssRule = config.module.rules[0].oneOf[0];
    const cssModulesRule = {
      test: /\.module\.s(a|c)ss$/,
      use: cssRule.use.map((use) => {
        return typeof use === "string"
          ? use
          : {
              loader: use.loader,
              options: cloneOptions(use.options),
            };
      }),
    };

    cssModulesRule.use[1].options.modules = true;
    cssModulesRule.use[1].options.localIdentName =
      "[name]__[local]--[hash:base64:5]";

    config.module.rules[0].oneOf.unshift(cssModulesRule);
    return config;
  },
});

function cloneOptions(options) {
  const newOptions = {};
  Object.keys(options).forEach((key) => (newOptions[key] = options[key]));
  return newOptions;
}
