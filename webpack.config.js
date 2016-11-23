const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

config = {
  context: __dirname + '/app',
  entry: './main.js',
  output: {
    path: __dirname + '/public/scripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'inline-source-maps'
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"production"`
    }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"development"`
    }
  }));
}

module.exports = config;
