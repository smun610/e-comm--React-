import React, { Component } from "react";
import Product from "./section/Product.js";
import Detail from "./section/Detail";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Home from "./section/Home";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} exact />
        <Route path="/product/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/home" component={Home} />
      </section>
    );
  }
}

export default Section;
