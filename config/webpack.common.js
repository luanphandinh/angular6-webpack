const helpers = require('./helpers');
const buildUtils = require('./build-utils');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackInlineManifestPlugin = require('webpack-inline-manifest-plugin');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = function(options) {
  const isProd = options.env === 'production';
  const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, options.metadata || {});
  const supportES2015 = buildUtils.supportES2015(METADATA.tsConfigPath);
  const ngcWebpackConfig = buildUtils.ngcWebpackSetup(isProd, METADATA);

  const entry = {
    'polyfills': helpers.root('./src/polyfills.ts'),
    'app': helpers.root('./src/main.ts')
  };

  Object.assign(ngcWebpackConfig.plugin, {
    tsConfigPath: METADATA.tsConfigPath,
    mainPath: entry.app
  });

  return {
    entry,

    // https://webpack.js.org/configuration/resolve/
    resolve: {
      mainFields: [...(supportES2015 ? ['es2015'] : []), 'browser', 'module', 'main'], 
      extensions: ['.ts', '.js', '.json'], 
      modules: [ helpers.root('src'), helpers.root('node_modules') ],
      alias: buildUtils.rxjsAlias(false),
    },
  
    module: {
      rules: [
        ...ngcWebpackConfig.loaders,
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            emitErrors: true
          }
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.(scss|css)$/,
          exclude: helpers.root('src', 'app'),
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader?sourceMap',
            'sass-loader?sourceMap'
          ]
        },
        {
          test: /\.(scss|css)$/,
          include: helpers.root('src', 'app'),
          use: ['raw-loader', 'sass-loader?sourceMap']
        }
      ]
    },
  
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        // /angular(\\|\/)core(\\|\/)(@angular|fesm5)/,
        /(.+)?angular(\\|\/)core(.+)?/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
      ),

      new AngularCompilerPlugin(ngcWebpackConfig.plugin),
  
      new HtmlWebpackPlugin({
        title: 'Angular Webpack',
        name: 'index.html',
        template: 'src/index.tpl.html'
      }),

      new ScriptExtHtmlWebpackPlugin({
        sync: /inline|polyfills|vendor/,
        defaultAttribute: 'async',
        preload: [/polyfills|vendor|main/],
        prefetch: [/chunk/]
      }),

      new WebpackInlineManifestPlugin(),
    ]
  };
}
