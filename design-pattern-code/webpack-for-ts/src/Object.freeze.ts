/**
 * @description Object.freeze
 * @author 双越老师
 */

// Object.freeze 冻结：1. 现有属性不可被修改；2. 不可添加新属性；
const obj = { x: 100, y: 200 };
Object.freeze(obj);
// obj.x = 101 // 不成功
// console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, "x")); // { configurable: false, writable: false }

// // @ts-ignore
// obj.z = 300
// console.log(obj)
console.log(Object.isFrozen(obj));

// // Object.seal 密封：现有属性可以被修改；2. 不可以添加新属性
// const obj1 = { x: 100, y: 200 }
// Object.seal(obj1)
// obj1.x = 101
// console.log(obj1.x)
// console.log(Object.getOwnPropertyDescriptor(obj1, 'x')) // { configurable: false }
// // // @ts-ignore
// // obj1.z = 300
// console.log(Object.isSealed(obj1))

export {};
