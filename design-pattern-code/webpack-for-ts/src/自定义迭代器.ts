/**
 * @description 自定义迭代器
 * @author 双越老师
 */

// [Symbol.iterator]

// interface IteratorRes {
//   value: number | undefined;
//   done: boolean;
// }

// class CustomIterator {
//   private length = 3;
//   private index = 0;

//   next(): IteratorRes {
//     this.index++;
//     if (this.index <= this.length) {
//       return { value: this.index, done: false };
//     }
//     return { value: undefined, done: true };
//   }

//   [Symbol.iterator]() {
//     return this;
//   }
// }

// const iterator = new CustomIterator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// for (let n of iterator) {
//   console.log(n);
// }

// 普通 for 循环 —— 不是迭代器
// 1. length
// 2. arr[i]

// ---------------- 分割线 ----------------

// function* genNums() {
//   yield 10;
//   yield 20;
//   yield 30;
// }
// const numsIterator = genNums(); // 迭代器，如 arr[Symbol.Iterator]()
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());

// for (let n of numsIterator) {
//   console.log(n);
// }

// function* genNums() {
//   yield* [11, 21, 31]; // 有序结构，已经实现了 [Symbol.Iterator]

//   // const arr = [11, 21, 31];
//   // for (let i = 0; i < arr.length; i++) {
//   //   yield arr[i];
//   // }
// }
// const numsIterator = genNums();
// for (let n of numsIterator) {
//   console.log(n);
// }

class CustomIterator {
  private data: number[];
  constructor() {
    this.data = [100, 200, 300];
  }
  *[Symbol.iterator]() {
    yield* this.data;
  }
}
const iterator = new CustomIterator();
for (let n of iterator) {
  console.log(n);
}

export {};
