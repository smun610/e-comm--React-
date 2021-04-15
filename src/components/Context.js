import React, { Component } from "react";
import { db } from "../config/Config";

export const DatatContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      // {
      //     "_id":"1",
      //     "title":"title",
      //     "src": "https://d2ob0iztsaxy5v.cloudfront.net/product/193250/1932507260m3_zm.jpg",
      //     "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      //     "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      //     "price": "£30",
      //     "count": 1
      // },
      // {
      //     "_id":"2",
      //     "title":"shoe 2",
      //     "src": "https://d2ob0iztsaxy5v.cloudfront.net/product/192128/1921288050m3_lg.jpg",
      //     "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      //     "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      //     "price": "£50",
      //     "count": 1
      // },  {
      //     "_id":"3",
      //     "title":"shoe 3",
      //     "src": "https://d2ob0iztsaxy5v.cloudfront.net/product/340175/3401757050m1_lg.jpg",
      //     "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      //     "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      //     "price": "£40",
      //     "count": 1
      // },  {
      //     "_id":"4",
      //     "title":"shoe 3",
      //     "src": "https://d2ob0iztsaxy5v.cloudfront.net/product/190272/1902727070m4_lg.jpg",
      //     "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //     "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      //     "price": "£30",
      //     "count": 1
      // }
    ],
    cart: [],
    total: 0,
  };

  addCart = (id, size) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      let data = products.filter((product) => {
        return product._id === id;
      });
      data[0].size = size;
      console.log ("size",  data);
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert(" Already added");
    }
  };

  updateStock = (product) => {
    console.log (" product ", product.dbID);
    let val = db.collection("Product").doc(product.dbID);
    console.log(val)
    db.collection("Product")
      .doc(product.dbID)
      .update({ stock: product.stock })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  componentDidMount() {
 //   console.log("test ", testRef);
    const prevProducts = this.state.products;
    db.collection("Product").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProducts.push({
            _id: change.doc.data()._id,
            title: change.doc.data().title,
            src: change.doc.data().src,
            desc: change.doc.data().desc,
            content: change.doc.data().content,
            price: change.doc.data().price,
            colours: change.doc.data().colours,
            count: change.doc.data().count,
            stock: change.doc.data().stock,
            dbID: change.doc.id,
            size: "1"
          });
        }
        this.setState({
          products: prevProducts,
        });
      });
    });

  // const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    //if (dataCart !== null) {
      //this.setState({ cart: dataCart });
    //}
    //const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    //if (dataTotal !== null) {
      //this.setState({ total: dataTotal });
    //}
  }

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? this.remove(id) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;

        if (item.stock>=item.count){
          item.stock = item.stock -item.count ;
          this.updateStock(item)
        }else {
          item.stock =  0 ;
          this.updateStock(item)
          alert ("No More Stock");
        }
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  remove = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  render() {
    const { products, cart, total } = this.state;
    //{products}
    const { addCart, reduction, increase, remove, getTotal } = this;

    return (
      <DatatContext.Provider
        value={{
          products: [...this.state.products],
          addCart,
          cart,
          reduction,
          increase,
          remove,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DatatContext.Provider>
    );
  }

  componentDidUpdate() {
  // localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
   //localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }
}
