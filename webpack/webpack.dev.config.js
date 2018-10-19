var webpack = require('webpack');
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
  }
}
