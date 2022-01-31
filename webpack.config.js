const path = require('path');

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// Setting mode for production in build script!!!
let mode = process.env.NODE_ENV === "production" ? "production" : "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  mode: mode,
  devtool: "source-map",
  target: target,

  //Plugins
  plugins: [new MiniCssExtractPlugin()],

  // Webpack reads right to left!!!
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000, // Specifies a port number to listen for requests on
    hot: true, // Enables webpack's Hot Module Replacement feature
  }
}