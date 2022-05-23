import React, { Component } from 'react'

export default class RederCondition extends Component {
  login = true;
  userName = "Doan Hoang Thinh";
  renderContent = ()=> {
    if (this.login){
      return <p>Hello {this.userName} nha</p>
    }
    return <button>Ngu</button>
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
