/**
 * @description 迭代器模式
 * @author 双越老师
 */

class DataIterator {
  private data: number[];
  private index = 0;
  constructor(container: DataContainer) {
    this.data = container.data;
  }

  next(): number | null {
    if (this.hasNext()) {
      return this.data[this.index++]; // 返回下一个值 & 累加 index
    }
    return null;
  }
  hasNext(): boolean {
    if (this.index >= this.data.length) return false;
    return true;
  }
}

class DataContainer {
  data = [10, 20, 30, 40, 50];
  getIterator() {
    // 获取迭代器
    return new DataIterator(this);
  }
}

const container = new DataContainer();
const iterator = container.getIterator(); // 获取迭代器
while (iterator.hasNext()) {
  const num = iterator.next();
  console.log(num);
}
