const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.EnvironmentPlugin(["SECRET_API_KEY", "SECRET_API_URL"]),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[name]__[local]__[contenthash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("postcss-import")(),
                  require("autoprefixer")(),
                  require("postcss-nested")(),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
