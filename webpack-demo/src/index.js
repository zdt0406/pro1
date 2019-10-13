//webpack 模块打包工具  最早是JS模块打包工具

/*import Header from './header.js';//ES module模块引入方式
import Content from './content';
import Sidebar from './sidebar';*/

let Header = require('./header.js');//CommonJS引入规范  node.JS
let Content = require('./content');
let Sidebar = require('./sidebar');
let Counter = require('./counter.js');
let Number = require('./number.js');

let Image = require('./picture.js');
import "@babel/polyfill";//引入BABEL工具@babel/polyfill   解析高级语法比如Promise
import ('./index.css');//非js模块直接使用import  文件路径
let CreateAvatar = require('./createAvatar.js');


new CreateAvatar();
new Header();
new Content();
new Sidebar();
new Counter();
new Number();
new Image();
console.log("zdt   t0t");





