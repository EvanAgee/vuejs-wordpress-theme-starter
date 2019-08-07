const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/app.js',
    'index.min': './src/app.js'
  },
  stats: { warnings: false }, // Hide warnings
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: [
                      'Chrome >= 52',
                      'FireFox >= 44',
                      'Safari >= 7',
                      'Explorer 11',
                      'last 4 Edge versions'
                    ]
                  },
                  useBuiltIns: true
                }
              ],
              'stage-2'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      throttle: 'lodash.throttle'
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.bundle\.js$/,
      minimize: true,
      ecma: 8
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new ExtractTextPlugin('styles.css')
  ]
};
