import React, { Component } from "react";
import Product from "../products/Product";
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("shopping cart=> constructor");
  }
  componentDidMount() {
    console.log("shopping cart=> componentDidMount");
  }
  componentDidUpdate() {
    console.log("shopping cart=> componentDidUpdate");
  }


  render() {
    console.log("shopping cart=> render");
  const {products,onReset,onDecrement,onDelete,onIncrement}=this.props;
  
    const mystyle = {
      margin: "auto",
      padding: "10px",
      width: "600px",
      fontFamily: "Arial",
      // border: "1px solid black",
      borderRadius: "5px",
    };
    return (
      <>
        <div style={mystyle}>
          <h1 style={{ textAlign: "center" }}>
            Shoping Cart{" "}
            <button
              onClick={onReset}
              className="btn btn-danger btn-sm mx-2"
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </h1>

          <hr />

          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ShoppingCart;
