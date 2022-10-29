const path = require('path');

module.exports = {
  optimization: {
    minimize: false,
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};