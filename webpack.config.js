const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Whatever\'s the Weather',
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      { // CSS
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      { // Images
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: 'asset/resource'
      },
      { // Webfonts
        test: /\.(woff|woff2|otf|ttf)$/i,
        type: 'asset/resource'
      },
    ],
  },
}
