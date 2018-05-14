const webpackConfig = require('./webpack.test');
const path = require('path');
const helper = require('./helpers');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './config/karma-test-shim.js', watched: false },
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: helper.root('/coverage/coverage.json'),
      html: helper.root('/coverage/html')
    },

    coverageReporter: {
      type: 'in-memory'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage', 'remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(_config);
};
