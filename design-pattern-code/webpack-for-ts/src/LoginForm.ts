/**
 * @description LoginForm
 * @author 双越老师
 */

class LoginForm {
  private state: string = "hide"; // 'hide' / 'show'
  private constructor() {}

  show() {
    if (this.state === "show") {
      console.log("已经显示了");
      return;
    }
    console.log("显示 LoginForm");
    // ....
    this.state = "show";
  }

  hide() {
    if (this.state === "hide") {
      console.log("已经隐藏了");
      return;
    }
    console.log("隐藏 LoginForm");
    // ....
    this.state = "hide";
  }

  private static instance: LoginForm | null = null;
  static getInstance(): LoginForm {
    // this === LoginForm
    if (this.instance == null) {
      this.instance = new LoginForm();
    }
    return this.instance;
  }
}

const loginForm1 = LoginForm.getInstance();
const loginForm2 = LoginForm.getInstance();
console.log(loginForm1 === loginForm2); // true
