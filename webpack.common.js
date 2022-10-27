const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	entry: ["babel-polyfill", './src/main.js'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': path.resolve(__dirname)
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader?compact=false' },
			{ test: /\.vue$/, use: 'vue-loader' },
			{
				test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1000,
						name: './src/assets/[name].[ext]'
					}
				}]
			},
			{
				test: /\.(sass|css|scss)$/,
				use: [devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				{
					loader: 'sass-loader',
					options: {
						// This is the path to your variables
						// additionalData: `@import '@/sass/styles/variables.scss';
						// 									@import '@/sass/preset/mixins.scss';`
					},
					// Requires >= sass-loader@^8.0.0
				},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new VueLoaderPlugin(),
	].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
	output: {
		filename: 'tms.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
}