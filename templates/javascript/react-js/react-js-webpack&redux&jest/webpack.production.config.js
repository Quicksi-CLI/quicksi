'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	entry: [
		path.join(__dirname, 'app/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: '[name].min.js',
		publicPath: ''
	},
	resolve: {
		modules: ['app', 'node_modules'],
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		// new BundleAnalyzerPlugin()
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				}
			}
		}
	},
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
					use: ['babel-loader']
			}
		]
	}
};
