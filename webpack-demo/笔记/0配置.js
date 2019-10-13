/*
安装本地的webpack
npm init -y   初始化
npm install  把项目的所有依赖包都下载
npm i webpack -D   === npm i webpack --save-dev
npm i webpack-cli -D    -D意思就是  开发依赖  上线的时候不需要

webpack 可以进行0配置   打包工具  ->  输出后的结果（JS模块）

手动配置webpack
1、默认配置文件的名字 webpack.config.js   可以在控制台直接输出webpack --config webpack.config.my.js也可以
"scripts": {
    "build":"webpack --config webpack.config.my.js"
    //手动更改默认配置文件的名字    运行时：npm run build ，如果对象中不设置文件名字也可以npm run build  -- --config webpack.config.my.js
 }

2、打开webpack命令  npx webpack -v      npx的意思就是在当前项目的node-modules中寻找webpack

3、package.json 中“scripts”设置 "bundle": "webpack "  可以用bundle替换webpack   命令行的命令为  npm run bundle
三种运行webpack命令的方式  webpack index.js       npx webpack index.js      npm run bundle(已经设置了入口和出口)=>webpack

4、package.json 中“scripts”设置  "watch": "webpack  --watch"  可以用来自动打包，具体执行代码  npm run watch, 其实执行的是npm run webpack --watch

5、package.json 中 "start": "webpack-dev-server",可以用来开启服务，并且每当代码更新都会重新打包(在内存中打包，不会创建dist目录)并且刷新网页  npm run start ,
其实执行的是npm run webpack-dev-server

6、package.json中"sideEffects": "false"，使用Tree shaking 打包，不忽略文件，全部打包，如果需要忽略那个文件直接"sideEffects":["@babel/polyfill"，"*.css"]；
所有的CSS文件都不要使用tree shaking ,这些设置只是在development设置，如果是生产环境production,则会默认设置
    Tree Shaking  只支持ES module   不支持CommonJS（node）
 */

