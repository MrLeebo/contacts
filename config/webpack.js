var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = path.join(__dirname, '../');
var resolve = function(p) {
  return path.join(rootPath, p);
}

module.exports = {
  rootPath: rootPath,
  entry: {
    app: [ resolve('js/Main.jsx') ],
    vendor: [ 'bootstrap-sass!./config/bootstrap-sass.js', 'jquery', 'react', 'react-router', 'bootstrap' ]
  },
  output: {
      path: 'build',
      publicPath: '/',
      filename: 'app.js'
  },
  module: {
      loaders: [
          { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], include: resolve('js'), exclude: resolve('node_modules') },
          { test: /\.jsx?$/, loader: 'eslint-loader', include: resolve('js'), exclude: resolve('node_modules') },
          { test: /\.json$/, loaders: ["json"] },

          // Bootstrap fonts.  Not entirely sure this is necessary
          { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
          { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
          { test: /\.(png|jpg|jpeg|gif)$/,         loader: "url?limit=25000" }
      ]
  },
  eslint: {
    configFile: '.eslintrc',
    rules: {
      "no-console": 0,
      "no-debugger": 0
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'}),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
