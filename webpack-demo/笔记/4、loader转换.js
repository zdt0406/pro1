//loader  用于对模块的源代码进行转换。

//loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

//使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：
// npm install --save-dev css-loader    .css 使用 css-loader
// npm install --save-dev ts-loader     .ts 文件使用 ts-loader
//css-loader 解析@import这种语法的(CSS文件再引入另一个CSS文件)
//style-loader  他是把css插入到head标签中
/*
--save       是对生产环境所需依赖的声明(开发应用中使用的框架，库)  比如：jq，react，vue都需要放到这里面
--save-dev   是对开发环境所需依赖的声明(构建工具，测试工具)比如：babel，webpack，都放到当前目录
*/
module.exports = {
    module: {
        rules: [//字符串的形式表示只用一个loader,多个loader则必须使用数组的形式,  loader的执行顺序，默认是从右向左执行,从下到上执行
            { test: /\.css$/, use:[{loader:'css-loader',option:{insert:'top'}}]},
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
};