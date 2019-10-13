//输出(output)
//1、多个入口起点
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname + '/dist')// 当前目录下的dist目录，没有的话就会去创建一个  这里的路径必须是一个绝对路径
    }// 写入到硬盘：./dist/app.js, ./dist/search.js
};
