const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const configs = {
  development: require('./webpack.dev.js'),
  production: require('./webpack.prod.js')
};

const ENV = process.env.NODE_ENV;

const commonConfig = {
  entry: {
    app: './src/index.js'
  },
  mode: ENV,
  context: path.join(__dirname, '/'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'Rockets of the galaxy',
      template: path.join(__dirname, 'index.html'),
      inject: 'body',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'public'),
        to: path.join(__dirname, 'dist')
      },
    ]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
};


const environmentConfig = (() => {
  switch (ENV) {
    case 'production':
      return configs.production;
    case 'development':
    default:
      return configs.development;
  }
})();

module.exports = merge(commonConfig, environmentConfig);
