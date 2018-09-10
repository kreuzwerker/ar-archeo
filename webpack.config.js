const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public',
    filename: 'bundle.js'
  },
  serve: {
    dev: {
      publicPath: '/public/'
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.(dat|patt|jpg|png)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader'
        }
      }, {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [ 'file-loader' ],
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './index.html',
      filename: 'index.html'
    })
  ]
};