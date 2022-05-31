import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderList = ()=>{
    return this.props.productsList.map((items, index)=>{
      return (
        <div className="col-3" key={index}>
          <ProductItem item={items} xemChiTiet={this.props.xemChiTiet}/>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    )
  }
}
