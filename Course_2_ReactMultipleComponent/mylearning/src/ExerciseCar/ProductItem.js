import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {item} = this.props;
    return <div>
      <div className="card">
        <img className="card-img-top" src={item.img} alt />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={()=>{this.props.xemChiTiet(item)}}>Xem chi tiết</button>
        </div>
      </div>
    </div>;
  }
}
