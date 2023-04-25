const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify') // utilizăm 'path-browserify' ca fallback pentru 'path'
    }
  }
};