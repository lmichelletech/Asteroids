const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9080
  },
  plugins: [
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};