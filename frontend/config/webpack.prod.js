import fs from 'fs';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from "terser-webpack-plugin";

import * as path from 'path';


const srcFolder = "src";
const buildFolder = "dist";
const publicFolder = "public";
const rootFolder = path.basename(path.resolve());

let cssImagesWebpLoader, htmlImagesWebpLoader;

cssImagesWebpLoader = {
	loader: 'string-replace-loader',
	options: {
		search: '.png|.jpeg|.jpg|.gif',
		replace: '.webp',
		flags: 'ig'
	}
}
htmlImagesWebpLoader = {
	regex: '.png|.jpeg|.jpg|.gif', to: '.webp'
}

let pugPages = fs.readdirSync(srcFolder).filter(fileName => fileName.endsWith('.pug'))
let htmlPages = [];

if (!pugPages.length) {
	htmlPages = [new FileIncludeWebpackPlugin({
		source: publicFolder,
		destination: '../',
		htmlBeautifyOptions: {
			"indent-with-tabs": true,
			'indent_size': 3
		},
		replace: [
			{ regex: '../img', to: 'img' },
			{ regex: '@img', to: 'img' },
			htmlImagesWebpLoader,
			{ regex: 'NEW_PROJECT_NAME', to: rootFolder }
		],
	})]
}

const paths = {
	src: path.resolve(srcFolder),
	build: path.resolve(buildFolder)
}
const config = {
	mode: "production",
	cache: {
		type: 'filesystem'
	},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
	},
	entry: `${paths.src}/index.jsx`,
	output: {
		path: `${paths.build}`,
		filename: 'main.min.js',
		publicPath: '/',
		// assetModuleFilename: '../img/[hash][ext][query]'
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: '../img',
							flags: 'ig'
						}
					}, cssImagesWebpLoader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 0,
							sourceMap: false,
							modules: false,
							url: {
								filter: (url, resourcePath) => {
									if (url.includes("img") || url.includes("fonts")) {
										return false;
									}
									return true;
								},
							},
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: "expanded",
							},
						}
					},
				],
			}, {
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader'
					}, {
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: 'img',
							flags: 'g'
						}
					}
				]
			},
			{
				test: /\.(jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react", "@babel/preset-env"],
						}
					},
					{
						loader: 'string-replace-loader',
						options: {
							search: '.png',
							replace: '.webp',
							flags: 'g'
						}
					}
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',	
						options: {
							outputPath: '../img',
						}
					}
				],
				type: 'javascript/auto',
				generator: {
					publicPath: '',
					outputPath: ''
				}
			},
		],
	},
	plugins: [
		...htmlPages,
		// ...pugPages.map(pugPage => new HtmlWebpackPlugin({
		// 	minify: false,
		// 	template: `${srcFolder}/${pugPage}`,
		// 	filename: `../${pugPage.replace(/\.pug/, '.html')}`
		// })),
		// new HtmlWebpackPlugin({
		// 	template: `${publicFolder}/index.html`,
		// 	filename: '../index.html',
		// }),
		new MiniCssExtractPlugin({
			filename: '../css/style.css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: `${paths.src}/files`, to: `../files`,
					noErrorOnMissing: true
				}, {
					from: `${paths.src}/php`, to: `../`,
					noErrorOnMissing: true
				}, {
					from: `${publicFolder}/favicon.ico`, to: `../`,
					noErrorOnMissing: true
				}
			],
		})
	],
	resolve: {
		alias: {
			"@scss": `${paths.src}/scss`,
			"@js": `${paths.src}/js`,
			"@img": `${paths.src}/img`
		},
		extensions: ['.js', '.jsx']
	},
}
export default config;