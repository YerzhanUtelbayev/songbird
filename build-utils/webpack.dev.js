const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const commonPaths = require('./common-paths');

const PORT = process.env.PORT || 8080;

const config = {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'cheap-module-source-map',
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
            envName: 'development',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    contentBase: commonPaths.publicPath,
    host: 'localhost',
    compress: true,
    historyApiFallback: true,
    open: true,
    overlay: true,
    port: PORT,
    hot: true,
  },
};
module.exports = config;
