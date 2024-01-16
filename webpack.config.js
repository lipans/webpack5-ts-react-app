const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProvidePlugin = require("webpack").ProvidePlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  devServer: {
    port: 9527,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: { process: "process/browser" },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: { jsx: true },
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new ProvidePlugin({
      React: "react",
    }),
    isDevelopment && new ForkTsCheckerWebpackPlugin(),
  ],
};
