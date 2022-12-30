const path = require("path");
// const JsConfigPathsPlugin = require("jsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../layout/**/*.stories.mdx",
    "../layout/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    // config.resolve.plugins = config.resolve.plugins || [];
    // config.resolve.plugins.push(
    //   new JsConfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "../jsconfig.json"),
    //   })
    // );
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@styles": path.resolve(__dirname, "../styles/"),
      "@atoms": path.resolve(__dirname, "../components/atoms/"),
      "@molecules": path.resolve(__dirname, "../components/molecules/"),
      "@organisms": path.resolve(__dirname, "../components/organisms/"),
    };
    return config;
  },
};
