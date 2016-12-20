var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8888
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  output: {
    path: 'build',
    filename: 'js/bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
