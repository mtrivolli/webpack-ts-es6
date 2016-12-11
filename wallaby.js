var webpackConfig = require("./webpack.config");
webpackConfig.resolve.extensions = ['', '.js', '.json']; // anything you need but .ts extension
webpackConfig.module.loaders = [];

var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    // set `load: false` to all source files and tests processed by webpack
    // (except external files),
    // as they should not be loaded in browser,
    // their wrapped versions will be loaded instead
    files: [
      // {pattern: 'lib/jquery.js', instrument: false},
      {pattern: 'src/**/*.ts', load: false},
      //{pattern: 'node_modules/es6-promise/auto.js', instrument: false},
    ],

    tests: [
      {pattern: 'test/**/*.ts', load: false}
    ],

    postprocessor: webpackPostprocessor,
    debug: true,

    setup: function () {
      //require('es6-promise').polyfill();
      window.__moduleBundler.loadTests();
    }
  };
};