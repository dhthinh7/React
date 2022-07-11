import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

class Burger extends Component {
  renderMiddleBurger = () => {
    let { burger } = this.props;
    // let key = 0
    // let middleBread = [];
    // // for (let item in burger) {
    //   for (let i = 0; i < burger[item]; i++) {
    //     middleBread.push(<div key={key} className={item}></div>)
    //     key += 1;
    //   }
    // }
    // return middleBread;
    return Object.entries(burger).map((item, index) => {
      let middleBread = [];
      for (let i = 0; i < item[1]; i++) {
        middleBread.push(<div key={i} className={item[0]}></div>)
      }
      return middleBread;
    })
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
