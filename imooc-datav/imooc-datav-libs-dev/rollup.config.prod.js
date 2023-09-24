const path = require('path')
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.min.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.min.js')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // 输出模块协议，表示输出一个umd的模块（一个jsfunction函数），cjs全称commonjs是nodejs中使用的一种模块化标椎（浏览器不能支持），es是一种es6模块化标准（浏览器不能支持需要在<script type="module"></script>引入浏览器才能支持）
      name: 'imoocDatav',
      global: {
        vue:'vue'
      }
    },
    {
      file: outputEsPath,
      format: 'es', //配置打包多文件（两种模块化标准）
      name:'imoocDatav'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude:'node_modules/**', // 哪些模块不进行babel编译
      runtimeHelpers:true,
      plugins: [
        [
          '@babel/transform-runtime', {
            regenerator:true
          }
        ]
      ]
    }),
    json(),
     vue(),
    postcss({
      plugins:[]
    }),
    terser()
  ],
  external:['vue','echarts'] // 将引入的模块当做外部模块引入，即使使用了resolve也不行
}