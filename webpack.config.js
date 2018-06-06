// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV

const config = {
  mode: env || 'dev'
}

console.log(env)

console.log(config.mode)

let mode1 = '';

module.exports = (env) => {
  console.log('Production: ', env.production) // true

  if (env.production === true) {
    mode1 = 'prod';
  } else {
    mode1 = 'dev';
  }

  console.log(`using ./webpack.${mode1}.js`)
  return require(`./webpack.${mode1}.js`)
}

/* module.exports = {
  entry: {
    main: './src/index.js'
  },
  devtool: 'inline-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};
 */