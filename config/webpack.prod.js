var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var helpers = require('./helpers');


const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          mangle: true
        }
      })
    ]
  },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify(ENV)
        }
      }),
      new webpack.LoaderOptionsPlugin({
        htmlLoader: {
            minimize: false // workaround for ng2
        }
      })
    ]
});
