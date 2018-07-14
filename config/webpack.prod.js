const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const buildUtils = require('./build-utils');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env) {
  const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
  const supportES2015 = buildUtils.supportES2015(buildUtils.DEFAULT_METADATA.tsConfigPath);

  return webpackMerge(commonConfig({ env: 'production' }), {
    mode: 'production',
    devtool: 'source-map',
  
    output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js'
    },
  
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            ecma: supportES2015 ? 6 : 5,
            warnings: false, // TODO verbose based on option?
            ie8: false,
            mangle: true,
            compress: {
              pure_getters: true /* buildOptimizer */,
              // PURE comments work best with 3 passes.
              // See https://github.com/webpack/webpack/issues/2899#issuecomment-317425926.
              passes: 2 /* buildOptimizer */
            },
            output: {
              ascii_only: true,
              comments: false
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        chunks: 'all'
      },
    },
  
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),

      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),

      new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify(ENV)
        }
      }),

      new webpack.LoaderOptionsPlugin({
        htmlLoader: {
            minimize: false // workaround for ng2
        }
      }),
      
      // Useful for investigating webpack bundles size
      new BundleAnalyzerPlugin()
    ],
    

    // https://webpack.js.org/configuration/node/
    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
  });
}
