const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/img', to: 'img' }]
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html',
      inject: false,
      minify: false
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      fix: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
}
