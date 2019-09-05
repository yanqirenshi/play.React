const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      main: path.resolve(__dirname, './src/', "index.js")
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    module: {
      rules: [
      {
        test: /\.jsx?$/,
        exclude:[ /node_modules/ ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ["style-loader", { loader: "css-loader", options: { url: false, modules: true } }]
      }]
    },
    devtool: 'source-map',
    devServer: {
       contentBase: path.join(__dirname, "public"),
       watchContentBase: true,
       open: true
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
}
