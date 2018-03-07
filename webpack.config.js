const path = require('path');

const distDirectory = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './client/src/components/App.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: distDirectory,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './client/dist',
    hot: true,
  },
};
