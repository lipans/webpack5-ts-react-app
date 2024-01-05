const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require("webpack").ProvidePlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 9527,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new ProvidePlugin({
      "React": "react",
    }),
  ]
};
