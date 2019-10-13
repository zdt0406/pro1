//webpack 是基于node.j的语法
let path = require('path');//内置模块不需要安装
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode:'development',//模式 默认两种  production(生产)打包后的代码会被压缩   development(开发模式)打包后的代码不会被压缩
    /*inline：source-map映射关系直接写在了打包后的bundle.js中，放在底部以base64的形式
     * cheap :代码出错，报错会具体到哪一行的那一列,如果不加比较耗费性能，一般需要加上性能就会提升,同时不会管第三方包或者库的代码，只负责业务代码
     * module:不仅负责自己的业务代码逻辑，还要负责第三方模块或者包的业务逻辑
     * eval：和source-map不太一样，在打包后的js文件后面以eval方式输出，这种方式压缩速度最快
     */ //development:cheap-module-eval-source-map(开发模式下使用)
        //production:cheap-module-source-map(生成环境即线上环境)
    devtool:'cheap-module-eval-source-map',
    devServer:{//开发服务器的配置  webpack-dev-server
        port:3000,//设置端口
        progress:true,//设置进度条
        contentBase:"./dist",//设置默认的文件地址
        compress:true,//压缩操作
        //open:true,//会自动打开浏览器
        proxy:{//处理跨域问题
            './api':'http://loaclhost:3000,'
        },
        hot:true,//开启模块热更新
        hotOnly:true,//就算html功能没实现，也不刷新页面
    },
    entry:'./src/index.js',//入口  这里的路径是相对路径
    output:{//出口
     // publicPath:'https://CDN.js.com.cn',
      filename:"bundle.js",//出口文件名字
      path:path.resolve(__dirname,'dist'),//    当前目录下的dist目录，没有的话就会去创建一个  这里的路径必须是一个绝对路径
    },
    plugins:[//数组，所有的webpack插件  可以在运行在某个时刻的时候做一些事情
        new HtmlWebpackPlugin({//HtmlWebpackPlugin插件会在打包结束之后，自动生成一个html文件，并把生成的js文件自动引入到html文件中
            template: './src/index.html',//生成文件所需要的模板
            filename:'index.html',//生成的HTML文件的名字
            minify: {
                removeAttributeQuotes:true,//去掉双引号
                //collapseWhitespace:true,//压缩成一行，开发阶段一般不需要压缩成一行
            }
        }),
         new CleanWebpackPlugin(),//在打包之前删除dist目录下的所有内容
         new webpack.HotModuleReplacementPlugin()//模块热替换
    ],
    optimization:{//设置Tree shaking
        usedExports:true
    },
   module:{//模块加载所有第三方的匹配规则
        rules:[//规则    css-loader 解析@import这种语法的(CSS文件再引入另一个CSS文件)      loader:功能单一
            //style-loader  他是把css挂载到head标签中
            //loader用法：字符串的形式表示只用一个loader,多个loader则必须使用数组的形式,  loader的执行顺序，默认是从右向左执行,从下到上执行
            //options:{modules:true}  开启CSS的模块化
            {test:/\.css$/,use:[{loader:'style-loader'},'css-loader']},//如果需要转换scss文件，需要再加上sass.loader
            //{loader:'style-loader',options:{importLoaders:2}}中配置项importLoader:2，引入之前向上执行2个loader
            {test:/\.(jpg|png|gif)$/,use:{loader:'url-loader',
                    //url-loader与file-loader类似，但是url-loader不会将图片打包到dist目录下，转换成BASE64字符串，打包到JS中去
                    //如果一个图片非常小，直接使用url-loader加载到JS文件中很方便，图片太大加载到js文件中就会运行很慢
                    options: {
                name:'[name]-[hash:8].[ext]',//placeholder 占位符   [ext]资源扩展名    [name]资源的基本名称   [hash:8]内容的哈希值截取前8位
                outputPath:'images',//创建一个文件夹，将打包好的图片放到这个文件夹下
                limit:20480,//如果图片大小大于20kb,则采用file-loader,小于20kb则使用url-loader(将图片加载到JS文件中使用base64),单位是字节Byte
                }
            }
        },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{//配置Babel来转换高级的语法
        "presets":[["@babel/preset-env",{targets:{
            chrome:"67",//当谷歌浏览器的版本大于67不用将ES6转换为ES5
            },
       useBuiltIns:'usage' }]]//只转换项目中使用
    } },
]
   }
};//修改了
//加了一行