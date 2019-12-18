const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

function isDevEnvironment() {
  return process.env.NODE_ENV === 'development';
}

module.exports = {
  devtool: isDevEnvironment() ? 'inline-source-map' : false,
  entry: {
    app: path.resolve(__dirname, 'src/script/index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'] // enables users to leave off the extension when importing
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /favicon\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader?assets/name=[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/*.html',
        to: path.resolve(__dirname, 'dist'),
        flatten: true
      }
    ]),
  ],
  mode: 'development'
};
