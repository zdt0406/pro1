//模块(modules)
//webpack 通过 loader 可以支持各种语言和预处理器编写模块。loader 描述了 webpack 如何处理 非 JavaScript(non-JavaScript) _模块_，
// 并且在 bundle 中引入这些依赖。 webpack 社区已经为各种流行语言和语言处理器构建了 loader:
// CoffeeScript
// TypeScript
// ESNext (Babel)
// Sass
// Less
// Stylus

//模块(modules)解析   webpack 能够解析三种文件路径：
//1、绝对路径，已经获得文件的绝对路径，所以不需要去解析
import "/home/me/file";
import "C:\\Users\\me\\file";
//2、相对路径
//使用 import 或 require 的资源文件(resource file)所在的目录被认为是上下文目录(context directory)。在 import/require 中给定的相对路径，
// 会添加此上下文路径(context path)，以产生模块的绝对路径(absolute path)。
import "../src/file1";
import "./file2";
//3、模块路径
//模块将在 resolve.modules 中指定的所有目录内搜索。 你可以替换初始模块路径，此替换路径通过使用 resolve.alias 配置选项来创建一个别名。
// 一旦根据上述规则解析路径后，解析器(resolver)将检查路径是否指向文件或目录。
// 如果路径指向一个文件：
// 如果路径具有文件扩展名，则被直接将文件打包。
// 否则，将使用 [resolve.extensions] 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）。

// 如果路径指向一个文件夹，则采取以下步骤找到具有正确扩展名的正确文件：
// 如果文件夹中包含 package.json 文件，则按照顺序查找 resolve.mainFields 配置选项中指定的字段。并且 package.json 中的第一个这样的字段确定文件路径。
// 如果 package.json 文件不存在或者 package.json 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。
// 文件扩展名通过 resolve.extensions 选项采用类似的方法进行解析。


import "module";
import "module/lib/file";

