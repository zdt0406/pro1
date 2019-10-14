//插件(plugins)是 webpack 的支柱功能,webpack本身也是这样构建的，插件目的在于解决 loader 无法实现的其他事。

const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装       作用生产HTML文档
const webpack = require('webpack'); //访问内置的插件
const path = require('path');//node核心模块

module.exports = {
    mode:'development',
    entry: './path/to/my/entry/file.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

