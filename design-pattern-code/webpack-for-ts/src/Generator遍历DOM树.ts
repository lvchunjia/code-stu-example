/**
 * @description Generator 遍历 DOM 树
 * @author 双越老师
 */

// Generator + yield 遍历 DOM 树

function* traverse(elemList: Element[]): any {
  for (const elem of elemList) {
    yield elem;

    const children = Array.from(elem.children);
    if (children.length) {
      yield* traverse(children);
    }
  }
}

const container = document.getElementById("container");
if (container) {
  for (let node of traverse([container])) {
    console.log(node);
  }
}

export {};
