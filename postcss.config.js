const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['defaults'],
    }),
    require('cssnano'),
  ],
};
