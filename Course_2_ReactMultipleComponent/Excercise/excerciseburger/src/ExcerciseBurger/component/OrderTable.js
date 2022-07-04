import React, { Component } from "react";
import { connect } from "react-redux";

class OrderTable extends Component {
  renderTbody = () => {
    let key = 0;
    let {burger, menu} = this.props;
    let menuList = []
    for (let item in menu) {
      menuList.push(
      <tr key={key}>
        <td>{item}</td>
        <td>
          <button className="increase" onClick={()=>this.props.updateNumber(item, 1)}>+</button>
          {burger[item]}
          <button className="decrease" onClick={()=>this.props.updateNumber(item, -1)}>-</button>
        </td>
        <td>{menu[item]}</td>
        <td>{(parseFloat(burger[item]) * parseFloat(menu[item])).toLocaleString()}</td>
      </tr>)
      key += 1;
    }
    return menuList;
  }
  render() {
    let {total} = this.props;
    return <div>
      <h1>Chọn thức ăn</h1>
      <table className="orderTable">
        <thead>
          <tr>
            <th>Thức ăn</th>
            <th></th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTbody()}
          <tr>
            <td></td>
            <td></td>
            <td>Tổng cộng</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger,
    menu: state.menu,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNumber: (burgerItem, number)=>{
      dispatch({type: 'UPDATE_NUMBER', burgerItem, number})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
