import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Product extends Component {
  getClasses() {
    return this.props.product.count === 0
      ? "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning";
  }

  incrementCount = (n) => {
    this.setState({ count: this.props.product.count + n });
  };
  decrementCount = (n) => {
    this.setState({ count: this.props.product.count - n });
  };

  componentWillUnmount() {
    console.log("shopping cart=> componentWillUnmount");
  }

  render() {
    return (
      <>
        <div className=" center">
          <div className="  mx-1 row py-2">
            <div className="col">
              <span style={{ width: 100 }} className=" position-relative">
                <Link
                  className="btn btn-primary "
                  style={{ width: 100 }}
                  to={`/products/${this.props.product.id}`}
                >
                  {this.props.product.name}
                </Link>

                <span className={this.getClasses()}>
                  {this.props.product.count}
                </span>
              </span>
            </div>
            <div className="col">
              <button
                onClick={() => this.props.onIncrement(this.props.product)}
                className="btn btn-primary btn-sm"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.product)}
                className="btn btn-danger btn-sm mx-2"
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.product)}
                className="btn btn-danger btn-sm mx-2"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
/* {this.props.product.names.length === 0 && <h2>No Names</h2>}
                    <ul>
                        {
                            this.state.names.map((e, idx) => (
                                <li key={idx}>{e}</li>
                            ))
                        }
                    </ul> */
// {/* {this.renderNames()} */}

/* renderNames() {
return this.state.names.length === 0
? <h2>No Names</h2> :
<ul>
{
this.state.names.map((e, idx) => (
    <li key={idx}>{e}</li>
))
}
</ul>
} */
