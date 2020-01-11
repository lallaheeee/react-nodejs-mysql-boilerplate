const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
});
