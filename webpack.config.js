var path = require("path");
var webpack = require('webpack');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "page"),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
	        {
	            test: /\.js$/,
	            exclude: /(node_modules)/,
	            loader: 'babel-loader',
	            query: {
	                cacheDirectory: true,
	                presets: ['es2015', 'react']
	            }
	        },
	        {
	            test: /\.scss$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "sass-loader" // compiles Sass to CSS
	            }]
	        },
	        {
	        	test: /\.(png|jpg)$/,
				loader: 'file-loader',
 				query: {
  					useRelativePath: process.env.NODE_ENV === "production"
 				}
 			}
	    ]
	},
    devServer: {
        contentBase: path.join(__dirname, "page"),
        compress: true,
        port: 9000,
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
 };