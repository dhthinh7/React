import React, { Component } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default class  extends Component {
  // Declare method handle event when button is clicked
  handleClick = (name) => {
    alert("hello : " + name);
  }

  render() {
    return (
      <div className="text-center">
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <button onClick={()=>{this.handleClick("thinh")}}>Click me</button>
      </div>
    )
  }
}