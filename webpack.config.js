const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {port:3000,},
};
