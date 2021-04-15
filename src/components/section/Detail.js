import React, { Component } from "react";
import { DatatContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Detail.css";
import Colours from "./Colours";

let size = "";

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

  handleChange =(e) => {
    size = e.target.value; 

  }

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
              <label>
                SIZE: 
                <select onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                </select>
              </label>
              <p> {item.desc}</p>
              <p> {item.content}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addCart(item._id, size)}
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
