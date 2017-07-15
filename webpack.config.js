var path = require ('path');
var webpack = require ('webpack');


module.exports = {
	resolve: {
	 extensions: ['.js', '.jsx', '.json']
 },
	entry: './src/app.jsx',

	output: {
	filename: './public/bundle.js',
	path: __dirname
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
	}
}
