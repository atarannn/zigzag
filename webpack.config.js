const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    index: './src/assets/scripts/index-app.js',
    header: './src/assets/scripts/gulp-modules/header.js'
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.glsl$/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ],
  },
};

module.exports = config;
