const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
  }
});