import React, { Component } from 'react'

export default class ChooseCar extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-7'>
            <img style={{width:"100%"}} src={require('../Asset/products/black-car.jpg')} alt='black'/>
          </div>
          <div className='col-5'>
            <div className="card">
              <div className="card-header text-primary">Exterior</div>
              <div className="card-body">
                <div className="row border pt-2 pb-2" style={{cursor:"pointer"}} onClick={()=>{}}>
                  <img className="col-2" src={require("../Asset/icons/icon-black.jpg")} alt="icon-black"/>
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2" style={{cursor:"pointer"}} onClick={()=>{}}>
                  <img className="col-2" src={require("../Asset/icons/icon-red.jpg")} alt="icon-black"/>
                  <div className="col-10">
                    <h3>Crystal Red</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2" style={{cursor:"pointer"}} onClick={()=>{}}>
                  <img className="col-2" src={require("../Asset/icons/icon-silver.jpg")} alt="icon-black"/>
                  <div className="col-10">
                    <h3>Crystal Silver</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2" style={{cursor:"pointer"}} onClick={()=>{}}>
                  <img className="col-2" src={require("../Asset/icons/icon-steel.jpg")} alt="icon-black"/>
                  <div className="col-10">
                    <h3>Crystal Steel</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
