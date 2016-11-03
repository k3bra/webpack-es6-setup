var path = require('path');

module.exports = {
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].entry.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
};
