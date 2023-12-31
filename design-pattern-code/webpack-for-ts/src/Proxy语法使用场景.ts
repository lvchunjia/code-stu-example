/**
 * @description src entry
 * @author 双越老师
 */

// 1. 跟踪属性访问
// Vue3 数据响应式 Proxy
// const user = {
//   name: "张三",
// };
// const proxy = new Proxy(user, {
//   get(...args) {
//     console.log("get..."); // 监听
//     return Reflect.get(...args);
//   },
//   set(target, key, val) {
//     console.log("set..."); // 监听
//     return Reflect.set(target, key, val);
//   },
// });
// console.log(proxy.name);
// proxy.name = "李四";

// 2. 隐藏属性
// const hiddenProps = ["girlfriend"];
// const user = {
//   name: "张三",
//   age: 25,
//   girlfriend: "小红",
// };

// const proxy = new Proxy(user, {
//   get(target, key) {
//     if (hiddenProps.includes(key as string)) return undefined;
//     return Reflect.get(target, key);
//   },
//   has(target, key) {
//     if (hiddenProps.includes(key as string)) return false;
//     return Reflect.has(target, key);
//   },
//   set(target, key, val) {
//     if (hiddenProps.includes(key as string)) return false;
//     return Reflect.set(target, key, val);
//   },
// });

// // proxy.girlfriend = '小丽'
// console.log(proxy.girlfriend);
// console.log("girlfriend" in proxy);

// 3. 验证属性格式（ JS ）
const user = {
  name: "张三",
  age: 25,
};
const proxy = new Proxy(user, {
  set(target, key, val) {
    if (key === "age") {
      if (typeof val !== "number") return false;
    }
    return Reflect.set(target, key, val);
  },
});

// 4. 记录实例
const userList = new WeakSet(); // 每次初始化 user ，都记录在这里
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const ProxyUser = new Proxy(User, {
  construct(...args) {
    const user = Reflect.construct(...args);
    userList.add(user); // 记录
    return user;
  },
});

const user1 = new ProxyUser("张三");
const user2 = new ProxyUser("李四");
console.log("userList", userList);

export {};
