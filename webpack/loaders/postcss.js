const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
  }),
};
