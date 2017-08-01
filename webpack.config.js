const webpack = require('webpack');
const path = require('path');
var node_dir = __dirname + '/node_modules';

const config = {
  entry: path.resolve(__dirname, 'node_modules') + '/foundation-sites/js/entries/foundation.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foundation.js'
  },
  resolve: {
        alias: {
            jquery: node_dir + "/jquery/src/jquery.js"
        }
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
	    options: {
            	presets: ['env']
            }
          }
        ],
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
};

module.exports = config;
