const webpack = require('webpack');
const path = require('path');
const node_dir = __dirname + '/node_modules';

const config = {
  entry: node_dir + '/foundation-sites/js/entries/foundation.js',
  output: {
    path: path.resolve(__dirname, 'dist') + '/build',
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
