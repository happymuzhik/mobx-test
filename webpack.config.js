const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const prod_dir = '/dist/web/';

const html_test_dev_dir = './html/';
const html_test_prod_dir = '/dist/web/';

module.exports = {
	context: __dirname + '/src',
	entry: {
		main: './entry',
	},
	output: {
		path: __dirname + prod_dir + 'assets',
		publicPath: '/assets/',
		filename:  '[name].[chunkhash].js',		
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',				
				query: {
					plugins: ["transform-decorators-legacy"],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!stylus?resolve url'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css!autoprefixer-loader?browsers=last 2 versions'
			},
		]
	},
	resolve:{
		// modulesDirectories: ['node_modules'],
		extensions: ['.js', '.jsx']
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: html_test_dev_dir + 'index.html',
		}),
		new WebpackCleanupPlugin({
			exclude: ['*.css']
		}),
		/*new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})*/
	]
};   