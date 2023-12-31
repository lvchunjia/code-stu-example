/**
 * @description 单例模式
 * @author 双越老师
 */

// @ts-nocheck
function genGetInstance() {
  let instance; // 闭包

  class Singleton {}

  return () => {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  };
}

const getInstance = genGetInstance();
const s1 = getInstance();
const s2 = getInstance();
console.log(s1 === s2); // true

// ------------------- 分割线 -------------------

// 模块化 - commonjs ES6 Module

// getInstance.js 文件 - 开始
let instance;

class Singleton {}

export default () => {
  if (instance == null) {
    instance = new Singleton();
  }
  return instance;
};
// getInstance.js 文件 - 结束
