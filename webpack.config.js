const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

config = {
  context: __dirname + '/app',
  entry: './main.js',
  output: {
    path: __dirname + '/public/scripts',
    publicPath: '/scripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    inline: true,
    contentBase: './public'
  }
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"production"`
    }
  }));
  config.devtool = '#source-map';
} else {
  config.devtool = '#eval-inline-source-map';
}

module.exports = config;
