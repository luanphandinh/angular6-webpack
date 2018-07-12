const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig({env: ENV}), {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ],

  devServer: {
    historyApiFallback: true,
    open: true,
    stats: {
      env: true,
      chunks: false,
      modules: false,
      warnings: false,
      children: false,
    },
    overlay: {
      warnings: false,
      errors: true
    }
  }
});
