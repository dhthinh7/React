import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

class Burger extends Component {
  renderMiddleBurger = () => {
    let key = 0
    let { burger } = this.props;
    let middleBread = [];
    for (let item in burger) {
      for (let i = 0; i < burger[item]; i++) {
        middleBread.push(<div key={key} className={item}></div>)
        key += 1;
      }
    }
    return middleBread;
  };

  render() {
    return <div>
      <div className="breadTop"></div>
      {this.renderMiddleBurger()}
      <div className="breadBottom"></div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps)(Burger);
