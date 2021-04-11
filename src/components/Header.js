import React, { Component } from "react";
import Menu from "./svg/menu.svg";
import Cart from "./svg/shopping-cart.svg";
import Exit from "./svg/times-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DatatContext } from "./Context";

export class Header extends Component {
  static contextType = DatatContext;
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">Golden Shoes</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="close" onClick={this.menuToggle}>
              <img src={Exit} alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={Cart} alt="" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
