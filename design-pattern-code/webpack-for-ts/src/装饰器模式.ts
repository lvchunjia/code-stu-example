/**
 * @description 装饰器模式
 * @author 双越老师
 */

class Circle {
  draw() {
    console.log("画一个圆形");
  }
}

class Decorator {
  private circle: Circle;
  constructor(circle: Circle) {
    this.circle = circle;
  }
  draw() {
    this.setBorder(); // 装饰
    this.circle.draw(); // 原有功能
  }
  private setBorder() {
    console.log("设置边框的颜色");
  }
}

const circle = new Circle();
const decorator = new Decorator(circle);
decorator.draw();
