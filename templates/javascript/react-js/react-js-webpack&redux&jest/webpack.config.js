'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    mode: 'development',
    entry: [
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			path.join(__dirname, 'app/index.js')
    ],
    output: {
			path: path.join(__dirname, '/dist/'),
			filename: 'app.js',
			publicPath: ''
    },
    resolve: {
			modules: [ 'app', 'node_modules' ],
			extensions: ['.js']
    },
    plugins: [
			new HtmlWebpackPlugin({
				template: 'app/index.tpl.html',
				inject: 'body',
				filename: 'index.html'
			}),
			new webpack.HotModuleReplacementPlugin()
    ],
    performance: {
			hints: false
    },
    module: {
			rules: [
			{
				test: /\.(js)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: '.eslintrc',
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
