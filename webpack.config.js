const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './jsbundle/index.js',
  output: {
    path: path.resolve(__dirname, 'www/assets/js'),
    filename: 'app.bundle.js',
  },
  devtool: 'inline-source-map',
};