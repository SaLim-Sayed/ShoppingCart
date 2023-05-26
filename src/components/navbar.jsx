import { NavLink } from "react-router-dom";
import React from "react";
const NavBar = (props) => {
  return (
    <>
      <nav
        className="navbar  navbar-expand-lg container  navbar-dark"
        style={{
          background: "#022",
          border: "1px solid #cece",
          fontFamily: "fantasy",
          letterSpacing: "2px",
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand btn btn-outline-success" to="/home">
            Home
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-item btn btn-info">
            <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
            {props.productCount}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
