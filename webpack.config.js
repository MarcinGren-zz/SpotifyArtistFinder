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