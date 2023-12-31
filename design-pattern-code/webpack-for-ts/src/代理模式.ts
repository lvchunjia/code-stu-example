/**
 * @description 代理模式
 * @author 双越老师
 */

class RealImg {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display() {
    this.loadFromDist();
    console.log("display...", this.fileName);
  }

  private loadFromDist() {
    console.log("loading...", this.fileName);
  }
}

class ProxyImg {
  realImg: RealImg;
  constructor(fileName: string) {
    this.realImg = new RealImg(fileName);
  }

  // 代理
  display() {
    // 限制
    this.realImg.display();
  }
}

const proxImg = new ProxyImg("xxx.png");
proxImg.display();

// 装饰器模式：不能该表原始对象的行为
// 代理模式：可以改变原始对象的行为
