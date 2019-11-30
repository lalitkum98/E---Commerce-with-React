const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: ["./src/js/commerce.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(jpg|png)$/,
				use: [
					{
						loader: "file-loader",
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}


		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),

	],
	devServer: {
		contentBase: "./dist"
	},
	devtool: "inline-source-map"

};
