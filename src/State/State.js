import React, { Component } from 'react'

export default class State extends Component {
  // State is method that inherited from react library. Contain thing is re-generated
  state = {
    status: false
  }
  // setState is existed method in react that support change value and update UI
  status = false;
  userLogin = {
    name: true,
    age: 18
  }

  login = ()=>{
    let newState = {
      status : "thinh"
    }
    // setState is asyn method
    // setState assign new state
    this.setState(this.newState, ()=>{
      setTimeout(()=>{
        console.log("Under state: " + this.state.status);
      }, 2000);
    });
  }

  renderUserLogin = () => {
    if (this.state.status){
      return <div className='text-center'>{this.userLogin.name}</div>
    }
    return <button onClick={()=>{
      console.log("Finish state: " + this.state.status);
      this.login()
      console.log("Finish state: " + this.state.status);
    }}>Login</button>
  }

  render() {
    return (
      <div>
        {this.renderUserLogin()}
      </div>
    )
  }
}
