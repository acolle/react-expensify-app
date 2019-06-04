const path = require('path');

const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  }
};

// historyAPIFallback: Tells the dev server client side routing is used and that index.html will be served for all 404 errors
