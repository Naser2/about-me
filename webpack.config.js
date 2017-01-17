
module.exports = {
  entry: './src/index2.js',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader','babel?presets[]=es2015&presets[]=react']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg\?fill=/, // match only imports like `url(image.svg?fill=red)`
        loaders: [
          'url', // or file-loader
          'svg-fill?selector=path,circle'
		]
	},
    ]
  },
  devServer: {
        hot: true
    }
};
