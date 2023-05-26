// import qs from "query-string";
import qs from "qs";
import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class ProductDetails extends Component {
  handleSave=()=>{
    //Backend ==>save
    this.props.history.replace("/cart")
  }
  render() {
    console.log(this.props.location.search)

    const res=qs.parse(this.props.location.search)
    console.log(res)
    const product = this.props.products.filter(
      (c) => c.id === parseInt(this.props.match.params.id)
    )[0];
    return (
      <React.Fragment>
        <h1>Details No.{this.props.match.params.id}</h1>
        <h2>{product.name}</h2>
        <h2>Count in Shopping Cart: {product.count}</h2>
        <Link className="btn btn-secondary btn-sm" to="/cart">
          &lt;&lt;
        </Link>
        <button onClick={this.handleSave} className="btn btn-primary btn-sm mx-2">
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
