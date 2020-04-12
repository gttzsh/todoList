const path = require('path')
const { srcPath, distPath } = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //入口js文件
   entry: path.join(srcPath, 'index'),
   module: {
     rules: [
       {
         //处理es6
         test: /\.js$/,
         loader: ['babel-loader'],
         include: srcPath
       },
       {
         test: /\.css$/,
         //loader执行顺序： 从后往前  postcess-loader 做浏览器兼容
         loader: ['style-loader', 'css-loader', 'postcss-loader']
       },
       {
         test: /\.less$/,
         loader: ['style-loader', 'css-loader', 'less-loader']
       }
     ]
   },
   //最终输出到base.html中
   plugins: [
     new HtmlWebpackPlugin({
       template: path.join(srcPath, 'index.html'),
       filename: 'index.html'
     })
   ]
}
