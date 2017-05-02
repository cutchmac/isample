const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    app: './app/main.ts'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.d.ts', '.js', '.scss'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'app.html'
    })
  ]
};