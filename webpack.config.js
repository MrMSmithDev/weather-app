const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
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
