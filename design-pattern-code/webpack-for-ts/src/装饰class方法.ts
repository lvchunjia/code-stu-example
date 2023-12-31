/**
 * @description 装饰器 - class method
 * @author 双越老师
 */

/**
 * readOnly 装饰器
 * @param target 实例
 * @param key key
 * @param descriptor 属性描述符
 */
function readOnly(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log('target', target)
  // console.log('key', key)
  // console.log('descriptor', descriptor)
  descriptor.writable = false;
}

function configurable(val: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = val;
  };
}

class Foo {
  private name = "张三";
  private age = 20;

  @readOnly
  getName() {
    return this.name;
  }

  @configurable(false)
  getAge() {
    return this.age;
  }
}

const f = new Foo();

// f.getName = () => { console.log('修改了') }

// @ts-ignore
console.log(Object.getOwnPropertyDescriptor(f.__proto__, "getAge"));
