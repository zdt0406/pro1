//入口起点(entry points)    语法：entry: string | Array<string> | object<string>
//1、entry 属性的单个入口语法
const config = {
  entry: './path/to/my/entry/file.js'
};
module.exports = config;
//简写方式
const config1 = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
module.exports = config1;

//2、entry多入口属性写法：可以传入一个数组,也可以传入一个对象
const config2 = {
  entry:[{
        main: './path/to/my/entry/file.js'
  },
        {index:'./path/mu/file.js'
    },
  ]
};
module.exports = config2;
module.exports = {
    entry:{
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
};


