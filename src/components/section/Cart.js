import React, { Component } from "react";
import { DatatContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Detail.css";
import Colours from "./Colours";
import rem from "../svg/remove.svg";
import "../css/Cart.css";

export class Cart extends Component {
  static contextType = DatatContext;

  componentDidMount() {
    this.context.getTotal();
  }
  render() {
    const { cart, reduction, increase, remove, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Empty Cart</h2>;
    } else {
      return (
        <div>
          {cart.map((item) => (
            <div className="details" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h1> {item.title}</h1>
                  <span>£{item.price * item.count}</span>
                </div>
                <Colours colours={item.colours} />
                <h6>SELECTED SIZE : {item.size}</h6>
                <p> {item.desc}</p>
                <p> {item.content}</p>
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    -
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    +
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => remove(item._id)}>
                {" "}
                <img src={rem} alt="" width="1" />
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: £ {total}</h3>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
