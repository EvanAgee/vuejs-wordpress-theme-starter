const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = require('./plugins');
const loaders = require('./loaders');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/app.js',
  },
  devtool: isDev ? 'inline-source-map' : false,
  stats: { warnings: false }, // Hide warnings
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins,
  optimization: {
    chunkIds: isDev ? 'named' : 'total-size',
    minimize: !isDev,
    minimizer: isDev
      ? []
      : [
          new UglifyJsPlugin({
            // include: [path.resolve(__dirname, '../src')],
            cache: true,
            parallel: true,
            extractComments: true,
            uglifyOptions: {
              warnings: false,
              parse: {},
              compress: {},
              mangle: true,
              output: null,
              ie8: false,
              keep_fnames: false,
              toplevel: false,
            },
          }),
        ],
  },
};
