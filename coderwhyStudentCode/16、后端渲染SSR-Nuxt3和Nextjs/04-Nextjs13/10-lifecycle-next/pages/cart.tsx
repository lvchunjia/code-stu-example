import { Component, ReactNode } from "react";

class Cart extends Component {
  constructor(props: any) {
    super(props);
    console.log("constructor");
  }

  UNSAFE_componentWillMount(): void {
    console.log("UNSAFE_componentWillMount");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render(): ReactNode {
    console.log("render");
    return (
      <div>
        <div>Cart Page</div>
      </div>
    );
  }
}
export default Cart;
