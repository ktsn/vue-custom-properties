const path = require('path')

const base = path.resolve(__dirname)

module.exports = {
  context: base,
  entry: './main.js',
  output: {
    path: base,
    filename: '__build__.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: base
  }
}