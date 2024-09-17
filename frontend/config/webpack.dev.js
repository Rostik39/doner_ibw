import fs from 'fs';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";

import * as path from 'path';

const srcFolder = "src";
const buildFolder = "dist";
const rootFolder = path.basename(path.resolve());

let pugPages = fs.readdirSync(srcFolder).filter(fileName => fileName.endsWith('.pug'))
let htmlPages = []

if (!pugPages.length) {
	htmlPages = [new FileIncludeWebpackPlugin({
		source: srcFolder,
		htmlBeautifyOptions: {
			"indent-with-tabs": true,
			'indent_size': 3
		},
		replace: [
			{ regex: '<link rel="stylesheet" href="css/style.min.css">', to: '' },
			{ regex: '../img', to: 'img' },
			{ regex: '@img', to: 'img' },
		],
	})];
}
const paths = {
	src: path.resolve(srcFolder),
	build: path.resolve(buildFolder)
}
const config = {
	mode: "development",
	devtool: 'inline-source-map',
	optimization: {
		minimize: false
	},
	entry: `${paths.src}/index.jsx`,
	output: {
		path: `${paths.build}`,
		filename: 'main.min.js',
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true,
		static: paths.build,
		open: {
			app: {
			  name: 'google chrome'
			}
		},
		compress: true,
		port: 'auto',
		hot: true,
		host: 'local-ip', // localhost
		//В режимі розробника папка 
		// результатом (dist) буде створюватися на диску)
		//devMiddleware: {
		//	writeToDisk: true,
		//},
		watchFiles: [
			`${paths.src}/**/*.html`,
			`${paths.src}/**/*.pug`,
			`${paths.src}/**/*.json`,
			`${paths.src}/**/*.htm`,
			`${paths.src}/img/**/*.*`
		],
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				exclude: `${paths.src}/fonts`,
				use: [
					'style-loader',
					{
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: '../img',
							flags: 'g'
						}
					}, {
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							modules: false,
							url: {
								filter: (url, resourcePath) => {
									if (url.includes("img/") || url.includes("fonts/")) {
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
							sourceMap: true,
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
			}, {
				test: /\.(jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: '../../img',
							flags: 'g'
						}
					}, {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react", "@babel/preset-env"]
						}
					}
				],
			}, {
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		{
			apply: (compiler) => {
				compiler.hooks.compilation.tap('MyCustomPlugin', (compilation) => {
					HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
						'MyCustomPlugin',
						(data, cb) => {
							data.html = data.html.replace('<link rel="stylesheet" href="css/style.min.css">', '');
							data.html = data.html.replace('<script defer="defer" src="js/main.min.js"></script>', '');
							cb(null, data);
						}
					);
				});
			},
		},
		new CopyPlugin({
			patterns: [
				{
					from: `${srcFolder}/img`, to: `img`,
					noErrorOnMissing: true,
					force: true
				}, {
					from: `${srcFolder}/files`, to: `files`,
					noErrorOnMissing: true,
					force: true
				}, {
					from: `public/favicon.ico`, to: `./`,
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