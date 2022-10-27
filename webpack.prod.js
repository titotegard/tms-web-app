const zlib = require("zlib");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new Dotenv(),
		new CompressionWebpackPlugin({
			algorithm: "brotliCompress",
			compressionOptions: {
				params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
				},
			},
		}),
	],
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
});