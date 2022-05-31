import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExcerciseCar extends Component {
  state = {
    productDetail: { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }
  }

  xemChiTiet = (newItem)=>{
    this.setState({
      productDetail: newItem
    })
  }

  products = [
    { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
  ];

  render() {
    return (
      <div>
        <h3 className="text-center" style={{color: "red"}}>Danh Sách Xe</h3>
        <ProductList productsList={this.products} xemChiTiet={this.xemChiTiet}/>
        <Modal detail={this.state.productDetail}/>
      </div>
    )
  }
}
