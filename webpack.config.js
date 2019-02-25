const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
    // test:/\.(s*)css$/,
      test: /\.scss$/,
      use:['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  }
}