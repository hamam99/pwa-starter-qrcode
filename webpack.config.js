// webpack.config.js
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  // ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_TITLE': JSON.stringify(packageJson.name),
    }),
  ],
};

