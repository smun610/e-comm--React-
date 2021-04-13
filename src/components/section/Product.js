import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DatatContext } from "../Context";
import "../css/Product.css";

export class Product extends Component {
  static contextType = DatatContext;
  
  render() {
    let inStock = (stock , id)=> {
      if (stock=== 0 ){
        return <h1>Out of stock</h1>
      }
      return   <button onClick={() => this.context.addCart(id)}>Add to cart </button>
  }
    
    const { products } = this.context;

   
    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h4>
                <Link to={`/product/${product._id}`}>{product.title} </Link>
              </h4>
              <span>£{product.price}</span>
              <p>{product.desc}</p>
            
              {inStock(product.stock, product._id)}
              
            
             
            </div>
          </div>
        ))}
      </div>
    );
  }
  
}

export default Product;

