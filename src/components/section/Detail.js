import React, { Component } from "react";
import { DatatContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Detail.css";
import Colours from "./Colours";

export class Detail extends Component {
  static contextType = DatatContext;
  //onClick={() => addCart(item._id)}
  state = {
    product: [],
  };
  getProduct = () => {
    const id = this.props.match.params.id;
    if (id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <div>
        {product.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h1> {item.title}</h1>
                <span>£{item.price} </span>
              </div>
              <Colours colours={item.colours} />
              <p> {item.desc}</p>
              <p> {item.content}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addCart(item._id)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Detail;
