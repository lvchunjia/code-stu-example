/**
 * @description 策略模式
 * @author 双越老师
 */

class User {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }

  buy() {
    const { type } = this;
    if (type === "ordinary") {
      console.log("普通用户的购买");
    }
    if (type === "member") {
      console.log("会员用户购买");
    }
    if (type === "vip") {
      console.log("vip 用户购买");
    }
  }
}
const u1 = new User("ordinary");
u1.buy();
const u2 = new User("member");
u2.buy();
const u3 = new User("vip");
u3.buy();

// 策略模式
interface IUser {
  buy: () => void;
}

class OrdinaryUser implements IUser {
  buy() {
    console.log("普通用户的购买");
  }
}
class MemberUser implements IUser {
  buy() {
    console.log("会员用户的购买");
  }
}
class VIPUser implements IUser {
  buy() {
    console.log("VIP 用户的购买");
  }
}

const user1 = new OrdinaryUser();
user1.buy();
const user2 = new MemberUser();
user2.buy();
const user3 = new VIPUser();
user3.buy();
