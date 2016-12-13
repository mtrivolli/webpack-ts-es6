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
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'src/**/*.ts', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.ts', load: false}
    ], 
    
    preprocessors: {
        '**/*.js': file => require('babel-core').transform(
            file.content,
            {sourceMap: true, presets: ['es2015']})
    },

    postprocessor: webpackPostprocessor,
    debug: true,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};