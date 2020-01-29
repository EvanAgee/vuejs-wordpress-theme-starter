const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = new StyleLintPlugin({
  configFile: path.resolve(__dirname, '../.stylelintrc'),
  context: path.resolve(__dirname, '../../src/assets/css'),
  files: '**/*.css',
  failOnError: false,
  quiet: true,
});
