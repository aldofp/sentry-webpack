const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, "src", "index.js"),
  mode: 'production',
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new SentryWebpackPlugin({
      // sentry-cli configuration - can also be done directly through sentry-cli
      // see https://docs.sentry.io/product/cli/configuration/ for details
      authToken: "adbf2233a4b541b5ad96010879b05c6ef6265d52ee3b4444968953aad90d7a6f",
      org: "aldo-jy",
      project: "react",
      release: "1.0.0",

      // other SentryWebpackPlugin configuration
      include: "dist",
      ignore: ["node_modules", "webpack.config.js"],
    }),
  ],
}
