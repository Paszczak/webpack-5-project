const path = require('path');

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// Setting mode for production in build script!!!
let mode = process.env.NODE_ENV === "production" ? "production" : "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  mode: mode,
  devtool: "source-map",
  target: target,

  // Target path for asetss
  output: {
    path: path.join(__dirname, "dist"), //
    assetModuleFilename: "images/[hash][ext][query]",
  },

  //Plugins
  plugins: [
    new CleanWebpackPlugin(), // Should be at top?
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // Webpack reads right to left!!!
  module: {
    rules: [
      // Images
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource", // "assets/inline" for small resources like svg images, "asset" webpack desides if inline or resource
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
      // Css, Sass
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ""
            },
          }
          ,
          "css-loader",
          "postcss-loader",
          "sass-loader"],
      },
      // Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  // Changes how modules are resolved.
  resolve: {
    extensions: [".js", ".jsx"], // If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest
  },


  // Webpack sserver settings
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000, // Specifies a port number to listen for requests on
    hot: true, // Enables webpack's Hot Module Replacement feature
  }
}