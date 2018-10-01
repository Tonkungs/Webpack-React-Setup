const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// https://devahoy.com/posts/basic-web-with-react-router-v4/
//engineering.thinknet.co.th/tutorial-เซ็ตอัพ-webpack-และ-react-ตั้งแต่เริ่มต้นจน-deploy-fa3d53e96469
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
    // chunkFilename: '[chunkhash:12].js',
    // filename: '[chunkhash:12].js'
    //ไว้บอก path เริ่มต้น
    // publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /(\.css$)/,
        include: /(node_modules)/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules)/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: /(node_modules)/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" },
      //     { loader: "sass-loader" }
      //   ]
      // },
      // {
      //   test: /\.png$/,
      //   exclude: /(node_modules)/,
      //   use: [{ loader: "file-loader" }]
      // },
      // {
      //   test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
      //   loader: "file-loader?name=[hash:12].[ext]"
      // }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    //ให้เว็บเรียก url ตรงๆ ได้
    historyApiFallback: true,
    hot: true
  }
};
// const webpack = require('webpack')
// const path = require('path')

// const config = {
//     // Where entry
//     entry: path.resolve('src/index.js'),
//     // Where to put builed?
//     output: {
//         path: path.resolve('dist'),
//         filename: 'bundle.js'
//     },
//     devtool: 'inline-source-map',
//     module: {
//         rules: [
//             {
//                 test: /.js$/,
//                 loader: 'babel-loader',
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     },

//     // Dev server
//     devServer: {
//         contentBase: path.join(__dirname, "dist"),
//         compress: true,
//         hot: true,
//         port: 9000
//     },
//     plugins: [
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin()
//     ]
// }
// module.exports = config;
