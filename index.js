const webpack = require("webpack");

module.exports = function (context, options) {
  return {
    name: "docusaurus2-webpack-environment",
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [
          new webpack.EnvironmentPlugin(options),
        ],
      };
    },
  };
};