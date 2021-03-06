var path = require('path');

module.exports = {
  entry: {
    'main': './src/main.js',
    'declaration': './src/declaration.js',
    'arrows': './src/arrows.js',
    'default_parameters': './src/default_parameters.js',
    'operators': './src/operators.js',
    'template': './src/template.js',
    'classes': './src/classes.js',
    'modules': './src/modules.js',
    'find': './src/find.js',
    'string': './src/string.js',
    'sets': './src/sets.js',
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
