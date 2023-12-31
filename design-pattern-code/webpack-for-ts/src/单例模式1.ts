/**
 * @description 单例模式
 * @author 双越老师
 */

class SingleTon {
  // private 无法在外面实例化 new
  private constructor() {}
  // private 无法在外面获取
  private static instance: SingleTon | null;

  // 获取单例
  static getInstance(): SingleTon {
    if (SingleTon.instance == null) {
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance; // 单例模式
  }
}

const s1 = SingleTon.getInstance(); // 正确获取单例对象的方式
const s2 = SingleTon.getInstance();
console.log(s1 === s2); // true

// SingleTon.instance // 报错
// const s2 = new SingleTon() // 报错
