const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const config = {
  entry: [
    './src/index.js',
    './src/App.css'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: process.env.NODE_ENV === 'production'
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1
              }
            },
            { loader: 'postcss-loader', options: { config: { path: path.join(__dirname, '../etc') } } }
            ]
          })
          : [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader', options: { config: { path: path.join(__dirname, '../etc') } } }
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }

}
if (process.env.NODE_ENV === 'production') {
  config.devtool = 'cheap-module-source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1,
      moveToParents: true

    })
  )
} else {
  config.devtool = 'cheap-module-eval-source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  )
}

module.exports = config
