/**
 * @description JQuery
 * @author 双越老师
 */

// 扩展 window 全局的属性
declare interface window {
  $: (selector: string) => JQuery;
}

class JQuery {
  selector: string;
  length: number;
  constructor(selector: string) {
    // const domList = Array.prototype.slice.call( document.querySelectorAll(selector) )
    // const domList = [...document.querySelectorAll(selector)]
    const domList = Array.from(document.querySelectorAll(selector));
    const length = domList.length;
    for (let i = 0; i < length; i++) {
      // @ts-ignore
      this[i] = domList[i];
    }
    this.selector = selector;
    this.length = length;
  }
  append(elem: HTMLElement): JQuery {
    // append 的操作...
    return this;
  }
  addClass(className: string): JQuery {
    // addClass 的操作...
    return this;
  }
  // ... methods ...
}

// // 不用工厂模式
// const $div = new JQuery('div')
// const $p = new JQuery('p')

// 用工厂模式
function $(selector: string) {
  return new JQuery(selector); // 逻辑封装
}
// @ts-ignore
window.$ = $;

const $div = $("div");
const $p = $("p");

console.log($("p"));

// // 伪代码，演示 jquery 实例的结构
// const jquery = {
//     selector: 'div',
//     length: 3,
//     '0': div1,
//     '1': div2,
//     '2': div3
// }

export {};
