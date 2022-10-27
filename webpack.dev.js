const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		// port: 8081,
		// historyApiFallback: true,
		compress: true,
		allowedHosts: [
			"tms-sandbox.pancaran-group.co.id"
		]
		// server: {
		// 	type: 'https',
		// },
	},
	plugins: [
		new Dotenv({
			path: './.env.dev'
		}),
	]
});