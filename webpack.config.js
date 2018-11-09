module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/react', '@babel/env']
      }
    },
    {
    // test:/\.(s*)css$/,
    test: /\.scss$/,
    use:['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  }
}