const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      poot: 3000,
      server: { baseDir: ['dist'] }
    }),
  ],
})