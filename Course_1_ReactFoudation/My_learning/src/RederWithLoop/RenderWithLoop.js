// Purpose:
// To insert HTML code: return value must be object or array contain objects
import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
  productList = [
    {id:1, name:'black car', price:1000, img:'./carbasic/products/black-car.jpg'},
    {id:1, name:'red car', price:1000, img:'./carbasic/products/red-car.jpg'},
    {id:1, name:'silver car', price:1000, img:'./carbasic/products/silver-car.jpg'},
    {id:1, name:'steel car', price:1000, img:'./carbasic/products/steel-car.jpg'}
  
  ]

  // Creat function that render table
  renderTable = ()=>{
    // C1:
    // let trComponentList = [];
    // for(let index = 0; index < this.productList.length; index++){
    //   let product = this.productList[index];
    //   let trJSX = <tr key={index}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td><img style={{width: "100px"}} src={product.img} alt="img" /></td>
    //       <td></td>
    //     </tr>
    //   trComponentList.push(trJSX);
    // }
    // console.log("THINH", trComponentList)
    // return trComponentList;

    // C2: Used to create new array from source array after processing
    let trComponentList = this.productList.map((product, index)=>{
      return <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><img style={{width: "100px"}} src={product.img} alt="img" /></td>
          <td></td>
        </tr>
    })
    // console.log(trComponentList);
    return trComponentList;
  }

  render() {
    return (
      <div >
        {/* when img is putted at public so that we can directly call like normal, don't need call by require */}
        {/* <img src="./carbasic/products/red-car.jpg" alt="" /> */}
        <table style={{width: "100%"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>IMG</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
            {/* <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    )
  }
}
