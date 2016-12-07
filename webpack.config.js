const webpack = require('webpack');

const prod = process.argv.indexOf('-p') !== -1;

const config = {
  context: `${__dirname}/frontend`,
  entry: './main.jsx',
  output: {
    path: `${__dirname}/backend/public/scripts`,
    publicPath: '/scripts/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: './backend/public',
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  eslint: {
    configFile: './.eslintrc',
    failOnError: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }));
  config.devtool = '#source-map';
} else {
  config.devtool = '#eval-inline-source-map';
}

module.exports = config;
