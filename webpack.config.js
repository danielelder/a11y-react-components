// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');

// Webpack is just a bunch of keys on module.exports!
module.exports = {
	// This is where our app starts. This is why we have done all this importing
	// and exporting, to get to here
  entry: './src/index.ts',
	// module (I know it's a bit weird to have module.exports.module) is where we
	// define all the rules for how webpack will deal with thing.
	module: {
		// rules takes an array, each item containing the respective rules
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	// Here we define explicitly the file types we intend to deal with
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	// This is where we define how everything gets output.
	// dist is a common output folder, and it should be gitignored. The build can
	// be run after publishing so you don't wind up with it in source control
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		// You can do fun things here like use the [hash] keyword to generate unique
		// filenames, but for this purpose rinse.js is fine. This file and path will
		// be what you put in package.json's "main" field
		filename: 'main.js',
		// This field determines how things are importable when installed from other
		// sources. UMD may not be correct now and there is an open issue to fix this,
		// but until then, more reading can be found here:
		// https://webpack.js.org/configuration/output/#output-librarytarget
		libraryTarget: 'umd',
	},
};
