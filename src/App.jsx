import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./components/cart/shoppingCart";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetails from "./components/products/ProductDetails";
import NotFound from "./components/notFound";
import Menu from "./components/menu";
class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
      { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
      { id: 3, name: "Cola", count: 0, price: 10, isInCart: false },
    ],
  };
  handleIncrement = (product) => {
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };
  handleDecrement = (product) => {
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count--;
    this.setState({ products });
  };
  handelDelete = (product) => {
    // clone
    // Edit
    const delProduct = this.state.products.filter((p) => p.id === product.id);
    const products = this.state.products.filter((p) => p.id !== product.id);
    // set state
    console.log(delProduct);
    this.setState({ products });
  };

  handleReset = () => {
    // clone
    let products = [...this.state.products];
    // edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    // set state
    this.setState({ products });
  };
  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };
  render() {
    return (
      <>
        <div style={{ background: "#022", height: "100vh" }}>
          <NavBar
            productCount={this.state.products.filter((p) => p.isInCart).length}
          />
          <main
            className="container"
            style={{ background: "#ddd", height: "90vh" }}
          >
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/notfound" component={NotFound} />
              <Route path="/about" component={About} />
              <Route
                path="/products/:id"
                render={(props) => (
                  <ProductDetails products={this.state.products} {...props} />
                )}
              />
              <Route
                path="/cart"
                render={(props) => (
                  <ShoppingCart
                    products={this.state.products}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleInCartChange}
                    onDecrement={this.handleDecrement}
                    {...props}
                  />
                )}
              />
              <Route
                path="/menu"
                render={(props) => (
                  <Menu
                    {...props}
                    products={this.state.products}
                    onClick={this.handleInCartChange}
                  />
                )}
              />
              <Redirect to="notfound" />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
