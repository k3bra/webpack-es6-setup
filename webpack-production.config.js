var path = require('path');
var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
 test: path.join(__dirname, 'src'),
 loader: WebpackStripLoader.loader('debug', 'console.log')
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
