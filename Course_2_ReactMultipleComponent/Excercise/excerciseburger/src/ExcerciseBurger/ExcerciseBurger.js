import React, { Component } from "react";
import Burger from "./component/Burger";
import './style.css';
import OrderTable from "./component/OrderTable";


export default class ExcerciseBurger extends Component {
  render() {
    return (
      <div className="burgerOrder">
        <div className="burger">
          <Burger />
        </div>
        <div className="order">
          <OrderTable />
        </div>
      </div>
    )
  }
}


