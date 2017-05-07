let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    entry1: path.resolve(__dirname, 'src/index.js'),
    entry2: path.resolve(__dirname, 'src/index2.js')
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js?[hash]'
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".json", ".less"],
    alias: {
      'components': path.resolve(__dirname, 'components')
    }
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: [
            "react-hot-loader",
            'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
        ]
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'style-loader'
        })
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("[name].css?[hash]"),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.MinChunkSizePlugin({
      compress: {
        warnings: false
      }
    }),
    // 按引用频度来排序 ID，以便达到减少文件大小的效果
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    })
    // new openBrowserWebpackPlugin({ url: 'http://localhost:8080' })
  ],
  devServer: {
    stats: {
      colors: true
    },
    port: 8080,
    historyApiFallback: true,
    // publicPath: "/static/", //部署打包时添加
    // contentBase: 'build',  //部署打包时添加
    inline: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
};
