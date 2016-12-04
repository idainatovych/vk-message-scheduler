const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

config = {
  context: __dirname + '/frontend',
  entry: './main.js',
  output: {
    path: __dirname + '/backend/public/scripts',
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
    contentBase: './backend/public',
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
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
