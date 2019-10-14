//提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。

module.exports = {
    mode: 'production'
};
//或者从 CLI 参数中传递：webpack --mode = production

//参数选项production（生产）压缩后的代码      development（开发）不被压缩
/*
1、production   会将 process.env.NODE_ENV 的值设为 production。
    启用（插件） FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin,
    NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
2、development   会将 process.env.NODE_ENV 的值设为 development。
    启用（插件） NamedChunksPlugin 和 NamedModulesPlugin。
 */

