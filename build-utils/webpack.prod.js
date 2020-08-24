const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  output: {
    filename: 'assets/js/[name].[hash:8].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: 'production',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: 'dist/',
          globOptions: {
            ignore: ['*.html'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: true,
  },
};
module.exports = config;
