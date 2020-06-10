const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const BUILD_DIR = path.resolve(__dirname, "./public/build");
const APP_DIR = path.resolve(__dirname, "./src");
module.exports = {
  entry: {
    main: APP_DIR + "/index.js",
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    // contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
