import React, { Component } from 'react'
import DataBindingRFC from './DataBindingRFC';

export default class DataBidings extends Component {
  // Create method
  name = "Doan Hoang Thinh";

  // Object student
  student = {
    name: "Thinh",
    age: 26
  }

  // Biding method (function in class)
  // All method must be return component (jsx)
  renderImage = () => {
    return (
      <>
        <a href='#'>Tag a</a>
        <h1>renderImage</h1>
      </>

    )
    
  }

  renderMultiComponent = () => {
    const virus = {
      id: "Covid 19",
      name: "corona"
    }

    return (
      <>
        <h1>{virus.id}</h1>
        <h1>{virus.name}</h1>
      </>
    )
  }

  render() {
    // Local variable, only use in render function
    const school = 'DHCT';
    return (
      <div>
        {/* this is used for method impact the class. Local variable is used as normal local variable */}
        <h1>{this.name} - {school}</h1>
        <h2>{this.student.name} - {this.student["age"]}</h2>
        <h3>Biding function</h3>
        {this.renderImage()} 
        {this.renderMultiComponent()}
      </div>
    )
  }
}
