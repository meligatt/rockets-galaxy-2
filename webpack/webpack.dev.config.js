var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  mode: 'development',
  module: {
    rules:[
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output:{
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '../','dist')]),
    new HtmlWebpackPlugin({
      title: 'gardians-extension',
      template: path.join(__dirname, '../', 'index.html'),
      inject: 'body',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([
      {
        from: parentDir + 'public',
        to: parentDir + 'dist'
      }
    ])
  ]
}
