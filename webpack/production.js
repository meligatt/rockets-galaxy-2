const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      data: path.resolve(__dirname, '/'),
    },
  },
  entry: {
    index: ['babel-polyfill', './index.js']
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new UglifyJsPlugin()
  ]
};