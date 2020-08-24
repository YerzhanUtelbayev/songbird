const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 'auto',
      openAnalyzer: true,
    }),
  ],
};
